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



class App extends Component {
  render() {
    return (
      
      <div className="App">
      
     
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
