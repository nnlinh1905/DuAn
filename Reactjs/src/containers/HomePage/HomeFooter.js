import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class ThongBao extends Component {

    render() {
        return (
            <div className="HomeFooter">
                <p>&copy; 2022 Nguyễn Nhựt Linh. Trang cá Nhân<a target="blank" href="https://www.facebook.com/nnLinh1905">&#8594;&#8594;Tại đây!&#8592;&#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThongBao);
