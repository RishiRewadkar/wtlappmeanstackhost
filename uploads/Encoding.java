import java.io.FileNotFoundException;
import java.io.PrintWriter;

import org.json.*;

public class Encoding {
 public static void main(String argu[]) {
  JSONObject jo = new JSONObject();
  try {
	jo.put("Name", "Ajit");
	jo.put("Roll", "31422");
	jo.put("Class", "TE");
	jo.put("Email", "ajit@gmail.com");
  } catch (JSONException e) {
	e.printStackTrace();
  }
  try {
	PrintWriter pw=new PrintWriter("MyJsonObject.json");
	pw.write(jo.toString());
	pw.close();
} catch (FileNotFoundException e) {
	e.printStackTrace();
}
  System.out.print(jo);
 }
}
