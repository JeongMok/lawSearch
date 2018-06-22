package administrative.lawmapper.service;

import java.io.File;
import java.util.List;

import com.nexacro.xapi.data.DataSet;

import administrative.lawmapper.vo.AstVO;
import administrative.lawmapper.vo.SlectClickListVO;


public interface AstService {
	
	List<SlectClickListVO> selectClickList(SlectClickListVO searchVO);
	
	void insertList(SlectClickListVO searchVO);
	
	List<AstVO> selectAstList();
	
	List<AstVO> selectPaging(AstVO searchVO);
	
	
	int selectCount(AstVO searchVO);

	List<AstVO> selecthistory(AstVO searchVO);

	List<AstVO> selecthistorylist(AstVO searchVO);

	List<AstVO> selecthistorycontextlist(AstVO searchVO);

	void modifyMultiUserVO(List<AstVO> modifyList);

	void execl(File destination, DataSet resultDs);

	AstVO execlselect(List<AstVO> searchVO);

	void execlmody(List<AstVO> searchVO);
}
