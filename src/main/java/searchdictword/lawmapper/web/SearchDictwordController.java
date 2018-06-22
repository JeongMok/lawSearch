package searchdictword.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import searchdictword.lawmapper.service.SearchDictwordService;
import searchdictword.lawmapper.vo.DictwordContentVO;
import searchdictword.lawmapper.vo.DictwordExcelVO;
import searchdictword.lawmapper.vo.DictwordVO;
import util.com.utils.InsertLog;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;
import com.nexacro.xapi.data.PlatformData;

@Controller
public class SearchDictwordController {
	
	private static final Logger log = LoggerFactory.getLogger(SearchDictwordController.class);
	@Resource
	InsertLog ionsertLog;
	
	@Resource(name = "searchDictwordService")
	SearchDictwordService searchDictwordService;
	
	@RequestMapping(value="/dicSearchSelectVO.do")
	public NexacroResult getDictwordList(@ParamDataSet (name="ds_search", required=false) DictwordVO dictSearchVO){
		//Analyzer.parseJava("가구");
		
		//log.debug("검색한 키워드 : "+dictSearchVO.getDictKeyword());
		
		DictwordVO dictwordVO_mid = searchDictwordService.rowCount(dictSearchVO);
		dictSearchVO.setTotalCount(dictwordVO_mid.getTotalCount());
		dictSearchVO.setPaging();
		List<DictwordVO> dictWordVO = searchDictwordService.selectDictwordListVO(dictSearchVO);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("ds_search",dictSearchVO);
		result.addDataSet("ds_dict_list",dictWordVO);
		return result;
	}
	@RequestMapping(value="/dicSearchSelectOneVO.do")
	public NexacroResult getDictwordOne(@ParamDataSet (name="ds_dict_list", required=false) DictwordVO dictwordVO){
		//System.out.println("법률용어사전 본문 진입 : "+dictwordVO.getDictword());
		DictwordVO dictwordContentVO = searchDictwordService.selectDictwordOneVO(dictwordVO);
		//System.out.println("본문 용어 : "+dictwordContentVO.getDictword());
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_dict_content",dictwordContentVO);
		return result;
	}
	@RequestMapping(value="/dicSearchUpdateVO.do")
	public NexacroResult dicSearchUpdate(@ParamDataSet(name="ds_dict_list", required=false) List<DictwordVO> dictwordVO, HttpServletRequest req){
		System.out.println("@@@링크 : "+dictwordVO.get(0).getDetaillink());
		
		searchDictwordService.updateDictword(dictwordVO);
		NexacroResult result = new NexacroResult();

		if(result != null){
			ionsertLog.insertData(dictwordVO.get(0).getUserId(), "법률용어 수정",req);
    	}
		return result;
	}
	@RequestMapping(value="/exportExcel.do")
	public NexacroResult exportExcel(@ParamDataSet(name="ds_chk", required=false) List<DictwordVO> dictwordVO ){
		System.out.println("엑셀익스포트 진입@@@@@@@@@@@@@@@@@@");
		List<DictwordExcelVO> ds_chk=searchDictwordService.exportExcel(dictwordVO);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_chk",ds_chk);
		return result;
	}
	
	@RequestMapping(value="/upload.do")
	public NexacroResult upload(HttpServletRequest request){
		//System.out.println("업로드 진입");
		if(!(request instanceof MultipartHttpServletRequest)){
			if(log.isDebugEnabled()){
				log.debug("Request is not a MultipartHttpServletRequest");
			}
			return new NexacroResult();
		}
		//System.out.println("@@@@파일 수신 확인!!!");
		return new NexacroResult();
	}
	
}
