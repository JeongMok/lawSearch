package refformlist.lawmapper.service;

import java.util.List;

import refformlist.lawmapper.vo.GovRefFormListVo;
import refformlist.lawmapper.vo.LawRefFormListVo;

/**
 * 법률/행정규칙별표서식목록 interface
 * 
 * @author Shim jae min
 * @since 2018.04.12
 * @version 0.1ver
 * @see
 * 
 */
public interface RefFormListService {
	
	List<GovRefFormListVo> selectGovList(GovRefFormListVo GovListVo);
	List<LawRefFormListVo> selectLawList(LawRefFormListVo lawListVo);
	
	int lawCount(LawRefFormListVo lawListVo);
	int govrCount(GovRefFormListVo GovListVo);
}
