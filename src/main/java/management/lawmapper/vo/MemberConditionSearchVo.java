package management.lawmapper.vo;

public class MemberConditionSearchVo {
	private String search_userId;
	private String search_career;
	private String search_name;
	private String search_address;
	/** 검색조건 */
	private String searchCondition = "";

	/** 검색Keyword */
	private String searchKeyword = "";

	/** 검색사용여부 */
	private String searchUseYn = "";

	private int rowType;
	private int totalCount;		//전체 row수
	private int totalPage;		//전체 페이지 수
	private int countList=15;	//한 페이지 당 보여줄 row의 수
	private int countPage=10;	//한번에 밑에 띄울 페이지 번호의 수
	private int page=1;			//현재 페이지
	private int startPage;		//시작 페이지
	private int endPage;		//끝 페이지
	private int startCount;		//현재 페이지에 따른 보여주기 시작할 row
	private int endCount;		//현재 페이지에 따라 보여주기를 끝낼 row
	
    private int totalList; //게시물 총 수;
    private int viewListCount = 10; //보여줄 게시물 수;
    private int viewPageNum = 10; //보여줄 페이지번호 갯수;
    private int startList; //시작 게시물 번호
    private int endList; //끝 게시물 번호
	
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
	public String getSearch_userId() {
		return search_userId;
	}
	public void setSearch_userId(String search_userId) {
		this.search_userId = search_userId;
	}
	public String getSearch_career() {
		return search_career;
	}
	public void setSearch_career(String search_career) {
		this.search_career = search_career;
	}
	
	public String getSearch_name() {
		return search_name;
	}
	public void setSearch_name(String search_name) {
		this.search_name = search_name;
	}
	public String getSearch_address() {
		return search_address;
	}
	public void setSearch_address(String search_address) {
		this.search_address = search_address;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getCountList() {
		return countList;
	}
	public void setCountList(int countList) {
		if(countList != 0){
		this.countList = countList;
		}else{
			this.countList = 15;
		};
	}
	public int getCountPage() {
		return countPage;
	}
	public void setCountPage(int countPage) {
		if(countPage != 0){
		this.countPage = countPage;
		}else{
			this.countPage = 10;
		}
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		if(page != 0){
		this.page=page;
		}else{
			this.page = 1;
		};
	}
	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}
	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}
	public int getStartCount() {
		return startCount;
	}
	public void setStartCount(int startCount) {
		this.startCount = startCount;
	}
	public int getEndCount() {
		return endCount;
	}
	public void setEndCount(int endCount) {
		this.endCount = endCount;
	}
	public String getSearchCondition() {
		return searchCondition;
	}
	public void setSearchCondition(String searchCondition) {
		this.searchCondition = searchCondition;
	}
	public String getSearchKeyword() {
		return searchKeyword;
	}
	public void setSearchKeyword(String searchKeyword) {
		this.searchKeyword = searchKeyword;
	}
	public String getSearchUseYn() {
		return searchUseYn;
	}
	public void setSearchUseYn(String searchUseYn) {
		this.searchUseYn = searchUseYn;
	}
	public int getRowType() {
		return rowType;
	}
	public void setRowType(int rowType) {
		this.rowType = rowType;
	}
	public int getTotalList() {
		return totalList;
	}
	public void setTotalList(int totalList) {
		this.totalList = totalList;
		this.setPaging();
	}
	public int getViewListCount() {
		return viewListCount;
	}
	public void setViewListCount(int viewListCount) {
		this.viewListCount = viewListCount;
	}
	public int getViewPageNum() {
		return viewPageNum;
	}
	public void setViewPageNum(int viewPageNum) {
		this.viewPageNum = viewPageNum;
	}
	public int getStartList() {
		return startList;
	}
	public void setStartList(int startList) {
		this.startList = startList;
	}
	public int getEndList() {
		return endList;
	}
	public void setEndList(int endList) {
		this.endList = endList;
	}


	
	
}
