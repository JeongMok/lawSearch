package management.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import management.lawmapper.service.MemberService;
import management.lawmapper.vo.MemberSearchVo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import util.com.utils.InsertLog;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class MemberController {
	
	private static final Logger LOG=LoggerFactory.getLogger(MemberController.class);
	@Resource
	private InsertLog insertLog;
	
	@Resource(name="kkMemberService")
	private MemberService memberService;

	//조건검색
	@RequestMapping(value="/memberSelectOne.do")
	public NexacroResult mSelectOne(@ParamDataSet(name="ds_searchJoin", required=false)MemberSearchVo msv){
		msv.setTotalList(memberService.memberCount(msv));	
	
		List<MemberSearchVo> msvListOne =memberService.memberSelectOne(msv);

		MemberSearchVo ds_paging = new MemberSearchVo();
		ds_paging.setViewListCount(msv.getViewListCount());
		ds_paging.setViewPageNum(msv.getViewPageNum());
		ds_paging.setTotalList(msv.getTotalList());
		
		NexacroResult result =new NexacroResult();
		result.addDataSet("ds_userInfo", msvListOne);
		result.addDataSet("ds_paging", ds_paging);
		return result;
		
	}
	
	
	@RequestMapping(value="/memberUpdate.do")
	public void memberUpdate(@ParamDataSet(name="ds_userDetail", required=false)MemberSearchVo msv,HttpServletRequest req){
		memberService.memberUpdate(msv);
		System.out.println("msv.getLoginId()"+ msv.getLoginId());
		insertLog.insertData(msv.getLoginId(), "회원수정", req);
	}
	@RequestMapping(value="/memberDelete.do")
	public void memberDelete(@ParamDataSet(name="ds_userDetail", required=false) MemberSearchVo msv,HttpServletRequest req){
		memberService.memberDelete(msv);
		insertLog.insertData(msv.getLoginId(), "강제탈퇴", req);
	}
}
