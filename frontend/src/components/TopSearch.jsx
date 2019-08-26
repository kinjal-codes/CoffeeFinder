import React, { Component } from 'react';
import axios from 'axios';
import {API_DOMAIN} from "../constants";
export default class TopSearch extends Component {
  constructor(props) {
    super(props);
    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.SubmitLocation = this.SubmitLocation.bind(this);    
    
    this.state = {
        location:""
    }
  }

  onLocationChanged(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  SubmitLocation(e){
    e.preventDefault();
    this.props.onLocationChanged(this.state.location);
  }

  componentDidMount() {
    let that = this;
    axios.get(`${API_DOMAIN}/api/location`)
    .then(function (response) {
      console.log(response);
      //that.loadInitialResults("",response.data.ll[0],response.data.ll[1]);
      that.setState({
        location: response.data.city + "," + response.data.region
      });
      that.props.onLocationChanged("",response.data.ll[0],response.data.ll[1]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
        <section className="slider d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="slider-title_box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-content_wrap">
                                        <h1>Discover great coffee places</h1>
                                        <h5>Looks like you are in {this.state.location}!</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-10">
                                    <form className="form-wrap mt-4">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <input type="text" placeholder="New york" className="btn-group2" name="location" onChange={this.onLocationChanged} value={this.state.location}/>
                                            <button type="submit" className="btn-form" onClick={this.SubmitLocation}><span className="icon-magnifier search-icon"></span>SEARCH<i className="pe-7s-angle-right"></i></button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
  }

}