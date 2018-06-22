package code.lawmapper.service.dao;

import java.util.List;

import code.lawmapper.service.mapper.CodeMapper;
import code.lawmapper.vo.CodeVO;


public class CodeDaoImpl implements CodeDao {

	private CodeMapper codeMapper;
	
	public void setCodeMapper(CodeMapper codeMapper) {
		this.codeMapper = codeMapper;
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.codeDao#insertCode(code.lawmapper.vo.codeVO)
	 */
	@Override
	public boolean insertCode (CodeVO code){
		return codeMapper.insertCode(code);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.codeDao#deleteCode(code.lawmapper.vo.codeVO)
	 */
	@Override
	public boolean deleteCode (CodeVO code){
		return codeMapper.deleteCode(code);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.codeDao#updateCode(code.lawmapper.vo.codeVO)
	 */
	@Override
	public boolean updateCode (CodeVO code){
		return codeMapper.updateCode(code);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.codeDao#selectCodelist(code.lawmapper.vo.codeVO)
	 */
	@Override
	public List<CodeVO> selectCodelist(CodeVO code){
		return codeMapper.selectCodelist(code);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.codeDao#AllCodelist()
	 */
	@Override
	public List<CodeVO> AllCodelist(){
		return codeMapper.AllCodelist();
	}
	
}
