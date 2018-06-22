package insertlaw.lawmapper.service.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import insertlaw.lawmapper.vo.LawArticleVO;
import insertlaw.lawmapper.vo.LawListVO;
import insertlaw.lawmapper.vo.LawSubTextVO;

@Repository
public class LawInsertDAO {
	@Autowired
	private SqlSession session;

	private String namespace = "insertlaw.lawmapper.service.dao.LawInsertMapper";

	public void lawList(LawListVO lawListVO) {
		session.insert(namespace + ".lawList", lawListVO);

	}

	public void lawBaseInfo(LawListVO lawListVO) {
		session.insert(namespace + ".lawBaseInfo", lawListVO);

	}

	public void lawArticle(LawArticleVO lawArticleVO) {
		session.insert(namespace + ".lawArticle", lawArticleVO);

	}

	public void lawSubText(LawSubTextVO lawSubTextVO) {
		session.insert(namespace + ".lawSubText", lawSubTextVO);

	}
}