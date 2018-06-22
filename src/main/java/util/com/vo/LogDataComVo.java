package util.com.vo;

public class LogDataComVo extends DefaultLogComVo{
	private int id;
	private String logDate;
	private String logType;
	private String userId;	
	private String macAddress;
	private String logDetail;
	private String userIp;


	
	public LogDataComVo() {
		super();
	}


	public LogDataComVo(int id, String logDate, String logType, String userId,
			String macAddress, String logDetail, String userIp) {
		super();
		this.id = id;
		this.logDate = logDate;
		this.logType = logType;
		this.userId = userId;
		this.macAddress = macAddress;
		this.logDetail = logDetail;
		this.userIp = userIp;
	}


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
		System.out.println("123");
		this.userId = userId;
	}


	public String getMacAddress() {
		return macAddress;
	}


	public void setMacAddress(String macAddress) {
		this.macAddress = macAddress;
	}


	public String getLogDetail() {
		return logDetail;
	}


	public void setLogDetail(String logDetail) {
		this.logDetail = logDetail;
	}


	public String getUserIp() {
		return userIp;
	}


	public void setUserIp(String userIp) {
		this.userIp = userIp;
	}


	@Override
	public String toString() {
		return "LogDataComVo [id=" + id + ", logDate=" + logDate + ", logType="
				+ logType + ", userId=" + userId + ", macAddress=" + macAddress
				+ ", logDetail=" + logDetail + ", userIp=" + userIp + "]";
	}


	
	
}
