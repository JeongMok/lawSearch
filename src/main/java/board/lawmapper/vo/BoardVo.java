package board.lawmapper.vo;

import java.util.Date;

public class BoardVo extends DefaultVO{
	
	private int bNo;
	private String userId;
	private String title;
	private String body;
	private Date wDate;
	private String password;
	private int bGroup;
	private int bOrder;
	private int step;
	private String writerName;
	private String isshow;
	
	public int getbNo() {
		return bNo;
	}
	public void setbNo(int bNo) {
		this.bNo = bNo;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Date getwDate() {
		return wDate;
	}
	public void setwDate(Date wDate) {
		this.wDate = wDate;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getbGroup() {
		return bGroup;
	}
	public void setbGroup(int bGroup) {
		this.bGroup = bGroup;
	}
	public int getbOrder() {
		return bOrder;
	}
	public void setbOrder(int bOrder) {
		this.bOrder = bOrder;
	}
	public int getStep() {
		return step;
	}
	public void setStep(int step) {
		this.step = step;
	}
	public String getWriterName() {
		return writerName;
	}
	public void setWriterName(String writerName) {
		this.writerName = writerName;
	}
	public String getIsshow() {
		return isshow;
	}
	public void setIsshow(String isshow) {
		this.isshow = isshow;
	}
	
	@Override
	public String toString() {
		return "BoardVo [bNo=" + bNo + ", userId=" + userId + ", title="
				+ title + ", body=" + body + ", wDate=" + wDate + ", password="
				+ password + ", bGroup=" + bGroup + ", bOrder=" + bOrder
				+ ", step=" + step + ", writerName=" + writerName + ", isshow="
				+ isshow + "]";
	}
	
}
