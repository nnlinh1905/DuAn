import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from '../../../store/actions';
// import './AssignmentDetail.scss';
import { withRouter } from 'react-router';
import { teacherByClass, allClass } from '../../../services/userService';
import Moment from 'react-moment';

class AssignmentDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignment: [],
            lop: [],
            idClass: '',
            NamHocNe: [],
            MaGVData: [],
            Mon: ['Toán', 'Ngữ Văn', 'Anh Văn', 'Sinh Học', 'Hóa Học', 'Vật Lý', 'Địa Lý', 'Lịch Sử','Công Nghệ', 'Giáo Dục Công Dân', 'Giáo Dục Quốc Phòng', 'Tin Học', 'Thể Dục']
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let assignmentID = this.props.match.params.id;
            let res = await teacherByClass(assignmentID);
            let resLop = await allClass(assignmentID)
            if (res && res.errCode === 0) {
                this.setState({
                    lop: resLop.DataClass,
                    NamHocNe: resLop.DataClass.NamHocNe,
                    assignment: res.teachers,
                    idClass: assignmentID,
                    MaGVData: res.teachers.MaGVData,
                })
            }
        }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
    }

    render() {
        let { assignment, lop, NamHocNe, MaGVData, Mon } = this.state;
        console.log('assignment', assignment)
        return (
            <>
                <HomeHeader isShowBackground={false}/>
                    <div className="News-container">
                        <div className="News-content"></div>
                        <div className="News-frames1">
                            <div className="News-header">
                                <div className="content-up">
                                <div className="News-title">Giáo Viên Bộ Môn Lớp {lop.TenLop} Nam Hoc {NamHocNe.valueEn}</div>
                                </div>
                            </div>
                            <div className="frames-cont">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Môn Học</th>
                                            <th scope="col">Họ Tên Giáo Viên</th>
                                            <th scope="col">Chức Danh Giáo Viên</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Số Điện Thoại</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignment && assignment.length > 0 && assignment.map((item, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{item.MaGVData.MaChuyenMon}</th>
                                                    <td>{item.MaGVData.HoTenGV}</td>
                                                    <td>{item.MaGVData.MaChucDanh}</td>
                                                    <td>{item.MaGVData.Email}</td>
                                                    <td>{item.MaGVData.SDT}</td>
                                                </tr>
                                            ) 
                                        })}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                <HomeFooter/>

            </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssignmentDetail));
