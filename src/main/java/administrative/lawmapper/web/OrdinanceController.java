package administrative.lawmapper.web;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import util.com.utils.InsertLog;
import administrative.lawmapper.service.OrdService;
import administrative.lawmapper.vo.OrdSlectClickListVO;
import administrative.lawmapper.vo.OrdVO;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

@Controller
public class OrdinanceController {

	private static final Logger log = LoggerFactory
			.getLogger(AdvancedFileController.class);

	@Resource(name = "OrdServiceimpl")
	private OrdService OrdService;

	@Resource
	InsertLog insertLog;
	
	@Resource
	private Validator validator;

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		dataBinder.setValidator(this.validator);
	}

	@RequestMapping(value = "/selectord.do")
	public NexacroResult selectVO() {

		List<OrdVO> ReorgName = new ArrayList<OrdVO>();

		OrdVO ordVO = new OrdVO();
		ordVO.setReplorgname("==전체==");

		ReorgName.add(ordVO);
		List<OrdVO> REPLORGNAME = OrdService.selectreplList();

		for (int i = 0; i < REPLORGNAME.size(); i++) {

			ReorgName.add(REPLORGNAME.get(i));
		}

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", ReorgName);
		return result;

	}

	@RequestMapping(value = "/ordselectlist.do")
	public NexacroResult selectlistVO(
			@ParamDataSet(name = "ds_selectlist", required = false) OrdSlectClickListVO searchVO) {
		System.out.println("여기로 들어옴");

		List<OrdSlectClickListVO> ordselectlist = OrdService
				.ordselectClickList(searchVO);

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", ordselectlist);
		return result;

	}

	@RequestMapping(value = "/Ordpaging.do")
	public NexacroResult selectordPaging(
			@ParamDataSet(name = "ds_search", required = false) OrdVO searchVO) {

		if (searchVO == null) {
			System.out.println();
			searchVO = new OrdVO();
		}

		searchVO.setPageUnit(8); // 한페이지에 게시되는 수
		searchVO.setPageSize(10);

		PaginationInfo paginationinfo = new PaginationInfo();
		int totalCount = OrdService.selectCount(searchVO);

		paginationinfo.setTotalRecordCount(totalCount); // 전체 row 수

		paginationinfo.setCurrentPageNo(searchVO.getPageIndex());

		paginationinfo.setRecordCountPerPage(searchVO.getPageUnit());

		paginationinfo.setPageSize(searchVO.getPageSize());

		searchVO.setFirstIndex(paginationinfo.getFirstRecordIndex());// 시작
																		// rownum
																		// 값

		searchVO.setLastIndex(paginationinfo.getLastRecordIndex());// 마지막 rownum
																	// 값

		searchVO.setRecordCountPerPage(paginationinfo.getRecordCountPerPage());// 한페이지당
																				// 게시되는
																				// 페이지
																				// 건수(pageUnit)

		searchVO.setTotalPageCount(paginationinfo.getTotalPageCount());

		searchVO.setFirstPageNo(paginationinfo.getFirstPageNoOnPageList());

		searchVO.setLastPageNo(paginationinfo.getLastPageNoOnPageList());

		System.out.println("totalCount" + totalCount);
		System.out.println("현재 페이지 번호" + paginationinfo.getCurrentPageNo());
		System.out.println("시작 rownum 값 "
				+ paginationinfo.getFirstRecordIndex());
		System.out.println("마지막 rownum 값 "
				+ paginationinfo.getLastRecordIndex());
		System.out.println("setRecordCountPerPage"
				+ paginationinfo.getRecordCountPerPage());
		System.out.println("getTotalRecordCount"
				+ paginationinfo.getTotalRecordCount());
		System.out.println("한페이지에 보일 페이지 크기" + paginationinfo.getPageSize());
		System.out.println("총 페이지수" + paginationinfo.getTotalPageCount());
		System.out.println("안건명" + searchVO.getItemname());
		List<OrdVO> list = OrdService.selectPaging(searchVO);

		for (int i = 0; i < list.size(); i++) {
			list.get(i).setFirstPageNo(paginationinfo.getFirstPageNo());
			list.get(i).setLastPageNo(paginationinfo.getLastPageNo());
			list.get(i).setTotalPageCount(paginationinfo.getTotalPageCount());
		}
		System.out.println("searchVO.getToday_search()"
				+ searchVO.getToday_search());
		System.out.println("fromdate_search" + searchVO.getFromdate_search());

		System.out.println("paginationinfo.getFirstPageNo()"
				+ paginationinfo.getFirstPageNo());
		System.out.println("시작페이지 번호 " + searchVO.getFirstPageNo());

		System.out.println("마지막페이지 번호 " + searchVO.getLastPageNo());

		NexacroResult result = new NexacroResult();
		result.addDataSet("dslist", list);
		result.addDataSet("ds_serch", searchVO);
		return result;
	}

	//법령 해석례 수정
	@RequestMapping(value = "/expcModifyVO.do")
	public NexacroResult ModifyVO(
			@ParamDataSet(name = "input", required = false) List<OrdVO> ordVO,
			HttpServletRequest req) {

		OrdService.expcModifyVO(ordVO);

		NexacroResult result = new NexacroResult();

		if (result != null) {
			insertLog.insertData(ordVO.get(0).getUserid(), "법령 해석례 수정", req);
		}

		return result;
	}
}
