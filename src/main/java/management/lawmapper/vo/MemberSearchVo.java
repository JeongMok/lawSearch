package management.lawmapper.vo;

import java.sql.Timestamp;
import java.util.Date;

public class MemberSearchVo extends MemberDefault{
	private String userId;
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
	private String engName;
	private String gradeName;
	private String loginId;
	private String sexName;
	

	public MemberSearchVo() {
		super();
	}
	
	
	public MemberSearchVo(String grade, String career, String position) {
		super();
		this.grade = grade;
		this.career = career;
		this.position = position;
	}


	public String getSexName() {
		return sexName;
	}


	public void setSexName(String sexName) {
		this.sexName = sexName;
	}


	public String getLoginId() {
		return loginId;
	}


	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}


	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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


	public String getEngName() {
		return engName;
	}
	public void setEngName(String engName) {
		this.engName = engName;
	}
	
	
	public String getGradeName() {
		return gradeName;
	}


	public void setGradeName(String gradeName) {
		this.gradeName = gradeName;
	}


	@Override
	public String toString() {
		return "MemberSearchVo [userId=" + userId + ", name=" + name
				+ ", password=" + password + ", grade=" + grade + ", address="
				+ address + ", phone=" + phone + ", email=" + email
				+ ", career=" + career + ", position=" + position + ", sex="
				+ sex + ", birth=" + birth + ", engName=" + engName + "]";
	}
	
	
}
