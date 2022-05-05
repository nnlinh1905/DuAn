import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';
import './LearningResults.scss';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils, dateFormat } from '../../../../utils';
// import ChairmanTable from './ChairmanTable';
import ModalDiem from './ModalDiem';
import moment from 'moment';
import { emitter } from '../../../../utils/emitter';
import { GetPointStudent } from '../../../../services/userService';

class LearningResults extends Component {

    constructor(props) {
        const currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        super(props);
        this.state = {
            points: [],
        }
    }

    async componentDidMount() {
        await this.handleGetPointStudent();
    }

    handleGetPointStudent = async () => {
        let id = await this.props.userInfo.id
        let res = await GetPointStudent(id);
        console.log('res',res)
        if (res && res.errCode == 0) {
            this.setState({
                points: res.student,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    render() {
        const { userInfo, language } = this.props;
        let {points} = this.state;
        console.log('userInfo', userInfo)
        console.log('points', points)
        return (
            <>
                <div className="chairman">Kết quả Học Tập</div>
                <div className="Container text-center row">
                    <div className="content-left text-center col-4">
                        <div className="khung">
                            <div className="title">Thông Tin Học Sinh</div>
                            <ul className="list-group">
                                <li className="list-group-item"><b>Họ Và Tên: </b>{userInfo.HoTenHS}</li>
                                <li className="list-group-item"><b>Giới Tính: </b>{userInfo.GioiTinhData.valueVi}</li>
                                <li className="list-group-item"><b>Ngày Sinh: </b> {moment(userInfo.NgaySinh).format(dateFormat.SEND_TO_SERVER)}</li>
                                <li className="list-group-item"><b>Địa Chỉ: </b>{userInfo.DiaChi}</li>
                                <li className="list-group-item"><b>Tôn Giáo: </b>{userInfo.MaTonGiaoData.valueVi}</li>
                                <li className="list-group-item"><b>Lớp: </b>{userInfo.LopHocSinh.TenLop}  &emsp;  <b>Năm Học: </b>{userInfo.LopHocSinh.NamHocNe.valueVi}</li>
                                <li className="list-group-item"><b>Họ Tên Cha: </b>{userInfo.HoTenCha}</li>
                                <li className="list-group-item"><b>Năm Sinh Cha: </b> {moment(userInfo.NamSinhCha).format(dateFormat.SEND_TO_SERVER)}</li>
                                <li className="list-group-item"><b>Họ Tên Mẹ: </b>{userInfo.HoTenMe}</li>
                                <li className="list-group-item"><b>Năm Sinh Mẹ: </b> {moment(userInfo.NamSinhMe).format(dateFormat.SEND_TO_SERVER)}</li>
                                <li className="list-group-item"><b>Giáo Viên Chủ Nhiêm: </b>{userInfo.LopHocSinh.LopGiaoVien.HoTenGV}</li>
                                <li className="list-group-item"><b>Email Giáo Viên: </b>{userInfo.LopHocSinh.LopGiaoVien.Email}</li>
                                <li className="list-group-item"><b>Số Điện Thoại: </b>{userInfo.LopHocSinh.LopGiaoVien.SDT}</li>

                            </ul>
                        </div>
                    </div>
                    <div className="content-right text-center col-8">
                        <div className="khung">
                            <div className="title">Kế quả học tập</div>
                            <table className="table"  style={{backgroundColor: 'white'}}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Môn Học</th>
                                        <th scope="col">Kiểm tra miệng</th>
                                        <th scope="col">Kiểm tra 15 phút</th>
                                        <th scope="col">Kiểm tra 1 tiết</th>
                                        <th scope="col">Kiểm tra cuối kỳ</th>
                                        <th scope="col">Trung Bình Môn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {points && points.length > 0 && points.map((item, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{LANGUAGES.VI=== language ? item.KiemTraMonHoc.valueVi : item.KiemTraMonHoc.valueEn}</th>
                                                <td>{item.KiemTra1}</td>
                                                <td>{item.KiemTra2}</td>
                                                <td>{item.KiemTra3}</td>
                                                <td>{item.KiemTraCuoiKy}</td>
                                                <th scope="row">{(((item.KiemTra1)*1 + (item.KiemTra2)*1 + (item.KiemTra3)*2 + (item.KiemTraCuoiKy)*3)/7).toFixed(1)}</th>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningResults);
