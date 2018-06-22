package code.lawmapper.service.dao;

import java.util.List;

import code.lawmapper.vo.GroupCodeVO;

public interface GroupCodeDao {

	public abstract boolean insertGroupCode(GroupCodeVO groupcode);

	public abstract boolean deleteGroupCode(GroupCodeVO groupcode);

	public abstract boolean updateGroupCode(GroupCodeVO groupcode);

	public abstract List<GroupCodeVO> selectGroupCodelist(GroupCodeVO groupcode);

	public abstract List<GroupCodeVO> AllGroupCodelist();

	public abstract List<GroupCodeVO> selectGroupCodeName(GroupCodeVO groupcode);
}