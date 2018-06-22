package searchdictword.lawmapper.service;

import java.util.List;


import searchdictword.lawmapper.vo.DictwordExcelVO;
import searchdictword.lawmapper.vo.DictwordVO;

public interface SearchDictwordService {
	
	List<DictwordVO> selectDictwordListVO(DictwordVO dictwordVO);
	DictwordVO rowCount(DictwordVO dictwordVO);
	DictwordVO selectDictwordOneVO(DictwordVO dictwordVO);
	List<DictwordVO> selectDictwordTreeListVO(DictwordVO dictwordContentVO);
	List<DictwordExcelVO> exportExcel(List<DictwordVO> dictwordVO);
	void updateDictword(List<DictwordVO> dictwordVO);
}
