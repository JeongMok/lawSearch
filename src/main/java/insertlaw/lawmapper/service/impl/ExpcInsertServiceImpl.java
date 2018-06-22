package insertlaw.lawmapper.service.impl;

import insertlaw.lawmapper.service.ExpcInsertService;
import insertlaw.lawmapper.service.dao.ExpcInsertDAO;
import insertlaw.lawmapper.vo.ExpcListVO;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("expcInsertService")
public class ExpcInsertServiceImpl implements ExpcInsertService {

	@Resource(name = "expcInsertDAO")
	private ExpcInsertDAO expcInsertDAO;

	@Override
	public void expcList(ExpcListVO expcListVO) {
		expcInsertDAO.expcList(expcListVO);
		
	}

	@Override
	public void expcText(ExpcListVO expcListVO) {
		expcInsertDAO.expcText(expcListVO);
		
	}
}