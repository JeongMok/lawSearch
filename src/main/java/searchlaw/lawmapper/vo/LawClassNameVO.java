package searchlaw.lawmapper.vo;

/**
 * 법령 구분명을 가져오기 위한 VO
 * 
 * @author Son GaYeon
 * @since 11.04.2018
 * @version 0.1
 * @see
 * 
 * 검색을 위한 DefaultVO 상속
 */

public class LawClassNameVO {

	//T_LAWLIST
	private String lawclassname; // varchar2 (50 byte)

	public String getLawclassname() {
		return lawclassname;
	}

	public void setLawclassname(String lawclassname) {
		this.lawclassname = lawclassname;
	}

	@Override
	public String toString() {
		return "LawClassNameVO [lawclassname=" + lawclassname + "]";
	}
	
}
