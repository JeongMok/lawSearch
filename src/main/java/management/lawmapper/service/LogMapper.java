package management.lawmapper.service;

import java.util.List;

import management.lawmapper.vo.LogDataVo;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("logMapper")
public interface LogMapper {
	public void insertLog(LogDataVo vo);
	public List<LogDataVo> selectLogList(LogDataVo vo);
	public List<LogDataVo> selectOneList(LogDataVo vo);
	public int logCount(LogDataVo vo);
}
