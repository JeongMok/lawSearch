package searchlaw.lawmapper.vo;

import java.util.ArrayList;
import java.util.List;

import com.nexacro.spring.data.DataSetRowTypeAccessor;


/**
 * 법령 검색처리를 위한 VO
 * 
 * @author Son GaYeon
 * @since 12.04.2018
 * @version 0.1
 * @see
 * 
 * 검색을 위한 DefaultVO 상속
 */

public class LawSearchVO implements DataSetRowTypeAccessor {
	
    private String searchCondition = "";
    private String searchLawClassName = "";
    private String searchKeyword = "";
    private String searchUseYn = "";
    private int rowType;
    private String startDate = "";
    private String endDate = "";
    private int joCount;
    private int hangCount;
    private int hoCount;
    private int mokCount;
    private int subCount;
    
    public String getSearchCondition() {
		return searchCondition;
	}

	public void setSearchCondition(String searchCondition) {
		this.searchCondition = searchCondition;
	}

	public String getSearchLawClassName() {
		return searchLawClassName;
	}

	public void setSearchLawClassName(String searchLawClassName) {
		this.searchLawClassName = searchLawClassName;
	}

	public String getSearchKeyword() {
		return searchKeyword;
	}

	public void setSearchKeyword(String searchKeyword) {
		this.searchKeyword = searchKeyword;
	}

	public String getSearchUseYn() {
		return searchUseYn;
	}

	public void setSearchUseYn(String searchUseYn) {
		this.searchUseYn = searchUseYn;
	}

	@Override
    public int getRowType() {
        return this.rowType;
    }

    @Override
    public void setRowType(int rowType) {
        this.rowType = rowType;
    }

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public int getJoCount() {
		return joCount;
	}

	public void setJoCount(int joCount) {
		this.joCount = joCount;
	}

	public int getHangCount() {
		return hangCount;
	}

	public void setHangCount(int hangCount) {
		this.hangCount = hangCount;
	}

	public int getHoCount() {
		return hoCount;
	}

	public void setHoCount(int hoCount) {
		this.hoCount = hoCount;
	}

	public int getMokCount() {
		return mokCount;
	}

	public void setMokCount(int mokCount) {
		this.mokCount = mokCount;
	}

	public int getSubCount() {
		return subCount;
	}

	public void setSubCount(int subCount) {
		this.subCount = subCount;
	}

}

