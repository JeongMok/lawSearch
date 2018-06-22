package searchdictword.lawmapper.service.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import searchdictword.lawmapper.vo.DictwordExcelVO;
import searchdictword.lawmapper.vo.DictwordVO;

@Repository("searchDictwordDAO")
public class SearchDictwordDAO {
	
	@Autowired
	private SqlSession sqlsession;
	private static final String NAMESPACE = "searchdictword.mapper.service.dao.DictWordMapper";
	
	public List<DictwordVO> selectDictwordListVO(DictwordVO dictwordVO){
		return sqlsession.selectList(NAMESPACE+".selectDictwordListVO", dictwordVO);
	}
	public DictwordVO getRowCount(DictwordVO dictwordVO){
		return sqlsession.selectOne(NAMESPACE+".getRowCount", dictwordVO);
	}
	public DictwordVO selectDictwordOneVO(DictwordVO dictwordVO){
		return sqlsession.selectOne(NAMESPACE+".selectDictwordOneVO", dictwordVO);
	}
	public List<DictwordVO> selectDictwordTreeListVO(DictwordVO dictContentVO){
		return sqlsession.selectList(NAMESPACE+".selectDictwordTreeListVO", dictContentVO);
	}
	public List<DictwordExcelVO> exportExcel(DictwordVO dictword){
		return sqlsession.selectList(NAMESPACE+".exportExcel", dictword);
	}
	public void updateDictword(List<DictwordVO> dictword){
		for(int i=0; i<dictword.size();i++){
			System.out.println("링크 : "+dictword.get(i).getDetaillink());
			sqlsession.update(NAMESPACE+".updateDictword",dictword.get(i));
			sqlsession.update(NAMESPACE+".updateDictwordContent",dictword.get(i));
		}
	}
}
