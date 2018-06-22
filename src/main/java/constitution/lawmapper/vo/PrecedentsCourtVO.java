package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class PrecedentsCourtVO implements DataSetRowTypeAccessor {
	
	private int rowType;
	
	private String courtname;
	private String courtclasscode;
	

	public String getCourtname() {
		return courtname;
	}

	public void setCourtname(String courtname) {
		this.courtname = courtname;
	}

	public String getCourtclasscode() {
		return courtclasscode;
	}

	public void setCourtclasscode(String courtclasscode) {
		this.courtclasscode = courtclasscode;
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
