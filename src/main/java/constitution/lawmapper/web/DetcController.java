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

import constitution.lawmapper.service.DetcService;
import constitution.lawmapper.vo.DetcCommonCodeVO;
import constitution.lawmapper.vo.DetcContextVO;
import constitution.lawmapper.vo.DetcDetailVO;
import constitution.lawmapper.vo.DetcListVO;



@Controller
public class DetcController {
private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Resource(name="DetcServiceImpl")
	private DetcService DetcService;
	
	@Resource
	private Validator	validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
    
    @RequestMapping(value = "/DetcSettingVO.do")
	public NexacroResult DetcSettingVO(){		
		//List<DetcCommonCodeVO> detc_judge_list = DetcService.detcJudgeSetting();
		List<DetcCommonCodeVO> detc_case_list = DetcService.detcCaseSetting();
		
		NexacroResult result = new NexacroResult();
    	
    	//result.addDataSet("ds_detc_judge_list", detc_judge_list);
    	result.addDataSet("ds_detc_case_list", detc_case_list);
    	
    	return result;
	}
    
    @RequestMapping(value = "/DetcSelectVO.do")
	public NexacroResult selectListVO(@ParamDataSet(name = "ds_detc_search", required = false) DetcListVO searchVO){
    	List<DetcCommonCodeVO> ds_commonCase_search = DetcService.getSearchCaseCount(searchVO);
		
    	DetcListVO searchVO_mid = DetcService.rowCount(searchVO);
		searchVO.setTotalCount(searchVO_mid.getTotalCount());
		List<DetcListVO> detc_list = DetcService.selectDetcList(searchVO);
		
		//Nexacro용 result 객체 생성
    	NexacroResult result = new NexacroResult();
    	
    	//return값을 nexacro용 result객체에 담은 뒤 client Nexacro에 return해줌
    	result.addDataSet("ds_commonCase_search", ds_commonCase_search);
    	result.addDataSet("ds_detc_list", detc_list);
    	result.addDataSet("ds_detc_search",searchVO);
    	return result;
	}
    
    
    @RequestMapping(value = "/DetcSimpleSelectVO.do")
	public NexacroResult selectSimpleListVO(){
		List<DetcListVO> detc_list = DetcService.selectSimpleDetcList();
		NexacroResult result = new NexacroResult();
    	result.addDataSet("ds_detc_list", detc_list);
    	return result;
	}
    
    @RequestMapping(value = "/DetcSelectOneVO.do")
    public NexacroResult selectOneVO(@ParamDataSet(name = "ds_detc_detail") DetcListVO searchVO){
    	
    	DetcContextVO detc_context = DetcService.selectDetcContext(searchVO);
    	
    	//Nexacro용 result 객체 생성
    	NexacroResult result = new NexacroResult();
    	
    	//return값을 nexacro용 result객체에 담은 뒤 client Nexacro에 return해줌
    	result.addDataSet("ds_detc_context", detc_context);
    	
    	return result;
    }
    
    @RequestMapping(value = "/DetcSelectSingleVO.do")
    public NexacroResult selectSingleVO(@ParamDataSet(name = "ds_detc_detail") DetcListVO searchVO){
    	
    	DetcListVO detc_list = DetcService.selectSingleVO(searchVO);
    	DetcDetailVO detail = new DetcDetailVO();
    	detail.setCasename(detc_list.getCasename());
    	detail.setCaseno(detc_list.getCaseno());
    	detail.setDetcdate(detc_list.getDetcdate());
    	detail.setDetcno(detc_list.getDetcno());
    	DetcContextVO detc_context = DetcService.selectDetcContext(searchVO);    	
    	NexacroResult result = new NexacroResult();
    	
    	result.addDataSet("ds_detc_context", detc_context);
    	result.addDataSet("ds_detc_detail",detail);
    	
    	return result;
    }
}
