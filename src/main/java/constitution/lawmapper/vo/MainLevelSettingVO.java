package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class MainLevelSettingVO implements DataSetRowTypeAccessor {
	private int rowType;
	
	private String CLASS_NAME; 
	private String CLASS_CODE; 
	private String CODE_NO;
	private String CODE_NAME; 

	public String getCLASS_NAME() {
		return CLASS_NAME;
	}

	public void setCLASS_NAME(String cLASS_NAME) {
		CLASS_NAME = cLASS_NAME;
	}

	public String getCLASS_CODE() {
		return CLASS_CODE;
	}

	public void setCLASS_CODE(String cLASS_CODE) {
		CLASS_CODE = cLASS_CODE;
	}

	public String getCODE_NO() {
		return CODE_NO;
	}

	public void setCODE_NO(String cODE_NO) {
		CODE_NO = cODE_NO;
	}

	public String getCODE_NAME() {
		return CODE_NAME;
	}

	public void setCODE_NAME(String cODE_NAME) {
		CODE_NAME = cODE_NAME;
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
