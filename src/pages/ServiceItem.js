import React from 'react'
import axios from 'axios'
import config from '../config'

class ServiceItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: [],
        }
    }
    componentDidMount() {
        let apiUrl = `${config.api.host}/get_project/service`

        axios.get(apiUrl, {
            crossDomain: false,
            enablePreflight: false
        }).then((response) => {
            this.setState({
                service: response.data.service,
            })
        })
    }
    render() {
        return (
            <div className="section-offer container">
                <div className="sub-section-offer">
                    <h6>| What We Offer</h6>
                    <h1>Arkose Best Services</h1>
                </div>
                <div>
                    <div className="row">
                        {this.state.service && this.state.service.map((value, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                    <img alt='' className="" src={config.server.host + '/writable/uploads/' + value.image} />
                                    <h2>{value.name}</h2>
                                    <h6>
                                        {value.description}
                                    </h6>
                                    <button id="view-more">
                                        <span>Read More</span>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default ServiceItem
