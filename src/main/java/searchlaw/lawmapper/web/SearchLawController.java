package searchlaw.lawmapper.web;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.datatype.PlatformDataType;

import searchlaw.lawmapper.service.SearchLawService;
import searchlaw.lawmapper.vo.LawInfoVO;
import searchlaw.lawmapper.vo.PaginationInfo;
import util.com.utils.InsertLog;


/**
 * 법령 검색 위한 Controller Class
 * 
 * @author Kim JeongMok
 * @since 31.05.2018
 * @version 0.1
 * @see
 */

@Controller
public class SearchLawController {

	private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
	@Resource
	InsertLog insertLog;
	
	@Resource
	private Validator validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
	
	@Resource(name = "searchLawService")
	private SearchLawService searchLawService;
	

	//public NexacroResult connectTest(@ParamDataSet(name = "ds_lawClass", required = false) LawInfoVO lawInfoVO) {
	/**
	 * Form 로딩시, 검색을 위한 LawClassName 호출하여 보내줌
	 * 맨위에 '전체' 검색을 위해서 전체용List를 만들어서 '전체' 을 먼저 등록하고
	 * DB 에서 검색해서 가져온 값을 추가로 쌓아서 보냄.
	 * @return
	 */
	@RequestMapping(value = "/searchLawClassName.do")
	public NexacroResult getLawClassName(){
		
		//최종형 List
		List<LawInfoVO> lawClassNameList = new ArrayList<LawInfoVO>();  
		
		//상단에 '전체' 글자 표기를 위해 하나 생성하여 TotalList에 등록
		LawInfoVO allKeyword = new LawInfoVO();
		allKeyword.setLawClassName("== 전체 ==");
		lawClassNameList.add(allKeyword);	//전체
		
		
		//DB에서 LawClassList 목록을 호출하여 추가
		List<LawInfoVO> lawClassName = searchLawService.selectLawClassName();	//distinct한거 가져옴
		
		for(int i=0; i<lawClassName.size(); i++){	//처음리스트에 
			
			//TotalList에 추가
			lawClassNameList.add(lawClassName.get(i));
		}
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", lawClassNameList);
		
		return result;
	}
	
	@RequestMapping(value = "/searchLawList.do")
	public NexacroResult searchLawList(@ParamDataSet (name = "ds_search", required = false) LawInfoVO lawInfoVO) {

		/*
		 * 페이징
		 */
		if(lawInfoVO == null) {
			lawInfoVO = new LawInfoVO();
        }
		
		lawInfoVO.setPageUnit(15);			// 페이지 당 조회 수
		lawInfoVO.setPageSize(10);			// 페이지 최대 수
		
		PaginationInfo paginationInfo = new PaginationInfo();
    	paginationInfo.setCurrentPageNo(lawInfoVO.getPageIndex());
    	paginationInfo.setRecordCountPerPage(lawInfoVO.getPageUnit());
    	paginationInfo.setPageSize(lawInfoVO.getPageSize());
    	
    	lawInfoVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
    	lawInfoVO.setLastIndex(paginationInfo.getLastRecordIndex());
    	lawInfoVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());
		
    	
		List<LawInfoVO> lawInfoVOList = searchLawService.selectLawInfoVOList(lawInfoVO);
		
		int totalCount = searchLawService.selectSampleCount(lawInfoVO);
		
    	paginationInfo.setTotalRecordCount(totalCount);
    	
    	List<PaginationInfo> paging1 = new ArrayList<PaginationInfo>();
    	paging1.add(paginationInfo);
    	
    	lawInfoVOList.get(0).setFirstIndex(paginationInfo.getFirstPageNoOnPageList());
		lawInfoVOList.get(0).setLastIndex(paginationInfo.getLastPageNoOnPageList());
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("lawListOutput", lawInfoVOList);
		result.addDataSet("pagingOutput", paging1);

