package searchdictword.lawmapper.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import searchdictword.lawmapper.service.SearchDictwordService;
import searchdictword.lawmapper.service.dao.SearchDictwordDAO;
import searchdictword.lawmapper.vo.DictwordExcelVO;
import searchdictword.lawmapper.vo.DictwordVO;

@Service("searchDictwordService")
public class SearchDictwordServiceImpl implements SearchDictwordService{

	@Resource(name = "searchDictwordDAO")
	private SearchDictwordDAO searchDictwordDAO;
	 
	@Override
	public List<DictwordVO> selectDictwordListVO(DictwordVO dictwordVO) {
		return searchDictwordDAO.selectDictwordListVO(dictwordVO);
	}

	@Override
	public DictwordVO rowCount(DictwordVO dictwordVO) {
		return searchDictwordDAO.getRowCount(dictwordVO);
	}

	@Override
	public DictwordVO selectDictwordOneVO(DictwordVO dictwordVO) {
		return searchDictwordDAO.selectDictwordOneVO(dictwordVO);
	}

	@Override
	public List<DictwordVO> selectDictwordTreeListVO(
			DictwordVO dictwordContentVO) {
		return searchDictwordDAO.selectDictwordTreeListVO(dictwordContentVO);
	}
  
	@Override
	public List<DictwordExcelVO> exportExcel(List<DictwordVO> dictwordVO) {
		System.out.println("서비스진입");
		List<String> dictword = new ArrayList<String>();
		for(int i=0; i<dictwordVO.size();i++){
			dictword.add(dictwordVO.get(i).getDictword());
			
			System.out.println(dictword.get(i));
		}
		DictwordVO dictVO = new DictwordVO();
		dictVO.setDictwordList(dictword);
		return searchDictwordDAO.exportExcel(dictVO);
	}

	@Override
	public void updateDictword(List<DictwordVO> dictwordVO) {
		searchDictwordDAO.updateDictword(dictwordVO);
	}

}
