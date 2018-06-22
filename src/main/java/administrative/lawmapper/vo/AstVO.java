package administrative.lawmapper.vo;

public class AstVO extends PageableVO{
	
	private String deccno;
	private String casename;
	private String reclassname;
	private String decidedate;
	private String reorgname;
	private String userid;
	private String choice;
	private String caseno;
	private String chk;
	
	
	
	public String getChk() {
		return chk;
	}
	public void setChk(String chk) {
		this.chk = chk;
	}
	public String getCaseno() {
		return caseno;
	}
	public void setCaseno(String caseno) {
		this.caseno = caseno;
	}
	public String getChoice() {
		return choice;
	}
	public void setChoice(String choice) {
		this.choice = choice;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getReorgname() {
		return reorgname;
	}
	public void setReorgname(String reorgname) {
		this.reorgname = reorgname;
	}
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
	public String getReclassname() {
		return reclassname;
	}
	public void setReclassname(String reclassname) {
		this.reclassname = reclassname;
	}
	public String getDecidedate() {
		return decidedate;
	}
	public void setDecidedate(String decidedate) {
		this.decidedate = decidedate;
	}
	@Override
	public String toString() {
		return "AstVO [deccno=" + deccno + ", casename=" + casename
				+ ", reclassname=" + reclassname + ", decidedate=" + decidedate
				+ "]";
	}
	
}
