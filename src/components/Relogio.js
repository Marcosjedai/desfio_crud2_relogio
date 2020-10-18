import React, {Component} from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd'
import moment from 'moment';
import 'moment-timezone';
import './Relogio.css'




class Time extends Component{

   constructor(props){
    super(props)
    this.state= {
      hojeData: false
    }

   }
  alteraSwitch = () => {
  this.setState({
      
     hojeData: !this.state.hojeData

 })


}


    render(){
    return (
       
           
      <div className="App">
        <div className="navbar">
             Hora Local:
           <Switch onClick={this.alteraSwitch} className="alterar"/>
        
        </div>
         <div className="horaLocal">
         < Clock format = { ' HH: mm: ss ' }  ticking = { true }  timezone = { ' America / Sao_Paulo' } / > 
         </div>
              <div className = "hojeData">
               {this.state.hojeData ? moment().format('ll'):'' }
               </div>
                    <div className="horaTaipei">
                       <p>Hora em Taipei:</p> 
                    < Clock format = { ' HH: mm: ss ' }  ticking = { true }  timezone = { 'Asia/Taipei' } / >   
                    </div>
                        <div className=" horaToronto">
                           <p>Hora em Toronto:</p> 
                        < Clock format = { ' HH: mm: ss ' }  ticking = { true }  timezone = { 'America/Toronto' } / >   
                        </div>
                        <div className="horaLosAngeles">
                               <p>Hora em Los Angeles:</p>
                             < Clock format = { ' HH: mm: ss ' }  ticking = { true }  timezone = { 'America/Los_Angeles' } / >   
                        </div>
      </div> 
    );
    }
  }

  export default Time;