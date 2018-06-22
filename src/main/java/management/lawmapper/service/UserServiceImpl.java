package management.lawmapper.service;

import java.util.List;




import org.springframework.security.crypto.password.StandardPasswordEncoder;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import management.lawmapper.vo.UserPositionVO;
import management.lawmapper.vo.UserSexVO;
import management.lawmapper.vo.UserVo;

public class UserServiceImpl implements UserService {
	
	private UserDao userdao;

	StandardPasswordEncoder encoder = new StandardPasswordEncoder();
	
	public void setUserdao(UserDao userdao) {
		this.userdao = userdao;
	}

	/* (non-Javadoc)
	 * @see management.lawmapper.service.UserService#finduser(java.lang.String)
	 */
	@Override
	public List<UserVo> finduser(UserVo user){
		return userdao.finduser(user);
	}
	
	
	/* (non-Javadoc)
	 * @see management.lawmapper.service.UserService#userlist()
	 */
	@Override
	public List<UserVo> userlist(){
		return userdao.userlist();
	}
	
	public boolean modifyMultiUserVO(List<UserVo> modifyList){
		boolean modify = false;
		int size = modifyList.size();
		for (int i = 0; i < size; i++) {
			UserVo user = modifyList.get(i);

				System.out.println("@@@@@@@@@@@@@@@@@@@@@@"+user);
			if (user instanceof DataSetRowTypeAccessor) {
				DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) user;
				System.out.println("몇번이냐"+accessor.getRowType());
				 if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
					 user.setGrade("0");
					 user.setPassword(encoder.encode(user.getPassword()));
					 modify = userdao.adduser(user);	
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	                user.setPassword(encoder.encode(user.getPassword()));
	                user.setGrade("0");
	                 modify = userdao.updateuser(user);
	                }else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	                 modify = userdao.deleteuser(user);
	                }
			}
		}
		return modify;
	}
	

	@Override
	public List<UserVo> findid(UserVo user) {
		return userdao.findid(user);
	}

	@Override
	public List<UserVo> findpassword(UserVo user) {
		return userdao.findpassword(user);
	}

	@Override
	public UserVo loginuser(UserVo user) {
		return userdao.loginuser(user);
	}
	
	public List<UserSexVO> sexsetting(){
		return userdao.sexsetting();
	}

	@Override
	public List<UserPositionVO> positionsetting() {
		return userdao.positionsetting();
	}
	
}
