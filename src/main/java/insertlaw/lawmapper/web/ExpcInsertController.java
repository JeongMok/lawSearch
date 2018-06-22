package insertlaw.lawmapper.web;

import insertlaw.lawmapper.service.ExpcInsertService;
import insertlaw.lawmapper.vo.ExpcListVO;

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
public class ExpcInsertController {
	private static final Logger log = LoggerFactory
			.getLogger(AdvancedFileController.class);

	@Resource(name = "expcInsertService")
	private ExpcInsertService expcInsertService;

	// 법령해석례 등록
	@RequestMapping("/expcInsert.do")
	public NexacroResult expcInsert(
			@ParamDataSet(name = "expcInsert", required = false) ExpcListVO expcListVO) {
		expcInsertService.expcList(expcListVO);
		expcInsertService.expcText(expcListVO);
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