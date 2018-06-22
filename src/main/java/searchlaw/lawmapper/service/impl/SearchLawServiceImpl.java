package searchlaw.lawmapper.service.impl;

import insertlaw.lawmapper.util.ExcelRead;
import insertlaw.lawmapper.util.ExcelReadOption;
import insertlaw.lawmapper.vo.PrecedentInsertVO;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.xapi.data.DataSet;

import searchlaw.lawmapper.service.SearchLawService;
import searchlaw.lawmapper.service.dao.SearchLawMapper;
import searchlaw.lawmapper.vo.LawInfoVO;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 법령 검색 위한 Service interface 의 Impl
 * 
 * @author Son GaYeon
 * @since 11.04.2018
 * @version 0.1
 * @see
 */

@Service("searchLawService")
public class SearchLawServiceImpl extends EgovAbstractServiceImpl implements SearchLawService {

	
	@Resource(name = "searchLawMapper")
	private SearchLawMapper searchLawMapper;
	
	/**
	 * Form 로딩시, 검색을 위한 LawClassName 목록 가져오기
	 */
	@Override
	public List<LawInfoVO> selectLawClassName() {
		return searchLawMapper.selectLawClassNameVOList();
	}
	
	
	/**
	 * 법령 검색
	 */
	@Override
	public List<LawInfoVO> selectLawInfoVOList(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectLawInfoVOList(lawInfoVO);
	}
	/**
	 * 페이징
	 */
	@Override
	public int selectSampleCount(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectSampleCount(lawInfoVO);
	}
	/**
	 * 부칙 검색
	 */
	@Override
	public List<LawInfoVO> selectLawSubList(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectLawSubList(lawInfoVO);
	}
	@Override
	public int selectLawSubCount(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectLawSubCount(lawInfoVO);
	}

	/**
	 * 조문 검색
	 */
	@Override
	public List<LawInfoVO> selectLawArticleList(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectLawArticleList(lawInfoVO);
	}
	@Override
	public int selectLawArticleCount(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectLawArticleCount(lawInfoVO);
	}
	@Override
	public List<LawInfoVO> selectLawItemList(LawInfoVO lawInfoVO) {
		return searchLawMapper.selectLawItemList(lawInfoVO);
	}
	@Override
	public List<LawInfoVO> searchArticleNo(LawInfoVO lawInfoVO) {
		return searchLawMapper.searchArticleNo(lawInfoVO);
	}
	
	@Override
	public LawInfoVO getLawArticleCount(LawInfoVO lawInfoVO) {
		return searchLawMapper.getLawArticleCount(lawInfoVO);
	}
	
	@Override
	public LawInfoVO getLawSubCount(LawInfoVO lawInfoVO) {
		return searchLawMapper.getLawSubCount(lawInfoVO);
	}
	
	@Override
	public void updateLawList(List<LawInfoVO> modifyList) {
		
		int size = modifyList.size();
        for (int i=0; i<size; i++) 
        {
        	LawInfoVO sample = modifyList.get(i);
            searchLawMapper.updateLawList(sample);
        }
            
	}
	
	@Override
	public void excelTodataset(File destFile, DataSet resultDs) throws Exception {
		ExcelReadOption excelReadOption = new ExcelReadOption();
        excelReadOption.setFilePath(destFile.getAbsolutePath());
        excelReadOption.setOutputColumns("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L");
        excelReadOption.setStartRow(2);
        
         
        List<Map<String, String>>excelContent =ExcelRead.read(excelReadOption);
        
        for(int i=0; i<excelContent.size();i++){
        	Map<String, String> article = excelContent.get(i);
        	System.out.println("행 수 : "+excelContent.size());
        	System.out.println("행 번호 : "+i);
        	String lawId = article.get("A");
        	String lawNo = article.get("B");
        	String nowHistoryCode = article.get("C");
        	String lawName = article.get("D");
    		String createDate = article.get("E");
    		String createNo = article.get("F");
    		String isModify = article.get("G");
    		String careDept = article.get("H");
    		String lawClassName = article.get("I");
    		String actDate = article.get("J");
    		String isSelf = article.get("K");
    		String detailLink = article.get("L");
    		
    		int row = resultDs.newRow();
    		System.out.println("데이터셋 행 넘버 : "+row);
    		resultDs.set(row, "chk", 1);
    		resultDs.set(row, "lawId",lawId);
    		resultDs.set(row, "lawNo",lawNo);
    		resultDs.set(row, "nowHistoryCode",nowHistoryCode);
    		resultDs.set(row, "lawName",lawName);
    		resultDs.set(row, "createDate",createDate);
    		resultDs.set(row, "createNo",createNo);
    		resultDs.set(row, "isModify",isModify);
    		resultDs.set(row, "careDept",careDept);
    		resultDs.set(row, "lawClassName",lawClassName);
    		resultDs.set(row, "actDate",actDate);
    		resultDs.set(row, "isSelf",isSelf);
    		resultDs.set(row, "detailLink",detailLink);
        	
        }
	}
	
