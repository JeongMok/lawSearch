package refformlist.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import refformlist.lawmapper.service.RefFormListService;
import refformlist.lawmapper.vo.GovRefFormListVo;
import refformlist.lawmapper.vo.LawRefFormListVo;
import board.lawmapper.vo.PagingVo;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

/**
 * 법률/행정규칙별표서식목록 Controller
 * 
 * @author Shim jae min
 * @since 2018.04.12
 * @version 0.1ver
 * @see
 * 
 * 법률/행정규칙별표서식목록 조회 및 검색 
 *
 */

@Controller
public class RefFormListController {

	private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
	@Resource(name="refFormListService")
	private RefFormListService refFormListService;
	//@ParamDataSet(name="ds_search", required = false) LawRefFormListVo searchList
	
	@RequestMapping(value="/LawSearch.do")
	public NexacroResult govLawSearch(@ParamDataSet(name="ds_LawSearch", required= false)LawRefFormListVo lawListVo){
		
		lawListVo.setTotalList(refFormListService.lawCount(lawListVo));
		
		List<LawRefFormListVo> lawRefFormListVo = refFormListService.selectLawList(lawListVo);
		
		PagingVo ds_LawPaging = new PagingVo();
		ds_LawPaging.setTotalList(lawListVo.getTotalList());
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_lawrefformlist",lawRefFormListVo);
		result.addDataSet("ds_LawPaging",ds_LawPaging);
		
		return result;
	}
	
	@RequestMapping(value="/govrSearch.do")
	public NexacroResult govrSearch(@ParamDataSet(name="ds_GovrSearch", required= false)GovRefFormListVo govrListVo ){
		
		govrListVo.setTotalList(refFormListService.govrCount(govrListVo));
		
		System.out.println("시작:"+govrListVo.getStartList());
		System.out.println("끝:"+govrListVo.getEndList());
				
		List<GovRefFormListVo> govRefFormListVo = refFormListService.selectGovList(govrListVo);
		
		PagingVo ds_GovrPaging = new PagingVo();
		ds_GovrPaging.setTotalList(govrListVo.getTotalList());
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_govrefformlist",govRefFormListVo);
		result.addDataSet("ds_GovrPaging",ds_GovrPaging);
		
		return result;
	}

}
