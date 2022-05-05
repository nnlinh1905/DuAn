import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, teacherMenu, studentMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
import {FormattedMessage} from 'react-intl';
import _ from 'lodash'; 
import {ROLE} from '../../utils'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuApp: []
        }
    }

    componentDidMount() {
        const { userInfo } = this.props;
        let menu = [];
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.Quyen;
            if (role === ROLE.ADMIN) {
                menu = adminMenu;
            }
            if (role === ROLE.TEACHER) {
                menu = teacherMenu;
            }
            if (role === ROLE.STUDENT) {
                menu = studentMenu;
            }
        }

        this.setState({
            menuApp: menu
        })
    }

    handleChangeLanguage = (language) => {
        this.props.ChangeLanguageAppReDux(language);
    }

    render() {
        const { processLogout, language, userInfo } = this.props;
        console.log('userInfo', userInfo)
        let HoTen = '';
        if (userInfo.HoTenHS) {
            HoTen = userInfo.HoTenHS;
        } else if (userInfo.HoTen) {
            HoTen = userInfo.HoTen;
        } else {
            HoTen = userInfo.HoTenGV;
        }
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
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
