package management.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import management.lawmapper.service.MailService;
import management.lawmapper.service.UserService;
import management.lawmapper.vo.UserPositionVO;
import management.lawmapper.vo.UserSexVO;
import management.lawmapper.vo.UserVo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import util.com.utils.InsertLog;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;



/**
 * Test를 위한 Controller Sample Class
 * 
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Controller
public class UserController {

private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	StandardPasswordEncoder encoder = new StandardPasswordEncoder();
	
	// Name 정의
	// @Autowired(required = false) // Type 정의

	@Resource(name="userService")
	private UserService userService;
	
	@Resource(name="insertLog")
	private InsertLog insertLog;
	@Resource
	private Validator validator;

	@Autowired
	private MailService mailService;
	
    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
    
//    @SuppressWarnings("static-access")
	@RequestMapping(value = "/userselectVO.do")
	public NexacroResult selectVo(@ParamDataSet(name = "dsLogin", required = false) UserVo user, HttpServletRequest req) {
    	UserVo fuser = userService.loginuser(user);
    	String spassword = fuser.getPassword(); //암호화된 비밀번호
    	String password = user.getPassword(); //그냥 비밀번호
    	NexacroResult result = new NexacroResult();
    	if (encoder.matches(password, spassword)) {
    		List<UserVo> userlist = userService.finduser(user);
    		user.setPassword(password);
    		result.addDataSet("output1", userlist);
    		result.addDataSet("output2", userlist);	

		}
    	 
    	if(result != null){
    		insertLog.insertData(user.getUserid(), "로그인",req);
    	}
   
        return result;
    }
    
    @RequestMapping(value = "/userdeleteVO.do")
 	public NexacroResult deleteVo(@ParamDataSet(name = "input1", required = false) List<UserVo> user) throws Exception {
    	validate(user);
    	 userService.modifyMultiUserVO(user);
         NexacroResult result = new NexacroResult();
         return result;
     }
           
	@RequestMapping(value = "/userModifyVO.do")
	public NexacroResult modifyVO(@ParamDataSet(name = "input1") List<UserVo> modifyList) throws NexacroException {
		validate(modifyList);
		NexacroResult result = new NexacroResult();
		boolean success = userService.modifyMultiUserVO(modifyList);
		if (success==true) {
			result.addDataSet("output1", modifyList);	
		}
		return result;
	}

	@RequestMapping(value = "/userfindID.do")
		public NexacroResult findID(@ParamDataSet(name = "input1", required = false) UserVo user) throws NexacroException {   
			List<UserVo> userlist = userService.findid(user);
	        NexacroResult result = new NexacroResult();
	        result.addDataSet("output1", userlist);
	        return result;
	    }
	
	@RequestMapping(value = "/userfindPASS.do")
	public NexacroResult findPASS(@ParamDataSet(name = "input2", required = false) UserVo user) throws NexacroException {   
		int idx = 0;
		StringBuffer sb = new StringBuffer();
		char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', 
									  '7', '8', '9', 'A', 'B', 'C', 'D', 
									  'E', 'F', 'G', 'H', 'I', 'J', 'K', 
									  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
									  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
		for (int i = 0; i < 8; i++) { 
			idx = (int) (charSet.length * Math.random());
			sb.append(charSet[idx]);
		}
		user.setPassword(encoder.encode(sb.toString()));
		List<UserVo> userlist = userService.findpassword(user);
        NexacroResult result = new NexacroResult();
        userlist.get(0).setPassword(sb.toString());
        
        String subject = userlist.get(0).getUserid()+"님의 임시비밀번호 발급 안내 입니다.";
        StringBuilder sbb = new StringBuilder();
        sbb.append(userlist.get(0).getUserid()+"님의 비밀번호는 " + sb.toString() + " 입니다.");
        mailService.send(subject, sbb.toString(), "jws891027@gmail.com", userlist.get(0).getEmail(), null);
        
        result.addDataSet("output1", userlist);
        return result;
    }
	
	@RequestMapping(value = "/useridcheck.do")
	public NexacroResult userIDCHECK(@ParamDataSet(name = "input2", required = false) UserVo user) throws NexacroException {   
		UserVo useridchk = userService.loginuser(user);
		NexacroResult result = new NexacroResult();
		if (useridchk!=null) {	
			result.addDataSet("output2", useridchk);
		}
        return result;
    }
	
	 @RequestMapping(value = "/usersexdata.do")
	 	public NexacroResult sexVo() throws NexacroException {
	    	 List<UserSexVO> usersex = userService.sexsetting();
	         NexacroResult result = new NexacroResult();
	         result.addDataSet("ds_sex",usersex);
	         return result;
	     }
	 
	 @RequestMapping(value = "/userpositiondata.do")
	 	public NexacroResult positionVo() throws NexacroException {
	    	 List<UserPositionVO> userposition = userService.positionsetting();
	         NexacroResult result = new NexacroResult();
	         result.addDataSet("ds_position",userposition);
	         return result;
	     }
	 
	 @RequestMapping(value = "/userfindVO.do")
		public NexacroResult findVo(@ParamDataSet(name = "dsLogin", required = false) UserVo user) {
	    	NexacroResult result = new NexacroResult();
	    		List<UserVo> userlist = userService.findid(user);
	    		result.addDataSet("output1", userlist);	
	        return result;
	    }
	 
	 
	/**
	 * validate
	 * @param modifyList
	 * @throws NexacroException
	 */
	private void validate(List<UserVo> modifyList) throws NexacroException {
		BindingResult bindingResult = null;
		for (UserVo userVO : modifyList) {
			bindingResult = new BeanPropertyBindingResult(userVO, "userVO");
			validator.validate(userVO, bindingResult);
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
