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

import com.nexacro.spring.data.NexacroResult;

import constitution.lawmapper.vo.MainLevelSettingVO;
import constitution.lawmapper.service.MainService;

@Controller
public class MainController {
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Resource(name="MainServiceImpl")
	private MainService mainService;
	
	@Resource
	private Validator	validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
	
    
    @RequestMapping(value = "/mainSettingVO.do")
    public NexacroResult SettingVO(){
    	
    	List<MainLevelSettingVO> list = mainService.mainLevelSetting();
    	NexacroResult result = new NexacroResult();
    	result.addDataSet("ds_main", list);
    	return result;
    }

}
