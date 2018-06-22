package management.lawmapper.vo;



import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

import nexacro.sample.vo.DefaultVO;


public class UserVo  extends DefaultVO {
	private String userid;
	private String name;
	private String password;
	private String grade;
	private String address;
	private String phone;
	private String email;
	private String career;
	private String position;
	private String sex;
	private String birth;
	private String engname;
	
//	StandardPasswordEncoder encoder = new StandardPasswordEncoder();
	
	public UserVo() {
		
	}
	
	//로그인 할 때
	
	public UserVo(String userid, String password) {
		this.userid = userid;
		this.password = password;
	}
	 
	
	
	public UserVo(String userid, String name, String password, String address,
			String phone, String email, String career, String position,
			String sex, String birth, String engname) {
		this.userid = userid;
		this.name = name;
		this.password = password;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.career = career;
		this.position = position;
		this.sex = sex;
		this.birth = birth;
		this.engname = engname;
	}

	public UserVo(String userid, String password, String address, String phone,
			String email, String career, String position, String engname) {
		this.userid = userid;
		this.password = password;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.career = career;
		this.position = position;
		this.engname = engname;
	}

	public UserVo(String userid, String name, String password, String grade,
			String address, String phone, String email, String career,
			String position, String sex, String birth, String engname) {
	
		this.userid = userid;
		this.name = name;
		this.password = password;
		this.grade = grade;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.career = career;
		this.position = position;
		this.sex = sex;
		this.birth = birth;
		this.engname = engname;
	}
	
	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCareer() {
		return career;
	}

	public void setCareer(String career) {
		this.career = career;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public String getEngname() {
		return engname;
	}

	public void setEngname(String engname) {
		this.engname = engname;
	}

	@Override
	public String toString() {
		
		return userid+","+name+","+password+","+grade+","+address+","+phone+","+email+","+career+","+position+","+sex+","+birth+","+engname+"\n";
	}

}
