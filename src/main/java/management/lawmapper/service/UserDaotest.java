package management.lawmapper.service;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import management.lawmapper.vo.UserVo;

public class UserDaotest {

	public static void main(String[] args) {
		
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring/context-mapper.xml");
		
		UserDao userdao = (UserDao)applicationContext.getBean("userDao");
		
		
		
		userdao.adduser(new UserVo("dddd", "bbbb", "bbbb", "bbbb", "12345", "bbbb", "bbbb", "bbbb", "b", "2132456", "aaaa"));
		
		//userdao.deleteuser(new UserVo("bbbb", "1234", "1234", "1234", "cccc@naver.com", "cc", "cc", "cc"));
		
		//userdao.updateuser(new UserVo("bbbb", "1234", "1234", "1234", "cccc@naver.com", "cc", "cc", "cc"));
		
		//System.out.println(userdao.userlist());
		
		//System.out.println(userdao.finduser("bbbb"));
	}

}
