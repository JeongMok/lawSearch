package insertlaw.lawmapper.vo;

public class PrecedentInsertVO {
	// T_PRECEDENTLIST 판례목록
	private String userid;
	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	private String precno;
	private String judgedate;
	private String casename;
	private String caseno;
	private String courtname;
	private String courtclasscode;
	private String caseclasscode;
	private String caseclassname;
	private String judgeclassname;
	private String judge;
	private String precdetaillink;
	private String hastnull;

	// T_PRECTEXT 판례본문
	private String casetext;
	private String judgetext;
	private String referlaw;
	private String referjudge;
	private String maintext;

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

	public String getPrecno() {
		return precno;
	}

	public void setPrecno(String precno) {
		this.precno = precno;
	}

	public String getJudgedate() {
		return judgedate;
	}

	public void setJudgedate(String judgedate) {
		this.judgedate = judgedate;
	}

	public String getCasename() {
		return casename;
	}

	public void setCasename(String casename) {
		this.casename = casename;
	}

	public String getCaseno() {
		return caseno;
	}

	public void setCaseno(String caseno) {
		this.caseno = caseno;
	}

	public String getCourtname() {
		return courtname;
	}

	public void setCourtname(String courtname) {
		this.courtname = courtname;
	}

	public String getCourtclasscode() {
		return courtclasscode;
	}

	public void setCourtclasscode(String courtclasscode) {
		this.courtclasscode = courtclasscode;
	}

	public String getCaseclasscode() {
		return caseclasscode;
	}

	public void setCaseclasscode(String caseclasscode) {
		this.caseclasscode = caseclasscode;
	}

	public String getCaseclassname() {
		return caseclassname;
	}

	public void setCaseclassname(String caseclassname) {
		this.caseclassname = caseclassname;
	}

	public String getJudgeclassname() {
		return judgeclassname;
	}

	public void setJudgeclassname(String judgeclassname) {
		this.judgeclassname = judgeclassname;
	}

	public String getJudge() {
		return judge;
	}

	public void setJudge(String judge) {
		this.judge = judge;
	}

	public String getPrecdetaillink() {
		return precdetaillink;
	}

	public void setPrecdetaillink(String precdetaillink) {
		this.precdetaillink = precdetaillink;
	}

	public String getHastnull() {
		return hastnull;
	}

	public void setHastnull(String hastnull) {
		this.hastnull = hastnull;
	}

	public String getCasetext() {
		return casetext;
	}

	public void setCasetext(String casetext) {
		this.casetext = casetext;
	}

	public String getJudgetext() {
		return judgetext;
	}

	public void setJudgetext(String judgetext) {
		this.judgetext = judgetext;
	}

	public String getReferlaw() {
		return referlaw;
	}

	public void setReferlaw(String referlaw) {
		this.referlaw = referlaw;
	}

	public String getReferjudge() {
		return referjudge;
	}

	public void setReferjudge(String referjudge) {
		this.referjudge = referjudge;
	}

	public String getMaintext() {
		return maintext;
	}

	public void setMaintext(String maintext) {
		this.maintext = maintext;
	}

}