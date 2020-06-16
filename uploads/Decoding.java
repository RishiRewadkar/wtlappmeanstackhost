
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.json.*;

public class Decoding {

	public static void main(String argc[]) throws JSONException, IOException, ParseException{
		FileReader fr;
		JSONParser parseobj=new JSONParser();
		
		fr = new FileReader("MyJsonObject.json");
		
		JSONObject myjo=(JSONObject) parseobj.parse(fr);
		System.out.println("Name: "+myjo.get("Name"));
		System.out.println("Roll: "+myjo.get("Roll"));
		System.out.println("Class: "+myjo.get("Class"));
		System.out.println("Email: "+myjo.get("Email"));
		
	}
}
