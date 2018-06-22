/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package administrative.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

/**
 * default vo Class
 * 
 * @author Park SeongMin
 * @since 09.11.2015
 * @version 1.0
 * @see
 */
public class DefaultVO extends SlectClickListVO implements DataSetRowTypeAccessor {

	private String todaytmp;
	
	private String tmp;
	
	private String today_search;
	
	private String fromdate_search;
	
    private String orderby ;
    
    private String incident = "";
    
    private String casenumber = "";
    private String decision = "";   
    private String claim = "";  
    private String request = "";
    private String reason = "";
    private String authorities = "";
    private String legislation = "";
    private String provisionnumber = "";
    
	/** 검색조건 */
    private String searchCondition = "";

    /** 검색Keyword */
    private String searchKeyword = "";

    /** 검색사용여부 */
    private String searchUseYn = "";

    private int rowType;

    
    
    
 
	public String getTodaytmp() {
		return todaytmp;
	}


	public void setTodaytmp(String todaytmp) {
		this.todaytmp = todaytmp;
	}


	public String getTmp() {
		return tmp;
	}


	public void setTmp(String tmp) {
		this.tmp = tmp;
	}


	public String getToday_search() {
		return today_search;
	}


	public void setToday_search(String today_search) {
		this.today_search = today_search;
	}


	public String getFromdate_search() {
		return fromdate_search;
	}


	public void setFromdate_search(String fromdate_search) {
		this.fromdate_search = fromdate_search;
	}


	public String getOrderby() {
		return orderby;
	}


	public void setOrderby(String orderby) {
		this.orderby = orderby;
	}


	/**
     * @return the searchCondition
     */
    public String getSearchCondition() {
        return searchCondition;
    }
    

    /**
     * @param searchCondition
     *            the searchCondition to set
     */
    
    public void setSearchCondition(String searchCondition) {
        this.searchCondition = searchCondition;
    }

    
    public String getCasenumber() {
		return casenumber;
	}


	public void setCasenumber(String casenumber) {
		this.casenumber = casenumber;
	}


	public String getDecision() {
		return decision;
	}


	public void setDecision(String decision) {
		this.decision = decision;
	}


	public String getClaim() {
		return claim;
	}


	public void setClaim(String claim) {
		this.claim = claim;
	}


	public String getRequest() {
		return request;
	}


	public void setRequest(String request) {
		this.request = request;
	}


	public String getReason() {
		return reason;
	}


	public void setReason(String reason) {
		this.reason = reason;
	}


	public String getAuthorities() {
		return authorities;
	}


	public void setAuthorities(String authorities) {
		this.authorities = authorities;
	}


	public String getLegislation() {
		return legislation;
	}


	public void setLegislation(String legislation) {
		this.legislation = legislation;
	}


	public String getProvisionnumber() {
		return provisionnumber;
	}


	public void setProvisionnumber(String provisionnumber) {
		this.provisionnumber = provisionnumber;
	}


	public String getIncident() {
		return incident;
	}


	public void setIncident(String incident) {
		this.incident = incident;
	}


	/**
     * @return the searchKeyword
     */
    public String getSearchKeyword() {
        return searchKeyword;
    }

    /**
     * @param searchKeyword
     *            the searchKeyword to set
     */
    public void setSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
    }

    /**
     * @return the searchUseYn
     */
    public String getSearchUseYn() {
        return searchUseYn;
    }

    /**
     * @param searchUseYn
     *            the searchUseYn to set
     */
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

}
