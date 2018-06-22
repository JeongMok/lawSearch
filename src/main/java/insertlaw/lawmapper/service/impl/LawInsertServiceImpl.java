package insertlaw.lawmapper.service.impl;

import insertlaw.lawmapper.service.LawInsertService;
import insertlaw.lawmapper.service.dao.LawInsertDAO;
import insertlaw.lawmapper.vo.LawArticleVO;
import insertlaw.lawmapper.vo.LawListVO;
import insertlaw.lawmapper.vo.LawSubTextVO;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("lawInsertService")
public class LawInsertServiceImpl implements LawInsertService {

	@Resource(name = "lawInsertDAO")
	private LawInsertDAO lawInsertDAO;

	@Override
	public void lawList(LawListVO lawListVO) {
		lawInsertDAO.lawList(lawListVO);

	}

	@Override
	public void lawBaseInfo(LawListVO lawListVO) {
		lawInsertDAO.lawBaseInfo(lawListVO);
	}

	@Override
	public void lawArticle(LawArticleVO lawArticleVO) {
		lawInsertDAO.lawArticle(lawArticleVO);

	}

	@Override
	public void lawSubText(LawSubTextVO lawSubTextVO) {
		lawInsertDAO.lawSubText(lawSubTextVO);

	}
}