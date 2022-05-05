import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi, handleLoginApi1, handleLoginApi3 } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
            check: 'student',
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = ''
            if (this.state.check === 'admin') {
                console.log('data')
                data = await handleLoginApi3(this.state.username, this.state.password);
                console.log('data',data)
            } else if (this.state.check === 'teacher') {
                data = await handleLoginApi1(this.state.username, this.state.password);
            } else {
                data = await handleLoginApi(this.state.username, this.state.password);
            }
            
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message,
                    })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleSelect = (event, check) => {
        let copyState = { ...this.state }
        copyState[check] = event.target.value
        this.setState({
            ...copyState,
        })
    }

    render() {
        let { check } = this.state
        console.log('render', this.state)
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 text-group login-input">
                            <label>Permission: </label>
                            <select
                                className="form-control col-12 text-center"
                                onChange={(event) => this.handleSelect(event, 'check')}
                                value={check}
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="col-12 text-group login-input">
                            <label>Username:</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter your Username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 text-group login-input">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input type={this.state.isShowPassword?'text':'password'}
                                    className="form-control"
                                    placeholder="Enter your Password"
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={this.handleShowHidePassword}>
                                    <i className={this.state.isShowPassword?"far fa-eye-slash":"far fa-eye"}></i>
                                </span>
                            </div>  
                        </div>
                        <div className='col-12' style = {{color : 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className="btn-login" onClick={() => {this.handleLogin()}}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or Login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i><i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
