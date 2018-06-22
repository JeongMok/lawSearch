package administrative.lawmapper.service;

import java.util.List;

import administrative.lawmapper.vo.OrdSlectClickListVO;
import administrative.lawmapper.vo.OrdVO;

public interface OrdService {

	int selectCount(OrdVO searchVO);

	List<OrdVO> selectPaging(OrdVO searchVO);
	
	List<OrdVO> selectreplList();
	
	List<OrdSlectClickListVO> ordselectClickList(OrdSlectClickListVO searchVO);

	void expcModifyVO(List<OrdVO> ordVO);

}
