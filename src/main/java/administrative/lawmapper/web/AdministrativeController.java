package administrative.lawmapper.web;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.ArrayList;
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
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import util.com.utils.InsertLog;
import administrative.lawmapper.vo.AstVO;
import administrative.lawmapper.vo.SlectClickListVO;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.datatype.PlatformDataType;

import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;
import administrative.lawmapper.service.AstService;
import nexacro.sample.web.AdvancedFileController;

@Controller
public class AdministrativeController {
	private static final String SP = File.separator;
    private static final String PREFIX = "";
    private static final String PATH = "WEB-INF"+SP+"upload";
    @Resource	
    InsertLog ionsertLog;  
    
    @Autowired
    private WebApplicationContext appContext;
	private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
	@Resource(name="astServiceimpl")
	private AstService AstService;
	
	@Resource
	private Validator	validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
    
	  @RequestMapping(value = "/selectReo.do")
	  public NexacroResult selectVO(){
		  System.out.println("여기로 들어옴");
		  
		  List<AstVO> ReorgName = new ArrayList<AstVO>();
		  
		  AstVO astVO = new AstVO();
		  astVO.setReorgname("==전체==");
		  
		  ReorgName.add(astVO);
		  
		List<AstVO> REORGNAME = AstService.selectAstList();
		  
		for(int i=0; i<REORGNAME.size(); i++)
		{
			ReorgName.add(REORGNAME.get(i));
		}
		
		  NexacroResult result = new NexacroResult();
		  result.addDataSet("output1", ReorgName);
		
		  return result;
	

	    }
	  @RequestMapping(value = "/excelupload.do")
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
//	            multipartFile.transferTo(destination);
	            InputStream inputStream = multipartFile.getInputStream();
	            FileCopyUtils.copy(inputStream, new FileOutputStream(destination));
	            
	            
	            if(log.isDebugEnabled()) {
	                log.debug("uploaded file write success. file="+originalFilename);
	            }

	            
	            	AstService.execl(destination,resultDs);
//	           dictwordInsertService.excelTodataset(destination, resultDs);
	           
