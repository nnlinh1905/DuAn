import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class HoatDong extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="section-Share section-HoatDong">
                <div className="section-center">
                    <div className="center-left">
                        <div className="header">
                            Lịch Sử Hình Thành
                        </div>
                        <div className="left-content">
                            <div className="left-content-left">
                                <div className="img-tvt"></div>
                            </div>
                            <div className="left-content-right">

                            </div>
                        </div>
                    </div>
                    <div className="center-right">
                        <div className="header">
                            Hoạt Động Ngoại Khóa
                        </div>
                        <div className="right-content">
                            <Slider {...settings}>
                                <div className="section-custom">
                                    <div className="img_anh section-HoatDong"></div>
                                    <div>ảnh 1</div>
                                </div>
                                <div className="section-custom">
                                    <div className="img_anh section-HoatDong"></div>
                                    <div>ảnh 2</div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HoatDong);
