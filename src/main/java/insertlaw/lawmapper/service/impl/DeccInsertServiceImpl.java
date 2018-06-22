package insertlaw.lawmapper.service.impl;

import insertlaw.lawmapper.service.DeccInsertService;
import insertlaw.lawmapper.service.dao.DeccInsertDAO;
import insertlaw.lawmapper.vo.DeccListVO;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("deccInsertService")
public class DeccInsertServiceImpl implements DeccInsertService {

	@Resource(name = "deccInsertDAO")
	private DeccInsertDAO deccInsertDAO;

	@Override
	public void deccList(DeccListVO deccListVO) {
		deccInsertDAO.deccList(deccListVO);
		
	}

	@Override
	public void deccText(DeccListVO deccListVO) {
		deccInsertDAO.deccText(deccListVO);
		
	}
}