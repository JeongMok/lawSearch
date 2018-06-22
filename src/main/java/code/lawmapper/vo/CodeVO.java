package code.lawmapper.vo;

import java.util.Date;



public class CodeVO {

	private String class_code;
	private String code_no;
	private String code_name;
	private String code_name2;
	private String code_eng_name;
	private String etc_code1;
	private String etc_code2;
	private String code_desc;
	private String use_yn;
	private String sort_seq;
	private String regist_time;
	private String regist_id;
	private String modify_time;
	private String modify_id;
	private String last_mody_time;
	private String higher_class_code;
	private String higher_code_no;
	
	public CodeVO() {
		super();
	}

	public CodeVO(String class_code, String code_no, String code_name,
			String code_name2, String code_eng_name, String etc_code1,
			String etc_code2, String code_desc, String use_yn, String sort_seq,
			String regist_time, String regist_id, String modify_time,
			String modify_id, String last_mody_time, String higher_class_code,
			String higher_code_no) {
		super();
		this.class_code = class_code;
		this.code_no = code_no;
		this.code_name = code_name;
		this.code_name2 = code_name2;
		this.code_eng_name = code_eng_name;
		this.etc_code1 = etc_code1;
		this.etc_code2 = etc_code2;
		this.code_desc = code_desc;
		this.use_yn = use_yn;
		this.sort_seq = sort_seq;
		this.regist_time = regist_time;
		this.regist_id = regist_id;
		this.modify_time = modify_time;
		this.modify_id = modify_id;
		this.last_mody_time = last_mody_time;
		this.higher_class_code = higher_class_code;
		this.higher_code_no = higher_code_no;
	}

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

	public String getCode_eng_name() {
		return code_eng_name;
	}

	public void setCode_eng_name(String code_eng_name) {
		this.code_eng_name = code_eng_name;
	}

	public String getEtc_code1() {
		return etc_code1;
	}

	public void setEtc_code1(String etc_code1) {
		this.etc_code1 = etc_code1;
	}

	public String getEtc_code2() {
		return etc_code2;
	}

	public void setEtc_code2(String etc_code2) {
		this.etc_code2 = etc_code2;
	}

	public String getCode_desc() {
		return code_desc;
	}

	public void setCode_desc(String code_desc) {
		this.code_desc = code_desc;
	}

	public String getUse_yn() {
		return use_yn;
	}

	public void setUse_yn(String use_yn) {
		this.use_yn = use_yn;
	}

	public String getSort_seq() {
		return sort_seq;
	}

	public void setSort_seq(String sort_seq) {
		this.sort_seq = sort_seq;
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

	public String getModify_time() {
		return modify_time;
	}

	public void setModify_time(String modify_time) {
		this.modify_time = modify_time;
	}

	public String getModify_id() {
		return modify_id;
	}

	public void setModify_id(String modify_id) {
		this.modify_id = modify_id;
	}

	public String getLast_mody_time() {
		return last_mody_time;
	}

	public void setLast_mody_time(String last_mody_time) {
		this.last_mody_time = last_mody_time;
	}

	public String getHigher_class_code() {
		return higher_class_code;
	}

	public void setHigher_class_code(String higher_class_code) {
		this.higher_class_code = higher_class_code;
	}

	public String getHigher_code_no() {
		return higher_code_no;
	}

	public void setHigher_code_no(String higher_code_no) {
		this.higher_code_no = higher_code_no;
	}

	@Override
	public String toString() {
		return "CodeVO [class_code=" + class_code + ", code_no=" + code_no
				+ ", code_name=" + code_name + ", code_name2=" + code_name2
				+ ", code_eng_name=" + code_eng_name + ", etc_code1="
				+ etc_code1 + ", etc_code2=" + etc_code2 + ", code_desc="
				+ code_desc + ", use_yn=" + use_yn + ", sort_seq=" + sort_seq
				+ ", regist_time=" + regist_time + ", regist_id=" + regist_id
				+ ", modify_time=" + modify_time + ", modify_id=" + modify_id
				+ ", last_mody_time=" + last_mody_time + ", higher_class_code="
				+ higher_class_code + ", higher_code_no=" + higher_code_no
				+ "]";
	}

	
}
