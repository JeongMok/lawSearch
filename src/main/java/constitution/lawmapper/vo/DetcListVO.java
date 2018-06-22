package constitution.lawmapper.vo;

public class DetcListVO extends DetcSearchVO {
	
	private String detcno;
	private String detcdate;
	private String caseno;
	private String casename;
	private String detaillink;
	
	private String judgeclasscode;
	
	
	public String getJudgeclasscode() {
		return judgeclasscode;
	}
	public void setJudgeclasscode(String judgeclasscode) {
		this.judgeclasscode = judgeclasscode;
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
}
