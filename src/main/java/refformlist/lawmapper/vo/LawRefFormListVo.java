package refformlist.lawmapper.vo;

/**
 * 법령별표서식목록
 * 
 * @author Shim jae min
 * @since 2018.04.12
 * @version 0.1ver
 * @see
 * 
 * 검색을 위한 DefaultVO 상속
 */
public class LawRefFormListVo extends DefaultVo{
	
	private String refFormNo;
	private String refLawNo;
	private String refLawId;
	private String refFormName;
	private String refLawName;
	private String refFormSecNo;
	private String refFormClassName;
	private String careOrgName;
	private String proMulDate;
	private String proMulNo;
	private String changeClassName;
	private String refLawClassName;
	private String refFormLink;
	private String refFormPDFLink;
	private String detailLink;
	
	public String getRefFormNo() {
		return refFormNo;
	}
	public void setRefFormNo(String refFormNo) {
		this.refFormNo = refFormNo;
	}
	public String getRefLawNo() {
		return refLawNo;
	}
	public void setRefLawNo(String refLawNo) {
		this.refLawNo = refLawNo;
	}
	public String getRefLawId() {
		return refLawId;
	}
	public void setRefLawId(String refLawId) {
		this.refLawId = refLawId;
	}
	public String getRefFormName() {
		return refFormName;
	}
	public void setRefFormName(String refFormName) {
		this.refFormName = refFormName;
	}
	public String getRefLawName() {
		return refLawName;
	}
	public void setRefLawName(String refLawName) {
		this.refLawName = refLawName;
	}
	public String getRefFormSecNo() {
		return refFormSecNo;
	}
	public void setRefFormSecNo(String refFormSecNo) {
		this.refFormSecNo = refFormSecNo;
	}
	public String getRefFormClassName() {
		return refFormClassName;
	}
	public void setRefFormClassName(String refFormClassName) {
		this.refFormClassName = refFormClassName;
	}
	public String getCareOrgName() {
		return careOrgName;
	}
	public void setCareOrgName(String careOrgName) {
		this.careOrgName = careOrgName;
	}
	public String getProMulDate() {
		return proMulDate;
	}
	public void setProMulDate(String proMulDate) {
		this.proMulDate = proMulDate;
	}
	public String getProMulNo() {
		return proMulNo;
	}
	public void setProMulNo(String proMulNo) {
		this.proMulNo = proMulNo;
	}
	public String getChangeClassName() {
		return changeClassName;
	}
	public void setChangeClassName(String changeClassName) {
		this.changeClassName = changeClassName;
	}
	public String getRefLawClassName() {
		return refLawClassName;
	}
	public void setRefLawClassName(String refLawClassName) {
		this.refLawClassName = refLawClassName;
	}
	public String getRefFormLink() {
		return refFormLink;
	}
	public void setRefFormLink(String refFormLink) {
		this.refFormLink = refFormLink;
	}
	public String getRefFormPDFLink() {
		return refFormPDFLink;
	}
	public void setRefFormPDFLink(String refFormPDFLink) {
		this.refFormPDFLink = refFormPDFLink;
	}
	public String getDetailLink() {
		return detailLink;
	}
	public void setDetailLink(String dataAilLink) {
		this.detailLink = dataAilLink;
	}
}
