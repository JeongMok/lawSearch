package management.lawmapper.service;

import management.lawmapper.vo.UserVo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserServiceTest {

	public static void main(String[] args) {
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring/context-mapper.xml");
		
		UserService userService = (UserService)applicationContext.getBean("userService");
		
		//System.out.println(userService.userlist());
		
		//System.out.println(userService.finduser("bbbb"));
		
		//userService.deleteuser(new UserVo("bbbb", "1234", "1234", "1234", "cccc@naver.com", "cc", "cc", "cc"));

		//userService.adduser(new UserVo("bbbb", "bbbb", "bbbb", "0", "bbbb", "12345", "bbbb", "bbbb", "bbbb", "b", "2132456", "aaaa"));
		
		//userService.updateuser(new UserVo("bbbb", "1234", "1234", "1234", "cccc@naver.com", "cc", "cc", "cc"));
		
		

	}

}
