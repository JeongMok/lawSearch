package management.lawmapper.vo;

public class UserSexVO {
	private String class_code;
	private String code_no;
	private String code_name;
	private String code_name2;
	public String getClass_code() {
		return class_code;
	}
	public void setClass_code(String class_code) {
		this.class_code = class_code;
	}
	public String getCode_no() {
		return code_no;
	}
	public void setCode_no(String code_no) {
		this.code_no = code_no;
	}
	public String getCode_name() {
		return code_name;
	}
	public void setCode_name(String code_name) {
		this.code_name = code_name;
	}
	public String getCode_name2() {
		return code_name2;
	}
	public void setCode_name2(String code_name2) {
		this.code_name2 = code_name2;
	}
	@Override
	public String toString() {
		return "UserSexVO [class_code=" + class_code + ", code_no=" + code_no
				+ ", code_name=" + code_name + ", code_name2=" + code_name2
				+ "]";
	}
	
	
}
