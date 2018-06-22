package management.lawmapper.service;

import java.util.List;

import management.lawmapper.vo.UserPositionVO;
import management.lawmapper.vo.UserSexVO;
import management.lawmapper.vo.UserVo;

public interface UserDao {

	public abstract List<UserVo> finduser(UserVo user);

	public abstract List<UserVo> userlist();

	public abstract boolean adduser(UserVo user);

	public abstract boolean deleteuser(UserVo user);

	public abstract boolean updateuser(UserVo user);
	
	public abstract List<UserVo> findid(UserVo user);
	
	public abstract List<UserVo> findpassword(UserVo user);
	
	public abstract UserVo loginuser(UserVo user);
	
	public abstract List<UserSexVO> sexsetting();
	
	public abstract List<UserPositionVO> positionsetting();

}