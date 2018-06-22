package code.lawmapper.service.dao;

import java.util.List;

import code.lawmapper.service.mapper.GroupCodeMapper;
import code.lawmapper.vo.GroupCodeVO;

public class GroupCodeDaoImpl implements GroupCodeDao {

	private GroupCodeMapper groupcodeMapper;

	public void setGroupcodeMapper(GroupCodeMapper groupcodeMapper) {
		this.groupcodeMapper = groupcodeMapper;
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.GroupcodeDao#insertGroupCode(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public boolean insertGroupCode (GroupCodeVO groupcode){
		return groupcodeMapper.insertGroupCode(groupcode);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.GroupcodeDao#deleteGroupCode(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public boolean deleteGroupCode (GroupCodeVO groupcode){
		return groupcodeMapper.deleteGroupCode(groupcode);
	}

	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.GroupcodeDao#updateGroupCode(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public boolean updateGroupCode (GroupCodeVO groupcode){
		return groupcodeMapper.updateGroupCode(groupcode);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.GroupcodeDao#selectGroupCodelist(code.lawmapper.vo.GroupcodeVO)
	 */
	@Override
	public List<GroupCodeVO> selectGroupCodelist(GroupCodeVO groupcode){
		return groupcodeMapper.selectGroupCodelist(groupcode);
	}
	
	/* (non-Javadoc)
	 * @see code.lawmapper.service.dao.GroupcodeDao#AllGroupCodelist()
	 */
	@Override
	public List<GroupCodeVO> AllGroupCodelist(){
		return groupcodeMapper.AllGroupCodelist();
	}
	
	public List<GroupCodeVO> selectGroupCodeName(GroupCodeVO groupcode){
		return groupcodeMapper.selectGroupCodeName(groupcode);
	};
}