		return result;
	}
	
	@RequestMapping(value = "/searchLawSubList.do")
	public NexacroResult searchLawSubList(@ParamDataSet (name = "ds_search", required = false) LawInfoVO lawInfoVO) {

		/*
		 * 페이징
		 */
		if(lawInfoVO == null) {
			lawInfoVO = new LawInfoVO();
        }
		
//		lawInfoVO.setPageUnit(10);			// 페이지 당 조회 수
//		lawInfoVO.setPageSize(10);			// 페이지 최대 수
		
//		PaginationInfo paginationInfo = new PaginationInfo();
//    	paginationInfo.setCurrentPageNo(lawInfoVO.getPageIndex());
//    	paginationInfo.setRecordCountPerPage(lawInfoVO.getPageUnit());
//    	paginationInfo.setPageSize(lawInfoVO.getPageSize());
//    	
//    	lawInfoVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
//    	lawInfoVO.setLastIndex(paginationInfo.getLastRecordIndex());
//    	lawInfoVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());
    	
		List<LawInfoVO> lawSubList = searchLawService.selectLawSubList(lawInfoVO);
		
//		int totalCount = searchLawService.selectLawSubCount(lawInfoVO);
		
//    	paginationInfo.setTotalRecordCount(totalCount);
    	
//    	List<PaginationInfo> paging1 = new ArrayList<PaginationInfo>();
//    	paging1.add(paginationInfo);
    	
//    	lawSubList.get(0).setFirstIndex(paginationInfo.getFirstPageNoOnPageList());
//    	lawSubList.get(0).setLastIndex(paginationInfo.getLastPageNoOnPageList());
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("subList", lawSubList);
//		result.addDataSet("pagingOutput", paging1);

		return result;
	}
	
	@RequestMapping(value = "/searchLawArticleList.do")
	public NexacroResult searchLawArticleList(@ParamDataSet (name = "ds_search", required = false) LawInfoVO lawInfoVO) {

		/*
		 * 페이징
		 */
		if(lawInfoVO == null) {
			lawInfoVO = new LawInfoVO();
        }
		
		lawInfoVO.setPageUnit(10);			// 페이지 당 조회 수
		lawInfoVO.setPageSize(10);			// 페이지 최대 수
		
		PaginationInfo paginationInfo = new PaginationInfo();
    	paginationInfo.setCurrentPageNo(lawInfoVO.getPageIndex());
    	paginationInfo.setRecordCountPerPage(lawInfoVO.getPageUnit());
    	paginationInfo.setPageSize(lawInfoVO.getPageSize());
    	
    	lawInfoVO.setFirstIndex(paginationInfo.getFirstRecordIndex());
    	lawInfoVO.setLastIndex(paginationInfo.getLastRecordIndex());
    	lawInfoVO.setRecordCountPerPage(paginationInfo.getRecordCountPerPage());
    	
		List<LawInfoVO> lawArticleList = searchLawService.selectLawArticleList(lawInfoVO);
		
		int totalCount = searchLawService.selectLawArticleCount(lawInfoVO);
		
    	paginationInfo.setTotalRecordCount(totalCount);
    	
    	List<PaginationInfo> paging1 = new ArrayList<PaginationInfo>();
    	paging1.add(paginationInfo);
    	
    	lawArticleList.get(0).setFirstIndex(paginationInfo.getFirstPageNoOnPageList());
    	lawArticleList.get(0).setLastIndex(paginationInfo.getLastPageNoOnPageList());
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("articleList", lawArticleList);
		result.addDataSet("pagingOutput", paging1);

		return result;
	}
	
	@RequestMapping(value = "/searchLawItem.do")
	public NexacroResult searchLawItemList(@ParamDataSet (name = "ds_search", required = false) LawInfoVO lawInfoVO) {

		String nextLine = System.getProperty("line.separator");
		StringBuffer stringBuffer = new StringBuffer();
		String realText = null;
		
		List<LawInfoVO> lawItemList = searchLawService.selectLawItemList(lawInfoVO);
		
		for(int i=0; i<lawItemList.size();i++)
		{
			String itemText = lawItemList.get(i).getItemText()+nextLine;
			realText = stringBuffer.append(itemText).toString();
		}
		
		if(lawItemList.size() != 0)
		{
			lawItemList.get(0).setItemText(realText);
		}
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("articleDetail", lawItemList);

		return result;
	}
	
	@RequestMapping(value = "/searchLawArticleAll.do")
	public NexacroResult searchLawArticleAll(@ParamDataSet (name = "ds_search", required = false) LawInfoVO lawInfoVO) {
		
		List<LawInfoVO> articleNo = searchLawService.searchArticleNo(lawInfoVO);
		List<LawInfoVO> lawItemList = new ArrayList<LawInfoVO>();
		
		String nextLine = System.getProperty("line.separator");
		StringBuffer stringBuffer1 = new StringBuffer();
		StringBuffer stringBuffer2 = new StringBuffer();
		
		String realTextList = null;
		String itemText = null;
		String realText = "";
		
		for(int i=0; i<articleNo.size();i++)
		{
			lawItemList = searchLawService.selectLawItemList(articleNo.get(i));
			
			for(int j=0; j<lawItemList.size();j++)
			{
				itemText = lawItemList.get(j).getItemText()+nextLine;
				realText = stringBuffer1.append(itemText).toString();
			}
			
			stringBuffer1 = new StringBuffer();
			realTextList = stringBuffer2.append(articleNo.get(i).getMainText()).append(nextLine).append(nextLine).toString();
			
			if(lawItemList.size()!=0)
			{
				realTextList = stringBuffer2.append(realText).append(nextLine).toString();
			}
			
		}
		
		
		
		if(articleNo.size() != 0)
		{
			if(lawItemList.size()==0)
			{
				lawItemList.add(0, lawInfoVO);
			}
			lawItemList.get(0).setItemText(realTextList);
		}
			
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("articleDetail", lawItemList.get(0));

		return result;
	}
	
	@RequestMapping(value = "/searchArticleCount.do")
	public NexacroResult getLawArticleCount(@ParamDataSet (name = "input", required = false) LawInfoVO lawInfoVO){
		
		LawInfoVO articleCount = searchLawService.getLawArticleCount(lawInfoVO);  
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("output1", articleCount);
		
		return result;
	}
	
    @RequestMapping(value = "/lawUpdateVO.do")
	public NexacroResult modifyLawList(@ParamDataSet(name = "input") List<LawInfoVO> modifyList, HttpServletRequest req) {
    	
		String userId = modifyList.get(0).getUserId();
    	
    	searchLawService.updateLawList(modifyList);
        
        NexacroResult result = new NexacroResult();
        
        if(result != null){
			insertLog.insertData(userId, "법령수정", req);
    	}
        
        return result;
    }
	
	/**
	 * xml 파싱 -> json 방식으로 변경할 예정
	 */
