package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class DetcJudgeVO  implements DataSetRowTypeAccessor {
	
	private int rowType;
	
	private String judgeclasscode;
	
	
	public String getJudgeclasscode() {
		return judgeclasscode;
	}

	public void setJudgeclasscode(String judgeclasscode) {
		this.judgeclasscode = judgeclasscode;
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
