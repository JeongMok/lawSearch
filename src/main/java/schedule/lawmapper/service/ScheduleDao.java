package schedule.lawmapper.service;

import java.util.List;

import schedule.lawmapper.vo.ScheduleVO;

public interface ScheduleDao {

	public void setScheduleMapper(ScheduleMapper scheduleMapper);
	
	public List<ScheduleVO> findschedule(ScheduleVO schedule);
	
	public List<ScheduleVO> schedulelist(ScheduleVO schedule);
	
	public boolean addschedule(ScheduleVO schedule);
	
	public boolean deleteschedule(ScheduleVO schedule);
	
	public boolean updateschedule(ScheduleVO schedule);
}