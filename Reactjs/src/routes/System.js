import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/Admin/UserRedux';
import Header from '../containers/Header/Header';
import Teachers from '../containers/System/teacher/Teacher';
import AboutTeacher from '../containers/System/teacher/AboutTeacher';
import News from '../containers/System/Admin/News/news';
import Class from '../containers/System/Admin/Class/Class';
import Assignment from '../containers/System/Admin/Assignment/Assignment';
import Chairman from '../containers/System/Admin/Assignment/Chairman';
import Points from '../containers/System/Admin/Points/Points';

class System extends Component {
    render() {
        const { systemMenuPath,isLoggedIn } = this.props;
        return (
            <React.Fragment>
            {isLoggedIn && <Header />}
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/teachers-manage" component={Teachers} />
                        <Route path="/system/user-redux" component={UserRedux} />
                        <Route path="/system/about-teacher" component={AboutTeacher} />
                        <Route path="/system/news" component={News} />  
                        <Route path="/system/class" component={Class} />
                        <Route path="/system/assignment" component={Assignment} />
                        <Route path="/system/chairman" component={Chairman} />
                        <Route path="/system/points" component={Points} />    
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
