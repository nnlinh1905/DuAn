import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import ThongBao from './section/ThongBao'
import MonHoc from './section/MonHoc';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeFooter from "./HomeFooter";
import About from "./About";
import HoatDong from "./section/HoatDong";
class HomePage extends Component {
    handleAfterChange = (index, dontAnimate) => {
        
    }
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            slickGoTo: this.handleAfterChange()
        };
        return (
            <div>
                <HomeHeader isShowBackground = {true} />
                <ThongBao
                    settings = {settings}
                />
                {/* <MonHoc
                    settings = {settings} 
                /> */}
                <HoatDong
                    settings = {settings}
                />
                <About />
                <HomeFooter/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
