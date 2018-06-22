package insertlaw.lawmapper.service.dao;

import java.sql.SQLException;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Repository;

import insertlaw.lawmapper.vo.PrecedentInsertVO;

@Repository
public class PrecedentInsertDAO {
	@Autowired
	private SqlSession session;

	private String namespace = "insertlaw.lawmapper.service.dao.PrecedentInsertMapper";

	public void precedentInsert(PrecedentInsertVO precedentInsertVO) throws SQLException {
		try{
		session.insert(namespace + ".precListInsert", precedentInsertVO);
		session.insert(namespace + ".precTextInsert", precedentInsertVO);
		}catch(DataIntegrityViolationException e){			
			throw new SQLException("판례일련번호가 중복됩니다.");
		}
	}
	
	/*public void precedentList(PrecedentInsertVO precedentInsertVO) {
		session.insert(namespace + ".precedentList", precedentInsertVO);
	}
	public void precedentText(PrecedentInsertVO precedentInsertVO) {
		session.insert(namespace + ".precedentText", precedentInsertVO);
	}
	public List<PrecedentInsertVO> courtNameSelect(PrecedentInsertVO precedentInsertVO) {
		return session.selectList(namespace + ".courtNameSelect", precedentInsertVO);
	}
	public List<PrecedentInsertVO> caseClassSelect(PrecedentInsertVO precedentInsertVO) {
		return session.selectList(namespace + ".caseClassSelect", precedentInsertVO);
	}
	public List<PrecedentInsertVO> judgeClassSelect(PrecedentInsertVO precedentInsertVO) {
		return session.selectList(namespace + ".judgeClassSelect", precedentInsertVO);
	}
	public List<PrecedentInsertVO> judgeSelect(PrecedentInsertVO precedentInsertVO) {
		return session.selectList(namespace + ".judgeSelect", precedentInsertVO);
	}*/
}