package schedule.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;

import management.lawmapper.service.UserService;
import management.lawmapper.vo.UserVo;
import management.lawmapper.web.UserController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import schedule.lawmapper.service.ScheduleService;
import schedule.lawmapper.vo.ScheduleVO;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class ScheduleController {

private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	StandardPasswordEncoder encoder = new StandardPasswordEncoder();
	
	// Name 정의
	// @Autowired(required = false) // Type 정의
	
	@Resource(name="scheduleService")
	private ScheduleService scheduleService;
	
	@Resource
	private Validator validator;

    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
    
    @RequestMapping(value = "/scheduleselectVO.do")
	public NexacroResult selectVo(@ParamDataSet(name = "input1", required = false) ScheduleVO schedule) {
    	NexacroResult result = new NexacroResult();
    	List<ScheduleVO> schedulelist = scheduleService.findschedule(schedule);
    	result.addDataSet("output1", schedulelist);
        return result;
    }
    
    
    @RequestMapping(value = "/scheduledeleteVO.do")
 	public NexacroResult deleteVo(@ParamDataSet(name = "ds_delete", required = false) ScheduleVO schedule) throws Exception {
    	 scheduleService.deleteschedule(schedule);
         NexacroResult result = new NexacroResult();
         return result;
     }
    
    @RequestMapping(value = "/scheduleAddVO.do")
	public NexacroResult modifyVO(@ParamDataSet(name = "input1") ScheduleVO modifyList) throws NexacroException {
		//validate(modifyList);
		NexacroResult result = new NexacroResult();
		boolean success = scheduleService.addschedule(modifyList);
		if (success==true) {
			result.addDataSet("output1", modifyList);	
		}
		return result;
	}
    
    @RequestMapping(value = "/scheduleupdateVO.do")
 	public NexacroResult updateVo(@ParamDataSet(name = "input1", required = false) ScheduleVO schedule) throws Exception {
    	 scheduleService.updateschedule(schedule);
         NexacroResult result = new NexacroResult();
         result.addDataSet("output1", schedule);
         return result;
     }
    
	@RequestMapping(value = "/schedulelist.do")
	public NexacroResult selectAll(@ParamDataSet(name = "input1") ScheduleVO schedule) throws NexacroException {
		NexacroResult result = new NexacroResult();
		List<ScheduleVO> schedulelist = scheduleService.schedulelist(schedule);
		result.addDataSet("output1", schedulelist);
		
		return result;
	}
	
	/**
	 * validate
	 * @param modifyList
	 * @throws NexacroException
	 */
	private void validate(List<ScheduleVO> modifyList) throws NexacroException {
		BindingResult bindingResult = null;
		for (ScheduleVO scheduleVO : modifyList) {
			bindingResult = new BeanPropertyBindingResult(scheduleVO, "scheduleVO");
			validator.validate(scheduleVO, bindingResult);
			if (bindingResult.hasErrors()) {
				String errorMessages = getErrorMessages(bindingResult);

				NexacroException nexacroException = new NexacroException(errorMessages);
				nexacroException.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
				nexacroException.setErrorMsg(errorMessages);

				throw nexacroException;
			}
		}
	}
	
	/**
	 * getErrorMessages
	 * @param bindingResult
	 */
	private String getErrorMessages(BindingResult bindingResult) {
		StringBuffer sb = new StringBuffer();
		
		for (ObjectError error : bindingResult.getAllErrors()) {
			sb.append(error.getDefaultMessage()).append("\n");
		}
		
		return sb.toString();
	}
	
}
