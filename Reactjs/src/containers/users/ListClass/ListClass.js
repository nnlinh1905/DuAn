import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from '../../../store/actions';
import './ListClass.scss';
import { withRouter } from 'react-router';
import moment from 'moment';
import { dateFormat } from '../../../utils';
import {getStudentByClass} from '../../../services/userService';


class ListClass extends Component {

    constructor(props) {
        super(props);
        const currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        this.state = {
            SBClass: [],
            listClass: [],
            TenLop: '',
            currentDate: ''
        }
    }

    async componentDidMount() {
        // await this.handleGetClassByTeacher()
        this.props.allClass();
    }

    handleGetTeacherByClass = async (event) => {
        // await this.handleGetPointsStudentByClass(event.target.value)
        let res = await getStudentByClass(event.target.value)
        if (res && res.errCode == 0) {
            this.setState({
                SBClass: res.users,
            })
        }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        if (prevProps.listClass !== this.props.listClass) {
            let arrClass = this.props.listClass
            this.setState({
                listClass: arrClass,
            })
        }
    }

    // handleViewNews = (ListClass) => {
    //     this.props.history.push(`/newsdetail/${ListClass.id}`);
    // }

    render() {
        let { SBClass, listClass } = this.state
        console.log('listClass', SBClass)
        return (
            <div>
                <HomeHeader isShowBackground={false}/>
                
                <div className="ListClass-container">
                    <div className="ListClass-content">
                        
                    </div>
                    <div className="ListClass-frames">
                        <div className="ListClass-header">
                            <div className="content-up">
                                <div className="ListClass-title">Danh Sách Lớp</div>
                            </div>
                        </div>
                        
                        <div className="ListClass-frames-content">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" for="inputGroupSelect01">Danh Sách Lớp: </label>
                                </div>
                                <select className="custom-select"
                                    id="inputGroupSelect01"
                                    onClick={(event) => this.handleGetTeacherByClass(event)}
                                >
                                    <option selected>Choose...</option>
                                    {listClass && listClass.length > 0 && listClass.map((item, index) => {
                                        return (
                                            <option value={item.id}>{item.TenLop}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <h2 className="mt-5 text-center">Danh Sách Lớp</h2>
                            <table class="table table-striped">
                                <thead>
                                    <tr className="text-center">
                                        <th scope="col">STT</th>
                                        <th scope="col">Họ Tên Học Sinh</th>
                                        <th scope="col">Giới Tính</th>
                                        <th scope="col">Ngày Sinh</th>
                                        <th scope="col">Địa Chỉ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SBClass && SBClass.length > 0 && SBClass.map((item, index) => {
                                        let forMatedDate = moment(item.NgaySinh).format(dateFormat.SEND_TO_SERVER)
                                        return (
                                            <tr className="text-center">
                                                <th scope="row">{ index + 1}</th>
                                                <td>{item.HoTenHS}</td>
                                                <td>{item.GioiTinhData.valueVi}</td>
                                                <td>{forMatedDate}</td>
                                                <td>{item.DiaChi}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
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
        listClass: state.class.Class,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allClass: () => dispatch(actions.getAllClass()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListClass));
