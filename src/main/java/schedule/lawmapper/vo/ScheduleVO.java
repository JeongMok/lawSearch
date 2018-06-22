package schedule.lawmapper.vo;

import java.util.Date;

import nexacro.sample.vo.DefaultVO;

public class ScheduleVO extends DefaultVO{

	private String userid;
	private String eventdate;
	private String eventmain;
	private String eventtitle;
	private Date pdate;
	
	public ScheduleVO() {
	
	}

	
	public ScheduleVO(String userid, String eventdate) {
		super();
		this.userid = userid;
		this.eventdate = eventdate;
	}



	public ScheduleVO(String userid, String eventdate, String eventmain,
			String eventtitle, Date pdate) {
		this.userid = userid;
		this.eventdate = eventdate;
		this.eventmain = eventmain;
		this.eventtitle = eventtitle;
		this.pdate = pdate;
	}



	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getEventdate() {
		return eventdate;
	}

	public void setEventdate(String eventdate) {
		this.eventdate = eventdate;
	}

	public String getEventmain() {
		return eventmain;
	}

	public void setEventmain(String eventmain) {
		this.eventmain = eventmain;
	}

	public String getEventtitle() {
		return eventtitle;
	}

	public void setEventtitle(String eventtitle) {
		this.eventtitle = eventtitle;
	}

	public Date getPdate() {
		return pdate;
	}

	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}

	@Override
	public String toString() {
		return "ScheduleVO [userid=" + userid + ", eventdate=" + eventdate
				+ ", eventmain=" + eventmain + ", eventtitle=" + eventtitle
				+ ", pdate=" + pdate + "]";
	}
	
}
