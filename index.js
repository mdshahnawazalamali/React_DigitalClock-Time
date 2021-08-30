import React from 'react';
import  ReactDOM  from 'react-dom';
import Clock from 'react-digital-clock';
import './index.css';

let curDate=new Date();
curDate=curDate.getHours();
let greeting='';
let cssStyle={};
const currDat=new Date().toLocaleDateString();
const currt=new Date().toLocaleTimeString();

if(curDate>=1&&curDate<=11)
{
  greeting='Good Morning';
  cssStyle={color:'green'};

}else if(curDate>=12&&curDate<=19)
{
  greeting='Good Afternoon';
  cssStyle={color:'orange'};
}else{
  greeting='Good Night';
  cssStyle={color:'black'};
}


ReactDOM.render(
  <>
  <div className="div1">
       <h1>
         Hello sir, <span style={cssStyle}>{greeting}</span><br></br>
        </h1> 
  </div>
  <div className="div1">
         <span className="spandiv2">{currDat}</span><br></br>
         <span className="spandiv2"><Clock /></span>     
  </div>
  </>,
  document.getElementById('root')
);