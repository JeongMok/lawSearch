package schedule.lawmapper.service;


import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import management.lawmapper.vo.UserVo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import schedule.lawmapper.vo.ScheduleVO;

public class ScheduleServiceImpl implements ScheduleService {

	private ScheduleDao scheduledao;

	public void setScheduledao(ScheduleDao scheduledao) {
		this.scheduledao = scheduledao;
	}
	
	public List<ScheduleVO> findschedule(ScheduleVO schedule){
		return scheduledao.findschedule(schedule);
	}
	
	public List<ScheduleVO> schedulelist(ScheduleVO schedule){
		return scheduledao.schedulelist(schedule);
	}

	@Override
	public boolean addschedule(ScheduleVO schedule) {
		Timestamp t = Timestamp.valueOf(schedule.getEventdate());
		schedule.setPdate(t);
		System.out.println("@@@서비스에 들어왔나"+schedule);
		return scheduledao.addschedule(schedule);
	}

	@Override
	public boolean deleteschedule(ScheduleVO schedule) {
		Timestamp t = Timestamp.valueOf(schedule.getEventdate());
		schedule.setPdate(t);
		System.out.println("@@@서비스에 들어왔나"+schedule);
		return scheduledao.deleteschedule(schedule);
	}

	@Override
	public boolean updateschedule(ScheduleVO schedule) {
		Timestamp t = Timestamp.valueOf(schedule.getEventdate());
		schedule.setPdate(t);
		System.out.println("@@@서비스에 들어왔나"+schedule);
		return scheduledao.updateschedule(schedule);
	}
	
	
	
	/*public boolean modifyMultiUserVO(List<ScheduleVO> modifyList){
		boolean modify = false;
		System.out.println("서비스에 들어왔니"+modifyList);
		int size = modifyList.size();
		for (int i = 0; i < size; i++) {
			ScheduleVO schedule = modifyList.get(i);
			System.out.println("@@@@@@@@으아아아아아"+schedule);
			if (schedule instanceof DataSetRowTypeAccessor) {
				DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) schedule;
				System.out.println("몇번이냐"+accessor.getRowType());
				 if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){ 
					 Timestamp t = Timestamp.valueOf(schedule.getEventdate());
					 schedule.setPdate(t);
					 modify = scheduledao.addschedule(schedule);	
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                 modify = scheduledao.updateschedule(schedule);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                 modify = scheduledao.deleteschedule(schedule);
	                }
			}
		}
		return modify;
	}*/
}
