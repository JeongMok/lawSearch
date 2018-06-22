package board.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import board.lawmapper.service.BoardService;
import board.lawmapper.vo.BoardVo;
import board.lawmapper.vo.DefaultVO;
import board.lawmapper.vo.PagingVo;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class BoardController {
	private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
	@Resource(name="boardService")
	private BoardService boardService;
	
	@RequestMapping("/boardInsert.do")
	public void boardInsert(@ParamDataSet(name="ds_board", required= false) BoardVo boardVo){
		
		boardService.boardInsert(boardVo);
	}
	
	@RequestMapping("/boardSearch.do")
	public NexacroResult boardSearch(@ParamDataSet(name="ds_search", required=false) BoardVo boardVo){
		
		boardVo.setTotalList(boardService.boardCount(boardVo)); //게시물 총 수 구하기

		List<BoardVo> ds_board = boardService.boardSearch(boardVo);
		
		PagingVo ds_paging = new PagingVo();
		ds_paging.setTotalList(boardVo.getTotalList());
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_board",ds_board);
		result.addDataSet("ds_paging",ds_paging);
		
		return result;
	}
	
	@RequestMapping("/boardreply.do")
	public void boardReply(@ParamDataSet(name="ds_board", required=false) BoardVo boardVo){
		
		boardService.boardReply(boardVo);		
	}
	
	@RequestMapping("/boardDelete.do")
	public void boardDelete(@ParamDataSet(name="ds_board", required=false) BoardVo boardVo){
		
		boardService.boardDelete(boardVo);
	}
	
	@RequestMapping("/boardUpdate.do")
	public void boardUpdate(@ParamDataSet(name="ds_board", required=false) BoardVo boardVo){
		boardService.boardUpdate(boardVo);
	}
	
}
