package util.com.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import util.com.vo.LogDataComVo;


public class LogDataMapper {
	
	@Autowired
	@Qualifier("SqlSessionFactory")
	private SqlSession session;
	public void insertLog(LogDataComVo vo){
		System.out.println("session" + session.toString());
		if(session != null){
		session.insert("management.lawmapper.service.LogMapper.insertLog",vo);
		}else{
			System.out.println("@@@@@@@@@@@@@@@");
		}
	}
	
}

