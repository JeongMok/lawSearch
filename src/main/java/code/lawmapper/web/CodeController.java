package code.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;




import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import code.lawmapper.service.service.CodeService;
import code.lawmapper.service.service.GroupCodeService;
import code.lawmapper.vo.CodeVO;
import code.lawmapper.vo.GroupCodeVO;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class CodeController {

private static final Logger log = LoggerFactory.getLogger(AdvancedFileController.class);
	
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
   
    @RequestMapping(value = "/selectCodeList.do")
	public NexacroResult selectCodeGroupList(@ParamDataSet(name = "ds_codelist", required = false) CodeVO searchVo) {
        List<CodeVO> selectCodeList = codeService.selectCodelist(searchVo);
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_codelist", selectCodeList);
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
    
    @RequestMapping(value = "/AddCode.do")
    public NexacroResult modifyCodes(@ParamDataSet(name="ds_codelist") CodeVO code){
        codeService.insertCode(code);
        NexacroResult result = new NexacroResult();
        return result;
    }
    
    @RequestMapping(value = "/DeleteCode.do")
    public NexacroResult DeleteCodes(@ParamDataSet(name="ds_deletecode") CodeVO code){
        codeService.deleteCode(code);
        List<CodeVO> codelist = codeService.selectCodelist(code);
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_codelist",codelist);
        return result;
    }
    
    @RequestMapping(value = "/Modifycode.do")
    public NexacroResult ModifyCodes(@ParamDataSet(name="ds_codelist") CodeVO code){
        System.out.println("@@@@@@@@@"+code);
    	codeService.updateCode(code);
        List<CodeVO> codelist = codeService.selectCodelist(code);
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_codelist",codelist);
        return result;
    }
    
}
