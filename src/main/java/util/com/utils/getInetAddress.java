package util.com.utils;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class getInetAddress {
	public  String  ipAddress(){
        InetAddress addr = null;

        try{
        System.out.println();
        addr = InetAddress.getLocalHost();
        System.out.println("로컬 호스트 도메인명 :" +addr.getHostName());
        System.out.println("로컬 호스트 IP 주소 :" +addr.getHostAddress());
        System.out.println();
    	} catch (UnknownHostException e) {
			e.printStackTrace();
		}
        return addr.getHostAddress();
}
}
