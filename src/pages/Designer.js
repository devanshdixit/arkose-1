import * as React from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import Residential from '../img/category/Residential.jpg'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function tabs(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Designer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleViewMore = (e) => {
        if (e != '') {
            window.localStorage.setItem('designer', e.target.className);

            var user = window.localStorage.getItem('user');
            if (user) {
                window.location.href = '/form';
            } else {
                window.location.href = '/login';
            }
        }
    }

    return (
        <div className="section-offer container mt-5">
            <div className="sub-section-offer">
                <h6>| Designer</h6>
                <h1>Our Designer Services</h1>
            </div>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Tabs value={value} centered onChange={handleChange}>
                            <Tab label="BY CIVIL ENGINEER" {...tabs(0)} />
                            <Tab label="BY ARCHITECT" {...tabs(1)} />
                            <Tab label="BY INTERIOR DESIGNER" {...tabs(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Structure</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Structure" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Civil Working Details</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Civil Working Details" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Estimation Service</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Estimation Service" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Supervision</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Supervision" value='Read More' onClick={handleViewMore} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Floor Planning</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Floor Planning" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Vastu Consultancy</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Vastu Consultancy" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Presentation Planning</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Presentation Planning" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Exterior Elevation</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Exterior Elevation" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>3D Perspective View</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="3D Perspective View" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Renovation & Remodeling</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Renovation & Remodeling" value='Read More' onClick={handleViewMore} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Interior Design</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Interior Design" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>False Ceilling</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="False Ceilling" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>3D Interior Floor Plan</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="3D Interior Floor Plan" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Wardrobe Design</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Wardrobe Design" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Bed Design</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Bed Design" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Modular Kitchen</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Modular Kitchen" value='Read More' onClick={handleViewMore} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                                <img className="" src={Residential} alt='' height={240} />
                                <h3>Supervision</h3>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <input type='button' id="view-more" className="Supervision" value='Read More' onClick={handleViewMore} />
                            </div>
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
}
