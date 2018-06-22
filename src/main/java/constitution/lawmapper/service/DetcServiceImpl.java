package constitution.lawmapper.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import constitution.lawmapper.service.dao.DetcDAO;
import constitution.lawmapper.vo.DetcCommonCodeVO;
import constitution.lawmapper.vo.DetcContextVO;
import constitution.lawmapper.vo.DetcDetailVO;
import constitution.lawmapper.vo.DetcListVO;


@Service("DetcServiceImpl")
public class DetcServiceImpl implements DetcService {
	
	@Resource(name="detcDAO")
	private DetcDAO DetcDAO;
	
	@Override
	public List<DetcListVO> selectDetcList(DetcListVO searchVO) {
		return DetcDAO.selectDetcList(searchVO);
	}

	@Override
	public DetcContextVO selectDetcContext(DetcListVO searchVO) {
		return DetcDAO.selectDetcContext(searchVO);
	}

	@Override
	public List<DetcCommonCodeVO> detcJudgeSetting() {
		return DetcDAO.detcJudgeSetting();
	}

	@Override
	public List<DetcCommonCodeVO> detcCaseSetting() {
		return DetcDAO.detcCaseSetting();
	}

	@Override
	public DetcListVO rowCount(DetcListVO searchVO) {
		return DetcDAO.rowCount(searchVO);
	}

	@Override
	public List<DetcListVO> selectSimpleDetcList() {
		return DetcDAO.selectSimpleDetcList();
	}

	@Override
	public DetcListVO selectSingleVO(DetcListVO searchVO) {
		return DetcDAO.selectSingleVO(searchVO);
	}

	@Override
	public List<DetcCommonCodeVO> getSearchCaseCount(DetcListVO searchVO) {
		return DetcDAO.getSearchCaseCount(searchVO);
	}
}