//	@RequestMapping(value = "/lawArticleInsert.do")
//	public NexacroResult lawArticleInsert(@ParamDataSet (name = "ds_search", required = false) LawInfoVO lawInfoVO){
//		
//		NexacroResult result = new NexacroResult();
//		
//		try {
//			String addr = "http://www.law.go.kr/DRF/lawService.do?OC=creator&target=law&MST=192425&type=XML&mobileYn=&efYd=20170622";
//			DocumentBuilderFactory dbFactoty = DocumentBuilderFactory.newInstance();
//			DocumentBuilder dBuilder = dbFactoty.newDocumentBuilder();
//			Document doc = dBuilder.parse(addr);
//			
//			String addr1 = addr.split("law.go.kr")[1];
//
//			// root tag 
//			doc.getDocumentElement().normalize();
////			System.out.println("Root element: " + doc.getDocumentElement().getNodeName());
//			String topNode = doc.getDocumentElement().getNodeName().trim();
//			if(topNode != "법령")
//			{
//				return null;	// 법령이 아닐 때
//			}
//			
//			NodeList nList = doc.getElementsByTagName("기본정보");
//			NodeList mList = doc.getElementsByTagName("개정문");
//			NodeList nnList = doc.getElementsByTagName("제개정이유");
//			NodeList aList = doc.getElementsByTagName("조문");
//			NodeList sList = doc.getElementsByTagName("부칙");
//
//					
//			Node nNode = nList.item(0);
//			Node mNode = mList.item(0);
//			Node nnNode = nnList.item(0);
//			
////			for(int temp = 0; temp < nList.getLength(); temp++){
//				
//			if(nNode != null){
//									
//				Element eElement = (Element) nNode;
//				Element mElement = (Element) mNode;
//				Element nnElement = (Element) nnNode;
////					System.out.println("######################");
////					System.out.println("법령ID  : " + getTagValue("법령ID", eElement));
////					System.out.println("법령일련번호  : " + doc.getElementsByTagName("법령").item(0).getAttributes().item(0).getNodeValue());
////					System.out.println("개정문내용  : " + getTagValue("개정문내용", mElement));
////					System.out.println("공포번호 : " + getTagValue("공포번호", eElement));
////					System.out.println("법령명_한글 : " + getTagValue("법령명_한글", eElement));
////					System.out.println("소관부처코드 : " + eElement.getElementsByTagName("소관부처").item(0).getAttributes().item(0).getNodeName());
////					System.out.println("소관부처코드 : " + eElement.getElementsByTagName("소관부처").item(0).getAttributes().item(0).getNodeValue());
//				
//				lawInfoVO.setLawNo(doc.getElementsByTagName("법령").item(0).getAttributes().item(0).getNodeValue());
//				lawInfoVO.setLawId(getTagValue("법령ID", eElement));
//				lawInfoVO.setCreateDate(getTagValue("공포일자", eElement));
//				lawInfoVO.setCreateNo(getTagValue("공포번호", eElement));
//				lawInfoVO.setLawClassName(getTagValue("법종구분", eElement));	// 법령구분명 , 코드 존재
//				
//				lawInfoVO.setLawName(getTagValue("법령명_한글", eElement));
//				lawInfoVO.setCateNo(getTagValue("편장절관", eElement));
//				lawInfoVO.setCareDept(getTagValue("소관부처", eElement));	// 코드 존재
//				lawInfoVO.setActDate(getTagValue("시행일자", eElement));
//				lawInfoVO.setIsModify(getTagValue("제개정구분", eElement));
//				lawInfoVO.setIsShow(getTagValue("공포법령여부", eElement));
//				
//				lawInfoVO.setModifyText(getTagValue("개정문내용", mElement));
//				lawInfoVO.setModifyReason(getTagValue("제개정이유내용", nnElement));
//				
//				lawInfoVO.setDetailLink(addr1);
//				
//				lawInfoVO.setNowHistoryCode("현행");
////					lawInfoVO.setIsSelf(getTagValue("자법타법여부", eElement));
//				
//				if(nList.getLength() == 0)
//				{
//					// 인서트
//					System.out.println("111##################!@#!@$!@$");
//
//				} else if(nList.getLength() >= 1)
//				{
//					// 업데이트
//					searchLawService.updateLawList(lawInfoVO);
//					//System.out.println(lawInfoVO.getModifyReason());
//				}
//					
//			}	// if end
////			}	// for end
//			
//		} catch (Exception e) {
//		}
//		
//		return result;
//	}
//
//	private static String getTagValue(String tag, Element eElement) {
//		
//		NodeList nlList = eElement.getElementsByTagName(tag).item(0).getChildNodes();
//		
//		//String nextLine = System.getProperty("line.separator");
//		StringBuffer stringBuffer = new StringBuffer();
//		String realText = null;
//		
//		Node nValue = (Node) nlList.item(0);
//		
//		if(nlList.getLength() > 1)
//		{
//			for(int i=0; i<nlList.getLength(); i++)
//			{
//				Node nString = nlList.item(i);
//				
//				String text = nString.getNodeValue();
//				
//				realText = stringBuffer.append(text).toString();
//			}
//			
//			nValue.setNodeValue(realText);
//		}
//		
//	    if(nValue == null) 
//	    {
//	        return "";
//	    }
//	    return nValue.getNodeValue();
//	}
    
    
    /*
     * EXCEL INSERT
     */
    private static final String SP = File.separator;
    private static final String PREFIX = "";
    private static final String PATH = "WEB-INF"+SP+"upload";
    
    @Autowired
    private WebApplicationContext appContext;
    
    private String getFilePath() {
        ServletContext sc = appContext.getServletContext();
        String realPath = sc.getRealPath("/");
        String uploadPath = realPath + PATH;
        return uploadPath;
    }
	
    
	@RequestMapping("/lawListExcelUpload.do")
	public NexacroResult lawListExcelInsert(HttpServletRequest request) throws Exception{
		
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

            searchLawService.excelTodataset(destination, resultDs);
           
           if(destination.exists()){
        	   destination.delete();
           }
    }
        NexacroResult result = new NexacroResult();
        result.addDataSet(resultDs);
        return result;
	}
	
	@Transactional
	@RequestMapping("/lawListInsert.do")
	public NexacroResult lawListInsert(@ParamDataSet (name="ds_lawList_Import", required=false) List<LawInfoVO> lawInfoVOList, HttpServletRequest req) throws SQLException{
		
		String userId = lawInfoVOList.get(0).getUserId();
		
		searchLawService.lawListInsert(lawInfoVOList);
		
		NexacroResult result= new NexacroResult();
		
		if(result != null){
			insertLog.insertData(userId, "법령등록", req);
    	}
		
		return result;
	}

	private DataSet createDatasetExcel() {
		DataSet ds = new DataSet("ds_precedentlist_Output");
		ds.addColumn("chk",PlatformDataType.STRING);
		ds.addColumn("lawId", PlatformDataType.STRING);
		ds.addColumn("lawNo", PlatformDataType.STRING);
		ds.addColumn("nowHistoryCode", PlatformDataType.STRING);
		ds.addColumn("lawName", PlatformDataType.STRING);
		ds.addColumn("createDate", PlatformDataType.STRING);
		ds.addColumn("createNo", PlatformDataType.STRING);
		ds.addColumn("isModify", PlatformDataType.STRING);
		ds.addColumn("careDept", PlatformDataType.STRING);
		ds.addColumn("lawClassName", PlatformDataType.STRING);
		ds.addColumn("actDate", PlatformDataType.STRING);
		ds.addColumn("isSelf", PlatformDataType.STRING);
		ds.addColumn("detailLink", PlatformDataType.STRING);
		return ds;
	}
}
