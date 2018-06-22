package insertlaw.lawmapper.web;

import insertlaw.lawmapper.service.DetcInsertService;
import insertlaw.lawmapper.vo.DetcListVO;

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
public class DetcInsertController {  
	private static final Logger log = LoggerFactory
			.getLogger(AdvancedFileController.class);
	@Resource(name = "detcInsertService")
	private DetcInsertService detcInsertService;

	// 헌재 결정례 등록
	@RequestMapping("/detcInsert.do")
	public NexacroResult detcInsert(
			@ParamDataSet(name = "detcInsert", required = false) DetcListVO detcListVO) {
		detcInsertService.detcList(detcListVO);
		detcInsertService.detcText(detcListVO);
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