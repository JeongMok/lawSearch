package laworg.lawmapper.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import laworg.lawmapper.service.LaworgService;
import laworg.lawmapper.service.dao.LaworgDAO;
import laworg.lawmapper.vo.LaworgVO;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("laworgService")
public class LaworgServiceImpl extends EgovAbstractServiceImpl implements LaworgService{

	@Resource(name = "laworgDAO")
	private LaworgDAO laworgDAO;
	
	@Override
	public List<LaworgVO> laworgsearchVOList(LaworgVO searchVO) {
		
		return laworgDAO.laworgsearchVOList(searchVO);
	}

	@Override
	public List<LaworgVO> laworgselectOneVO(LaworgVO searchVO) {
		
		return laworgDAO.laworgselectOneVO(searchVO);
	}



	@Override
	public List<LaworgVO> laworgselectTwoVO1(LaworgVO searchVO) {
		
		return laworgDAO.laworgselectTwoVO1(searchVO);
	}

	@Override
	public void laworgInsert(LaworgVO insertVO) {
		
		laworgDAO.laworgInsert(insertVO);
	}

	@Override
	public void laworgUpdate(LaworgVO updateVO) {
		laworgDAO.laworgUpdate(updateVO);
		
	}
	
	@Override
	public List<LaworgVO> laworgDelete(LaworgVO deleteVO) {
		
		return laworgDAO.laworgselectOneVO(deleteVO);
	}


}
