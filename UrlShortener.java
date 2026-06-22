import java.util.*;


public class UrlShortener {


static HashMap<String,String> urls=
new HashMap<>();


static String shorten(String url){


String code=
UUID.randomUUID()
.toString()
.substring(0,6);


urls.put(code,url);


return code;

}



public static void main(String args[]){


Scanner sc=new Scanner(System.in);


System.out.println("Enter URL:");

String url=sc.nextLine();



String shortUrl=
shorten(url);



System.out.println(
"Short URL: "+shortUrl
);


}

}