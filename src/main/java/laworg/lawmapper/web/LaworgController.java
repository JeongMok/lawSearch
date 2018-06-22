package laworg.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import laworg.lawmapper.service.LaworgService;
import laworg.lawmapper.vo.LaworgVO;
import management.lawmapper.vo.UserVo;
import nexacro.sample.web.AdvancedFileController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import util.com.utils.InsertLog;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class LaworgController {

	private static final Logger Log = LoggerFactory.getLogger(AdvancedFileController.class);
	
	@Resource(name = "laworgService")
	private LaworgService laworgService;

	@Resource
	private Validator	validator;


@Resource	
InsertLog insertLog;  
    @InitBinder
	public void initBinder(WebDataBinder dataBinder){
		dataBinder.setValidator(this.validator);
	}
   
    @RequestMapping(value = "/laworgsearchVO.do")
	public NexacroResult laworgsearchVO(@ParamDataSet(name = "ds_laworg_search", required = false) LaworgVO searchVO) {
       
      List<LaworgVO> ds_laworg_list = laworgService.laworgsearchVOList(searchVO);
      NexacroResult result = new NexacroResult();
      result.addDataSet("output1", ds_laworg_list);
       
      return result;
    }
     
    @RequestMapping(value = "/laworgSelectOneVO.do")
    public NexacroResult laworgSelectOneVO(@ParamDataSet(name = "ds_laworg_filter") LaworgVO searchVO){
        	
    	List<LaworgVO> ds_laworg_info = laworgService.laworgselectOneVO(searchVO);
    	NexacroResult result = new NexacroResult();
    	result.addDataSet("output2", ds_laworg_info);
    	   	
    	return result;
    }
    
    @RequestMapping(value = "/laworgSelectTwoVO1.do")
    public NexacroResult laworgSelectTwoVO1(@ParamDataSet(name = "ds_laworg_filter", required = false) LaworgVO searchVO){
    
    	List<LaworgVO> ds_laworg_list = laworgService.laworgselectTwoVO1(searchVO);
    	NexacroResult result = new NexacroResult();
    	result.addDataSet("output3", ds_laworg_list);
  
    	return result;
    }    
    
    @RequestMapping(value = "/laworgInsert.do")
    public void laworgInsert(@ParamDataSet(name = "input1", required = false) LaworgVO insertVO){ 
    	
    	laworgService.laworgInsert(insertVO);
    }
    
    @RequestMapping(value = "/laworgUpdate.do")
    public void laworgUpdate(@ParamDataSet(name = "ds_laworg_inpo", required = false) LaworgVO updateVO, HttpServletRequest req){
    	laworgService.laworgUpdate(updateVO);
      	insertLog.insertData(updateVO.getUserid(), "법조수정",req);
        	
    }
    @RequestMapping(value = "/laworgDelete.do")
    public NexacroResult laworgDelete(@ParamDataSet(name = "ds_laworg_inpo", required = false) LaworgVO deleteVO){
    
    	List<LaworgVO> ds_laworg_inpo = laworgService.laworgselectTwoVO1(deleteVO);
    	NexacroResult result = new NexacroResult();
    	result.addDataSet("ds_laworg_inpo", ds_laworg_inpo);
  
    return result;
    }    
}
