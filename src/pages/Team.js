import React from 'react'
import axios from 'axios'
import config from '../config'
import Slider from "react-slick";
import "react-slick/dist/react-slick";
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
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <>
                <div className="team-members container">

    <Slider {...settings}>
                    {this.state.team && this.state.team.map((item, index) => {
                        return (<div className="imgBox col-lg-3" key={index}>
                            <div>
                                {console.log(config.server.host + '/writable/uploads/' + item.profile)}
                                <img
                                    className="team-member"
                                    src={config.server.host + '/writable/uploads/' + item.profile}
                                />
                            </div>
                            <h6>{item.designation}</h6>
                            <h5>{item.name}</h5>
                            <div className="image-overlay">
                                <div className="social-icon">
                                    <img
                                        className="social-icon-img"
                                        src={require('../img/whatsapp.png')}
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
                    </Slider>
                </div>
            </>
        )
    }
}

export default Team
