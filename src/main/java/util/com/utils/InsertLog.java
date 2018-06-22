package util.com.utils;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;

import management.lawmapper.service.LogMapper;
import management.lawmapper.vo.LogDataVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("insertLog")
public class InsertLog extends MacAddress {
	
	private LogDataVo logDataComVo;
	@Autowired
	private LogMapper dao;
	

	public void insertData(String userId, String logType,HttpServletRequest req){
		logDataComVo= new LogDataVo();
		String uip = req.getRemoteAddr();
//		dao = new LogDataMapper();
//		System.out.println("userid : "+userId);
//		System.out.println("로그 타입 : "+logType);
		logDataComVo.setUserId(userId);
		logDataComVo.setLogType(logType);
		logDataComVo.setLogDetail(userId+"님이" + " " + logType+" " + "하셨습니다.");
		logDataComVo.setUserIp(uip);
		try {
			logDataComVo.setMacAddress(getMacAddress());
		} catch (IOException e) {
			e.printStackTrace();
		}
//		System.out.println("dao  전 : "+logDataComVo.toString());
		
//		if(uip == null){
//			uip= req.getRemoteAddr();
//		}
		System.out.println("uip : "+ uip);
		dao.insertLog(logDataComVo);
	}
	


}
