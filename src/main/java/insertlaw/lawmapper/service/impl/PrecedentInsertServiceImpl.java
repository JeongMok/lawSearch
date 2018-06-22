package insertlaw.lawmapper.service.impl;

import java.io.File;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import insertlaw.lawmapper.service.PrecedentInsertService;
import insertlaw.lawmapper.service.dao.PrecedentInsertDAO;
import insertlaw.lawmapper.util.ExcelRead;
import insertlaw.lawmapper.util.ExcelReadOption;
import insertlaw.lawmapper.vo.PrecedentInsertVO;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

@Service("precedentInsertService")
public class PrecedentInsertServiceImpl implements PrecedentInsertService {

	@Resource(name = "precedentInsertDAO")
	private PrecedentInsertDAO precedentInsertDAO;

	@Override
	public void excelTodataset(File destFile, DataSet resultDs)
			throws Exception {
		ExcelReadOption excelReadOption = new ExcelReadOption();
        excelReadOption.setFilePath(destFile.getAbsolutePath());
        excelReadOption.setOutputColumns("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P");
        excelReadOption.setStartRow(1);
        
         
        List<Map<String, String>>excelContent =ExcelRead.read(excelReadOption);
        
        for(int i=0; i<excelContent.size();i++){
        	Map<String, String> article = excelContent.get(i);
        	System.out.println("행 수 : "+excelContent.size());
        	System.out.println("행 번호 : "+i);
        	String precno = article.get("A");
        	String casename = article.get("B");
        	String caseno = article.get("C");
        	String judgedate = article.get("D");
    		String courtname = article.get("E");
    		String courtclasscode = article.get("F");
    		String caseclassname = article.get("G");
    		String caseclasscode = article.get("H");
    		String judgeclassname = article.get("I");
    		String judge = article.get("J");
    		String precdetaillink = article.get("K");
    		String casetext = article.get("L");
    		String judgetext = article.get("M");
    		String referlaw = article.get("N");
    		String referjudge = article.get("O");
    		String maintext = article.get("P");
    		
        	if(i==0){
        		System.out.println("컬럼명 : "+precno);
        		System.out.println("컬럼명 : "+judgedate);
        		System.out.println("컬럼명 : "+casename);
        		System.out.println("컬럼명 : "+caseno);
        		System.out.println("컬럼명 : "+courtname);
        		System.out.println("컬럼명 : "+courtclasscode);
        		System.out.println("컬럼명 : "+caseclasscode);
        		System.out.println("컬럼명 : "+caseclassname);
        		System.out.println("컬럼명 : "+judgeclassname);
        		System.out.println("컬럼명 : "+judge);
        		System.out.println("컬럼명 : "+precdetaillink);
        		System.out.println("컬럼명 : "+casetext);
        		System.out.println("컬럼명 : "+judgetext);
        		System.out.println("컬럼명 : "+referlaw);
        		System.out.println("컬럼명 : "+referjudge);
        		System.out.println("컬럼명 : "+maintext);
        		
        		/*if(!dictword.equals("DICTWORD")){
        			throw new Exception("컬럼명이 일치하지 않음(DICTWORD)");
        		}
        		if(!detaillink.equals("DETAILLINK")){
        			throw new Exception("컬럼명이 일치하지 않음(DETAILLINK)");
        		}
        		if(!dictwordCode.equals("DICTWORDCODE")){
        			throw new Exception("컬럼명이 일치하지 않음(DICTWORDCODE)");
        		}
        		if(!dictwordCodename.equals("DICTWORDCODENAME")){
        			throw new Exception("컬럼명이 일치하지 않음(DICTWORDCODENAME)");
        		}
        		if(!dictwordSource.equals("DICTWORDSOURCE")){
        			throw new Exception("컬럼명이 일치하지 않음(DICTWORDSOURCE)");
        		}
        		if(!mainText.equals("MAINTEXT")){
        			throw new Exception("컬럼명이 일치하지 않음(MAINTEXT)");
        		}
        		if(!dictwordNo.equals("DICTWORDNO")){
        			throw new Exception("컬럼명이 일치하지 않음(DICTWORDNO)");
        		}*/
        	}else{
        		
        		System.out.println("컬럼명 : "+precno);
        		System.out.println("컬럼명 : "+judgedate);
        		System.out.println("컬럼명 : "+casename);
        		System.out.println("컬럼명 : "+caseno);
        		System.out.println("컬럼명 : "+courtname);
        		System.out.println("컬럼명 : "+courtclasscode);
        		System.out.println("컬럼명 : "+caseclasscode);
        		System.out.println("컬럼명 : "+caseclassname);
        		System.out.println("컬럼명 : "+judgeclassname);
        		System.out.println("컬럼명 : "+judge);
        		System.out.println("컬럼명 : "+precdetaillink);
        		System.out.println("컬럼명 : "+casetext);
        		System.out.println("컬럼명 : "+judgetext);
        		System.out.println("컬럼명 : "+referlaw);
        		System.out.println("컬럼명 : "+referjudge);
        		System.out.println("컬럼명 : "+maintext);
        		
        		/*if(precno.trim().equals("") || precno==null){
        			//throw new Exception("DICTWORD 값이 존재하지 않습니다.");
        			System.out.println("precno 기본키 값이 NULL 혹은 공백");
        			continue;
        		}*/
        		//DictwordVO dictwordVO = new DictwordVO(dictword,detaillink,dictwordCode,dictwordCodename,dictwordSource,mainText,dictwordNo);
        		
        		
        		
        		int row = resultDs.newRow();
        		System.out.println("데이터셋 행 넘버 : "+row);
        		resultDs.set(row, "chk", 1);
        		resultDs.set(row, "precno",precno);
        		resultDs.set(row, "casename",casename);
        		resultDs.set(row, "caseno",caseno);
        		resultDs.set(row, "judgedate",judgedate);
        		resultDs.set(row, "courtname",courtname);
        		resultDs.set(row, "courtclasscode",courtclasscode);
        		resultDs.set(row, "caseclassname",caseclassname);
        		resultDs.set(row, "caseclasscode",caseclasscode);
        		resultDs.set(row, "judgeclassname",judgeclassname);
        		resultDs.set(row, "judge",judge);
        		resultDs.set(row, "precdetaillink",precdetaillink);
        		resultDs.set(row, "casetext",casetext);
        		resultDs.set(row, "judgetext",judgetext);
        		resultDs.set(row, "referlaw",referlaw);
        		resultDs.set(row, "referjudge",referjudge);
        		resultDs.set(row, "maintext",maintext);
        	}
        }
	}

