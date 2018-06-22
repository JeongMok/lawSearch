package code.lawmapper.service.mapper;

import java.util.List;

import code.lawmapper.vo.GroupCodeVO;

public interface GroupCodeMapper {

	public boolean insertGroupCode (GroupCodeVO groupcode);
	
	public boolean deleteGroupCode (GroupCodeVO groupcode);

	public boolean updateGroupCode (GroupCodeVO groupcode);
	
	public List<GroupCodeVO> selectGroupCodelist(GroupCodeVO groupcode);
	
	public List<GroupCodeVO> AllGroupCodelist();
	
	public List<GroupCodeVO> selectGroupCodeName(GroupCodeVO groupcode);
}
