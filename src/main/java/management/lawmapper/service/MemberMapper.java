package management.lawmapper.service;

import java.util.List;

import management.lawmapper.vo.MemberSearchVo;
import egovframework.rte.psl.dataaccess.mapper.Mapper;
@Mapper("memberMapper")
public interface MemberMapper {
	public List<MemberSearchVo> memberSelectOne(MemberSearchVo mvs);
	public MemberSearchVo memberDetail(MemberSearchVo msv);
	public int memberCount(MemberSearchVo msv);
	public void memberUpdate(MemberSearchVo msv);
	public void memberDelete(MemberSearchVo msv);
}