	@Transactional
	@Override
	public void precedentInsert(List<PrecedentInsertVO> precedentInsertVO)
			throws SQLException {
		for(int i = 0; i < precedentInsertVO.size();i++){
			precedentInsertDAO.precedentInsert(precedentInsertVO.get(i));		
		}
		
	}
	
	/*@Override
	public void precedentList(PrecedentInsertVO precedentInsertVO) {
		precedentInsertDAO.precedentList(precedentInsertVO);
	}

	@Override
	public void precedentText(PrecedentInsertVO precedentInsertVO) {
		precedentInsertDAO.precedentText(precedentInsertVO);
	}

	@Override
	public List<PrecedentInsertVO> courtNameSelect(PrecedentInsertVO precedentInsertVO) {
		List<PrecedentInsertVO> list = precedentInsertDAO.courtNameSelect(precedentInsertVO);
		return list;
	}

	@Override
	public List<PrecedentInsertVO> caseClassSelect(PrecedentInsertVO precedentInsertVO) {
		List<PrecedentInsertVO> list = precedentInsertDAO.caseClassSelect(precedentInsertVO);
		return list;
	}

	@Override
	public List<PrecedentInsertVO> judgeClassSelect(PrecedentInsertVO precedentInsertVO) {
		List<PrecedentInsertVO> list = precedentInsertDAO.judgeClassSelect(precedentInsertVO);
		return list;
	}

	@Override
	public List<PrecedentInsertVO> judgeSelect(PrecedentInsertVO precedentInsertVO) {
		List<PrecedentInsertVO> list = precedentInsertDAO.judgeSelect(precedentInsertVO);
		return list;
	}*/
}