import React, { Component } from 'react'
import axios from 'axios'

function dateData(date,tmax,tmin) {
  this.ddate = date;
  this.dtmax = tmax;
  this.dtmin = tmin;
}


class App extends Component {
  constructor () {
    super()
    this.state = {
      array: [],
      date: '',
      tmax: 0,
      tmin: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick () {
   // http://18.219.59.166
    //axios.get('http://18.188.56.237' + '/forecast/' + document.getElementById('xValue').value)
      //.then(response => this.setState({date: response.data[0].DATE}))
      axios.get('http://18.188.56.237' + '/forecast/' + document.getElementById('xValue').value)
      var newDate = new dateData(response.data[0].DATE, response.data[0].TMAX, response.data[0].TMIN)
      console.log('word');
     
     
      //console.log(name);


  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.array}</p>
      </div>
    )
  }
}
export default App
