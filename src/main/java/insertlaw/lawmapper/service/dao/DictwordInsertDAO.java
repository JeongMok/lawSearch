package insertlaw.lawmapper.service.dao;

import java.sql.SQLException;

import insertlaw.lawmapper.vo.DictwordVO;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Repository;

@Repository("dictwordInsertDAO")
public class DictwordInsertDAO {
	@Autowired
	private SqlSession session;
	
	private String namespace="insertlaw.mapper.service.dao.DictWordMapper";
	
	public void dictInsert(DictwordVO dictwordVO) throws SQLException{
/*		try{
			
			//session.insert(namespace+".allInsert",dictwordVO);
		}catch(DataIntegrityViolationException e){			
			throw new SQLException("이미 존재하는 값입니다.(PK제약조건 위반) ");
		}*/
		session.update(namespace+".dictwordInsert", dictwordVO);
		session.update(namespace+".dictwordContentInsert", dictwordVO);
		
	}

	public DictwordVO excelSearch(DictwordVO dictwordVO) {
		return session.selectOne(namespace+".excelSearch", dictwordVO);		
	}
}
