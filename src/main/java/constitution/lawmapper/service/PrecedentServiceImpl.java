package constitution.lawmapper.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import constitution.lawmapper.service.dao.PrecedentDAO;
import constitution.lawmapper.vo.PrecedentContextVO;
import constitution.lawmapper.vo.PrecedentsCommonCodeVO;
import constitution.lawmapper.vo.PrecedentsJudgeVO;
import constitution.lawmapper.vo.PrecedentsListVO;

@Service("PrecedentServiceImpl")
public class PrecedentServiceImpl implements PrecedentService {
	
	@Resource(name="PrecedentDAO")
	private PrecedentDAO PrecedentDAO;

	@Override
	public List<PrecedentsListVO> selectPrecedentsList(PrecedentsListVO searchVO) {
		return PrecedentDAO.selectPrecedentsList(searchVO);
	}

	@Override
	public PrecedentContextVO selectPrecedentContext(PrecedentsListVO searchVO) {
		return PrecedentDAO.selectPrecedentContext(searchVO);
	}

	@Override
	public List<PrecedentsJudgeVO> precedentsJudgeSetting() {
		return PrecedentDAO.precedentsJudgeSetting();
	}

	@Override
	public List<PrecedentsCommonCodeVO> precedentsCourtSetting() {
		return PrecedentDAO.precedentsCourtSetting();
	}

	@Override
	public List<PrecedentsCommonCodeVO> precedentsCaseSetting() {
		return PrecedentDAO.precedentsCaseSetting();
	}

	@Override
	public PrecedentsListVO rowCount(PrecedentsListVO searchVO) {
		return PrecedentDAO.rowCount(searchVO);
	}

	@Override
	public List<PrecedentsListVO> selectPrecedentsSimpleList(PrecedentsListVO searchVO) {
		return PrecedentDAO.selectPrecedentsSimpleList(searchVO);
	}

	@Override
	public PrecedentsListVO selectSingleVO(PrecedentsListVO searchVO) {
		return PrecedentDAO.selectSingleVO(searchVO);
	}

	@Override
	public List<PrecedentsCommonCodeVO> getSearchCaseCount(PrecedentsListVO searchVO) {
		return PrecedentDAO.getSearchCaseCount(searchVO);
	}

	@Override
	public List<PrecedentsCommonCodeVO> getSearchCourtCount(PrecedentsListVO searchVO) {
		return PrecedentDAO.getSearchCourtCount(searchVO);
	}
}
