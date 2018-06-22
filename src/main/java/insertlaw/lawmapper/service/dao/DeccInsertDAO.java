package insertlaw.lawmapper.service.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import insertlaw.lawmapper.vo.DeccListVO;

@Repository
public class DeccInsertDAO {
	@Autowired 
	private SqlSession session;

	private String namespace = "insertlaw.lawmapper.service.dao.DeccInsertMapper";

	public void deccList(DeccListVO deccListVO) {
		session.insert(namespace + ".deccList", deccListVO);
	}

	public void deccText(DeccListVO deccListVO) {
		session.insert(namespace + ".deccText", deccListVO);
	}
}