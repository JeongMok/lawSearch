package searchdictword.lawmapper.vo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DictwordSearchVO extends DictwordContentVO{
	private String dictKeyword=""; //단어 키워드
	private String dictwordCodeSearch; // 단어종류 코드
	private List<String> dictwordCodeList; //단어종류
	private String beforeIndex=""; //가나다 검색
	private String afterIndex=""; //가나다 검색
	

	public String getDictKeyword() {
		return dictKeyword;
	}

	public void setDictKeyword(String dictKeyword) {
		this.dictKeyword = dictKeyword;
	}

	public String getDictwordCodeSearch() {
		return dictwordCodeSearch;
	}

	public void setDictwordCodeSearch(String dictwordCodeSearch) {
		this.dictwordCodeSearch = dictwordCodeSearch;
		if(dictwordCodeSearch != null && !dictwordCodeSearch.equals("")){
			String[] array = dictwordCodeSearch.split("/");
			dictwordCodeList = new ArrayList<String>(Arrays.asList(array));
		}
		
	}

	public List<String> getDictwordCodeList() {
		return dictwordCodeList;
	}

	public void setDictwordCodeList(List<String> dictwordCodeList) {
		this.dictwordCodeList = dictwordCodeList;
	}

	public String getBeforeIndex() {
		return beforeIndex;
	}

	public void setBeforeIndex(String beforeIndex) {
		this.beforeIndex = beforeIndex;
	}

	public String getAfterIndex() {
		return afterIndex;
	}

	public void setAfterIndex(String afterIndex) {
		this.afterIndex = afterIndex;
	}
	 
}
