package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class DetcContextVO implements DataSetRowTypeAccessor {
	
	private int rowType;
	
	private String detcno;
	private String caseclasscode;
	private String caseclassname;
	private String judgeclasscode;
	private String casetext;
	private String judgetext;
	private String maintext;
	private String referlaw;
	private String referjudge;
	private String targetlaw;
	
	
	public String getDetcno() {
		return detcno;
	}
	public void setDetcno(String detcno) {
		this.detcno = detcno;
	}
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
	
	@Override
	public int getRowType() {
		return rowType;
	}

	@Override
	public void setRowType(int rowType) {
		this.rowType=rowType;		
	}

}
