package refformlist.lawmapper.service.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import refformlist.lawmapper.vo.GovRefFormListVo;
import refformlist.lawmapper.vo.LawRefFormListVo;


/**
 * 법률/행정규칙별표서식목록 dao
 * 
 * @author Shim jae min
 * @since 2018.04.12
 * @version 0.1ver
 * @see
 * 
 */
//@Mapper 
@Repository("refFormListDao")
public class RefFromListDao {
	
	@Autowired
	private SqlSession session;
	private String namespace = "refformlist.lawmapper.service.dao.RefFromListMapper";
	
	public List<GovRefFormListVo> selectGovList(GovRefFormListVo govListVo){
		return session.selectList(namespace+".selectGovList",govListVo);
	}
		
	public List<LawRefFormListVo> selectLawList(LawRefFormListVo lawListVo){
		return session.selectList(namespace+".selectLawList",lawListVo);
	}
	
	public int lawCount(LawRefFormListVo lawListVo){
		return session.selectOne(namespace+".lawCount",lawListVo);
	}
	
	public int govrCount(GovRefFormListVo govListVo){
		return session.selectOne(namespace+".govrCount",govListVo);
	}
}