	@Transactional
	@Override
	public void lawListInsert(List<LawInfoVO> lawinfoVOList) throws SQLException {
		for(int i = 0; i < lawinfoVOList.size();i++){
			searchLawMapper.lawListInsert(lawinfoVOList.get(i));		
		}

	}
	
	
	
	/**
	 * 법령 insert update	// xml 파싱 -> json 으로 바꿀 예정
	 */
//	public void updateLawList(LawInfoVO lawInfoVO) {
//		
//		Connection conn = null;
//		PreparedStatement pstmt = null;
//		PreparedStatement pstmt2 = null;
//		
//		try {
//			
//			String sql = "UPDATE	T_LAWLIST "+
//				    	" SET		LAWNO = ?, "+
//								  " NOWHISTORYCODE = ?, "+
//								  " LAWNAME = ?, "+
//								  " CREATEDATE = ?, "+
//								  " CREATENO = ?, "+
//								  " ISMODIFY = ?, "+
//								  " CAREDEPT = ?, "+
//								  " LAWCLASSNAME = ?, "+
//								  " ACTDATE = ?, "+
//								  " ISSELF = ?, "+
//								  " DETAILLINK = ? "+
//						" WHERE 	LAWID = ?";
//			
//			String sql2 = "UPDATE	T_LAWBASEINFO "+
//					      " SET		CATENO = ?, "+
//								  " ISSHOW = ?, "+
//								  " MODIFYTEXT = ?, "+
//								  " MODIFYREASON = ? "+
//					      " WHERE 	LAWID = ?";
//			
//			conn = DriverManager.getConnection("jdbc:oracle:thin:@192.168.0.50:1521:XE", "lawhelper", "lawhelper");
//			conn.setAutoCommit(false);
//			
//			pstmt=conn.prepareStatement(sql);
//			pstmt2=conn.prepareStatement(sql2);
//			
//			pstmt.setString(1, lawInfoVO.getLawNo());
//			pstmt.setString(2, lawInfoVO.getNowHistoryCode());
//			pstmt.setString(3, lawInfoVO.getLawName());
//			pstmt.setString(4, lawInfoVO.getCreateDate());
//			pstmt.setString(5, lawInfoVO.getCreateNo());
//			pstmt.setString(6, lawInfoVO.getIsModify());
//			pstmt.setString(7, lawInfoVO.getCareDept());
//			pstmt.setString(8, lawInfoVO.getLawClassName());
//			pstmt.setString(9, lawInfoVO.getActDate());
//			pstmt.setString(10, lawInfoVO.getIsSelf());
//			pstmt.setString(11, lawInfoVO.getDetailLink());
//			pstmt.setString(12, lawInfoVO.getLawId());
//			
//			pstmt2.setString(1, lawInfoVO.getCateNo());
//			pstmt2.setString(2, lawInfoVO.getIsShow());
//			pstmt2.setString(3, lawInfoVO.getModifyText());
//			pstmt2.setString(4, lawInfoVO.getModifyReason());
//			pstmt2.setString(5, lawInfoVO.getLawId());
//			
//			pstmt.executeUpdate();
//			pstmt2.executeUpdate();
//			
////			searchLawMapper.updateLawList(lawInfoVO);
////			searchLawMapper.updateLawBase(lawInfoVO);
//			
//			conn.commit();
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//			if(conn != null)
//			{
//				try {
//					conn.rollback();
//				} catch (SQLException e2) {}
//			}
//		} finally {
//			try {
//				conn.setAutoCommit(true);
//				if(pstmt != null)
//				{
//					pstmt.close();
//				}
//				if(conn != null)
//				{
//					conn.close();
//				}
//			} catch (SQLException e2) {}
//		}
//		
//	}
	
	
	
}
