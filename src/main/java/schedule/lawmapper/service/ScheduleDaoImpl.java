package schedule.lawmapper.service;

import java.util.List;

import schedule.lawmapper.vo.ScheduleVO;

public class ScheduleDaoImpl implements ScheduleDao {

	private ScheduleMapper scheduleMapper;

	public void setScheduleMapper(ScheduleMapper scheduleMapper) {
		this.scheduleMapper = scheduleMapper;
	}
	
	public List<ScheduleVO> findschedule(ScheduleVO schedule){
		return scheduleMapper.findschedule(schedule);
	}
	
	public List<ScheduleVO> schedulelist(ScheduleVO schedule){
		return scheduleMapper.schedulelist(schedule);
	}
	
	public boolean addschedule(ScheduleVO schedule){
		return scheduleMapper.addschedule(schedule);
	}
	
	public boolean deleteschedule(ScheduleVO schedule){
		return scheduleMapper.deleteschedule(schedule);
	}
	
	public boolean updateschedule(ScheduleVO schedule){
		return scheduleMapper.updateschedule(schedule);
	}
}
