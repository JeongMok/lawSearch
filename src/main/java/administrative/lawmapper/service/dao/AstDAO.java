package administrative.lawmapper.service.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import administrative.lawmapper.vo.AstVO;
import administrative.lawmapper.vo.SlectClickListVO;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;




@Repository("astDAO")
public class AstDAO extends NexacroIbatisAbstractDAO{
	
	@Resource
	private SqlSession session;
	
	private static final String namespace = "mappers.nexacro.sample.AdminStrativeMapper";
	
	
	
	public List<AstVO> selectastDao() {
		return session.selectList(namespace+".getreognamelist");		
	}
	
	public List<AstVO> selectPaging(AstVO searchVO){
			System.out.println(searchVO);
		return session.selectList(namespace+".getpaging",searchVO);
	}
	
	public int  selectCount(AstVO searchVO){
		return (int) session.selectOne(namespace+".getcount",searchVO);
	}
	public List<SlectClickListVO>  selectClickList(SlectClickListVO searchVO){
		return session.selectList(namespace+".getClickList",searchVO);
	}
	public void insertList(SlectClickListVO searchVO){
		session.selectList(namespace+".getinsert",searchVO);
	}

	public List<AstVO> selecthistory(AstVO searchVO) {
		// TODO Auto-generated method stub
		return session.selectList(namespace+".gethistroyList",searchVO);
	}

	public List<AstVO> selecthistorylist(AstVO searchVO) {
		// TODO Auto-generated method stub
	
		return session.selectList(namespace+".getlist",searchVO);
	}

	public List<AstVO> selecthistorycontextlist(AstVO searchVO) {
		// TODO Auto-generated method stub
		return session.selectList(namespace+".getcontextlist",searchVO);	}

	public void listupdateVO(AstVO searchVO) {
		// TODO Auto-generated method stub
		 session.update(namespace+".getupdate",searchVO);	}

	public void contextupdateVO(AstVO searchVO) {
		// TODO Auto-generated method stub
		session.update(namespace+".getcontextupdate",searchVO);
	}

	public AstVO execlselect(AstVO searchVO) {
		// TODO Auto-generated method stub
		return session.selectOne(namespace+".getexeclselect",searchVO);
	}

	public void execlmodyfy(AstVO searchVO) {
		// TODO Auto-generated method stub
		session.update(namespace+".getexeclmody",searchVO);
	}

	public void execltext(AstVO searchVO) {
		// TODO Auto-generated method stub
		session.update(namespace+".getexecltext",searchVO);
	}
	
	
}
