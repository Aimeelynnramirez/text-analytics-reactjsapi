// http://5b43ba462340950014c454c0.mockapi.io/api/detection/
import React, {Component} from 'react';
// import axios from 'axios';
import ReactDOM from 'react-dom';

// const Language  = () => {
    class Language extends React.Component {
    render() {
        return (
    <div>
       <div className="lang">

          <h1>This is for Input</h1>
       </div>
    </div>
  );
}
}

ReactDOM.render(<Language />, document.getElementById('lang'));