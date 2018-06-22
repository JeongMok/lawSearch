package management.lawmapper.service;

import java.util.List;

import management.lawmapper.vo.UserPositionVO;
import management.lawmapper.vo.UserSexVO;
import management.lawmapper.vo.UserVo;

public interface UserMapper {
	
	public List<UserVo> finduser(UserVo user);
	
	public List<UserVo> userlist();
	
	public boolean adduser(UserVo user);
	
	public boolean deleteuser(UserVo user);
	
	public boolean updateuser(UserVo user);
	
	public List<UserVo> findid(UserVo user);
	
	public List<UserVo> findpassword(UserVo user);
	
	public boolean updatepassword(UserVo user);
	
	public UserVo loginuser(UserVo user);
	
	public List<UserSexVO> sexsetting();
	
	public List<UserPositionVO> positionsetting();
}
