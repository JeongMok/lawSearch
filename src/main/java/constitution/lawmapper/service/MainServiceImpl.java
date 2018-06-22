package constitution.lawmapper.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import constitution.lawmapper.service.dao.MainDAO;
import constitution.lawmapper.vo.MainLevelSettingVO;

@Service("MainServiceImpl")
public class MainServiceImpl implements MainService {
	
	@Resource(name="MainDAO")
	private MainDAO mainDAO;
	
	@Override
	public List<MainLevelSettingVO> mainLevelSetting() {
		return mainDAO.mainLevelSetting();
	}

}
