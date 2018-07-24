#Text Anayltics 
- Microsoft Azure 

#API end point:
 
- https://northeurope.api.cognitive.microsoft.com/text/analytics/v2.0 
-https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c6

Key:
#Microsoft keys:

Name: Interflora
key1: 31815b3d6f134046bf0ed21fa8ec3317
key2: 1c575b5debde4b22b7cbcf172280f9c6


run `npm install` `npm run start` before build
run `./build.sh`


#Routes:

 /sentiment
/keyPhrases
/languages
/entities

`

columns per array
const columns = ["Name", "City", "Birth", "Phone"];
const columns = [
 {
   name: "Id",
   options: {
    filter: true,
    sort: true,
   }
  },      
  {
   name: "Documents",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "Score",
   options: {
    filter: true,
    sort: false,
   }
  },  
  {
   name: "Name",
   options: {
    filter: true,
    sort: false,
   }
  },
 ];
 
add array to parse string the data output because for postman 
const data = [
["54345597-3cfc-4958-ae06-17e9072af392", "detectedLanguages", "0.1", "English"],
["54345597-3cfc-4958-ae06-17e9072af392", "sentiment", " 0.90802371501922607", ""],
["54345597-3cfc-4958-ae06-17e9072af392", "enitites", " 0.90802371501922607", ""]

];

const options = {
  filterType: 'checkbox',
};


var string = '{"languageDetection": {"documents": [{"id": "54345597-3cfc-4958-ae06-17e9072af392","detectedLanguages": [ {  "name": "English",  "iso6391Name": "en",  "score": 1.0  }  ]  }  ],  "errors": []  },"sentiment": {  "documents": [{  "id": "54345597-3cfc-4958-ae06-17e9072af392",    "score": 0.90802371501922607  }],  "errors": []},"entities": {  "documents": [  {  "id": "54345597-3cfc-4958-ae06-17e9072af392","entities": []  }],  "errors": []}}'
try {
  var obj = JSON.parse(string);
console.log('languageDetection obj:', obj.languageDetection.documents[0])
console.log('sentiment obj:', obj.sentiment.documents[0])
 console.log('entities obj:' , obj.entities.documents);
  console.log('getting error obj for example:' , obj.entities.errors);
var text = '{ "name":"Aimee", "birth":"1990-12-22T11:11:11.011", "city":"Boston", "phone":"401-269-1640"}';
var obj2 = JSON.parse(text);
obj2.birth = new Date(obj2.birth);
console.log(obj2);

} catch (ex) {
  console.error(ex);
}` 

this is example how to use node for JSON on api string to be pulled