package code.lawmapper.vo;



import nexacro.sample.vo.DefaultVO;

public class GroupCodeVO extends DefaultVO {

	private String class_code;
	private String class_name;
	private String class_len;
	private String use_yn;
	private String main_table;
	private String main_column;
	private String class_desc;
	private String regist_time;
	private String regist_id;
	private String phone;
	
	public GroupCodeVO() {
	
	}

	public GroupCodeVO(String class_code, String class_name, String class_len,
			String use_yn, String main_table, String main_column,
			String class_desc, String regist_time, String regist_id,
			String phone) {
		super();
		this.class_code = class_code;
		this.class_name = class_name;
		this.class_len = class_len;
		this.use_yn = use_yn;
		this.main_table = main_table;
		this.main_column = main_column;
		this.class_desc = class_desc;
		this.regist_time = regist_time;
		this.regist_id = regist_id;
		this.phone = phone;
	}

	public String getClass_code() {
		return class_code;
	}

	public void setClass_code(String class_code) {
		this.class_code = class_code;
	}

	public String getClass_name() {
		return class_name;
	}

	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}

	public String getClass_len() {
		return class_len;
	}

	public void setClass_len(String class_len) {
		this.class_len = class_len;
	}

	public String getUse_yn() {
		return use_yn;
	}

	public void setUse_yn(String use_yn) {
		this.use_yn = use_yn;
	}

	public String getMain_table() {
		return main_table;
	}

	public void setMain_table(String main_table) {
		this.main_table = main_table;
	}

	public String getMain_column() {
		return main_column;
	}

	public void setMain_column(String main_column) {
		this.main_column = main_column;
	}

	public String getClass_desc() {
		return class_desc;
	}

	public void setClass_desc(String class_desc) {
		this.class_desc = class_desc;
	}

	public String getRegist_time() {
		return regist_time;
	}

	public void setRegist_time(String regist_time) {
		this.regist_time = regist_time;
	}

	public String getRegist_id() {
		return regist_id;
	}

	public void setRegist_id(String regist_id) {
		this.regist_id = regist_id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "GroupCodeVO [class_code=" + class_code + ", class_name="
				+ class_name + ", class_len=" + class_len + ", use_yn="
				+ use_yn + ", main_table=" + main_table + ", main_column="
				+ main_column + ", class_desc=" + class_desc + ", regist_time="
				+ regist_time + ", regist_id=" + regist_id + ", phone=" + phone
				+ "]";
	}

	
	
}
