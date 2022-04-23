import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
import {FormattedMessage} from 'react-intl';

class Header extends Component {

    handleChangeLanguage = (language) => {
        this.props.ChangeLanguageAppReDux(language);
    }

    render() {
        const { processLogout, language, userInfo } = this.props;
        let HoTen = '';
        if (userInfo.HoTenHS) {
            HoTen = userInfo.HoTenHS;
        } else {
            HoTen = userInfo.HoTenGV;
        }
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                
                <div className="Languages">
                    
                    
                    <span className="welcome"><FormattedMessage id="HomeHeader.welcome" />, {userInfo && HoTen ? HoTen : "Không có họ tên"}</span>
                    
                    <span className={language === LANGUAGES.VI ? "language-vi active":"language-vi"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}

                    >VI</span>
                    <span className={language === LANGUAGES.EN ? "language-en active":"language-en"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                    >EN</span>
                    <div className="btn btn-logout" onClick={processLogout} title="Log out">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
                {/* nút logout */}
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language, 
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        ChangeLanguageAppReDux: (language) => dispatch(actions.ChangeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
