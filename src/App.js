import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import './Dialog.js';
import './Title.js';
import './LangDetection.js';


import IconButton from '@material-ui/core/IconButton';
import MUIDataTable from "mui-datatables";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// columns per array
//const columns = ["Name", "City", "Birth", "Phone"];
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
 
// add array to parse string the data output because for postman 
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
}

// this is example how to use node for JSON

class App extends Component {
  render() {
    return (
      
      <div className="App">
      
        <AppBar position="static">
        
         <Toolbar>
           <IconButton color="inherit" aria-label="Menu"  onClick={()=>{ alert('Sorry You Clicked on Hamburger Menu...mhmm...yum.'); }}>
             <MenuIcon />
           </IconButton>
           <Typography variant="title" color="inherit"    onClick={()=>{ alert('Sorry You Clicked on Title to Be Made'); }}>
             Title

           </Typography>
           <Button color="inherit"  onClick={()=>{ alert('Sorry You clicked on Login to be created'); }}>Login</Button>
         </Toolbar>
       </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Text Analysis API</h1>
        </header>
        <p className="App-intro"> Only One Data Set (purchase)  </p>

<MUIDataTable 
  title={"Language Detection"} 
  data={data} 
  columns={columns} 
  options={options} 
/>
          <p>
        checkout the dev tools <code>source code</code> to see data.
        </p>
        <p>
        checkout the dev tools <code>source code</code> node api saved.
        </p>
        <p> RELOAD for appending data input on todo.        </p>
   
      </div>
    );
  }
}

export default App;
