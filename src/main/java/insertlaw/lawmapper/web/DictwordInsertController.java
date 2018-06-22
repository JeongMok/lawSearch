package insertlaw.lawmapper.web;


import insertlaw.lawmapper.service.DictwordInsertService;
import insertlaw.lawmapper.vo.DictwordVO;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
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
public class DictwordInsertController {
	private static Logger log = LoggerFactory.getLogger(DictwordInsertController.class);
	
	@Resource
	InsertLog ionsertLog;
	
	private static final String SP = File.separator;
    private static final String PREFIX = "";
    private static final String PATH = "WEB-INF"+SP+"upload";
    
    @Autowired
    private WebApplicationContext appContext;
    
    @Resource(name="dictwordInsertService")
    private DictwordInsertService dictwordInsertService;
    
    private String getFilePath() {
        ServletContext sc = appContext.getServletContext();
        String realPath = sc.getRealPath("/");
        String uploadPath = realPath + PATH;
        return uploadPath;
    }
	 
    
	@RequestMapping("/excelUpload.do")
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

            

           dictwordInsertService.excelTodataset(destination, resultDs);
           
           if(destination.exists()){
        	   destination.delete();
           }
    }
        
        
        NexacroResult result = new NexacroResult();
        result.addDataSet(resultDs);
        return result;
	}
	@Transactional
	@RequestMapping("/dictwordInsert.do")
	public NexacroResult dictwordInsert(@ParamDataSet (name="ds_import", required=false) List<DictwordVO> dictwordVO, HttpServletRequest req) throws SQLException{
		
		
		dictwordInsertService.dictwordInsert(dictwordVO);
		
		
		
		NexacroResult result= new NexacroResult();
		System.out.println("아이디@@@@@@@@"+dictwordVO.get(0).getUserId());
		if(result != null){
			ionsertLog.insertData(dictwordVO.get(0).getUserId(), "법률용어 입력",req);
    	}
		return result;
	}

	@RequestMapping("/dictwordExcelSearch.do")
	public NexacroResult dictwordExcelSearch(@ParamDataSet(name="ds_import", required=false) List<DictwordVO> dictwordVO){
		DictwordVO select = dictwordInsertService.excelSearch(dictwordVO);
		
		NexacroResult result = new NexacroResult();
		
		if(select!=null){
			DataSet ds = new DataSet("ds_select");
			ds.addColumn("dictword",PlatformDataType.STRING);
			int row = ds.newRow();
			ds.set(row, "dictword", select.getDictword());
			result.addDataSet(ds);
		}
		return result;
	}

	private DataSet createDatasetExcel() {
		DataSet ds = new DataSet("ds_output");
		ds.addColumn("chk",PlatformDataType.STRING);
		ds.addColumn("dictword", PlatformDataType.STRING);
		ds.addColumn("detaillink", PlatformDataType.STRING);
		ds.addColumn("dictwordCode", PlatformDataType.STRING);
		ds.addColumn("dictwordCodename", PlatformDataType.STRING);
		ds.addColumn("dictwordSource", PlatformDataType.STRING);
		ds.addColumn("mainText", PlatformDataType.STRING);
		ds.addColumn("dictwordNo", PlatformDataType.STRING);
		return ds;
	}
}
