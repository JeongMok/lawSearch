package management.lawmapper.service;

import java.util.List;

import javax.annotation.Resource;

import management.lawmapper.vo.MemberPaging;
import management.lawmapper.vo.MemberSearchVo;
import management.lawmapper.web.MemberController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("kkMemberService")
public class MemberServiceImpl implements MemberService{
	
	private static final Logger LOG=LoggerFactory.getLogger(MemberController.class);
	
	@Resource(name="memberMapper")
	private MemberMapper memberMapper;
	

	@Override
	public MemberSearchVo memberDetail(MemberSearchVo mvs) {
		return memberMapper.memberDetail(mvs);
	}

	@Override
	public int memberCount(MemberSearchVo msv) {
		return memberMapper.memberCount(msv);
	}

	@Override
	public List<MemberSearchVo> memberSelectOne(MemberSearchVo mvs) {
		return memberMapper.memberSelectOne(mvs);
	}

	@Override
	public void memberUpdate(MemberSearchVo msv) {
		memberMapper.memberUpdate(msv);
	}

	@Override
	public void memberDelete(MemberSearchVo msv) {
		memberMapper.memberDelete(msv);
	}

}