	           if(destination.exists()){
	        	   destination.delete();
	           }
	    }
	        
	        
	        NexacroResult result = new NexacroResult();
	        result.addDataSet(resultDs);
	        return result;
		}
		private DataSet createDatasetExcel() {
			DataSet ds = new DataSet("ds_out");
			ds.addColumn("chk", PlatformDataType.STRING);
			ds.addColumn("deccno", PlatformDataType.STRING);
			ds.addColumn("casename", PlatformDataType.STRING);
			ds.addColumn("reclassname", PlatformDataType.STRING);
			ds.addColumn("decidedate", PlatformDataType.STRING);
			ds.addColumn("caseno", PlatformDataType.STRING);
			ds.addColumn("maintext", PlatformDataType.STRING);
			ds.addColumn("opiniontext", PlatformDataType.STRING);
			ds.addColumn("reasontext", PlatformDataType.STRING);
			ds.addColumn("repltext", PlatformDataType.STRING);
			
			return ds;
		}
	    private String getFilePath() {
	        ServletContext sc = appContext.getServletContext();
	        String realPath = sc.getRealPath("/");
	        String uploadPath = realPath + PATH;
	        return uploadPath;
	    }
		
	  @RequestMapping(value = "/history.do")
	  public NexacroResult historyListVO(@ParamDataSet(name= "ds_search", required= false ) AstVO searchVO){
		
		System.out.println("########################"+searchVO.getUserid());
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@+"+searchVO.getDeccno());
		 
		  List<AstVO> historyList =AstService.selecthistory(searchVO);
		 
		  
		  NexacroResult result = new NexacroResult();
		  
		  result.addDataSet("output1",historyList);
		  return result;
	

	    }
	  @RequestMapping(value = "/historyselectlist.do")
	  public NexacroResult historyselectlist(@ParamDataSet(name= "ds_selectlist", required= false ) AstVO searchVO){
		
		
		  List<AstVO> historyList =AstService.selecthistorylist(searchVO);
		  List<AstVO> historycontextlist = AstService.selecthistorycontextlist(searchVO);
		  
		  NexacroResult result = new NexacroResult();
		  
		  result.addDataSet("ds_selectlist",historyList);
		  result.addDataSet("ds_decctext",historycontextlist);
		  return result;
	

	    }
	  @RequestMapping(value = "/excleselect.do")
	  public NexacroResult excleinsert(@ParamDataSet(name= "ds_copy", required= false ) List<AstVO> searchVO ){
		
		
		  AstVO execlselect = AstService.execlselect(searchVO);
		  
		  NexacroResult result = new NexacroResult();
		

		  result.addDataSet("list",execlselect);
		 /* DataSet ds = new DataSet("list");
		  ds.addColumn("deccno", PlatformDataType.STRING);
		  int row = ds.newRow();
  			System.out.println("데이터셋 행 넘버 : "+row);
  			ds.set(row,"deccno",execlselect.getDeccno());
  			result.addDataSet(ds);*/

		  return result;
	

	    }
	  @RequestMapping(value = "/ModifyVO.do")
		public NexacroResult ModifyVO(@ParamDataSet(name= "input", required= false )List<AstVO> searchVO,HttpServletRequest req)  {
			
		  String userid = searchVO.get(0).getUserid();
		  AstService.modifyMultiUserVO(searchVO);

			NexacroResult result = new NexacroResult();
			if(result != null){
		   		ionsertLog.insertData(userid, "수정",req);
	    	}
			return result;
		}
	  @RequestMapping(value = "/execlmody.do")
		public NexacroResult execlmody(@ParamDataSet(name= "ds_copy", required= false )List<AstVO> searchVO,HttpServletRequest req)  {
			String userid = searchVO.get(0).getUserid();
		  	AstService.execlmody(searchVO);
		 
			NexacroResult result = new NexacroResult();
			if(result != null){
		   		ionsertLog.insertData(userid, "수정",req);
	    	}
			return result;
		}

	  
	  

	@RequestMapping(value = "/selectlist.do")
	  public NexacroResult selectlistVO(@ParamDataSet(name= "ds_selectlist", required= false ) SlectClickListVO searchVO){
		  System.out.println("여기로 들어옴");
		  System.out.println("!#@!@!@"+searchVO.getDeccno());
		  System.out.println("userid"+searchVO.getUserid());
		  System.out.println("seq"+searchVO.getSeq());
		  AstService.insertList(searchVO);
		  List<SlectClickListVO> selectlist = AstService.selectClickList(searchVO);
		  
		  NexacroResult result = new NexacroResult();
		  result.addDataSet("output1",selectlist);
		  return result;
	

	    }
	  @RequestMapping(value = "/paging.do")
	  public NexacroResult selectPaging(@ParamDataSet(name= "ds_search", required= false ) AstVO searchVO){
		 
		  if(searchVO ==  null){
			  System.out.println();
			  searchVO = new AstVO();
		  }
		  

		/*  System.out.println("getPageIndex"+searchVO.getPageIndex());
		  System.out.println("getFirstIndex"+searchVO.getFirstIndex());
		  System.out.println("getRecordCountPerPage"+searchVO.getRecordCountPerPage());*/
		 
		  searchVO.setPageUnit(9); //한페이제 개시되는 수
		  searchVO.setPageSize(10);
		  
		
		  PaginationInfo paginationinfo = new PaginationInfo();
			 int totalCount = AstService.selectCount(searchVO);
			
		  paginationinfo.setTotalRecordCount(totalCount); //전체 row 수
		
		  paginationinfo.setCurrentPageNo(searchVO.getPageIndex());	
		  
		  paginationinfo.setRecordCountPerPage(searchVO.getPageUnit());
		  
		  paginationinfo.setPageSize(searchVO.getPageSize());		  
		  
		  searchVO.setFirstIndex(paginationinfo.getFirstRecordIndex());// 시작 rownum 값
		  
		  searchVO.setLastIndex(paginationinfo.getLastRecordIndex());// 마지막 rownum 값
		  
		  searchVO.setRecordCountPerPage(paginationinfo.getRecordCountPerPage());//한페이지당 게시되는 페이지 건수(pageUnit)
		  
		  searchVO.setTotalPageCount(paginationinfo.getTotalPageCount());
		  
		  searchVO.setFirstPageNo(paginationinfo.getFirstPageNoOnPageList());
		  
		  searchVO.setLastPageNo(paginationinfo.getLastPageNoOnPageList());
		  
		  System.out.println("totalCount"+totalCount);
		  System.out.println("현재 페이지 번호"+ paginationinfo.getCurrentPageNo());
		  System.out.println("시작 rownum 값 "+paginationinfo.getFirstRecordIndex());
		  System.out.println("마지막 rownum 값 "+paginationinfo.getLastRecordIndex());
		  System.out.println("setRecordCountPerPage"+paginationinfo.getRecordCountPerPage());
		  System.out.println("getTotalRecordCount"+paginationinfo.getTotalRecordCount());
		  System.out.println("한페이지에 보일 페이지 크기" +paginationinfo.getPageSize());
		  System.out.println("총 페이지수"+paginationinfo.getTotalPageCount());
		  System.out.println("incident"+searchVO.getIncident());
		  System.out.println("incident2"+searchVO.getCasenumber());
		  System.out.println("incident3"+searchVO.getDecision());
		  System.out.println("incident4"+searchVO.getClaim());
		  System.out.println("incident5"+searchVO.getRequest());
		  System.out.println("incident6"+searchVO.getAuthorities());
		  System.out.println("incident7"+searchVO.getLegislation());
		  System.out.println("incident8"+searchVO.getProvisionnumber());
		  System.out.println("incident9"+searchVO.getReason());
		  System.out.println("incident9"+searchVO.getSearchCondition());
	      System.out.println("odert"+searchVO.getOrderby());
		  
		  List<AstVO> list = AstService.selectPaging(searchVO);

		  for(int i=0;i<list.size();i++){
			  list.get(i).setFirstPageNo(paginationinfo.getFirstPageNo());
			  list.get(i).setLastPageNo(paginationinfo.getLastPageNo());
			  list.get(i).setTotalPageCount(paginationinfo.getTotalPageCount());
		  }
		  System.out.println("searchVO.getToday_search()"+searchVO.getToday_search());
		  System.out.println("fromdate_search"+searchVO.getFromdate_search());
		  
		  System.out.println("paginationinfo.getFirstPageNo()"+paginationinfo.getFirstPageNo());
		  System.out.println("시작페이지 번호 "+searchVO.getFirstPageNo());
	
		  System.out.println("마지막페이지 번호 "+searchVO.getLastPageNo());
		  System.out.println("총페이지 번호 "+searchVO.getTotalPageCount());
		  
	
		 System.out.println("총 row 수"+paginationinfo.getTotalRecordCount());
		 
		 System.out.println("@@@@@@@@@@@@@@@@@@@@"+searchVO.getToday_search());
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("dslist",list);
		 result.addDataSet("ds_serch",searchVO);
		  return result;
	  }
}
