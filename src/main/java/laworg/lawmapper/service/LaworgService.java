package laworg.lawmapper.service;

import java.util.List;

import laworg.lawmapper.vo.LaworgVO;

public interface LaworgService {

	List<LaworgVO> laworgsearchVOList(LaworgVO searchVO);  

	List<LaworgVO> laworgselectOneVO(LaworgVO searchVO);

	List<LaworgVO> laworgselectTwoVO1(LaworgVO searchVO);
	
	void laworgInsert(LaworgVO insertVO);

	void laworgUpdate(LaworgVO updateVO);

	List<LaworgVO> laworgDelete(LaworgVO deleteVO);

	
}
