import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import QrReader from 'react-qr-reader';
import {browserHistory} from 'react-router';
import {withRouter} from "react-router-dom";

class Scanner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result'

    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
      this.props.history.push({pathname:"/qrcode/scanresult",search:"",state: { detail: data }});
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default withRouter(Scanner)
