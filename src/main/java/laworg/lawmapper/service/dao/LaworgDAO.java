package laworg.lawmapper.service.dao;

import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import laworg.lawmapper.vo.LaworgVO;

@Mapper("laworgDAO")
public interface LaworgDAO {
	
	public List<LaworgVO> laworgsearchVOList(LaworgVO searchVO);

	public List<LaworgVO> laworgselectTwoVO1(LaworgVO searchVO);

	public List<LaworgVO> laworgselectOneVO(LaworgVO selectVO);

	public void laworgInsert(LaworgVO insertVO);

	public void laworgUpdate(LaworgVO updateVO);
	
	public List<LaworgVO> laworgDelete(LaworgVO deleteVO);

}
