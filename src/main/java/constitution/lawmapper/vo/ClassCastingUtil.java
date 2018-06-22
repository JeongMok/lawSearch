package constitution.lawmapper.vo;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Clob;
import java.sql.SQLException;

public class ClassCastingUtil {
	public static String ClobToStr(Clob clob) throws IOException, SQLException{
		System.out.println("clob to string들어옴");
		  BufferedReader contentReader = new BufferedReader(clob.getCharacterStream());

		  StringBuffer out = new StringBuffer();

		  String aux;

		  while ((aux=contentReader.readLine())!=null) {
		   out.append(aux+"\n");
		  }
		  contentReader.close();
		  return out.toString();
		 }
}
