import React from 'react'
import plotting from '../img/category/plotting.jpg'
import bungalow from '../img/category/bungalow.jpg'
import row_house from '../img/category/row_house.png'
import farm_house from '../img/category/farm_house.jpg'
import Commercial from '../img/category/Commercial.jpeg'
import Residential from '../img/category/Residential.jpg'
import hotel_design from '../img/category/hotel_design.jpg'
import hospital_design from '../img/category/hospital_design.jpg'
import interior_design from '../img/category/interior_design.jpg'
import high_building from '../img/category/high-rise-building.jpg'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.handleViewMore = this.handleViewMore.bind(this)
    }

    handleViewMore(e) {
        if (e != '') {
            window.localStorage.setItem('category', e.target.className);

            var user = window.localStorage.getItem('user');
            if (user) {
                window.location.href = '/form';
            } else {
                window.location.href = '/login';
            }
        }
    }

    render() {
        return (
            <div className="section-offer container">
                <div className="sub-section-offer">
                    <h6>| Category</h6>
                    <h1>Arkose Services</h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={Residential} alt='' height={240} />
                            <h3>Residential</h3>
                            <input type='button' id="view-more" className="Residential" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={Commercial} alt='' height={240} />
                            <h3>Commercial</h3>
                            <input type='button' id="view-more" className="Commercial" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={high_building} alt='' height={240} />
                            <h3>High Rise building</h3>
                            <input type='button' id="view-more" className="High Rise building" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={interior_design} alt='' height={240} />
                            <h3>Interior Design</h3>
                            <input type='button' id="view-more" className="Interior Design" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={row_house} alt='' height={240} />
                            <h3>Row House</h3>
                            <input type='button' id="view-more" className="Row House" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={hotel_design} alt='' height={240} />
                            <h3>Hotel Design & Development</h3>
                            <input type='button' id="view-more" className="Hotel Design & Development" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={hospital_design} alt='' height={240} />
                            <h3>Hospital Design & Development</h3>
                            <input type='button' id="view-more" className="Hospital Design & Development" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={farm_house} alt='' height={240} />
                            <h3>Farm House</h3>
                            <input type='button' id="view-more" className="Farm House" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={plotting} alt='' height={240} />
                            <h3>Plotting</h3>
                            <input type='button' id="view-more" className="Plotting" value='Read More' onClick={this.handleViewMore} />
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                            <img className="" src={bungalow} alt='' height={240} />
                            <h3>Bungalow Design</h3>
                            <input type='button' id="view-more" className="Bungalow Design" value='Read More' onClick={this.handleViewMore} />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Category

