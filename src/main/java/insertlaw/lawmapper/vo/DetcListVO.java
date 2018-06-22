package insertlaw.lawmapper.vo;

public class DetcListVO {
	// T_DETCLIST 헌재결정례목록
	private String detcno;
	private String detcdate;
	private String caseno;
	private String casename;
	private String detaillink;
	private String hasnull;

	// T_DETCTEXT 헌재결정례본문
	private String caseclasscode;
	private String caseclassname;
	private String judgeclasscode;
	private String casetext;
	private String judgetext;
	private String maintext;
	private String referlaw;
	private String referjudge;
	private String targetlaw;

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

	public String getJudgeclasscode() {
		return judgeclasscode;
	}

	public void setJudgeclasscode(String judgeclasscode) {
		this.judgeclasscode = judgeclasscode;
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

	public String getMaintext() {
		return maintext;
	}

	public void setMaintext(String maintext) {
		this.maintext = maintext;
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

	public String getTargetlaw() {
		return targetlaw;
	}

	public void setTargetlaw(String targetlaw) {
		this.targetlaw = targetlaw;
	}

	public String getDetcno() {
		return detcno;
	}

	public void setDetcno(String detcno) {
		this.detcno = detcno;
	}

	public String getDetcdate() {
		return detcdate;
	}

	public void setDetcdate(String detcdate) {
		this.detcdate = detcdate;
	}

	public String getCaseno() {
		return caseno;
	}

	public void setCaseno(String caseno) {
		this.caseno = caseno;
	}

	public String getCasename() {
		return casename;
	}

	public void setCasename(String casename) {
		this.casename = casename;
	}

	public String getDetaillink() {
		return detaillink;
	}

	public void setDetaillink(String detaillink) {
		this.detaillink = detaillink;
	}

	public String getHasnull() {
		return hasnull;
	}

	public void setHasnull(String hasnull) {
		this.hasnull = hasnull;
	}

	
}