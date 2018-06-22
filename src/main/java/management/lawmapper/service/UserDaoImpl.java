package management.lawmapper.service;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

import management.lawmapper.vo.UserPositionVO;
import management.lawmapper.vo.UserSexVO;
import management.lawmapper.vo.UserVo;

public class UserDaoImpl implements UserDao{

	private UserMapper userMapper;

	StandardPasswordEncoder encoder = new StandardPasswordEncoder();
	
	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

	/* (non-Javadoc)
	 * @see management.lawmapper.service.UserDao#finduser(java.lang.String)
	 */
	@Override
	public List<UserVo> finduser(UserVo user){
		return userMapper.finduser(user);
	}
	
	/* (non-Javadoc)
	 * @see management.lawmapper.service.UserDao#userlist()
	 */
	@Override
	public List<UserVo> userlist(){
		return userMapper.userlist();
	}
	
	@Override
	public boolean adduser(UserVo user){
		return userMapper.adduser(user);
	}
	
	@Override
	public boolean deleteuser(UserVo user){
		return userMapper.deleteuser(user);
	}
	
	@Override
	public boolean updateuser(UserVo user){
		return userMapper.updateuser(user);
	}

	@Override
	public List<UserVo> findid(UserVo user) {
		return userMapper.findid(user);
	}

	@Override
	public List<UserVo> findpassword(UserVo user) {
		userMapper.updatepassword(user);
		return userMapper.findpassword(user);
	}

	@Override
	public UserVo loginuser(UserVo user) {
		return userMapper.loginuser(user);
	}
	
	@Override
	public List<UserSexVO> sexsetting(){
		return userMapper.sexsetting();
	}

	@Override
	public List<UserPositionVO> positionsetting() {
		return userMapper.positionsetting();
	}
	
	
}
