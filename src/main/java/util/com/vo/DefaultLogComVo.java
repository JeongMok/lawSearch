package util.com.vo;

public class DefaultLogComVo {
	private String search_userId;
	private String search_logType;
	private String search_logDate;
	/** 검색조건 */
	private String searchCondition = "";

	/** 검색Keyword */
	private String searchKeyword = "";

	/** 검색사용여부 */
	private String searchUseYn = "";
	
	private int rowType;
    private int page; //선택페이지
    private int totalPage; //총 페이지 수
    private int viewListCount = 15; //보여줄 게시물 수
    private int viewPageNum = 10; //보여줄 페이지번호 갯수
    private int startPage; //시작페이지
    private int endPage; //끝페이지

    private int totalList; //게시물 총 수;
    private int startList; //시작 게시물 번호
    private int endList; //끝 게시물 번호
	
  public void setPaging(){
    	
    	totalPage = totalList/viewListCount; //총 페이지 수
    	
    	if(totalList%viewListCount>0){ //나머지 생길경우 페이지 1증가
    		totalPage++;
    	}
    	if(totalPage < page && totalPage != 0){
			page=totalPage;
		}
    	
    	startList = (page-1)*viewListCount+1; // 시작 게시물번호
    	endList = page*viewListCount; // 끝 게시물 번호
    	
    	startPage = ((page-1)/10)*10+1; //시작 페이지 번호
    	endPage = (startPage-1)+viewPageNum; //끝 페이지 번호

    	//마지막 페이지는 페이지 수가 적으므로 보정해 줘야함
		if(endPage > totalPage){
			endPage = totalPage;
		}

    }
    
     public String getSearch_userId() {
    	 return search_userId;
	}
	
	public void setSearch_userId(String search_userId) {
		this.search_userId = search_userId;
	}
	
	public String getSearch_logType() {
		return search_logType;
	}
	
	public void setSearch_logType(String search_logType) {
		this.search_logType = search_logType;
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
	public int getTotalPage() {
		return totalPage;
	}
	
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	
	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
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
		return this.rowType;
	}

	public void setRowType(int rowType) {
		this.rowType = rowType;
	}

	public String getSearch_logDate() {
		return search_logDate;
	}

	public void setSearch_logDate(String search_logDate) {
		this.search_logDate = search_logDate;
	}

}
