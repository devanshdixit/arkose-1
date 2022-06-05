import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import Residential from "../img/category/Residential.jpg";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Designer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleViewMore = (e) => {
    if (e != "") {
      window.localStorage.setItem("designer", e.target.className);

      var user = window.localStorage.getItem("user");
      if (user) {
        window.location.href = "/form";
      } else {
        window.location.href = "/login";
      }
    }
  };

  return (
    <div className="section-offer container mt-5">
      <div className="sub-section-offer">
        <h6>| Designer</h6>
        <h1>Our Designer Services</h1>
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
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
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture1.png'} alt="" height={240} />
                <h3>Structure</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Structure"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture2.png'} alt="" height={240} />
                <h3>Civil Working Details</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Civil Working Details"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture3.jpg'} alt="" height={240} />
                <h3>Estimation Service</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Estimation Service"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture4.jpg'} alt="" height={240} />
                <h3>Supervision</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Supervision"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture5.png'} alt="" height={240} />
                <h3>Turnkey Project</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Turnkey Project"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture6.jpg'} alt="" height={240} />
                <h3>Floor Planning</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Floor Planning"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture7.png'} alt="" height={240} />
                <h3>Vastu Consultancy</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Vastu Consultancy"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture8.png'} alt="" height={240} />
                <h3>Presentation Planning</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Presentation Planning"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture9.jpg'} alt="" height={240} />
                <h3>Exterior Elevation</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Exterior Elevation"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture10.png'} alt="" height={240} />
                <h3>3D Perspective View</h3>
                <input
                  type="button"
                  id="view-more"
                  className="3D Perspective View"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture11.png'} alt="" height={240} />
                <h3>Renovation & Remodeling</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Renovation & Remodeling"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture12.png'} alt="" height={240} />
                <h3>Interior Design</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Interior Design"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture13.png'} alt="" height={240} />
                <h3>False Ceilling</h3>
                <input
                  type="button"
                  id="view-more"
                  className="False Ceilling"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture14.png'} alt="" height={240} />
                <h3>3D Interior Floor Plan</h3>
                <input
                  type="button"
                  id="view-more"
                  className="3D Interior Floor Plan"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture15.png'} alt="" height={240} />
                <h3>Wardrobe Design</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Wardrobe Design"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture16.png'} alt="" height={240} />
                <h3>Bed Design</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Bed Design"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture17.png'} alt="" height={240} />
                <h3>Modular Kitchen</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Modular Kitchen"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                <img className="" src={process.env.PUBLIC_URL + '/images/designers/Picture18.png'} alt="" height={240} />
                <h3>Supervision</h3>
                <input
                  type="button"
                  id="view-more"
                  className="Supervision"
                  value="Book Now"
                  onClick={handleViewMore}
                />
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
