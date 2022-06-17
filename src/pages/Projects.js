import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import config from "../config";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [
        "22.png",
        "Picture20.png",
        "Picture21.png",
        "Picture22.png",
        "Picture23.png",
        "Picture24.png",
        "Picture25.png",
        "Picture26.png",
        "Picture27.png",
        "Picture28.png",
        "Picture29.png",
        "Picture30.jpg",
        "Picture31.png",
        "Picture32.png",
        "Picture33.png",
        "Picture34.png",
        "Picture35.png",
        "Picture36.jpg",
        "Picture37.jpg",
        "Picture38.jpg",
        "Picture39.jpg",
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    if (e === "Architecture") {
      this.setState({
        project: [
          "22.png",
          "Picture20.png",
          "Picture21.png",
          "Picture22.png",
          "Picture23.png",
        ],
      });
    } else if (e === "Interior") {
      this.setState({
        project: [
          "Picture24.png",
          "Picture25.png",
          "Picture26.png",
          "Picture27.png",
          "Picture28.png",
        ],
      });
    } else if (e === "Construction") {
      this.setState({
        project: ["Picture29.png", "Picture30.jpg", "Picture31.png"],
      });
    } else if (e === "Project Planning") {
      this.setState({
        project: [
         "Picture32.png",
        "Picture33.png",
        "Picture34.png",
        "Picture35.png"
      ],
      });
    } else if (e === "Renovation") {
      this.setState({
        project: [
         "Picture36.jpg",
          "Picture37.jpg",
          "Picture38.jpg",
          "Picture39.jpg",
      ],
      });
    } else {
      this.setState({
        project: [
          "22.png",
          "Picture20.png",
          "Picture21.png",
          "Picture22.png",
          "Picture23.png",
          "Picture24.png",
          "Picture25.png",
          "Picture26.png",
          "Picture27.png",
          "Picture28.png",
          "Picture29.png",
          "Picture30.jpg",
          "Picture31.png",
          "Picture32.png",
          "Picture33.png",
          "Picture34.png",
          "Picture35.png",
          "Picture36.jpg",
          "Picture37.jpg",
          "Picture38.jpg",
          "Picture39.jpg",
        ],
      });
    }
  }

  // componentDidMount() {
  //    let apiUrl = `${config.api.host}/get_project/project`

  //    axios.get(apiUrl, {
  //       crossDomain: false,
  //       enablePreflight: false
  //    }).then((response) => {
  //       this.setState({
  //          project: response.data.project,
  //       })
  //    })
  // }
  render() {
    const images = [
      "22.png",
      "Picture20.png",
      "Picture21.png",
      "Picture22.png",
      "Picture23.png",
      "Picture24.png",
      "Picture25.png",
      "Picture26.png",
      "Picture27.png",
      "Picture28.png",
      "Picture29.png",
      "Picture30.jpg",
      "Picture31.png",
      "Picture32.png",
      "Picture33.png",
      "Picture34.png",
      "Picture35.png",
      "Picture36.jpg",
      "Picture37.jpg",
      "Picture38.jpg",
      "Picture39.jpg",
    ];
    return (
      <>
        <div className="projects">
          <Header />
          <div className="about-us">
            <div className="about-us-container">
              <h1>Our Projects</h1>
              <p>
                <FaHome className="home-icon" />
                <Link className="home" to="/">
                  {" "}
                  Home
                </Link>{" "}
                / projects
              </p>
            </div>
          </div>
          <div className="container my-4">
            <div className=" row proj-category">
              <div
                role="button"
                className="col-lg-2 col-md-4 col-sm-4 category-tab"
              >
                <div
                  onClick={() => {
                    this.handleChange("All");
                  }}
                  role="button"
                  className="text-center"
                >
                  All
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                <div
                  role="button"
                  onClick={() => {
                    this.handleChange("Architecture");
                  }}
                  className="text-center"
                >
                  Architecture
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                <div
                  role="button"
                  onClick={() => {
                    this.handleChange("Interior");
                  }}
                  className="text-center"
                >
                  Interior
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                <div
                  role="button"
                  onClick={() => {
                    this.handleChange("Construction");
                  }}
                  className="text-center"
                >
                  Construction
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                <div
                  role="button"
                  onClick={() => {
                    this.handleChange("Project Planning");
                  }}
                  className="text-center"
                >
                  Project Planning
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                <div
                  role="button"
                  onClick={() => {
                    this.handleChange("Renovation");
                  }}
                  className="text-center"
                >
                  Renovation
                </div>
              </div>
            </div>
          </div>

          <div className="gallery row">
            {this.state.project &&
              this.state.project.map((value, index) => {
                return (
                  <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
                    <img
                      className="gallery-img img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        `/images/projects/${this.state.project[index]}`
                      }
                      alt=""
                    />
                    {/* <div className="gallery-overlay">
                              <a onClick={this.handleChange(value.id)}>See More</a>
                           </div> */}
                  </div>
                );
              })}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Projects;
