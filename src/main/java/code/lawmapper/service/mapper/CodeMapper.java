package code.lawmapper.service.mapper;

import java.util.List;

import code.lawmapper.vo.CodeVO;

public interface CodeMapper {

	public boolean insertCode (CodeVO code);
	
	public boolean deleteCode (CodeVO code);

	public boolean updateCode (CodeVO code);
	
	public List<CodeVO> selectCodelist(CodeVO code);
	
	public List<CodeVO> AllCodelist();
	
}
