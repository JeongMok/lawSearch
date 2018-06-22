package insertlaw.lawmapper.service;

import java.io.File;
import java.sql.SQLException;
import java.util.List;

import com.nexacro.xapi.data.DataSet;

import insertlaw.lawmapper.vo.PrecedentInsertVO;

public interface PrecedentInsertService {

	/*public void precedentList(PrecedentInsertVO precedentInsertVO);

	public void precedentText(PrecedentInsertVO precedentInsertVO);

	public List<PrecedentInsertVO> courtNameSelect(PrecedentInsertVO precedentInsertVO);

	public List<PrecedentInsertVO> caseClassSelect(PrecedentInsertVO precedentInsertVO);

	public List<PrecedentInsertVO> judgeClassSelect(PrecedentInsertVO precedentInsertVO);

	public List<PrecedentInsertVO> judgeSelect(PrecedentInsertVO precedentInsertVO);*/

	public void excelTodataset(File destFile, DataSet resultDs) throws Exception;

	public void precedentInsert(List<PrecedentInsertVO> precedentInsertVO) throws SQLException;

}