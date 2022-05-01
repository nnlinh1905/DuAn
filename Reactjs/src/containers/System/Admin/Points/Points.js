import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';
// import './Ponits.scss';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
// import ChairmanTable from './ChairmanTable';
import ModalDiem from './ModalDiem';
import { emitter } from '../../../../utils/emitter';
import { getClassByTeacher, getStudentByClass, savePoints, GetPointsStudentByClass } from '../../../../services/userService';

// teacherByClass,allClass, getAllTeachers, getAllTeaching, getEditTeaching
class Ponits extends Component {

    constructor(props) {
        super(props);
        this.state = {
            LBT: [],
            SBClass: [],
            maLop: '',
            TenLop: '',
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            newPoints: {},
            studentPoints: []
        }
    }

    createNewUser = async (data) => {
        try {
            let response = await savePoints(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }
            else {
                await this.handleGetPointsStudentByClass(data.MaLop);
                this.setState({
                    isOpenModalUser: false,
                })
            }
            emitter.emit('EVENT_CLEAR_MODAL_DATA')
        } catch (e) {
            console.log(e);
        }
    }

    async componentDidMount() {
        // await this.handleAllClass()
        // await this.handleAllTeacher()
        // await this.handleGetTeacher()
        await this.handleGetClassByTeacher()
        await this.handleGetPointsStudentByClass()
        // await this.handleGetTeacherByClass()
    }

    handleGetClassByTeacher = async () => {
        let idGV = this.props.userInfo.id
        let res = await getClassByTeacher(idGV)
        if (res && res.errCode == 0) {
            this.setState({
                LBT: res.allClass,
                maLop: res.allClass.id,
                TenLop: res.allClass.TenLop
            })
        }
    }

    handleGetTeacherByClass = async (event) => {
        await this.handleGetPointsStudentByClass(event.target.value)
        let res = await getStudentByClass(event.target.value)
        console.log('resne', res)
        if (res && res.errCode == 0) {
            this.setState({
                SBClass: res.users
            })
        }
    }

    handleGetPointsStudentByClass = async (maLop) => {
        let resPoints = await GetPointsStudentByClass(maLop)
        if (resPoints && resPoints.errCode == 0) {
            this.setState({
                studentPoints: resPoints.Points
            })
        }
    }

    handleAddNewUser = (event) => {
        this.setState({
            isOpenModalUser: true,
            newPoints: event
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    // handleAllClass = async () => {
    //     let res = await allClass('ALL');
    //     if (res && res.errCode == 0) {
    //         this.setState({
    //             classArr: res.DataClass
    //         })
    //     }
    // }

    // handleGetTeacher = async (event) => {
    //     let res = await teacherByClass(event.target.value);
    //     if (res && res.errCode == 0) {
    //         this.setState({
    //             TBC: res.teachers,
    //         })
    //     }
    // }

    // handleTeacherByClass = async () => {
    //     let res = await teacherByClass('ALL');
    //     if (res && res.errCode == 0) {
    //         this.setState({
    //             TBC: res.classArr
    //         })
    //     }
    // }

    // handleAllTeacher = async () => {
    //     let res = await getAllTeachers('ALL');
    //     if (res && res.errCode == 0) {
    //         this.setState({
    //             teacherArr: res.users,
    //         })
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['lop','teacher']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required: '+ arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    // handleSaveTeaching = async () => {
    //     let isValid = this.checkValidateInput();
    //     if (isValid === false) 
    //         return
    //     let { action } = this.state
    //     if (action === CRUD_ACTIONS.CREATE) {
    //         await getAllTeaching({
    //             lop: this.state.lop,
    //             teacher: this.state.teacher,
    //         })
    //         await this.handleAllClass()
    //     }
    //     if (action === CRUD_ACTIONS.EDIT) {
    //         await getEditTeaching({
    //             teacher: this.state.teacher,
    //             id: this.state.idClass,
    //             teacher_old: this.state.teacher_old
                
    //         })
    //         this.setState({
    //             action: CRUD_ACTIONS.CREATE
    //         })
    //         await this.handleAllClass()
    //     }
    // }

    // handleEdit = async (data) => {
    //     if (data) {
    //         this.setState({
    //             action: CRUD_ACTIONS.EDIT,
    //             idClass: data.id,
    //             lop: data.id,
    //             teacher: data.ChuNhiem,
    //             teacher_old: data.ChuNhiem
    //         })
    //     }
    // }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
        console.log('copyState',copyState)
    }

    render() {
        const { userInfo } = this.props;
        let { LBT, maLop, SBClass, studentPoints, TenLop} = this.state;
        let arr = LBT.length;
        console.log('SBClass', SBClass)
        return (
            <>
                <div className="chairman">Quản Lý Điểm</div>
                <ModalDiem
                    isOpen={this.state.isOpenModalUser}
                    toggleFromOpen={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                    currentUser={this.state.newPoints}
                    teacher = {userInfo}
                />
                <div className="Container text-center">
                    <div className="content row text-center">
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Chọn Lớp</label>
                        </div>
                            <select
                                className="custom-select"
                                id="inputGroupSelect01"
                                onChange={(event) => this.onChangeInput(event, 'maLop')}
                                onClick={(event) => this.handleGetTeacherByClass(event)}
                                value={maLop}
                            >
                            <option selected>Choose...</option>
                            {LBT && LBT.length > 0 && LBT.map((item, index) => {
                                return (
                                    <option value={item.LopData.id}>{item.LopData.TenLop}</option>
                                )    
                            })}
                        </select>
                        </div>
                    </div>
                    <h2 className="mt-5">Danh sách lớp {TenLop}</h2>
                    <table id='tableManageUser'>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Học Sinh</th>
                                <th>Nhập Điểm</th>
                            </tr>
                            {SBClass && SBClass.length > 0 && SBClass.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.HoTenHS}</td>
                                        <td>
                                            <div className="mx-1">
                                                <button className="btn btn-primary px-3"
                                                    onClick={() => this.handleAddNewUser(item)}
                                                >
                                                    Nhập Điểm
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>


                    <h2 className="mt-5">Điểm của lớp {TenLop}</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Học Sinh</th>
                                <th scope="col">Kiểm Tra Miệng</th>
                                <th scope="col">Kiểm Tra 15 phút</th>
                                <th scope="col">Kiểm Tra 1 Tiết</th>
                                <th scope="col">Kiểm Tra Cuối Kì</th>
                                <th scope="col">TBM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentPoints && studentPoints.length > 0 && studentPoints.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{ index+1}</th>
                                        <td>{item.KiemTraHocSinh.HoTenHS}</td>
                                        <td>{item.KiemTra1}</td>
                                        <td>{item.KiemTra2}</td>
                                        <td>{item.KiemTra3}</td>
                                        <td>{item.KiemTraCuoiKy}</td>
                                        <th scope="col">{(((item.KiemTra1)*1 + (item.KiemTra2)*1 + (item.KiemTra3)*2 + (item.KiemTraCuoiKy)*3)/7).toFixed(1)}</th>
                                    </tr>
                                )
                            })}
                            
                            
                        </tbody>
                    </table>
                </div>
                
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ponits);
