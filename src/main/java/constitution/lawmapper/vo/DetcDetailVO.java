package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class DetcDetailVO implements DataSetRowTypeAccessor  {
	private int rowType;
	
	private String detcno;
	private String detcdate;
	private String casename;
	private String caseno;
	private String judgeclasscode;
	private String precdetaillink;
	
	public String getDetcno() {
		return detcno;
	}

	public void setDetcno(String detcno) {
		this.detcno = detcno;
	}

	public String getDetcdate() {
		return detcdate;
	}

	public void setDetcdate(String detcdate) {
		this.detcdate = detcdate;
	}

	public String getCasename() {
		return casename;
	}

	public void setCasename(String casename) {
		this.casename = casename;
	}

	public String getCaseno() {
		return caseno;
	}

	public void setCaseno(String caseno) {
		this.caseno = caseno;
	}

	public String getJudgeclasscode() {
		return judgeclasscode;
	}

	public void setJudgeclasscode(String judgeclasscode) {
		this.judgeclasscode = judgeclasscode;
	}

	public String getPrecdetaillink() {
		return precdetaillink;
	}

	public void setPrecdetaillink(String precdetaillink) {
		this.precdetaillink = precdetaillink;
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
