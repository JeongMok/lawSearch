package management.lawmapper.vo;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;


public final class MacAddress {
	public static String getShortMacAddress(){
		String value="";
		try{
		value=getMacAddress();
		}catch(Exception e){
			e.printStackTrace();
		}
		value=value.replaceAll("-","");
		return value;
	}

	public final static String getMacAddress()throws IOException{
		String os = System.getProperty("os.name");
		if(os.startsWith("Windows")){
			return ParseMacAddress(windowRunIpConfigCommand());
		}else{
			throw new IOException("unknown operating system : " + os);
		}
	}
	private final static String windowRunIpConfigCommand()throws IOException{
		Process p = Runtime.getRuntime().exec("ipconfig /all");
		InputStream stdoutStream = new BufferedInputStream(p.getInputStream());
		
		StringBuffer buffer =new StringBuffer();
		for(;;){
			int c = stdoutStream.read();
			if(c==-1)
				break;
				buffer.append((char)c);
		}
		String outputText = buffer.toString();
		stdoutStream.close();
		
		return outputText;
	
	}
	public static String ParseMacAddress(String text){
		String result =null;
		String[] list = text.split("\\p{XDigit}{2}(-\\p{XDigit}{2}){5}");
		int index = 0;
		for(String str : list){
			if(str.length() < text.length()){
				index = str.length();
				result = text.substring(index, index + 17);
				if(!result.equals("00-00-00-00-00-00")){
					break;
				}
				text=text.substring(index + 17);
			}
		}
		return result;
	}
	public static void main(String[] args)throws IOException{
		System.out.print("MAC Address ::");
		System.out.println(MacAddress.getMacAddress());
	}
}
