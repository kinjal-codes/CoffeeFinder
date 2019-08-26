import React, { Component } from 'react';
import {API_DOMAIN} from "../constants";
import axios from 'axios';
export default class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading : true
    };
  }


  componentDidMount() {
    let that = this;
    let businessID = this.props.match.params.id;

    axios.get(`${API_DOMAIN}/api/business/${businessID}`)
    .then(function (response) {
      console.log(response);
      
      that.setState({
        isLoading : false,
        business:response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
      if(this.state.isLoading){
        return(<div>Loading...</div>);
      }else{
        return(<section className="reserve-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5>{this.state.business.name}</h5>
                    <p><span>$$$</span>$$</p>
                    <p className="reserve-description"></p>
                </div>
                
                <div className="col-md-6">
                    <div className="reserve-seat-block">
                        <div className="reserve-rating">
                            <span>{this.state.business.rating}</span>
                        </div>
                        <div className="review-btn">
                            <a targe="_blank" href={"https://www.yelp.com/writeareview/biz/" + this.state.business.id + "?rating=5"} className="btn btn-outline-danger">WRITE A REVIEW</a>
                            <span>{this.state.business.review_count} reviews</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <section className="light-bg booking-details_wrap">
          <div className="container">
              <div className="row">
                  <div className="col-md-8 responsive-wrap">
                      <div className="booking-checkbox_wrap">
                          <div className="booking-checkbox">
                              
                              <hr/>
                          </div>
                          <div className="row">
                              <div className="col-md-4">
                                  <label className="custom-checkbox">
                          <span className="ti-check-box"></span>
                          <span className="custom-control-description">Bike Parking</span>
                        </label> </div>
                              <div className="col-md-4">
                                  <label className="custom-checkbox">
                         <span className="ti-check-box"></span>
                         <span className="custom-control-description">Wireless Internet  </span>
                       </label>
                              </div>
                              <div className="col-md-4">
                                  <label className="custom-checkbox">
                       <span className="ti-check-box"></span>
                       <span className="custom-control-description">Smoking Allowed  </span>
                     </label> </div>
                              <div className="col-md-4">
                                  <label className="custom-checkbox">
                      <span className="ti-check-box"></span>
                      <span className="custom-control-description">Street Parking</span>
                    </label>
                              </div>
                              <div className="col-md-4">
                                  <label className="custom-checkbox">
                     <span className="ti-check-box"></span>
                     <span className="custom-control-description">Special</span>
                   </label> </div>
                              <div className="col-md-4">
                                  <label className="custom-checkbox">
                    <span className="ti-check-box"></span>
                    <span className="custom-control-description">Accepts Credit cards</span>
                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="booking-checkbox_wrap mt-4">
                          <h5>34 Reviews</h5>
                          <hr/>
                          <div className="customer-review_wrap">
                              <div className="customer-img">
                                  <img src="images/customer-img1.jpg" className="img-fluid" alt="#"/>
                                  <p>Amanda G</p>
                                  <span>35 Reviews</span>
                              </div>
                              <div className="customer-content-wrap">
                                  <div className="customer-content">
                                      <div className="customer-review">
                                          <h6>Best noodles in the Newyork city</h6>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                          <span className="round-icon-blank"></span>
                                          <p>Reviewed 2 days ago</p>
                                      </div>
                                      <div className="customer-rating">8.0</div>
                                  </div>
                                  <p className="customer-text">I love the noodles here but it is so rare that I get to come here. Tasty Hand-Pulled Noodles is the best type of whole in the wall restaurant. The staff are really nice, and you should be seated quickly. I usually get the
                                      hand pulled noodles in a soup. House Special #1 is amazing and the lamb noodles are also great. If you want your noodles a little chewier, get the knife cut noodles, which are also amazing. Their dumplings are great
                                      dipped in their chili sauce.
                                  </p>
                                  <p className="customer-text">I love how you can see into the kitchen and watch them make the noodles and you can definitely tell that this is a family run establishment. The prices are are great with one dish maybe being $9. You just have to remember
                                      to bring cash.
                                  </p>
                                  <ul>
                                      <li><img src="images/review-img1.jpg" className="img-fluid" alt="#"/></li>
                                      <li><img src="images/review-img2.jpg" className="img-fluid" alt="#"/></li>
                                      <li><img src="images/review-img3.jpg" className="img-fluid" alt="#"/></li>
                                  </ul>
                                  <span>28 people marked this review as helpful</span>
                                  <a href="#"><span className="icon-like"></span>Helpful</a>
                              </div>
                          </div>
                          <hr/>
                          <div className="customer-review_wrap">
                              <div className="customer-img">
                                  <img src="images/customer-img2.jpg" className="img-fluid" alt="#"/>
                                  <p>Kevin W</p>
                                  <span>17 Reviews</span>
                              </div>
                              <div className="customer-content-wrap">
                                  <div className="customer-content">
                                      <div className="customer-review">
                                          <h6>A hole-in-the-wall old school shop.</h6>
                                          <span className="customer-rating-red"></span>
                                          <span className="round-icon-blank"></span>
                                          <span className="round-icon-blank"></span>
                                          <span className="round-icon-blank"></span>
                                          <span className="round-icon-blank"></span>
                                          <p>Reviewed 3 months ago</p>
                                      </div>
                                      <div className="customer-rating customer-rating-red">2.0</div>
                                  </div>
                                  <p className="customer-text">The dumplings were so greasy...the pan-fried shrimp noodles were the same. So much oil and grease it was difficult to eat. The shrimp noodles only come with 3 shrimp (luckily the dish itself is cheap) </p>
                                  <p className="customer-text">The beef noodle soup was okay. I added black vinegar into the broth to give it some extra flavor. The soup has bok choy which I liked - it's a nice textural element. The shop itself is really unclean (which is the case
                                      in many restaurants in Chinatown) They don't wipe down the tables after customers have eaten. If you peak into the kitchen many of their supplies are on the ground which is unsettling... </p>
                                  <span>10 people marked this review as helpful</span>
                                  <a href="#"><span className="icon-like"></span>Helpful</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 responsive-wrap">
                      <div className="contact-info">
                          <img src="images/map.jpg" className="img-fluid" alt="#"/>
                          <div className="address">
                              <span className="icon-location-pin"></span>
                              <p> {this.state.business.location.address1}<br/> {this.state.business.location.city}<br/>  {this.state.business.location.zip_code}</p>
                          </div>
                          <div className="address">
                              <span className="icon-screen-smartphone"></span>
                              <p> {this.state.business.display_phone}</p>
                          </div>
                          <div className="address">
                              <span className="icon-link"></span>
                              <p>https://burgerandlobster.com</p>
                          </div>
                          <div className="address">
                              <span className="icon-clock"></span>
                              <p>Mon - Sun 09:30 am - 05:30 pm <br/>
                                  <span className="open-now">OPEN NOW</span></p>
                          </div>
                         
                      </div>
                     
                  </div>
              </div>
          </div>
      </section>
    </section>
  );
      }
      
  
   
  }
}
