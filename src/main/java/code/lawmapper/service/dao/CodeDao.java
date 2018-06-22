package code.lawmapper.service.dao;

import java.util.List;

import code.lawmapper.vo.CodeVO;

public interface CodeDao {

	public abstract boolean insertCode(CodeVO code);

	public abstract boolean deleteCode(CodeVO code);

	public abstract boolean updateCode(CodeVO code);

	public abstract List<CodeVO> selectCodelist(CodeVO code);

	public abstract List<CodeVO> AllCodelist();

}