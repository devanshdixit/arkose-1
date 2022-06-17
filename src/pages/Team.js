import React from 'react'
import axios from 'axios'
import config from '../config'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Team extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                team: [],
            }
        }
    }
    componentDidMount() {
        let apiUrl_team = `${config.api.host}/get_team`

        axios.get(apiUrl_team, {
            crossDomain: false,
            enablePreflight: false
        }).then((response) => {
            this.setState({
                team: response.data.team
            })
        })
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return (
            <>
                <div className=" container" style={{paddingTop:"50px",}}>
                <Slider {...settings}>
                {this.state.team && this.state.team.map((item, index) => {
                    return(
                        <div className="imgBox col-lg-3" style={{}}>
                            <div style={{maxHeight:"500px",borderRadius:'50%',overflow:'hidden',padding:"0 10px"}}>
                                <img
                                    className="team-member"
                                    src={config.server.host + '/writable/uploads/' + item.profile}
                                    alt=""
                                    style={{height:"auto", maxWidth: "100%",maxHeight:"250px",objectFit: "contain"}}
                                />
                            </div>
                            <h6>{item.designation}</h6>
                            <h5>{item.name}</h5>
                            {/* <div className="image-overlay">
                                <div className="social-icon">
                                    <img
                                        className="social-icon-img"
                                        src={require('../img/whatsapp.png')}
                                        alt=""
                                    />
                                    <h6 style={{ fontWeight: 'bold' }}>+91 {item.number}</h6>
                                </div>
                                <div className="social-icon">
                                    <img
                                        className="social-icon-img"
                                        src={require('../img/email.png')}
                                        alt=""
                                    />
                                    <h6 style={{ fontWeight: 'bold' }}>
                                        {item.email}
                                    </h6>
                                </div>
                            </div> */}
                        </div>)
                })}
    </Slider>
    {/* <Slider {...settings}>
                    {this.state.team && this.state.team.map((item, index) => {
                        console.log(item)
                        return (
                        <div className="" key={index}>
                            <div>
                                {console.log(config.server.host + '/writable/uploads/' + item.profile)}
                                <img
                                    className="team-member"
                                    src={config.server.host + '/writable/uploads/' + item.profile}
                                    alt=""
                                />
                            </div>
                            <h6>{item.designation}</h6>
                            <h5>{item.name}</h5>
                            <div className="image-overlay">
                                <div className="social-icon">
                                    <img
                                        className="social-icon-img"
                                        src={require('../img/whatsapp.png')}
                                        alt=""
                                    />
                                    <h6 style={{ fontWeight: 'bold' }}>+91 {item.number}</h6>
                                </div>

                                <div className="social-icon">
                                    <img
                                        className="social-icon-img"
                                        src={require('../img/email.png')}
                                    />
                                    <h6 style={{ fontWeight: 'bold' }}>
                                        {item.email}
                                    </h6>
                                </div>
                            </div>
                        </div>)
                    })}
                    </Slider> */}
                </div>
            </>
        )
    }
}

export default Team
