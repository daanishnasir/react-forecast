import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js'

class WeatherList extends Component {

  renderWeather(cityData){
      const temps = cityData.list.map( weather => weather.main.temp)
      console.log(temps);
      return(
        <tr key={cityData.city.name}>
          <td>{cityData.city.name}</td>
          <td>
              <Chart data={temps} color="orange" />
          </td>
        </tr>
      )
  }



    render() {



      return (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table>

      )
    }
  }


function mapStateToProps(state){
  return { weather: state.weather }
}


// function mapDispatchToProps(dispatch){
//   return bindActionCreators( {fetchWeather}, dispatch)
// }

export default connect(mapStateToProps)(WeatherList)
