package board.lawmapper.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import board.lawmapper.service.BoardService;
import board.lawmapper.service.dao.BoardDao;
import board.lawmapper.vo.BoardVo;

@Service("boardService")
public class BoardServiceimpl implements BoardService {

	@Resource(name="boardDao")
	private BoardDao boardDao;
	
	@Override
	public void boardInsert(BoardVo boardVo) {
		boardDao.boardInsert(boardVo);
	}

	@Override
	public List<BoardVo> boardSearch(BoardVo boardVo) {
		return boardDao.boardSearch(boardVo);
	}
	
	@Override
	public void boardReply(BoardVo boardVo){
		boardDao.boardReply(boardVo);
	}

	@Override
	public void boardDelete(BoardVo boardVo) {
		boardDao.boardDelete(boardVo);
	}

	@Override
	public int boardCount(BoardVo boardVo) {
		return boardDao.boardCount(boardVo);
	}

	@Override
	public void boardUpdate(BoardVo boardVo) {
		boardDao.boardUpdate(boardVo);
	}
	
}
