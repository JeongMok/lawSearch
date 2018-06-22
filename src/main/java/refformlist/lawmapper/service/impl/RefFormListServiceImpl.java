package refformlist.lawmapper.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import refformlist.lawmapper.service.RefFormListService;
import refformlist.lawmapper.service.dao.RefFromListDao;
import refformlist.lawmapper.vo.GovRefFormListVo;
import refformlist.lawmapper.vo.LawRefFormListVo;

@Service("refFormListService")
public class RefFormListServiceImpl implements RefFormListService {

	@Resource(name = "refFormListDao")
	private RefFromListDao refFormListDao;
	
	@Override
	public List<GovRefFormListVo> selectGovList(GovRefFormListVo GovListVo) {
		return refFormListDao.selectGovList(GovListVo);
	}

	@Override
	public List<LawRefFormListVo> selectLawList(LawRefFormListVo lawListVo) {
		return refFormListDao.selectLawList(lawListVo);
	}

	@Override
	public int lawCount(LawRefFormListVo lawListVo) {
		return refFormListDao.lawCount(lawListVo);
	}

	@Override
	public int govrCount(GovRefFormListVo GovListVo) {
		return refFormListDao.govrCount(GovListVo);
	}

}
