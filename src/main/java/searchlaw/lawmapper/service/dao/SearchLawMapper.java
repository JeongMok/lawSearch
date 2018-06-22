package searchlaw.lawmapper.service.dao;

import java.util.List;

import searchlaw.lawmapper.vo.LawInfoVO;
import searchlaw.lawmapper.vo.LawSearchVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

/**
 * 법령 검색 위한 DAO
 * 
 * @author Son GaYeon
 * @since 11.04.2018
 * @version 0.1
 * @see
 */

@Mapper("searchLawMapper")
public interface SearchLawMapper {

	/**
	 * 법령 검색을 위한 법령 구분명 목록 가져오기
	 * @return
	 */
	public List<LawInfoVO> selectLawClassNameVOList();
	
	public List<LawInfoVO> selectLawInfoVOList(LawSearchVO lawSearchVO);

	public int selectSampleCount(LawInfoVO lawInfoVO);

	public List<LawInfoVO> selectLawSubList(LawInfoVO lawInfoVO);

	public int selectLawSubCount(LawInfoVO lawInfoVO);

	public List<LawInfoVO> selectLawArticleList(LawInfoVO lawInfoVO);

	public int selectLawArticleCount(LawInfoVO lawInfoVO);

	public List<LawInfoVO> selectLawItemList(LawInfoVO lawInfoVO);

	public List<LawInfoVO> searchArticleNo(LawInfoVO lawInfoVO);

	public void updateLawList(LawInfoVO lawInfoVO);

	//public void updateLawBase(LawInfoVO lawInfoVO);

	public LawInfoVO getLawArticleCount(LawInfoVO lawInfoVO);

	public LawInfoVO getLawSubCount(LawInfoVO lawInfoVO);

	public void lawListInsert(LawInfoVO lawInfoVO);
}
