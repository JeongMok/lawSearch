package code.lawmapper.service.service;

import java.util.List;

import code.lawmapper.service.dao.CodeDao;
import code.lawmapper.vo.CodeVO;

public class CodeServiceImpl implements CodeService {

	private CodeDao codeDao;

	public void setCodeDao(CodeDao codeDao) {
		this.codeDao = codeDao;
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.CodeService#insertCode(code.lawmapper.vo.CodeVO)
	 */
	@Override
	public boolean insertCode(CodeVO code){
		return codeDao.insertCode(code);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.CodeService#deleteCode(code.lawmapper.vo.CodeVO)
	 */
	@Override
	public boolean deleteCode(CodeVO code){
		return codeDao.deleteCode(code);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.CodeService#updateCode(code.lawmapper.vo.CodeVO)
	 */
	@Override
	public boolean updateCode(CodeVO code){
		return codeDao.updateCode(code);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.CodeService#selectCodelist(code.lawmapper.vo.CodeVO)
	 */
	@Override
	public List<CodeVO> selectCodelist(CodeVO code){
		return codeDao.selectCodelist(code);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.CodeService#AllCodelist()
	 */
	@Override
	public List<CodeVO> AllCodelist(){
		return codeDao.AllCodelist();
	}
}
