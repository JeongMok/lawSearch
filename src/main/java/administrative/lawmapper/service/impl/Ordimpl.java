package administrative.lawmapper.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import administrative.lawmapper.service.OrdService;
import administrative.lawmapper.service.dao.OrdDAO;
import administrative.lawmapper.vo.AstVO;
import administrative.lawmapper.vo.OrdSlectClickListVO;
import administrative.lawmapper.vo.OrdVO;

@Service("OrdServiceimpl")
public class Ordimpl implements OrdService {

	@Resource(name = "OrdDAO")
	private OrdDAO ordDao;

	@Override
	public int selectCount(OrdVO searchVO) {
		// TODO Auto-generated method stub
		return ordDao.selectCount(searchVO);
	}

	@Override
	public List<OrdVO> selectPaging(OrdVO searchVO) {
		// TODO Auto-generated method stub
		return ordDao.selePagin(searchVO);
	}

	@Override
	public List<OrdVO> selectreplList() {
		// TODO Auto-generated method stub
		return ordDao.selectreplList();
	}

	@Override
	public List<OrdSlectClickListVO> ordselectClickList(
			OrdSlectClickListVO searchVO) {
		// TODO Auto-generated method stub
		return ordDao.ordselectClickList(searchVO);
	}

	@Transactional
	@Override
	public void expcModifyVO(List<OrdVO> ordVO) {
		int size = ordVO.size();
		for (int i = 0; i < size; i++) {
			OrdVO insertOrdV = ordVO.get(i);

			ordDao.listupdateVO(insertOrdV);
			ordDao.contextupdateVO(insertOrdV);
		}

	}
}
