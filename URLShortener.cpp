#include<iostream>
#include<map>

using namespace std;


map<string,string> urls;



string shorten(string url){


string code="abc123";


urls[code]=url;


return code;

}



int main(){


string url;


cout<<"Enter URL:";

cin>>url;


cout<<"Short URL:"
<<shorten(url);



return 0;

}