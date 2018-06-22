package insertlaw.lawmapper.service.impl;

import insertlaw.lawmapper.service.DetcInsertService;
import insertlaw.lawmapper.service.dao.DetcInsertDAO;
import insertlaw.lawmapper.vo.DetcListVO;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("detcInsertService")
public class DetcInsertServiceImpl implements DetcInsertService {

	@Resource(name = "detcInsertDAO")
	private DetcInsertDAO detcInsertDAO;

	@Override
	public void detcList(DetcListVO detcListVO) {
		detcInsertDAO.detcList(detcListVO);
	}

	@Override
	public void detcText(DetcListVO detcListVO) {
		detcInsertDAO.detcText(detcListVO);
		
	}
}