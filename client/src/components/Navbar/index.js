import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from "react-scroll";
import condoLogo from "./logo_transparent.png";
import modelUNLogo from "../LoginPage/United_Nations_logo.png";

import "./style.css";
import API from "../../utils/API";
import {unsetUser} from "../../useragent/actions"

const mapStateToProps = state => ({  
    login: state.login,
    useragent: state.useragent
  })

class Navbar extends Component {
    constructor() {
        super()
        this.logOut = this.logOut.bind(this)
    }
    logOut = () => {
        API.logOut()
        this.props.unsetUser()
        window.location.assign("/")
    }
    componentDidMount = () => {
    }

    render() {
     
        console.log("nav props ", this.props)
        return (
            <div>
                {this.props.useragent.id ?
                    <nav className="navbar navbar-expand-md navbar-light fixed-top border-bottom p-1 pr-3">
                        <a className="navbar-brand py-0" href="/dashboard">
                            <img src={modelUNLogo} width="70" height="60" className="d-inline-block align-top" alt="Model United Nations Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ml-2">
                                <li className="nav-item mr-3">
                                    <a className="nav-link" href="/dashboard">Dashboard</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a className="nav-link" href="/profile">Profile</a>
                                </li>
                                <li className="nav-item mr-3">
                                    <a className="nav-link" href="/chat">Chat</a>
                                </li>
                                {/* Only render My Delegates Page for advisors*/}
                                {this.props.useragent.type === "advisor" || this.props.useragent.type ==="admin" ?
                                    <li className="nav-item mr-3">
                                        <a className="nav-link" href="/mydelegates">My Delegates</a>
                                    </li>
                                    :
                                    <li></li>
                                }
                                {/* END Only render My Delegates Page for advisors*/}
                                <li className="nav-item">
                                    <button className="nav-link btn btn-danger px-4 py-2 text-white" onClick={this.logOut}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    :
                    <nav className="navbar navbar-expand-md navbar-light fixed-top border-bottom p-1 pr-3">
                        <a className="navbar-brand py-0" href="/">
                            <img src={condoLogo} width="70" height="70" className="d-inline-block align-top" alt="Con.DO Company Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ml-2">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="features"
                                        smooth={true}
                                        spy={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="demo"
                                        smooth={true}
                                        spy={true}
                                        offset={-95}
                                        duration={500}
                                    >
                                        Demo
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="aboutus"
                                        smooth={true}
                                        spy={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        to="contact"
                                        activeClass="active-link"
                                        smooth={true}
                                        spy={true}
                                        offset={-75}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-danger px-4 py-2 text-white" href="/login" role="button">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                }
            </div >
        );
    }
}

export default connect(mapStateToProps, { unsetUser })(Navbar);