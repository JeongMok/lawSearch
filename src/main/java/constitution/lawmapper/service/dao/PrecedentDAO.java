package constitution.lawmapper.service.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import constitution.lawmapper.vo.PrecedentContextVO;
import constitution.lawmapper.vo.PrecedentsCommonCodeVO;
import constitution.lawmapper.vo.PrecedentsJudgeVO;
import constitution.lawmapper.vo.PrecedentsListVO;

@Repository("PrecedentDAO")
public class PrecedentDAO extends NexacroIbatisAbstractDAO {
	
	@Resource
	private SqlSession session;
	
	private static final String namespace = "constitution.lawmapper.service.dao.PrecedentMapper"; 
	
	public List<PrecedentsListVO> selectPrecedentsList(PrecedentsListVO searchVO){
		return session.selectList(namespace+".getList", searchVO);
	}
	
	public PrecedentContextVO selectPrecedentContext(PrecedentsListVO searchVO){
		return session.selectOne(namespace+".getConext", searchVO);
	}
	public List<PrecedentsJudgeVO> precedentsJudgeSetting(){
		return session.selectList(namespace+".getJudge");
	}
	public List<PrecedentsCommonCodeVO> precedentsCourtSetting(){
		return session.selectList(namespace+".getCourt");
	}
	public List<PrecedentsCommonCodeVO> precedentsCaseSetting(){
		return session.selectList(namespace+".getCase");
	}
	public PrecedentsListVO rowCount(PrecedentsListVO searchVO){
		return session.selectOne(namespace+".getRowCount", searchVO);
	}
	public List<PrecedentsListVO> selectPrecedentsSimpleList(PrecedentsListVO searchVO){
		searchVO.setEndCount(5);
		return session.selectList(namespace+".getSimpleList", searchVO);
	}
	public PrecedentsListVO selectSingleVO(PrecedentsListVO searchVO){
		return session.selectOne(namespace+".getSingleAll", searchVO);
	}
	public List<PrecedentsCommonCodeVO> getSearchCaseCount(PrecedentsListVO searchVO) {
		return session.selectList( namespace+".getSearchCaseCount",searchVO);
	}
	public List<PrecedentsCommonCodeVO> getSearchCourtCount(PrecedentsListVO searchVO) {
		return session.selectList(namespace+".getSearchCourtCount" ,searchVO);
	}
}
