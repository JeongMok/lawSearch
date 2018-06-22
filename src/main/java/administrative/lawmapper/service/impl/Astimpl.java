package administrative.lawmapper.service.impl;

import insertlaw.lawmapper.util.ExcelRead;
import insertlaw.lawmapper.util.ExcelReadOption;

import java.io.File;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;







import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import administrative.lawmapper.service.AstService;
import administrative.lawmapper.service.dao.AstDAO;
import administrative.lawmapper.vo.AstVO;
import administrative.lawmapper.vo.SlectClickListVO;


@Service("astServiceimpl")
public class Astimpl implements AstService{

	@Resource(name = "astDAO")
	private AstDAO astDao;

	
	@Override
	public List<AstVO> selectAstList() {
		// TODO Auto-generated method stub
		return astDao.selectastDao();
	}

	@Override
	public List<AstVO> selectPaging(AstVO searchVO) {
		// TODO Auto-generated method stub
		return astDao.selectPaging(searchVO);
	}

	@Override
	public int selectCount(AstVO searchVO) {
		// TODO Auto-generated method stub
		return astDao.selectCount(searchVO);
	}

	@Override
	public List<SlectClickListVO> selectClickList(SlectClickListVO searchVO) {
		// TODO Auto-generated method stub
		return astDao.selectClickList(searchVO);
	}

	@Override
	public void insertList(SlectClickListVO searchVO) {
		// TODO Auto-generated method stub
		astDao.insertList(searchVO);
	}

	@Override
	public List<AstVO> selecthistory(AstVO searchVO) {
		// TODO Auto-generated method stub
		return astDao.selecthistory(searchVO);
	}

	@Override
	public List<AstVO> selecthistorylist(AstVO searchVO) {
		// TODO Auto-generated method stub
		return astDao.selecthistorylist(searchVO);
	}

	@Override
	public List<AstVO> selecthistorycontextlist(AstVO searchVO) {
		// TODO Auto-generated method stub
		return astDao.selecthistorycontextlist(searchVO);
	}

	@Override
	public void modifyMultiUserVO(List<AstVO> modifyList) {
		  int size = modifyList.size();
	        for (int i=0; i<size; i++) {
	        	AstVO searchVO = modifyList.get(i);
	          
	                	astDao.listupdateVO(searchVO);
	                	astDao.contextupdateVO(searchVO);
	                }
	                
	            }

	@Override
	public void execl(File destination, DataSet resultDs) {
		
			ExcelReadOption excelReadOption = new ExcelReadOption();
	        excelReadOption.setFilePath(destination.getAbsolutePath());
	        excelReadOption.setOutputColumns("A","B","C","D","E","F","G","H","I");
	        excelReadOption.setStartRow(1);
	        
	         
	        List<Map<String, String>>excelContent =ExcelRead.read(excelReadOption);
	        
	        for(int i=0; i<excelContent.size();i++){
	        	Map<String, String> article = excelContent.get(i);
	        	System.out.println("행 수 : "+excelContent.size());
	        	System.out.println("행 번호 : "+i);
	        	String deccno = article.get("A");
	        	String casename = article.get("B");
	        	String reclassname =article.get("C");
	        	String decidedate = article.get("D");
	        	String caseno = article.get("E");
	        	String maintext = article.get("F");
	        	String opiniontext =article.get("G");
	        	String reasontext = article.get("H");
	        	String repltext = article.get("I");
	        /*	String dictword = article.get("A");
	    		String detaillink = article.get("B");
	    		String dictwordCode = article.get("C");
	    		String dictwordCodename = article.get("D");
	    		String dictwordSource = article.get("E");
	    		String mainText = article.get("F");
	    		String dictwordNo = article.get("G");*/
	    		
	        	if(i==0){
	        		/*System.out.println("컬럼명 : "+dictword);
	        		System.out.println("컬럼명 : "+detaillink);
	        		System.out.println("컬럼명 : "+dictwordCode);
	        		System.out.println("컬럼명 : "+dictwordCodename);
	        		System.out.println("컬럼명 : "+dictwordSource);
	        		System.out.println("컬럼명 : "+mainText);
	        		System.out.println("컬럼명 : "+dictwordNo);*/
	        		
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
	        		
	        	/*	System.out.println("Row 값 : "+dictword);
	        		System.out.println("Row 값 : "+detaillink);
	        		System.out.println("Row 값 : "+dictwordCode);
	        		System.out.println("Row 값 : "+dictwordCodename);
	        		System.out.println("Row 값 : "+dictwordSource);
	        		System.out.println("Row 값 : "+mainText);
	        		System.out.println("Row 값 : "+dictwordNo);*/
	        		
	        		if(deccno.trim().equals("") || deccno==null){
	        			//throw new Exception("DICTWORD 값이 존재하지 않습니다.");
	        			System.out.println("PK값이 NULL 혹은 공백");
	        			continue;
	        		}
	        		//DictwordVO dictwordVO = new DictwordVO(dictword,detaillink,dictwordCode,dictwordCodename,dictwordSource,mainText,dictwordNo);
	        		
	        		
	        
	        		int row = resultDs.newRow();
	        		System.out.println("데이터셋 행 넘버 : "+row);
	        		resultDs.set(row,"chk",1);
	        		resultDs.set(row,"deccno",deccno);
	        		resultDs.set(row,"casename",casename);
	        		resultDs.set(row,"reclassname",reclassname);
	        		resultDs.set(row,"decidedate",decidedate);
	        		resultDs.set(row,"caseno",caseno);
	        		resultDs.set(row,"maintext",maintext);
	        		resultDs.set(row,"opiniontext",opiniontext);
	        		resultDs.set(row,"reasontext",reasontext);
	        		resultDs.set(row,"repltext",repltext);
	        		/*resultDs.set(row, "chk", 1);
	        		resultDs.set(row, "dictword",dictword);
	        		resultDs.set(row, "detaillink",detaillink);
	        		resultDs.set(row, "dictwordCode",dictwordCode);
	        		resultDs.set(row, "dictwordCodename",dictwordCodename);
	        		resultDs.set(row, "dictwordSource",dictwordSource);
	        		resultDs.set(row, "mainText",mainText);
	        		resultDs.set(row, "dictwordNo",dictwordNo);*/
	        	}
	        
	        
		}
		}

	@Override
	public AstVO execlselect(List<AstVO> searchVO) {
		AstVO astvo =null;
		int size = searchVO.size();
	        for (int i=0; i<size; i++) {
	        	AstVO search = searchVO.get(i);
	        	astvo= astDao.execlselect(search);
	                
	                if(astvo != null){
	        			return astvo;
	                	}
	               
	                }
			
	        return astvo;      
	}

	@Override
	public void execlmody(List<AstVO> execlmodyfy) {
		int size = execlmodyfy.size();
        for (int i=0; i<size; i++) {
        	AstVO searchVO = execlmodyfy.get(i);
          
                	astDao.execlmodyfy(searchVO);
                	astDao.execltext(searchVO);
                }
                
            }

		
	
		
	
	            
	        
		
	



}
