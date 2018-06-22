package insertlaw.lawmapper.web;

import insertlaw.lawmapper.service.LawInsertService;
import insertlaw.lawmapper.vo.LawArticleVO;
import insertlaw.lawmapper.vo.LawListVO;
import insertlaw.lawmapper.vo.LawSubTextVO;

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
public class LawInsertController {
	private static final Logger log = LoggerFactory
			.getLogger(AdvancedFileController.class);
	@Resource(name = "lawInsertService")
	private LawInsertService lawInsertService;

	// 법령 등록
	@RequestMapping("/lawList.do")
	public NexacroResult lawInsert(
			@ParamDataSet(name = "ds_lawlist", required = false) LawListVO lawListVO) {

		lawInsertService.lawList(lawListVO);
		lawInsertService.lawBaseInfo(lawListVO);
		return new NexacroResult();
	}

	// 법령 조문 등록
	@RequestMapping("/lawArticle.do")
	public NexacroResult lawInsert(
			@ParamDataSet(name = "ds_lawarticle", required = false) LawArticleVO lawArticleVO) {

		lawInsertService.lawArticle(lawArticleVO);
		return new NexacroResult();
	}

	// 법령 부칙 등록
	@RequestMapping("/lawSubtext.do")
	public NexacroResult lawInsert(
			@ParamDataSet(name = "ds_lawsubtext", required = false) LawSubTextVO lawSubTextVO) {
		lawInsertService.lawSubText(lawSubTextVO);
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