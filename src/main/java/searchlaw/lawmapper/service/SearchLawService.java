package searchlaw.lawmapper.service;

import java.io.File;
import java.sql.SQLException;
import java.util.List;

import com.nexacro.xapi.data.DataSet;

import searchlaw.lawmapper.vo.LawInfoVO;

/**
 * 법령 검색 위한 Service interface
 * 
 * @author Son GaYeon
 * @since 11.04.2018
 * @version 0.1
 * @see
 */

public interface SearchLawService {

	List<LawInfoVO> selectLawClassName();
	
	List<LawInfoVO> selectLawInfoVOList(LawInfoVO lawInfoVO);

	int selectSampleCount(LawInfoVO lawInfoVO);

	List<LawInfoVO> selectLawSubList(LawInfoVO lawInfoVO);

	int selectLawSubCount(LawInfoVO lawInfoVO);

	List<LawInfoVO> selectLawArticleList(LawInfoVO lawInfoVO);

	int selectLawArticleCount(LawInfoVO lawInfoVO);

	List<LawInfoVO> selectLawItemList(LawInfoVO lawInfoVO);

	List<LawInfoVO> searchArticleNo(LawInfoVO lawInfoVO);

	//void updateLawList(LawInfoVO lawInfoVO);

	LawInfoVO getLawArticleCount(LawInfoVO lawInfoVO);

	LawInfoVO getLawSubCount(LawInfoVO lawInfoVO);

	void updateLawList(List<LawInfoVO> modifyList);

	void excelTodataset(File destination, DataSet resultDs) throws Exception;

	void lawListInsert(List<LawInfoVO> lawInfoVOList) throws SQLException;
}
