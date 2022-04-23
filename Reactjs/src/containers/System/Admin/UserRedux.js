import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions';
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            yearArr: [],
            classArr: [],
            religionArr: [],
            semesterArr: [],
            previewImg: '',
            isOpen: false,

            NamHoc: '',
            MaLop: '',
            MaTonGiao: '',
            HoTenHS: '',
            GioiTinh: '',
            NgaySinh: '',
            DiaChi: '',
            SDT: '',
            Email: '',
            HoTenCha: '',
            NamSinhCha: '',
            HoTenMe: '',
            NamSinhMe: '',
            Password: '',
            avatar: '', 

            action: '',
            userEditId: '',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getClassStart();
        this.props.getYearStart();
        this.props.getReligionStart();
        this.props.getSemesterStart();
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log('check res:', res);
        // } catch (e) {
        //     console.log(e);
        // }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGender = this.props.genderRedux
            this.setState({
                genderArr: arrGender,
                GioiTinh: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : '',
            })
        }

        if (prevProps.years !== this.props.years) {
            let arrYear= this.props.years
            this.setState({
                yearArr: arrYear,
                NamHoc: arrYear && arrYear.length > 0 ? arrYear[0].keyMap : '',
            })
        }

        if (prevProps.class !== this.props.class) {
            let arrClass = this.props.class
            this.setState({
                classArr: arrClass,
                MaLop: arrClass && arrClass.length > 0 ? arrClass[0].keyMap : '',
            })
        }

        if (prevProps.religions !== this.props.religions) {
            let arrReligion = this.props.religions
            this.setState({
                religionArr: arrReligion,
                MaTonGiao: arrReligion && arrReligion.length > 0 ? arrReligion[0].keyMap : '',
            })
        }

        if (prevProps.semesters !== this.props.semesters) {
            this.setState({
                semesterArr: this.props.semesters
            })
        }

        if (prevProps.listUser !== this.props.listUser) {
            let arrGender = this.props.genderRedux
            let arrYear = this.props.years
            let arrClass = this.props.class
            let arrReligion = this.props.religions
            this.setState({
                MaChucDanh: arrYear && arrYear.length > 0 ? arrYear[0].keyMap : '',
                MaLop: arrClass && arrClass.length > 0 ? arrClass[0].keyMap : '',
                MaTonGiao: arrReligion && arrReligion.length > 0 ? arrReligion[0].keyMap : '',
                HoTenHS: '',
                GioiTinh: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : '',
                NgaySinh: '',
                DiaChi: '',
                SDT: '',
                Email: '',
                HoTenCha: '',
                NamSinhCha: '',
                HoTenMe: '',
                NamSinhMe: '',
                Password: '',
                avatar: '', 
                action: CRUD_ACTIONS.CREATE,
                previewImg:''
            })
        }
    }



    handleOnChangeImg = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectURL = URL.createObjectURL(file);
            this.setState({
                previewImg: objectURL,
                avatar: base64
            })
        }
    }
    
    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['NamHoc', 'MaLop', 'MaTonGiao', 'HoTenHS', 'GioiTinh', 'NgaySinh', 'DiaChi', 'SDT', 'Email', 'Password', 'HoTenCha', 'NamSinhCha', 'HoTenMe', 'NamSinhMe']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required: '+ arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    openPreviewImage = () => {
        if (!this.state.previewImg) {
            return;
        }
        this.setState({
            isOpen: true,
        })
    }

    HandleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) 
            return
        let { action } = this.state
        
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.createNewUser({
                HoTenHS: this.state.HoTenHS,
                NamHoc: this.state.NamHoc,
                MaLop: this.state.MaLop,
                MaTonGiao: this.state.MaTonGiao,
                GioiTinh: this.state.GioiTinh,
                NgaySinh: this.state.NgaySinh,
                DiaChi: this.state.DiaChi,
                SDT: this.state.SDT,
                HoTenCha: this.state.HoTenCha,
                NamSinhCha: this.state.NamSinhCha,
                HoTenMe: this.state.HoTenMe,
                NamSinhMe: this.state.NamSinhMe,
                Email: this.state.Email,
                Password: this.state.Password,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editUserStart({
                ID: this.state.userEditId,
                HoTenHS: this.state.HoTenHS,
                NamHoc: this.state.NamHoc,
                MaLop: this.state.MaLop,
                MaTonGiao: this.state.MaTonGiao,
                GioiTinh: this.state.GioiTinh,
                NgaySinh: this.state.NgaySinh,
                DiaChi: this.state.DiaChi,
                SDT: this.state.SDT,
                HoTenCha: this.state.HoTenCha,
                NamSinhCha: this.state.NamSinhCha,
                HoTenMe: this.state.HoTenMe,
                NamSinhMe: this.state.NamSinhMe,
                Email: this.state.Email,
                avatar: this.state.avatar,
            })
        }
        
        // setTimeout(() => {
        //     this.props.allUsers();
        // },1000)
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        console.log(copyState);
        this.setState({
            ...copyState,
        })
    }

    handleEditFromParent = (user) => {
        let imageBase64 = '';
        if (user.avatar) {
            imageBase64 = new Buffer(user.avatar, 'base64').toString('binary')  
        }
        
        this.setState({
                NamHoc: user.NamHoc,
                MaLop: user.MaLop,
                MaTonGiao: user.MaTonGiao,
                HoTenHS: user.HoTenHS,
                GioiTinh: user.GioiTinh,
                NgaySinh: user.NgaySinh,
                DiaChi: user.DiaChi,
                SDT: user.SDT,
                Email: user.Email,
                HoTenCha: user.HoTenCha,
                NamSinhCha: user.NamSinhCha,
                HoTenMe: user.HoTenMe,
                NamSinhMe: user.NamSinhMe,
                Password: user.Password,
                avatar: '',
                previewImg: imageBase64,
                action: CRUD_ACTIONS.EDIT,
                userEditId: user.id,
        })
    }

    render() {
        let genders = this.state.genderArr;
        let years = this.state.yearArr;
        let classs = this.state.classArr;
        let religions = this.state.religionArr;
        let semesters = this.state.semesterArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;

        let { NamHoc, MaLop, MaTonGiao, HoTenHS, GioiTinh, NgaySinh, DiaChi, SDT, Email, HoTenCha, NamSinhCha, HoTenMe, NamSinhMe, Password, avatar } = this.state;
        // console.log("check props", this.props.genderRedux)
        return (
            <div className="user-redux-container">
                <div className="title">
                    <FormattedMessage id="manage-hocsinh.add"/>
                </div>
                <div>{isLoadingGender === true ? 'Loading genders': ''}</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.ht"/></label>
                                <input type="text" className="form-control"
                                    value={HoTenHS}
                                    onChange={(event) => {this.onChangeInput(event, 'HoTenHS')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.gt"/></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'GioiTinh')}
                                    value={GioiTinh}
                                >
                                    {genders && genders.length > 0 && genders.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.ns"/></label>
                                <input type="date" className="form-control"
                                    value={NgaySinh}
                                    onChange={(event) => {this.onChangeInput(event, 'NgaySinh')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.sdt"/></label>
                                <input type="text" className="form-control"
                                    value={SDT}
                                    onChange={(event) => {this.onChangeInput(event, 'SDT')}}
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.mail"/></label>
                                <input type="email" className="form-control"
                                    value={Email}
                                    onChange={(event) => { this.onChangeInput(event, 'Email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT?true:false}
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.dc"/></label>
                                <input type="text" className="form-control"
                                    value={DiaChi}
                                    onChange={(event) => {this.onChangeInput(event, 'DiaChi')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.htc"/></label>
                                <input type="text" className="form-control"
                                    value={HoTenCha}
                                    onChange={(event) => {this.onChangeInput(event, 'HoTenCha')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.nsc"/></label>
                                <input type="date" className="form-control"
                                    value={NamSinhCha}
                                    onChange={(event) => {this.onChangeInput(event, 'NamSinhCha')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.htm"/></label>
                                <input type="text" className="form-control"
                                    value={HoTenMe}
                                    onChange={(event) => {this.onChangeInput(event, 'HoTenMe')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.nsm"/></label>
                                <input type="date" className="form-control"
                                    value={NamSinhMe}
                                    onChange={(event) => {this.onChangeInput(event, 'NamSinhMe')}}
                                />
                            </div>
                            <div className="col-2 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.mk"/></label>
                                <input type="Password" className="form-control"
                                    value={Password}
                                    onChange={(event) => { this.onChangeInput(event, 'Password') }}
                                />
                            </div>
                            <div className="col-2 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.nh"/></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'NamHoc')}
                                    value={NamHoc}
                                >
                                    {years && years.length > 0 && years.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.lop"/></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaLop')}
                                    value={MaLop}
                                >
                                    {classs && classs.length > 0 && classs.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.tg"/></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaTonGiao')}
                                    value={MaTonGiao}
                                >
                                    {religions && religions.length > 0 && religions.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-hocsinh.img"/></label>
                                <div className="preview-img-container">
                                    <input
                                        id="previewImg"
                                        type="file" hidden
                                        onChange = {(event) => this.handleOnChangeImg(event)}
                                    />
                                    <label className="btnImg" htmlFor="previewImg">Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="preview-img"
                                        style={{ backgroundImage: `url(${this.state.previewImg})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <button
                                    className={ this.state.action === CRUD_ACTIONS.EDIT?"btn btn-warning":"btn btn-primary" }
                                    onClick={() => this.HandleSaveUser()}
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT?
                                        <FormattedMessage id="manage-hocsinh.edit" /> :
                                        <FormattedMessage id="manage-hocsinh.them"/>
                                }
                                </button>
                            </div>
                            <div className="col-12 mt-3">
                                <TableManageUser
                                    handleEditFromParent={this.handleEditFromParent}
                                    action= {this.state.action}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImg}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        years: state.admin.years,
        class: state.admin.class,
        religions: state.admin.religions,
        semesters: state.admin.semesters,
        listUser: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getYearStart: () => dispatch(actions.fetchYearStart()),
        getClassStart: () => dispatch(actions.fetchClassStart()),
        getReligionStart: () => dispatch(actions.fetchReligionStart()),
        getSemesterStart: () => dispatch(actions.fetchSemesterStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        allUsers: () => dispatch(actions.fetchAllUserStart()),
        editUserStart: (data) => dispatch(actions.editUserStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
