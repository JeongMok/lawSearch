package constitution.lawmapper.service.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import constitution.lawmapper.vo.MainLevelSettingVO;

@Repository("MainDAO")
public class MainDAO extends NexacroIbatisAbstractDAO {
	
	@Resource
	private SqlSession session;
	
	private static final String namespace = "constitution.lawmapper.service.dao.MainMapper";
	
	public List<MainLevelSettingVO> mainLevelSetting(){		
		return session.selectList(namespace+".mainLevelSetting");
	}

}
