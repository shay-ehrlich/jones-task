import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import React from 'react';


class Alert extends Component 
{

  render() {  
    
    return (
      <div className="toast">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          // pauseOnHover
/>
      </div>
    );
}}

export default Alert;