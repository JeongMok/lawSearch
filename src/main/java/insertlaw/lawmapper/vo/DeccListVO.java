package insertlaw.lawmapper.vo;

public class DeccListVO {
	// T_DECCLIST 행정심판례목록
	private String deccno;
	private String casename;
	private String caseno;
	private String dealdate;
	private String decidedate;
	private String dealorgname;
	private String reorgname;
	private String reclassname;
	private String reclasscode;
	private String detaillink;

	// T_DECCTEXT 행정심판례본문
	private String maintext;
	private String opiniontext;
	private String reasontext;
	private String repltext;

	public String getDeccno() {
		return deccno;
	}

	public void setDeccno(String deccno) {
		this.deccno = deccno;
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

	public String getDealdate() {
		return dealdate;
	}

	public void setDealdate(String dealdate) {
		this.dealdate = dealdate;
	}

	public String getDecidedate() {
		return decidedate;
	}

	public void setDecidedate(String decidedate) {
		this.decidedate = decidedate;
	}

	public String getDealorgname() {
		return dealorgname;
	}

	public void setDealorgname(String dealorgname) {
		this.dealorgname = dealorgname;
	}

	public String getReorgname() {
		return reorgname;
	}

	public void setReorgname(String reorgname) {
		this.reorgname = reorgname;
	}

	public String getReclassname() {
		return reclassname;
	}

	public void setReclassname(String reclassname) {
		this.reclassname = reclassname;
	}

	public String getReclasscode() {
		return reclasscode;
	}

	public void setReclasscode(String reclasscode) {
		this.reclasscode = reclasscode;
	}

	public String getDetaillink() {
		return detaillink;
	}

	public void setDetaillink(String detaillink) {
		this.detaillink = detaillink;
	}

	public String getMaintext() {
		return maintext;
	}

	public void setMaintext(String maintext) {
		this.maintext = maintext;
	}

	public String getOpiniontext() {
		return opiniontext;
	}

	public void setOpiniontext(String opiniontext) {
		this.opiniontext = opiniontext;
	}

	public String getReasontext() {
		return reasontext;
	}

	public void setReasontext(String reasontext) {
		this.reasontext = reasontext;
	}

	public String getRepltext() {
		return repltext;
	}

	public void setRepltext(String repltext) {
		this.repltext = repltext;
	}
}