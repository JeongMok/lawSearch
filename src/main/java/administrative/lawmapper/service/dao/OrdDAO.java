package administrative.lawmapper.service.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import administrative.lawmapper.vo.OrdSlectClickListVO;
import administrative.lawmapper.vo.OrdVO;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;



@Repository("OrdDAO")
public class OrdDAO extends NexacroIbatisAbstractDAO{
	@Resource
	private SqlSession session;
	
	private static final String namespace = "mappers.nexacro.sample.OrdinanceMapper";
	
	public int  selectCount(OrdVO searchVO){
		return (int) session.selectOne(namespace+".getcount",searchVO);
	}

	public List<OrdVO> selePagin(OrdVO searchVO) {
		// TODO Auto-generated method stub
		return session.selectList(namespace+".getpaing", searchVO);
	}

	public List<OrdVO> selectreplList() {
		// TODO Auto-generated method stub
		return session.selectList(namespace+".getList");
	}

	public List<OrdSlectClickListVO> ordselectClickList(OrdSlectClickListVO searchVO) {
		// TODO Auto-generated method stub
		return session.selectList(namespace+".getOrdClickList",searchVO);
	}

	public void listupdateVO(OrdVO insertOrdV) {
		session.update(namespace+".getupdate",insertOrdV);
		
	}

	public void contextupdateVO(OrdVO insertOrdV) {
		session.update(namespace+".getcontextupdate",insertOrdV);
		
	}

	
}
