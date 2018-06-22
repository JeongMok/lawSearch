package insertlaw.lawmapper.service;

import insertlaw.lawmapper.vo.DictwordVO;

import java.io.File;
import java.sql.SQLException;
import java.util.List;

import com.nexacro.xapi.data.DataSet;

public interface DictwordInsertService {
	public void excelTodataset(File destFile, DataSet resultDs) throws Exception;
	public void dictwordInsert(List<DictwordVO> dictwordVO) throws SQLException;
	public DictwordVO excelSearch(List<DictwordVO> dictwordVO);
}
