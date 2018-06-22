package constitution.lawmapper.service;

import java.util.List;

import constitution.lawmapper.vo.PrecedentContextVO;
import constitution.lawmapper.vo.PrecedentsCommonCodeVO;
import constitution.lawmapper.vo.PrecedentsJudgeVO;
import constitution.lawmapper.vo.PrecedentsListVO;

public interface PrecedentService {
	List<PrecedentsListVO> selectPrecedentsList(PrecedentsListVO searchVO);
	List<PrecedentsListVO> selectPrecedentsSimpleList(PrecedentsListVO searchVO);
	PrecedentContextVO selectPrecedentContext(PrecedentsListVO searchVO);
	PrecedentsListVO selectSingleVO(PrecedentsListVO searchVO);
	List<PrecedentsJudgeVO> precedentsJudgeSetting();
	List<PrecedentsCommonCodeVO> precedentsCourtSetting();
	List<PrecedentsCommonCodeVO> precedentsCaseSetting();
	PrecedentsListVO rowCount(PrecedentsListVO searchVO);
	List<PrecedentsCommonCodeVO> getSearchCaseCount(PrecedentsListVO searchVO);
	List<PrecedentsCommonCodeVO> getSearchCourtCount(PrecedentsListVO searchVO);
}
