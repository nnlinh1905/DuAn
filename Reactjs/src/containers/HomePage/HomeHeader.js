import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/';
import {ChangeLanguageApp} from '../../store/actions'
import * as actions from "../../store/actions";
import { withRouter } from 'react-router';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.ChangeLanguageAppReDux(language);
    }

    handleViewNews = () => {
        this.props.history.push(`/home-news`)
    }

    handleViewAssignment = () => {
        this.props.history.push(`/home-assignment`)
    }

    handleViewListClass = () => {
        this.props.history.push('/list-class')
    }

    handleViewAbout = () => {
        this.props.history.push('/home-about')
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
        
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content" >
                            <i className="fas fa-bars"></i>
                            <div className="header-logo" onClick={this.returnToHome}></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content" onClick={()=> this.handleViewAbout()}>
                                <div><b><FormattedMessage id="HomeHeader.About"/></b></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="HomeHeader.ResultOfStudy"/></b></div>
                            </div>
                            <div className="child-content" onClick={()=> this.handleViewNews()}>
                                <div><b><FormattedMessage id="HomeHeader.news"/></b></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className={language === LANGUAGES.VI ? "flag-vi active" : "flag-vi"}><span onClick={() => {this.changeLanguage(LANGUAGES.VI)}}>VI</span></div>
                            <div className={language === LANGUAGES.EN ? "flag-en active" : "flag-en"}><span onClick={() => {this.changeLanguage(LANGUAGES.EN)}}>EN</span></div>
                        </div>
                    </div>
                </div>

                {this.props.isShowBackground === true &&
                    <div className="home-header-banner">
                        <div className="content-up">
                            <div className="title1">
                                <FormattedMessage id="banner.DEPARTMENTOFEDUCATIONCANTHOCITY"/>
                            </div>
                            <div className="title2">
                                <FormattedMessage id="banner.TRITHUCHIGHSCHOOL"/>
                            </div>
                            <div className="search">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="bạn tìm kiếm gì?"/>
                            </div>
                        </div>
                        <div className="content-down">
                            <div className="options">
                                <div className="option-child" onClick={() => this.handleViewAssignment()}>
                                    <div className="icon-child"><i className="fas fa-chalkboard-teacher"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.TeachingAssignment"/></div>
                                </div>
                                <div className="option-child" onClick={() => this.handleViewListClass()}>
                                    <div className="icon-child"><i className="far fa-list-alt"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.ClassList"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-puzzle-piece"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.Activities"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="far fa-bell"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.Notification"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ChangeLanguageAppReDux: (language) => dispatch(ChangeLanguageApp(language)),
        // fetchAllTeacherStart: () => dispatch(actions.fetchAllTeacherStart()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
