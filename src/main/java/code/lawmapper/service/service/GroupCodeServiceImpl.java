package code.lawmapper.service.service;

import java.util.List;

import code.lawmapper.service.dao.GroupCodeDao;
import code.lawmapper.vo.GroupCodeVO;

public class GroupCodeServiceImpl implements GroupCodeService {

	private GroupCodeDao groupcodeDao;

	public void setGroupcodeDao(GroupCodeDao groupcodeDao) {
		this.groupcodeDao = groupcodeDao;
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.GroupcodeService#insertGroupCode(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public boolean insertGroupCode (GroupCodeVO groupcode){
		return groupcodeDao.insertGroupCode(groupcode);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.GroupcodeService#deleteGroupCode(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public boolean deleteGroupCode (GroupCodeVO groupcode){
		return groupcodeDao.deleteGroupCode(groupcode);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.GroupcodeService#updateGroupCode(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public boolean updateGroupCode (GroupCodeVO groupcode){
		return groupcodeDao.updateGroupCode(groupcode);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.GroupcodeService#selectGroupCodelist(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public List<GroupCodeVO> selectGroupCodelist(GroupCodeVO groupcode){
		return groupcodeDao.selectGroupCodelist(groupcode);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.service.GroupcodeService#AllGroupCodelist()
	 */
	@Override
	public List<GroupCodeVO> AllGroupCodelist(){
		return groupcodeDao.AllGroupCodelist();
	}
	
	public List<GroupCodeVO> selectGroupCodeName(GroupCodeVO groupcode){
		return groupcodeDao.selectGroupCodeName(groupcode);
	}
}
