package insertlaw.lawmapper.service.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import insertlaw.lawmapper.vo.ExpcListVO;

@Repository
public class ExpcInsertDAO {
	@Autowired 
	private SqlSession session;

	private String namespace = "insertlaw.lawmapper.service.dao.ExpcInsertMapper";

	public void expcList(ExpcListVO expcListVO) {
		session.insert(namespace + ".expcList", expcListVO);
		
	}

	public void expcText(ExpcListVO expcListVO) {
		session.insert(namespace + ".expcText", expcListVO);
		
	}
}