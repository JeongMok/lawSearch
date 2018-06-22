package insertlaw.lawmapper.web;

import insertlaw.lawmapper.service.DeccInsertService;
import insertlaw.lawmapper.service.DetcInsertService;
import insertlaw.lawmapper.vo.DeccListVO;

import javax.annotation.Resource;

import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;
 
@Controller
public class DeccInsertController {  
	private static final Logger log = LoggerFactory
			.getLogger(AdvancedFileController.class);
	@Resource(name = "deccInsertService")
	private DeccInsertService deccInsertService;

	// 행정심판례 등록
	@RequestMapping("/deccInsert.do")
	public NexacroResult deccInsert(
			@ParamDataSet(name = "deccInsert", required = false) DeccListVO deccListVO) {
		deccInsertService.deccList(deccListVO);
		deccInsertService.deccText(deccListVO);
		return new NexacroResult();
	}

	private String getErrorMessages(BindingResult bindingResult) {
		StringBuffer sb = new StringBuffer();

		for (ObjectError error : bindingResult.getAllErrors()) {
			sb.append(error.getDefaultMessage()).append("\n");
		}
		return sb.toString();
	}
}