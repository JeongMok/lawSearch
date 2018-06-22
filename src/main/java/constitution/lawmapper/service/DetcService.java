package constitution.lawmapper.service;

import java.util.List;

import constitution.lawmapper.vo.DetcCommonCodeVO;
import constitution.lawmapper.vo.DetcContextVO;
import constitution.lawmapper.vo.DetcDetailVO;
import constitution.lawmapper.vo.DetcListVO;

public interface DetcService {
	List<DetcListVO> selectDetcList(DetcListVO searchVO);
	List<DetcListVO> selectSimpleDetcList();
	DetcListVO selectSingleVO(DetcListVO searchVO);
	DetcContextVO selectDetcContext(DetcListVO searchVO);
	List<DetcCommonCodeVO> detcJudgeSetting();
	List<DetcCommonCodeVO> detcCaseSetting();
	DetcListVO rowCount(DetcListVO searchVO);
	
	List<DetcCommonCodeVO> getSearchCaseCount(DetcListVO searchVO);
}
