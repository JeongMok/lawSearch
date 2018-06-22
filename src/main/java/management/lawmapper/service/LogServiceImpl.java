package management.lawmapper.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import management.lawmapper.vo.LogDataVo;

@Service("logDataService")
public class LogServiceImpl implements LogService{

	@Resource(name="logMapper")
	private LogMapper dao;

//	@Override
//	//db저장
//	public void insertLog(LogDataVo vo) {
//		dao.insertLog(vo);
//	}

	@Override
	//전체리스트
	public List<LogDataVo> selectLogList(LogDataVo vo) {
		return dao.selectLogList(vo);
	}

	@Override
	//조건 검색 리스트
	public List<LogDataVo> selectOneList(LogDataVo vo) {
		return dao.selectOneList(vo);
	}

	@Override
	public int logCount(LogDataVo vo) {
		return dao.logCount(vo);
	}
	
}
