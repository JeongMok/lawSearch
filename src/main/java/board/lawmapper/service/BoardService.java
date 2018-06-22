package board.lawmapper.service;

import java.util.List;

import board.lawmapper.vo.BoardVo;

public interface BoardService {
	
	void boardInsert(BoardVo boardVo);
	List<BoardVo> boardSearch(BoardVo boardVo);
	void boardReply(BoardVo boardVo);
	void boardDelete(BoardVo boardVo);
	int boardCount(BoardVo boardVo);
	void boardUpdate(BoardVo boardVo);
}
