import React, { Component } from 'react';
import SearchResults from './SearchResults';
import TopSearch from './TopSearch';
import axios from 'axios';
import {API_DOMAIN} from "../constants";

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.loadInitialResults = this.loadInitialResults.bind(this);
    this.state = {results:[]};
  }

  loadInitialResults(location,lat,long){
    let that = this;
    console.log(location + lat + long);
    let searchLocation = location;
    if(lat && long){
      searchLocation = lat + "|" + long;
    }
    
    console.log(location);
    axios.get(`${API_DOMAIN}/api/search/${searchLocation}`)
    .then(function (response) {
      console.log(response.data.businesses);
      that.setState({
        results: response.data.businesses
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onLocationChanged(location,lat,long) {
    this.loadInitialResults(location,lat,long);
  }

  componentDidMount() {
    let that = this;
    /*axios.get(`${this.API_URL}/location`)
    .then(function (response) {
      console.log(response);
      that.loadInitialResults("",response.data.ll[0],response.data.ll[1]);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  }

  render() {
    return(
        <header className="App-header">
            <TopSearch onLocationChanged={this.onLocationChanged}/>
            <SearchResults results={this.state.results}/>                   
        </header>
    );
  }
}
