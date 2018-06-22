package management.lawmapper.web;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import  management.lawmapper.service.LogService;
import  management.lawmapper.vo.LogDataVo;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

@Controller
public class LogDataController {
	
	private static final Logger LOG = LoggerFactory.getLogger(LogDataController.class);
	
	@Resource(name="logDataService")
	private LogService logService;


	@RequestMapping(value="/logDataSelectList.do")
	public NexacroResult logSelectList(@ParamDataSet(name="ds_searchLog", required=false)LogDataVo vo){
		vo.setTotalList(logService.logCount(vo));
		List<LogDataVo> ds_logData = logService.selectLogList(vo);
		
		LogDataVo ds_paging = new LogDataVo();
		ds_paging.setViewListCount(vo.getViewListCount());
		ds_paging.setViewPageNum(vo.getViewPageNum());
		ds_paging.setTotalList(vo.getTotalList());

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_logData", ds_logData);
		result.addDataSet("ds_paging", ds_paging);
		return result;
		
		
	}
	
}
