package management.lawmapper.vo;


public class LogDataVo extends DefaultLogVo{
	private int id;
	private String logDate;
	private String logType;
	private String userId;	
	private String macAddress;
	private String logDetail;
	private String userIp;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getLogDate() {
		return logDate;
	}


	public void setLogDate(String logDate) {
		this.logDate = logDate;
	}


	public String getLogType() {
		return logType;
	}


	public void setLogType(String logType) {
		this.logType = logType;
	}


	public String getUserId() {
		return userId;
	}


	public void setUserId(String userId) {
		
		this.userId =userId;
	}


	public String getUserIp() {
		return userIp;
	}


	public void setUserIp(String userIp) {

		this.userIp=userIp;
		
	}


	public String getLogDetail() {
		return logDetail;
	}


	public void setLogDetail(String logDetail) {
		this.logDetail = logDetail;
	}


	public String getMacAddress() {
		return macAddress;
	}


	public void setMacAddress(String macAddress) {
		this.macAddress = macAddress;
	}


	@Override
	public String toString() {
		return "LogDataVo [id=" + id + ", logDate=" + logDate + ", logType="
				+ logType + ", userId=" + userId + ", userIp=" + userIp
				+ ", logDetail=" + logDetail + "]";
	}
	
	
}
