package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class PrecedentsJudgeVO implements DataSetRowTypeAccessor {
	
	private int rowType;
	
	private String judgeclassname;
	private String judge;
	

	public String getJudgeclassname() {
		return judgeclassname;
	}

	public void setJudgeclassname(String judgeclassname) {
		this.judgeclassname = judgeclassname;
	}

	public String getJudge() {
		return judge;
	}

	public void setJudge(String judge) {
		this.judge = judge;
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
