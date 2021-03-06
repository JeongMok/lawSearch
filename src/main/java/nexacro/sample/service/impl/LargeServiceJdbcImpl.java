package nexacro.sample.service.impl;

import javax.annotation.Resource;

import nexacro.sample.service.LargeDataService;
import nexacro.sample.service.dao.ibatis.LargeDataDAO;
import nexacro.sample.service.dao.jdbc.LargeDataJdbcDAO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.NexacroFirstRowHandler;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * Test를 위한 ServiceImpl Sample Class
 *
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Service("largeDataJdbcService")
public class LargeServiceJdbcImpl extends EgovAbstractServiceImpl implements LargeDataService {

    @Resource(name = "largeDataJdbcDAO")
    private LargeDataJdbcDAO largeDataJdbcDAO;
    
    private static boolean isInited = false;
    
    public void selectLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount) {
        
        if(!isInited) {
            largeDataJdbcDAO.initData(initDataCount);
        }
        isInited = true;
        largeDataJdbcDAO.selectLargeData(firstRowHandler, sendDataSetName, firstRowCount);
        
    }

}
