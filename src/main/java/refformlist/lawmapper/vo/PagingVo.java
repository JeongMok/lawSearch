package refformlist.lawmapper.vo;

public class PagingVo {
	//페이징 처리
    private int page=1; //선택페이지
    private int totalList; //게시물 총 수
    private int totalPage; //총 페이지 수
    private int viewListCount = 10; //보여줄 게시물 수
    private int viewPageNum = 10; //보여줄 페이지번호 갯수
    private int startPage; //시작페이지
    private int endPage; //끝페이지
    private int startList; //시작 게시물 번호
    private int endList; //끝 게시물 번호
    
    /*페이징 처리 시작*/
    public void setPaging(){
    	
    	totalPage = totalList/viewListCount; //총 페이지 수
    	System.out.println("totalPage :"+totalPage);
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
	/*페이징 처리 끝*/
}
