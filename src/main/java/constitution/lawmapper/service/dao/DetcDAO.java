package constitution.lawmapper.service.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import constitution.lawmapper.vo.DetcCommonCodeVO;
import constitution.lawmapper.vo.DetcContextVO;
import constitution.lawmapper.vo.DetcDetailVO;
import constitution.lawmapper.vo.DetcListVO;


@Repository("detcDAO")
public class DetcDAO extends NexacroIbatisAbstractDAO {
	
	@Resource
	private SqlSession session;
	
	private static final String namespace = "constitution.lawmapper.service.dao.DetcMapper";
	
	public List<DetcListVO> selectDetcList(DetcListVO searchVO) {
		return session.selectList(namespace+".getList", searchVO);		
	}

	public DetcContextVO selectDetcContext(DetcListVO searchVO) {
		return session.selectOne(namespace+".getConext", searchVO);
	}

	public List<DetcCommonCodeVO> detcJudgeSetting() {
		return session.selectList(namespace+".getJudge");
	}

	public List<DetcCommonCodeVO> detcCaseSetting() {
		return session.selectList(namespace+".getCase");
	}

	public DetcListVO rowCount(DetcListVO searchVO) {
		return session.selectOne(namespace+".getRowCount", searchVO);
	}
	public List<DetcListVO> selectSimpleDetcList(){
		return session.selectList(namespace+".getSimpleList");
	}
	public DetcListVO selectSingleVO(DetcListVO searchVO) {
		return session.selectOne(namespace+".getSingleAll", searchVO);
	}
	public List<DetcCommonCodeVO> getSearchCaseCount(DetcListVO searchVO) {
		return session.selectList(namespace+".getSearchCaseCount", searchVO);
	}
}
