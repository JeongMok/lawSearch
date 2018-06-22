package constitution.lawmapper.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class PrecedentsSearchVO implements DataSetRowTypeAccessor {
	
	private int rowType;
	
	private String casename_search;	
	private String caseno_search;
	private String judgeno_search;
	private String casetext_search;		//
	private String judgetext_search;	//
	private String referlaw_search;		//
	private String referjudge_search;	//
	private String fromdate_search;
	private String todate_search;
	private String judge_search;
	private String case_search;
	private String court_search;
	
	private String orderby;
	
	//paging처리
	private int totalCount;		//전체 row수
	private int totalPage;		//전체 페이지 수
	private int countList=15;	//한 페이지 당 보여줄 row의 수
	private int countPage=10;	//한번에 밑에 띄울 페이지 번호의 수
	private int page=1;			//현재 페이지
	private int startPage;		//시작 페이지
	private int endPage;		//끝 페이지
	private int startCount;		//현재 페이지에 따른 보여주기 시작할 row
	private int endCount;		//현재 페이지에 따라 보여주기를 끝낼 row
	
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public void setCountList(int countList) {
		if(countList != 0){
		this.countList = countList;
		}else{
			this.countList = 15;
		}
	}

	public void setCountPage(int countPage) {
		if(countPage != 0){
		this.countPage = countPage;
		}else{
			this.countPage = 10;
		}
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public void setStartCount(int startCount) {
		this.startCount = startCount;
	}

	public void setEndCount(int endCount) {
		this.endCount = endCount;
	}

	public int getCountList() {
		return countList;
	}

	public int getCountPage() {
		return countPage;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public int getStartPage() {
		return startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public int getStartCount() {
		return startCount;
	}
	
	public int getEndCount() {
		return endCount;
	}
	
	public void setPaging(){
		totalPage = totalCount / countList;

		if(totalCount % countList > 0 ){
			totalPage++;
		}

		if(totalPage < page && totalPage != 0){
			page=totalPage;
		}

		startPage = ((page - 1) / 10) * 10 + 1;
		endPage = startPage + countPage - 1;

		//마지막 페이지는 페이지 수가 적으므로 보정해 줘야함
		if(endPage > totalPage){
			endPage = totalPage;
		}
		
		startCount = (page - 1) * countList + 1;
		endCount = page * countList;
	}
	public int getTotalCount(){
		return totalCount;
	}
	
	public void setTotalCount(int totalCount){
		this.totalCount=totalCount;
		this.setPaging();
	}
	
	public int getPage(){
		return page;
	}
	
	public void setPage(int page){
		if(page != 0){
		this.page=page;
		}else{
			this.page = 1;
		}
	}
	
	public String getOrderby() {
		return orderby;
	}

	public void setOrderby(String orderby) {
		this.orderby = orderby;
	}

	public String getFromdate_search() {
		return fromdate_search;
	}

	public void setFromdate_search(String fromdate_search) {
		this.fromdate_search = fromdate_search;
	}

	public String getTodate_search() {
		return todate_search;
	}

	public void setTodate_search(String todate_search) {
		this.todate_search = todate_search;
	}

	public String getJudge_search() {
		return judge_search;
	}

	public void setJudge_search(String judge_search) {
		this.judge_search = judge_search;
	}

	public String getCase_search() {
		return case_search;
	}

	public void setCase_search(String case_search) {
		this.case_search = case_search;
	}

	public String getCourt_search() {
		return court_search;
	}

	public void setCourt_search(String court_search) {
		this.court_search = court_search;
	}

	public String getCasename_search() {
		return casename_search;
	}

	public void setCasename_search(String casename_search) {
		this.casename_search = casename_search;
	}

	public String getCaseno_search() {
		return caseno_search;
	}

	public void setCaseno_search(String caseno_search) {
		this.caseno_search = caseno_search;
	}

	public String getJudgeno_search() {
		return judgeno_search;
	}

	public void setJudgeno_search(String judgeno_search) {
		this.judgeno_search = judgeno_search;
	}

	public String getCasetext_search() {
		return casetext_search;
	}

	public void setCasetext_search(String casetext_search) {
		this.casetext_search = casetext_search;
	}

	public String getJudgetext_search() {
		return judgetext_search;
	}

	public void setJudgetext_search(String judgetext_search) {
		this.judgetext_search = judgetext_search;
	}

	public String getReferlaw_search() {
		return referlaw_search;
	}

	public void setReferlaw_search(String referlaw_search) {
		this.referlaw_search = referlaw_search;
	}

	public String getReferjudge_search() {
		return referjudge_search;
	}

	public void setReferjudge_search(String referjudge_search) {
		this.referjudge_search = referjudge_search;
	}

	@Override
	public int getRowType() {
		return rowType;
	}

	@Override
	public void setRowType(int rowType) {
		 this.rowType = rowType;		
	}
}
