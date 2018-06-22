package insertlaw.lawmapper.service;

import insertlaw.lawmapper.vo.LawArticleVO;
import insertlaw.lawmapper.vo.LawListVO;
import insertlaw.lawmapper.vo.LawSubTextVO;

public interface LawInsertService {
	
	public void lawList(LawListVO lawListVO);

	public void lawBaseInfo(LawListVO lawListVO);

	public void lawArticle(LawArticleVO lawArticleVO);

	public void lawSubText(LawSubTextVO lawSubTextVO);

}