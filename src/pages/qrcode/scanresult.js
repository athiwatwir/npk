import React, { Component } from 'react';


class ScannerResult extends Component {
  constructor(props) {
      super(props);

      this.state = {
        resData:''
      };
    }

    fetchFirst(url) {
    var that = this;
    if (url) {
      fetch('https://api.ipify.org?format=json').then(function (response) {
        return response.json();
      }).then(function (result) {

        //console.log(result.data.children);

        that.setState({ resData: result});

        console.log(that.state.posts);
      });
    }
  }

  componentWillMount() {

      this.fetchFirst("reactjs");

  }


  render() {


    return (
      <div>
      xx{this.props.location.state.detail}

      <p className="App-intro">

            {this.state.resData.ip}

        </p>

      </div>

    )


  }
}


export default ScannerResult;
