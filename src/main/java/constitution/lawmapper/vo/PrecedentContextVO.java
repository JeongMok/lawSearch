package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class PrecedentContextVO implements DataSetRowTypeAccessor {
	
	private int rowType;
	private String precno;
	private String casetext;
	private String judgetext;
	private String referlaw;
	private String referjudge;
	private String maintext;

	public String getMaintext() {
		return maintext;
	}

	public void setMaintext(String maintext) {
		this.maintext = maintext;
	}

	public String getPrecno() {
		return precno;
	}

	public void setPrecno(String precno) {
		this.precno = precno;
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

	@Override
	public int getRowType() {
		return rowType;
	}

	@Override
	public void setRowType(int rowType) {
		this.rowType=rowType;		
	}

}
