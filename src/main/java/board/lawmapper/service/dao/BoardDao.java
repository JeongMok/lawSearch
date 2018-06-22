package board.lawmapper.service.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import board.lawmapper.vo.BoardVo;

@Repository
public class BoardDao {

	@Autowired
	private SqlSession session;
	
	private String namespace ="board.lawmapper.service.dao.BoardMapper";
	
	public void boardInsert(BoardVo boardVo){
	
		session.insert(namespace+".boardInsert",boardVo);
	}
	
	public void boardReply(BoardVo boardVo){
		boardVo.setbOrder(boardVo.getbOrder()+1);
		boardVo.setStep(boardVo.getStep()+1);
		
		session.update(namespace+".ReplyPlus",boardVo);
		session.insert(namespace+".boardReply",boardVo);
	}
	
	public List<BoardVo> boardSearch(BoardVo boardVo){
		boardVo.setIsshow("Y");
		
		return session.selectList(namespace+".boardSearch", boardVo);
	}
	
	public void boardDelete(BoardVo boardVo){
		boardVo.setIsshow("N");
		
		session.update(namespace+".boardDelete",boardVo);
	}
	
	public int boardCount(BoardVo boardVo){ 
		boardVo.setIsshow("Y");
		
		return session.selectOne(namespace+".boardCount",boardVo);
	}
	
	public void boardUpdate(BoardVo boardVo){
		session.update(namespace+".boardUpdate",boardVo);
	}
}
