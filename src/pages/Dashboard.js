import React from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import config from '../config'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            order: [],
            cart: []
        }
    }

    componentDidMount() {
        let apiUrl = `${config.api.host}/get_user`
        let apiUrlCart = `${config.api.host}/get_cart`
        let apiUrlOrder = `${config.api.host}/get_payment`

        let user = window.localStorage.getItem('user');

        var formData = new FormData();
        formData.append("user_id", user);

        axios.post(apiUrl, formData, {
            crossDomain: false,
            enablePreflight: false
        }).then((response) => {
            this.setState({
                name: response.data.data.name,
                email: response.data.data.email,
                address: response.data.data.address,
            })
        })

        axios.post(apiUrlOrder, formData, {
            crossDomain: false,
            enablePreflight: false
        }).then((response) => {
            this.setState({
                order: response.data.data,
            })
        })

        axios.post(apiUrlCart, formData, {
            crossDomain: false,
            enablePreflight: false
        }).then((response) => {
            this.setState({
                cart: response.data.data,
            })
        })
    }
    render() {
        return (
            <>
                <Header />
                <div className='contanier'>
                    <div className='row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>SR</th>
                                        <th>Txn ID</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Date & Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.order && this.state.order.map((item, index) => {
                                        return (<tr>
                                            <td>{index + 1}</td>
                                            <td>{item.txn_id}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.status}</td>
                                            <td>{item.created_at}</td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cart && this.state.cart.map((item, index) => {
                                        return (<tr>
                                            <td>{index + 1}</td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Dashboard
