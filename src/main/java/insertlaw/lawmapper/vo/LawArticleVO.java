package insertlaw.lawmapper.vo;

public class LawArticleVO {
	// 법령 조문 본문
	private String lawid;
	private String articlekey;
	private String articleno;
	private String name;
	private String actdate;
	private String beforemove;
	private String aftermove;
	private String ismodify;
	private String maintext;

	public String getLawid() {
		return lawid;
	}

	public void setLawid(String lawid) {
		this.lawid = lawid;
	}

	public String getArticlekey() {
		return articlekey;
	}

	public void setArticlekey(String articlekey) {
		this.articlekey = articlekey;
	}

	public String getArticleno() {
		return articleno;
	}

	public void setArticleno(String articleno) {
		this.articleno = articleno;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getActdate() {
		return actdate;
	}

	public void setActdate(String actdate) {
		this.actdate = actdate;
	}

	public String getBeforemove() {
		return beforemove;
	}

	public void setBeforemove(String beforemove) {
		this.beforemove = beforemove;
	}

	public String getAftermove() {
		return aftermove;
	}

	public void setAftermove(String aftermove) {
		this.aftermove = aftermove;
	}

	public String getIsmodify() {
		return ismodify;
	}

	public void setIsmodify(String ismodify) {
		this.ismodify = ismodify;
	}

	public String getMaintext() {
		return maintext;
	}

	public void setMaintext(String maintext) {
		this.maintext = maintext;
	}
}