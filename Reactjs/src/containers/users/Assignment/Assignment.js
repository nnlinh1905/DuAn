import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from '../../../store/actions';
import './Assignment.scss';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
import { FormattedMessage } from 'react-intl';
import { allClass } from '../../../services/userService';

class Assignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classArr: [],
        }
    }

    async componentDidMount() {
        await this.handleAllClass()
    }

    handleAllClass = async () => {
        let res = await allClass('ALL');
        if (res && res.errCode == 0) {
            this.setState({
                classArr: res.DataClass
            })
        }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        
    }

    handleViewAssignment = (assignment) => {
        this.props.history.push(`/home-assignment-detail/${assignment.id}`);
    }

    render() {
        let { classArr } = this.state
        return (
            <div>
                <HomeHeader isShowBackground={false}/>
                <div className="Assignment-container">
                    <div className="Assignment-content"></div>
                    <div className="Assignment-frames">
                        <div className="Assignment-header">
                            <div className="content-up">
                                <div className="Assignment-title"><FormattedMessage id="assignment.title"/></div>
                            </div>
                            <div className="content-down">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col"><FormattedMessage id="assignment.STT"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.name-class"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.year"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.cn"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.khac"/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classArr && classArr.length > 0 && classArr.map((item, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{item.TenLop}</td>
                                                    <td>{item.NamHocNe.valueEn}</td>
                                                    <td>{item.LopGiaoVien.HoTenGV}</td>
                                                    <td
                                                        onClick={() => this.handleViewAssignment(item)}
                                                    ><i className="far fa-calendar-minus"></i></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>                     
                    </div>
                </div>
                <HomeFooter/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Assignment));
