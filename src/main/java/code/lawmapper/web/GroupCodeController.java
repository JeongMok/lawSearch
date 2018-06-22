package code.lawmapper.web;

import java.util.List;







import javax.annotation.Resource;




import nexacro.sample.web.AdvancedFileController;

import org.apache.commons.el.Coercions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import code.lawmapper.service.service.CodeService;
import code.lawmapper.service.service.GroupCodeService;
import code.lawmapper.vo.CodeVO;
import code.lawmapper.vo.GroupCodeVO;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class GroupCodeController {

	
private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
@Resource(name = "groupCodeService")
private GroupCodeService groupCodeService;

@Resource(name = "codeService")
private CodeService codeService;

/**
 * 
 * Code를 조회 한다.
 *
 * @param searchVOList
 * @return
 * @throws NexacroException 
 */

@RequestMapping(value = "/selectAllList.do")
public NexacroResult selectCodeGroupList(@ParamDataSet(name = "ds_search", required=false) GroupCodeVO searchVo,
		@ParamDataSet(name = "ds_search", required=false) CodeVO code){
	NexacroResult result = new NexacroResult();

	List<GroupCodeVO> groupCodeList=null;
	
	if(searchVo.getClass_code()==null&&searchVo.getClass_name()==null){
		groupCodeList = groupCodeService.AllGroupCodelist();	
	}else if(searchVo.getClass_code()=="" || searchVo.getClass_name()==""){
		groupCodeList = groupCodeService.AllGroupCodelist();
	}
	
	if(searchVo.getClass_code()!=null){
		if (searchVo.getClass_code().trim().equals("")) {
			groupCodeList = groupCodeService.AllGroupCodelist();	
		}else {
			groupCodeList = groupCodeService.selectGroupCodelist(searchVo);
		}
	}
		
	if(searchVo.getClass_name()!=null){
		if (searchVo.getClass_name().trim().equals("")) {
			groupCodeList = groupCodeService.AllGroupCodelist();	
		}else {
			groupCodeList = groupCodeService.selectGroupCodeName(searchVo);
		}
	}
	
	result.addDataSet("ds_codemaster", groupCodeList);
	
	List<CodeVO> codelist=null;
	
	if (searchVo.getClass_code()==null && searchVo.getClass_name()==null){
		code.setClass_code(groupCodeList.get(0).getClass_code());
		codelist = codeService.selectCodelist(code);
	}

	if(searchVo.getClass_code()!=null){
		if (searchVo.getClass_code().trim().equals("")) {
			code.setClass_code(groupCodeList.get(0).getClass_code());
			codelist = codeService.selectCodelist(code);	
		}else {
			code.setClass_code(groupCodeList.get(0).getClass_code());
			codelist = codeService.selectCodelist(code);
		}
	}
		
	if(searchVo.getClass_name()!=null){
		if (searchVo.getClass_name().trim().equals("")) {
			code.setClass_code(groupCodeList.get(0).getClass_code());
			codelist = codeService.selectCodelist(code);	
		}else {
			code.setClass_code(groupCodeList.get(0).getClass_code());
			codelist = codeService.selectCodelist(code);
		}
	}
	
    	result.addDataSet("ds_codelist",codelist);

	
     
    
    return result;
}

/**
 * 
 * Code를 수정한다.
 *
 * @param modifyGroupList
 * @param modifyCodeList
 * @return
 */
//, @ParamDataSet(name="ds_codelist") CodeVO codelist
//codeService.insertCode(codelist);
@RequestMapping(value = "/AddGroupCode.do")
public NexacroResult AddGroupCode(@ParamDataSet(name="ds_codemaster") GroupCodeVO groupcodelist
		){
    
    groupCodeService.insertGroupCode(groupcodelist);

    NexacroResult result = new NexacroResult();
    
    return result;
}


@RequestMapping(value = "/DeleteGroupCode.do")
public NexacroResult DeleteGroupCode(@ParamDataSet(name="ds_deletemaster") GroupCodeVO groupcodelist){
    
    groupCodeService.deleteGroupCode(groupcodelist);
    
    List<GroupCodeVO> groupcodealllist = groupCodeService.AllGroupCodelist();
    
    NexacroResult result = new NexacroResult();
    
    result.addDataSet("ds_codemaster",groupcodealllist);
    
    return result;
}

@RequestMapping(value = "/ModifyGroupCode.do")
public NexacroResult ModifyGroupCode(@ParamDataSet(name="ds_codemaster") GroupCodeVO groupcodelist){
    
    groupCodeService.updateGroupCode(groupcodelist);
    
    List<GroupCodeVO> groupcodealllist = groupCodeService.AllGroupCodelist();
    
    NexacroResult result = new NexacroResult();
    
    result.addDataSet("ds_codemaster",groupcodealllist);
    
    return result;
}

}
