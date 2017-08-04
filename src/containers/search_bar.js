import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
     super(props);

     this.state = {
        term: "",
     }


     this.onInputChange = this.onInputChange.bind(this)
     this.onFormSubmit = this.onFormSubmit.bind(this)
   }

//if callback needs to bind to this, you need to bind the call back^

//all onChange, onHover, onClick, onSubmits all these and more come with an event object
onInputChange(event){
  // console.log(event.target.value);
  this.setState( {term: event.target.value} )
}

onFormSubmit(event) {
  event.preventDefault();
  //tells the browser don't submit the form
  //always gotta prevent default with forms


    // We need to go fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState( {term: ''})   //to clear it out after
}

    render() {


      return (
        <form onSubmit= {this.onFormSubmit} className="input-group">
           <input
              placeholder="Get a five day forecast in your favorite cities"
              className="form-control"
              value={this.state.term}
              onChange = {this.onInputChange}
             />
           <span className="input-group-btn">
             <button type="submit" className="btn btn-secondary"> Submit </button>

           </span>
        </form>

      )
    }
  }


  function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchWeather }, dispatch)
  }


//null because we don't need any state
export default connect(null, mapDispatchToProps)(SearchBar);
