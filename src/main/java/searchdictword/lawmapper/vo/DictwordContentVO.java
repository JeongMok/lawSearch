package searchdictword.lawmapper.vo;

public class DictwordContentVO {
	private String dictword;
	private String dictwordCode;
	private String dictwordCodename;
	private String dictwordSource;
	private String mainText;
	private String dictwordNo;
	
	private String beforeIndex ="가";
	private String afterIndex = "나";
	
	public String getDictword() {
		return dictword;
	}
	public void setDictword(String dictword) {
		this.dictword = dictword;
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
	public String getBeforeIndex() {
		return beforeIndex;
	}
	public void setBeforeIndex(String beforeIndex) {
		this.beforeIndex = beforeIndex;
	}
	public String getAfterIndex() {
		return afterIndex;
	}
	public void setAfterIndex(String afterIndex) {
		this.afterIndex = afterIndex;
	}		
	
}
