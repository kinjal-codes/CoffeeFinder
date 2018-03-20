import React, { Component } from 'react';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults(e){
    
  }

  render() {
    var displayList = this.props.results.map((result) => {
      return (
           
        <div className="col-md-4 featured-responsive" key={result.id}>
            <div className="featured-place-wrap">
                <a href={"/business/" + result.id}>
                    <img src={result.image_url} className="img-fluid" alt="#"/>
                    <span className="featured-rating-orange">{result.rating}</span>
                    <div className="featured-title-box">
                        <h6>{result.name}</h6>
                        <p>Restaurant </p> <span>• </span>
                        <p>{result.review_count} Reviews</p> <span> • </span>
                        <p><span>{result.price}</span></p>
                        <ul>
                            <li>
                                <span className="icon-location-pin"></span>
                                <p>{result.location.address1}, {result.location.city}, {result.location.zip_code}</p>
                            </li>
                            <li>
                                <span className="icon-screen-smartphone"></span>
                                <p>{result.display_phone}</p>
                            </li>
                            {/*<li>
                                <span className="icon-link"></span>
                                <p>https://burgerandlobster.com</p>
                            </li>*/}

                        </ul>
                        <div className="bottom-icons">
                            <div className="closed-now">{result.is_closed ? "CLOSED NOW" : "OPEN"}</div>
                           {/* <span className="ti-heart"></span>
                            <span className="ti-bookmark"></span>*/}
                        </div>
                    </div>
                </a>
            </div>
         </div>
      );
    });

    return(<section className="main-block light-bg">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="styled-heading">
                    <h3>Top Places Near You</h3>
                </div>
            </div>
        </div>
        <div className="row">{displayList}</div>
                
                </div>
            </section>);

  }
}
