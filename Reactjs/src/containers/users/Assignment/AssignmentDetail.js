import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from '../../../store/actions';
import './assignmentDetail.scss';
import { withRouter } from 'react-router';
import { teacherByClass, allClass } from '../../../services/userService';
import Moment from 'react-moment';
import { FormattedMessage } from 'react-intl';


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
        return (
            <>
                <HomeHeader isShowBackground={false}/>
                    <div className="assignment-container">
                        <div className="assignment-content"></div>
                        <div className="assignment-frames1">
                            <div className="assignment-header">
                                <div className="content-up">
                                <div className="assignment-title"><FormattedMessage id="assignment.assignmentDetail.bm"/> {lop.TenLop} <FormattedMessage id="assignment.assignmentDetail.year"/> {NamHocNe.valueEn}</div>
                                </div>
                            </div>
                            <div className="frames-assignment">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col"><FormattedMessage id="assignment.assignmentDetail.subject"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.assignmentDetail.ten"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.assignmentDetail.mail"/></th>
                                            <th scope="col"><FormattedMessage id="assignment.assignmentDetail.dt"/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignment && assignment.length > 0 && assignment.map((item, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{item.MaGVData.MaChuyenMonData.valueVi}</th>
                                                    <td>{item.MaGVData.HoTenGV} <b>{item.LopData.ChuNhiem == item.MaGVData.id ? "(Chủ Nhiệm)" : ''}</b></td>
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
