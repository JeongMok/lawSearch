package insertlaw.lawmapper.service.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import insertlaw.lawmapper.vo.DetcListVO;

@Repository
public class DetcInsertDAO {
	@Autowired 
	private SqlSession session;

	private String namespace = "insertlaw.lawmapper.service.dao.DetcInsertMapper";

	public void detcList(DetcListVO detcListVO) {
		session.insert(namespace + ".detcList", detcListVO);
		
	}

	public void detcText(DetcListVO detcListVO) {
		session.insert(namespace + ".detcText", detcListVO);
		
	}
}