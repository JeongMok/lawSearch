package insertlaw.lawmapper.vo;

public class DictwordVO {
	private String userId;
	private String dictword;
	private String detaillink;
	private String dictwordCode;
	private String dictwordCodename;
	private String dictwordSource;
	private String mainText;
	private String dictwordNo;
	
	
	public DictwordVO() {
	}
	public DictwordVO(String dictword, String detaillink, String dictwordCode,
			String dictwordCodename, String dictwordSource, String mainText,
			String dictwordNo) {
		this.dictword = dictword;
		this.detaillink = detaillink;
		this.dictwordCode = dictwordCode;
		this.dictwordCodename = dictwordCodename;
		this.dictwordSource = dictwordSource;
		this.mainText = mainText;
		this.dictwordNo = dictwordNo;
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getDictword() {
		return dictword;
	}
	public void setDictword(String dictword) {
		this.dictword = dictword;
	}
	public String getDetaillink() {
		return detaillink;
	}
	public void setDetaillink(String detaillink) {
		this.detaillink = detaillink;
	}
	public String getDictwordCode() {
		return dictwordCode;
	}
	public void setDictwordCode(String dictwordCode) {
		this.dictwordCode = dictwordCode;
	}
	public String getDictwordCodename() {
		return dictwordCodename;
	}
	public void setDictwordCodename(String dictwordCodename) {
		this.dictwordCodename = dictwordCodename;
	}
	public String getDictwordSource() {
		return dictwordSource;
	}
	public void setDictwordSource(String dictwordSource) {
		this.dictwordSource = dictwordSource;
	}
	public String getMainText() {
		return mainText;
	}
	public void setMainText(String mainText) {
		this.mainText = mainText;
	}
	public String getDictwordNo() {
		return dictwordNo;
	}
	public void setDictwordNo(String dictwordNo) {
		this.dictwordNo = dictwordNo;
	}
	
}
