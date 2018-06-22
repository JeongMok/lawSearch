package insertlaw.lawmapper.service.impl;

import java.io.File;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;


import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import insertlaw.lawmapper.service.DictwordInsertService;
import insertlaw.lawmapper.service.dao.DictwordInsertDAO;
import insertlaw.lawmapper.util.ExcelRead;
import insertlaw.lawmapper.util.ExcelReadOption;
import insertlaw.lawmapper.vo.DictwordVO;

@Service("dictwordInsertService")
public class DictwordInsertServiceImpl implements DictwordInsertService{
	
	@Resource(name="dictwordInsertDAO")
	private DictwordInsertDAO dictwordInsertDAO;
	@Override
	public void excelTodataset(File destFile, DataSet resultDs) throws Exception {
		ExcelReadOption excelReadOption = new ExcelReadOption();
        excelReadOption.setFilePath(destFile.getAbsolutePath());
        excelReadOption.setOutputColumns("A","B","C","D","E","F","G");
        excelReadOption.setStartRow(1);
        
         
        List<Map<String, String>>excelContent =ExcelRead.read(excelReadOption);
        
        for(int i=0; i<excelContent.size();i++){
        	Map<String, String> article = excelContent.get(i);
        	System.out.println("행 수 : "+excelContent.size());
        	System.out.println("행 번호 : "+i);
        	String dictword = article.get("A");
    		String detaillink = article.get("B");
    		String dictwordCode = article.get("C");
    		String dictwordCodename = article.get("D");
    		String dictwordSource = article.get("E");
    		String mainText = article.get("F");
    		String dictwordNo = article.get("G");
    		
        	if(i==0){
        		System.out.println("컬럼명 : "+dictword);
        		System.out.println("컬럼명 : "+detaillink);
        		System.out.println("컬럼명 : "+dictwordCode);
        		System.out.println("컬럼명 : "+dictwordCodename);
        		System.out.println("컬럼명 : "+dictwordSource);
        		System.out.println("컬럼명 : "+mainText);
        		System.out.println("컬럼명 : "+dictwordNo);
        		
        		if(!dictword.equals("DICTWORD")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(DICTWORD)");
        		}
        		if(!detaillink.equals("DETAILLINK")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(DETAILLINK)");
        		}
        		if(!dictwordCode.equals("DICTWORDCODE")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(DICTWORDCODE)");
        		}
        		if(!dictwordCodename.equals("DICTWORDCODENAME")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(DICTWORDCODENAME)");
        		}
        		if(!dictwordSource.equals("DICTWORDSOURCE")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(DICTWORDSOURCE)");
        		}
        		if(!mainText.equals("MAINTEXT")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(MAINTEXT)");
        		}
        		if(!dictwordNo.equals("DICTWORDNO")){
        			throw new Exception("컬럼명이 일치하지 않습니다.(DICTWORDNO)");
        		}
        	}else{
        		
        		System.out.println("Row 값 : "+dictword);
        		System.out.println("Row 값 : "+detaillink);
        		System.out.println("Row 값 : "+dictwordCode);
        		System.out.println("Row 값 : "+dictwordCodename);
        		System.out.println("Row 값 : "+dictwordSource);
        		System.out.println("Row 값 : "+mainText);
        		System.out.println("Row 값 : "+dictwordNo);
        		
        		if(dictword.trim().equals("") || dictword==null){
        			//throw new Exception("DICTWORD 값이 존재하지 않습니다.");
        			System.out.println("PK값이 NULL 혹은 공백");
        			continue;
        		}
        		//DictwordVO dictwordVO = new DictwordVO(dictword,detaillink,dictwordCode,dictwordCodename,dictwordSource,mainText,dictwordNo);
        		
        		
        		
        		int row = resultDs.newRow();
        		System.out.println("데이터셋 행 넘버 : "+row);
        		resultDs.set(row, "chk", 1);
        		resultDs.set(row, "dictword",dictword);
        		resultDs.set(row, "detaillink",detaillink);
        		resultDs.set(row, "dictwordCode",dictwordCode);
        		resultDs.set(row, "dictwordCodename",dictwordCodename);
        		resultDs.set(row, "dictwordSource",dictwordSource);
        		resultDs.set(row, "mainText",mainText);
        		resultDs.set(row, "dictwordNo",dictwordNo);
        	}
        
        
	}
	}
	@Transactional
	@Override
	public void dictwordInsert(List<DictwordVO> dictwordVO) throws SQLException {
		for(int i=0; i<dictwordVO.size();i++){
			dictwordInsertDAO.dictInsert(dictwordVO.get(i));		
		}
	}
	@Override
	public DictwordVO excelSearch(List<DictwordVO> dictwordVO) {
		DictwordVO result = null;
		for(int i=0; i<dictwordVO.size();i++){
			result=dictwordInsertDAO.excelSearch(dictwordVO.get(i));
			if(result != null){
				return result;
			}
		}
		return result;
	}
}
