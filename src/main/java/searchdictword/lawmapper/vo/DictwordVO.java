package searchdictword.lawmapper.vo;

import java.util.List;

public class DictwordVO extends DictwordSearchVO{
	private String userId;
	private String dictword;
	private String detaillink;
	private String chk="1"; 
	private List<String> dictwordList;
	private int totalCount; // 총 Row 수
	private int totalPage;  // 총 페이지 수
	private int countList; //한 화면에 나타낼 row 수
	private int countPage; //한 화면에 나타낼 페이지 수
	private int page; //현재 페이지
	private int startPage; //시작페이지
	private int endPage; //끝페이지
	private int startCount; //rnum 불러올 때 시작 수
	private int endCount; //rnum 불러올 때 끝 수
	
	public void setPaging(){

		totalPage = totalCount / countList;
		
		if(totalCount % countList > 0){
			totalPage++;
		}
		
		if(page > totalPage && totalPage != 0){
			page = totalPage;
		}
		
		startPage = ((page - 1) / countPage) * countPage + 1;
		endPage = startPage + countPage - 1;
		
		if(endPage > totalPage){
			endPage = totalPage;
		}
		
		startCount = (page - 1) * countList + 1;
		endCount = page * countList;
	}

	

	public int getTotalCount() {
		return totalCount;
	}



	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
		System.out.println("총 글 개수 : "+totalCount);
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
			this.countList=15;
		}
	}



	public int getCountPage() {
		return countPage;
	}



	public void setCountPage(int countPage) {
		if(countPage != 0){
			this.countPage = countPage;
		}else{
			this.countPage=5;
		}
	}



	public int getPage() {
		return page;
	}



	public void setPage(int page) {
		if(page != 0){
			this.page = page;
		}else{
			this.page=1;
		}
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


	
	public String getUserId() {
		return userId;
	}



	public void setUserId(String userId) {
		this.userId = userId;
	}



	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}

	public String getDetaillink() {
		return detaillink;
	}
	public void setDetaillink(String detaillink) {
		this.detaillink = detaillink;
	}
	
	public String getDictword() {
		return dictword;
	}
	public void setDictword(String dictword) {
		this.dictword = dictword;
	}



	public List<String> getDictwordList() {
		return dictwordList;
	}



	public void setDictwordList(List<String> dictwordList) {
		this.dictwordList = dictwordList;
	}
	
	
}
