package insertlaw.lawmapper.vo;

public class LawSubTextVO {
	// 법령 부칙 본문
	private String lawid;
	private String subkey;
	private String showdate;
	private String showno;
	private String maintext;

	public String getLawid() {
		return lawid;
	}

	public void setLawid(String lawid) {
		this.lawid = lawid;
	}

	public String getSubkey() {
		return subkey;
	}

	public void setSubkey(String subkey) {
		this.subkey = subkey;
	}

	public String getShowdate() {
		return showdate;
	}

	public void setShowdate(String showdate) {
		this.showdate = showdate;
	}

	public String getShowno() {
		return showno;
	}

	public void setShowno(String showno) {
		this.showno = showno;
	}

	public String getMaintext() {
		return maintext;
	}

	public void setMaintext(String maintext) {
		this.maintext = maintext;
	}
}