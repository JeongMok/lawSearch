package constitution.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.web.UserController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

import constitution.lawmapper.service.PrecedentService;
import constitution.lawmapper.vo.PrecedentContextVO;
import constitution.lawmapper.vo.PrecedentsCommonCodeVO;
import constitution.lawmapper.vo.PrecedentsListVO;


@Controller
public class PrecedentController {
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Resource(name="PrecedentServiceImpl")
	private PrecedentService precedentService;
	
	@Resource
	private Validator	validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
    
    @RequestMapping(value = "/PrecedentsSettingVO.do")
	public NexacroResult PrecedentsSettingVO(){		
		//List<PrecedentsJudgeVO> precedents_judge_list = PrecedentService.precedentsJudgeSetting();
		List<PrecedentsCommonCodeVO> precedents_court_list = precedentService.precedentsCourtSetting();
		List<PrecedentsCommonCodeVO> precedents_case_list = precedentService.precedentsCaseSetting();
		
		NexacroResult result = new NexacroResult();
    	
    	//result.addDataSet("ds_precedents_judge_list", precedents_judge_list);
    	result.addDataSet("ds_precedents_court_list", precedents_court_list);
    	result.addDataSet("ds_precedents_case_list", precedents_case_list);
    	
    	return result;
	}
    
    
    @RequestMapping(value = "/PrecedentsSimpleSelectVO.do")
    public NexacroResult selectSimpleListVO(@ParamDataSet(name = "ds_precedents_search", required = false) PrecedentsListVO searchVO){
    	List<PrecedentsListVO> precedents_list = precedentService.selectPrecedentsSimpleList(searchVO);
    	NexacroResult result = new NexacroResult();
       	result.addDataSet("ds_precedents_list", precedents_list);
       	return result;
    }    	
    	
	
    @RequestMapping(value = "/PrecedentsSelectVO.do")
	public NexacroResult selectListVO(@ParamDataSet(name = "ds_precedents_search", required = false) PrecedentsListVO searchVO){
		List<PrecedentsCommonCodeVO> ds_commonCase_search = precedentService.getSearchCaseCount(searchVO);
		List<PrecedentsCommonCodeVO> ds_commonCourt_search = precedentService.getSearchCourtCount(searchVO);
    	
		PrecedentsListVO searchVO_mid = precedentService.rowCount(searchVO);
		searchVO.setTotalCount(searchVO_mid.getTotalCount());
		List<PrecedentsListVO> precedents_list = precedentService.selectPrecedentsList(searchVO);
		
		//Nexacro용 result 객체 생성
    	NexacroResult result = new NexacroResult();
    	
    	//return값을 nexacro용 result객체에 담은 뒤 client Nexacro에 return해줌
    	result.addDataSet("ds_commonCase_search", ds_commonCase_search);
    	result.addDataSet("ds_commonCourt_search", ds_commonCourt_search);
    	result.addDataSet("ds_precedents_list", precedents_list);
    	result.addDataSet("ds_precedents_search",searchVO);
    	return result;
	}
    
    @RequestMapping(value = "/PrecedentSelectOneVO.do")
    public NexacroResult selectOneVO(@ParamDataSet(name = "ds_precedent_detail") PrecedentsListVO searchVO){
    	
    	PrecedentContextVO precedent_context = precedentService.selectPrecedentContext(searchVO);
    	//System.out.println("clob setting 확인 : \n"+precedent_context.getMaintext()); 
    	
    	//Nexacro용 result 객체 생성
    	NexacroResult result = new NexacroResult();
    	
    	//return값을 nexacro용 result객체에 담은 뒤 client Nexacro에 return해줌
    	result.addDataSet("ds_precedent_context", precedent_context);
    	
    	return result;
    }
    
    @RequestMapping(value = "/PrecedentSelectSingleVO.do")
    public NexacroResult selectSingleVO(@ParamDataSet(name = "ds_precedent_detail") PrecedentsListVO searchVO){
    	
    	PrecedentsListVO precedent_detail = precedentService.selectSingleVO(searchVO);
    	PrecedentContextVO precedent_context = precedentService.selectPrecedentContext(searchVO);    	
    	NexacroResult result = new NexacroResult();
    	
    	result.addDataSet("ds_precedent_context", precedent_context);
    	result.addDataSet("ds_precedent_detail",precedent_detail);
    	return result;
    }    
}
