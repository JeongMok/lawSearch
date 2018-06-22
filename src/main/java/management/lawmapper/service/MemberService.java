package management.lawmapper.service;

import java.util.List;

import management.lawmapper.vo.MemberPaging;
import management.lawmapper.vo.MemberSearchVo;

public interface MemberService {
	public List<MemberSearchVo> memberSelectOne(MemberSearchVo mvs);
	public MemberSearchVo memberDetail(MemberSearchVo mvs);
	public int memberCount(MemberSearchVo msv);
	public void memberUpdate(MemberSearchVo msv);
	public void memberDelete(MemberSearchVo msv);
}
