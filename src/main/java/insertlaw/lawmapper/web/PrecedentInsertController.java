package insertlaw.lawmapper.web;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Set;

import insertlaw.lawmapper.service.PrecedentInsertService;
import insertlaw.lawmapper.vo.PrecedentInsertVO;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import util.com.utils.InsertLog;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.datatype.PlatformDataType;

@Controller
public class PrecedentInsertController {
	private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
	private static final String SP = File.separator;
    private static final String PREFIX = "";
    private static final String PATH = "WEB-INF"+SP+"upload";
    
    @Resource
	InsertLog insertLog;
    
    @Autowired
    private WebApplicationContext appContext;
    
    @Resource(name="precedentInsertService")
    private PrecedentInsertService precedentInsertService;
    
    private String getFilePath() {
        ServletContext sc = appContext.getServletContext();
        String realPath = sc.getRealPath("/");
        String uploadPath = realPath + PATH;
        return uploadPath;
    }
	
    
	@RequestMapping("/precExcelUpload.do")
	public NexacroResult dictInsert(HttpServletRequest request) throws Exception{
		
    	if(!(request instanceof MultipartHttpServletRequest)){
    		System.out.println("첨부파일이 아닙니다.");
    		return new NexacroResult();
    	}
    	
    	DataSet resultDs = createDatasetExcel();
    	
    	MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        
    	// files..
        Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
        String filePath = getFilePath();
        
        Set<String> keySet = fileMap.keySet();
        for(String name: keySet) {
            
            MultipartFile multipartFile = fileMap.get(name);

            String originalFilename = multipartFile.getOriginalFilename();
            

            // IE에서 파일업로드 시 DataSet 파라매터의 Content-Type이 설정되지 않아 여기로 옴. 무시.
            if(originalFilename == null || originalFilename.length() == 0) {
                continue;
            }
            
            File destination = new File(filePath+SP+originalFilename);
//            multipartFile.transferTo(destination);
            InputStream inputStream = multipartFile.getInputStream();
            FileCopyUtils.copy(inputStream, new FileOutputStream(destination));
            
            if(log.isDebugEnabled()) {
                log.debug("uploaded file write success. file="+originalFilename);
            }

            precedentInsertService.excelTodataset(destination, resultDs);
           
           if(destination.exists()){
        	   destination.delete();
           }
    }
        NexacroResult result = new NexacroResult();
        result.addDataSet(resultDs);
        return result;
	}
	@Transactional
	@RequestMapping("/precedentInsert.do")
	public NexacroResult precedentInsert(@ParamDataSet (name="ds_precedentlist_Import", required=false) List<PrecedentInsertVO> precedentInsertVO, HttpServletRequest req) throws SQLException{
		System.out.println(precedentInsertVO.get(0).getUserid());
		precedentInsertService.precedentInsert(precedentInsertVO);
		
		NexacroResult result= new NexacroResult();
		
		if (result != null) {
			insertLog.insertData(precedentInsertVO.get(0).getUserid(), "판례 등록", req);
		}
		
		return result;
	}

	private DataSet createDatasetExcel() {
		DataSet ds = new DataSet("ds_precedentlist_Output");
		ds.addColumn("chk",PlatformDataType.STRING);
		ds.addColumn("precno", PlatformDataType.STRING);
		ds.addColumn("casename", PlatformDataType.STRING);
		ds.addColumn("caseno", PlatformDataType.STRING);
		ds.addColumn("judgedate", PlatformDataType.STRING);
		ds.addColumn("courtname", PlatformDataType.STRING);
		ds.addColumn("courtclasscode", PlatformDataType.STRING);
		ds.addColumn("caseclassname", PlatformDataType.STRING);
		ds.addColumn("caseclasscode", PlatformDataType.STRING);
		ds.addColumn("judgeclassname", PlatformDataType.STRING);
		ds.addColumn("judge", PlatformDataType.STRING);
		ds.addColumn("precdetaillink", PlatformDataType.STRING);
		ds.addColumn("casetext", PlatformDataType.STRING);
		ds.addColumn("judgetext", PlatformDataType.STRING);
		ds.addColumn("referlaw", PlatformDataType.STRING);
		ds.addColumn("referjudge", PlatformDataType.STRING);
		ds.addColumn("maintext", PlatformDataType.STRING);
		return ds;
	}
	/*@Resource(name = "precedentInsertService")
	private PrecedentInsertService precedentInsertService;

	// 판례 등록
	@RequestMapping("/precedentInsertOrigin.do")
	public NexacroResult precedentInsert(
			@ParamDataSet(name = "precedentInsert", required = false) PrecedentInsertVO precedentInsertVO) {

		precedentInsertService.precedentList(precedentInsertVO);
		precedentInsertService.precedentText(precedentInsertVO);
		return new NexacroResult();
	}
	// 폼 로드시 데이터 가져오기
	@RequestMapping(value = "/prec.do")
	public NexacroResult courtNameSelect(PrecedentInsertVO precedentInsertVO) {

		List<PrecedentInsertVO> ds_courtname = precedentInsertService.courtNameSelect(precedentInsertVO);
		List<PrecedentInsertVO> ds_caseclassname = precedentInsertService.caseClassSelect(precedentInsertVO);
		List<PrecedentInsertVO> ds_judgeclassname = precedentInsertService.judgeClassSelect(precedentInsertVO);
		List<PrecedentInsertVO> ds_judge = precedentInsertService.judgeSelect(precedentInsertVO);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_courtname", ds_courtname);
		result.addDataSet("ds_caseclassname", ds_caseclassname);
		result.addDataSet("ds_judgeclassname", ds_judgeclassname);
		result.addDataSet("ds_judge", ds_judge);
		
		return result;
	}*/
	private String getErrorMessages(BindingResult bindingResult) {
		StringBuffer sb = new StringBuffer();

		for (ObjectError error : bindingResult.getAllErrors()) {
			sb.append(error.getDefaultMessage()).append("\n");
		}

		return sb.toString();
	}
}