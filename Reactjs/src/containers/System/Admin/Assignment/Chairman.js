import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';
import './Chairman.scss';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
// import ChairmanTable from './ChairmanTable';
import {teacherByClass,allClass, getAllTeachers, getAllTeaching, getEditTeaching } from '../../../../services/userService';

class Chairman extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: CRUD_ACTIONS.CREATE,

            lop: '',
            teacher: '',
            idClass: '',
            teacher_old: '',

            classArr: [],
            teacherArr: [],
            TBC: [],
        }
    }

    async componentDidMount() {
        await this.handleAllClass()
        await this.handleAllTeacher()
        // await this.handleGetTeacher()
    }

    handleAllClass = async () => {
        let res = await allClass('ALL');
        if (res && res.errCode == 0) {
            this.setState({
                classArr: res.DataClass
            })
        }
    }

    handleGetTeacher = async (event) => {
        let res = await teacherByClass(event.target.value);
        if (res && res.errCode == 0) {
            this.setState({
                TBC: res.teachers,
            })
        }
    }

    // handleTeacherByClass = async () => {
    //     let res = await teacherByClass('ALL');
    //     if (res && res.errCode == 0) {
    //         this.setState({
    //             TBC: res.classArr
    //         })
    //     }
    // }

    handleAllTeacher = async () => {
        let res = await getAllTeachers('ALL');
        if (res && res.errCode == 0) {
            this.setState({
                teacherArr: res.users,
            })
        }
    }

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

    handleSaveTeaching = async () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) 
            return
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            await getAllTeaching({
                lop: this.state.lop,
                teacher: this.state.teacher,
            })
            await this.handleAllClass()
        }
        if (action === CRUD_ACTIONS.EDIT) {
            await getEditTeaching({
                teacher: this.state.teacher,
                id: this.state.idClass,
                teacher_old: this.state.teacher_old
                
            })
            this.setState({
                action: CRUD_ACTIONS.CREATE
            })
            await this.handleAllClass()
        }
    }

    handleEdit = async (data) => {
        if (data) {
            this.setState({
                action: CRUD_ACTIONS.EDIT,
                idClass: data.id,
                lop: data.id,
                teacher: data.ChuNhiem,
                teacher_old: data.ChuNhiem
            })
        }
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    render() {
        let { action, lop, teacher, classArr, teacherArr, TBC} = this.state
        return (
            <>
                <div className="chairman"><FormattedMessage id="chairman.chairman-title"/></div>
                <div className="Container">
                    <div className="content row">
                        <div className="col-6 input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text"><FormattedMessage id="chairman.class"/></label>
                            </div>
                            <select className="custom-select"
                                onChange={(event) => this.onChangeInput(event, 'lop')}
                                onClick={(event) => this.handleGetTeacher(event)}
                                value={lop}
                                disabled={this.state.action === CRUD_ACTIONS.EDIT?true:false}
                            >
                                <option defaultValue>Chọn...</option>
                                {classArr && classArr.length > 0 && classArr.map((item, index) => {
                                    return (
                                        <option value={item.id}>{item.TenLop}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-6 input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text"><FormattedMessage id="chairman.chairman"/></label>
                            </div>
                            <select className ="custom-select"
                                onChange={(event) => this.onChangeInput(event, 'teacher')}
                                value={teacher}
                            >
                                <option defaultValue>Chọn...</option>
                                {TBC && TBC.length > 0 && TBC.map((item, index) => {
                                    return (
                                        <option value={item.MaGVData.id}>{item.MaGVData.HoTenGV}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div
                            className="btn-save mt-3 col-12 text-right"
                        >
                           <button
                                className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                onClick={() => this.handleSaveTeaching()}
                            >
                                {this.state.action === CRUD_ACTIONS.EDIT?
                                    <FormattedMessage id="class.edit" /> :
                                    <FormattedMessage id="class.save"/>
                                }
                            </button>
                        </div>
                    </div>
                    <table id="tableManageUser" className="mt-5">
                        <tbody>
                        <tr>
                            <th><FormattedMessage id="chairman.class"/></th> 
                            <th><FormattedMessage id="chairman.year"/></th>
                            <th><FormattedMessage id="chairman.homeroom-teacher"/></th>
                            <th><FormattedMessage id="chairman.edit"/></th>
                        </tr>
                        {classArr && classArr.length > 0 &&
                            classArr.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.TenLop}</td>
                                        <td>{item.NamHocNe.valueEn}</td>
                                        <td>{item.LopGiaoVien.HoTenGV}</td>
                                        <td><button className='btn-edit' onClick={()=>this.handleEdit(item)}><i className="fas fa-edit"></i></button></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Chairman);
