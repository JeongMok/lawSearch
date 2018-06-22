package management.lawmapper.vo;

public class UserPositionVO {
	private String class_code;
	private String code_no;
	private String code_name;
	
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
	@Override
	public String toString() {
		return "UserPositionVO [class_code=" + class_code + ", code_no="
				+ code_no + ", code_name=" + code_name + "]";
	}
	
	
}
