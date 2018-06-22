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
public class ClickVO implements DataSetRowTypeAccessor {


	 private int rowType;
	 private String  itemname;
	 private String  itemno;
	 private String  question;
	 private String  reason;
	 private String  reply;
	 private String  questionorganization;
	 private String  searchCondition;
	 private String  today_search;
	 private String  fromdate_search;
	 private String  orderby;

	 private String  fromdatetemp;
	 private String  todaytemp;

    public String getItemname() {
		return itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}

	public String getItemno() {
		return itemno;
	}

	public void setItemno(String itemno) {
		this.itemno = itemno;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}

	public String getQuestionorganization() {
		return questionorganization;
	}

	public void setQuestionorganization(String questionorganization) {
		this.questionorganization = questionorganization;
	}

	public String getSearchCondition() {
		return searchCondition;
	}

	public void setSearchCondition(String searchCondition) {
		this.searchCondition = searchCondition;
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

	

	public String getFromdatetemp() {
		return fromdatetemp;
	}

	public void setFromdatetemp(String fromdatetemp) {
		this.fromdatetemp = fromdatetemp;
	}

	public String getTodaytemp() {
		return todaytemp;
	}

	public void setTodaytemp(String todaytemp) {
		this.todaytemp = todaytemp;
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
