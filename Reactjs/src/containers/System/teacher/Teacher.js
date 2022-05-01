import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions';
import './Teacher.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageTeacher from './TableManageTeacher';

class Teacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            titleArr: [],
            specializeArr: [],
            religionArr: [],
            semesterArr: [],
            previewImg: '',
            isOpen: false,

            HoTenGV: '',
            MaChucDanh: '',
            MaChuyenMon: '',
            MaTonGiao: '',
            GioiTinh: '',
            NgaySinh: '',
            DiaChi: '',
            SDT: '',
            Email: '',
            Password: '',
            avatar: '',

            action: '',
            userEditId: '',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getSpecializeStart();
        this.props.getTitleStart();
        this.props.getReligionStart();
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

        if (prevProps.titles !== this.props.titles) {
            let arrTitle= this.props.titles
            this.setState({
                titleArr: arrTitle,
                NamHoc: arrTitle && arrTitle.length > 0 ? arrTitle[0].keyMap : '',
            })
        }

        if (prevProps.specializes !== this.props.specializes) {
            let arrSpecialize = this.props.specializes
            this.setState({
                specializeArr: arrSpecialize,
                MaChuyenMon: arrSpecialize && arrSpecialize.length > 0 ? arrSpecialize[0].keyMap : '',
            })
        }

        if (prevProps.religions !== this.props.religions) {
            let arrReligion = this.props.religions
            this.setState({
                religionArr: arrReligion,
                MaTonGiao: arrReligion && arrReligion.length > 0 ? arrReligion[0].keyMap : '',
            })
        }

        if (prevProps.listTeacher !== this.props.listTeacher) {
            let arrGender = this.props.genderRedux
            let arrTitle = this.props.titles
            let arrReligion = this.props.religions
            let arrSpecialize = this.props.specializes
            this.setState({
                MaChucDanh: arrTitle && arrTitle.length > 0 ? arrTitle[0].keyMap : '',
                MaChuyenMon: arrSpecialize && arrSpecialize.length > 0 ? arrSpecialize[0].keyMap : '',
                MaTonGiao: arrReligion && arrReligion.length > 0 ? arrReligion[0].keyMap : '',
                HoTenGV: '',
                GioiTinh: arrGender && arrGender.length > 0 ? arrGender[0].keyMap : '',
                NgaySinh: '',
                DiaChi: '',
                SDT: '',
                Email: '',
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
        
        let arrCheck = ['HoTenGV','MaChucDanh','MaChuyenMon','MaTonGiao','GioiTinh','NgaySinh','DiaChi','SDT','Email','Password']
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
            this.props.createNewTeacher({
                HoTenGV: this.state.HoTenGV,
                MaChucDanh: this.state.MaChucDanh,
                MaChuyenMon: this.state.MaChuyenMon,
                MaTonGiao: this.state.MaTonGiao,
                GioiTinh: this.state.GioiTinh,
                NgaySinh: this.state.NgaySinh,
                DiaChi: this.state.DiaChi,
                SDT: this.state.SDT,
                Email: this.state.Email,
                Password: this.state.Password,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editTeacherStart({
                ID: this.state.userEditId,
                HoTenGV: this.state.HoTenGV,
                MaChucDanh: this.state.MaChucDanh,
                MaChuyenMon: this.state.MaChuyenMon,
                MaTonGiao: this.state.MaTonGiao,
                GioiTinh: this.state.GioiTinh,
                NgaySinh: this.state.NgaySinh,
                DiaChi: this.state.DiaChi,
                SDT: this.state.SDT,
                Email: this.state.Email,
                avatar: this.state.avatar,
            })
        }
        
        // setTimeout(() => {
        //     this.props.allTeachers();
        // },1000)
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
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
            MaTonGiao: user.MaTonGiao,
            HoTenGV: user.HoTenGV,
            MaChucDanh: user.MaChucDanh,
            MaChuyenMon: user.MaChuyenMon,
            GioiTinh: user.GioiTinh,
            NgaySinh: user.NgaySinh,
            DiaChi: user.DiaChi,
            SDT: user.SDT,
            Email: user.Email,
            Password: user.Password,
            avatar: '',
            previewImg: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id,
        })
    }

    render() {
        let genders = this.state.genderArr;
        let titles = this.state.titleArr;
        let specializes = this.state.specializeArr;
        let religions = this.state.religionArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;

        let { HoTenGV,MaChucDanh,MaChuyenMon,MaTonGiao,GioiTinh,NgaySinh,DiaChi,SDT,Email,Password,avatar } = this.state;
        // console.log("check props", this.props.genderRedux)
        return (
            <div className="user-redux-container">
                <div className="title">
                    <FormattedMessage id="admin.manage-teacher"/>
                </div>
                <div>{isLoadingGender === true ? 'Loading genders': ''}</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.ht"/></label>
                                <input type="text" className="form-control"
                                    value={HoTenGV}
                                    onChange={(event) => {this.onChangeInput(event, 'HoTenGV')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.gt"/></label>
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
                                <label><FormattedMessage id="manage-GiaoVien.ns"/></label>
                                <input type="date" className="form-control"
                                    value={NgaySinh}
                                    onChange={(event) => {this.onChangeInput(event, 'NgaySinh')}}
                                />
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.sdt"/></label>
                                <input type="text" className="form-control"
                                    value={SDT}
                                    onChange={(event) => {this.onChangeInput(event, 'SDT')}}
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.mail"/></label>
                                <input type="email" className="form-control"
                                    value={Email}
                                    onChange={(event) => { this.onChangeInput(event, 'Email') }}
                                    disabled={this.state.action === CRUD_ACTIONS.EDIT?true:false}
                                />
                            </div>
                            <div className="col-6 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.dc"/></label>
                                <input type="text" className="form-control"
                                    value={DiaChi}
                                    onChange={(event) => {this.onChangeInput(event, 'DiaChi')}}
                                />
                            </div>
                            <div className="col-2 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.mk"/></label>
                                <input type="Password" className="form-control"
                                    value={Password}
                                    onChange={(event) => { this.onChangeInput(event, 'Password') }}
                                />
                            </div>
                            <div className="col-2 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.cm"/></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaChuyenMon')}
                                    value={MaChuyenMon}
                                >
                                    {specializes && specializes.length > 0 && specializes.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.cd"/></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaChucDanh')}
                                    value={MaChucDanh}
                                >
                                    {titles && titles.length > 0 && titles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-3 mt-3">
                                <label><FormattedMessage id="manage-GiaoVien.tg"/></label>
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
                                <label><FormattedMessage id="manage-GiaoVien.img"/></label>
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
                                        <FormattedMessage id="manage-GiaoVien.edit" /> :
                                        <FormattedMessage id="manage-GiaoVien.them"/>
                                }
                                </button>
                            </div>
                            <div className="col-12 mt-3">
                                <TableManageTeacher
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
        titles: state.admin.titles,
        religions: state.admin.religions,
        specializes: state.admin.specializes,
        listTeacher: state.teacher.teachers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getTitleStart: () => dispatch(actions.fetchTitleStart()),
        getSpecializeStart: () => dispatch(actions.fetchSpecializeStart()),
        getReligionStart: () => dispatch(actions.fetchReligionStart()),
        getSemesterStart: () => dispatch(actions.fetchSemesterStart()),
        createNewTeacher: (data) => dispatch(actions.createNewTeacher(data)),
        allTeachers: () => dispatch(actions.fetchAllTeacherStart()),
        editTeacherStart: (data) => dispatch(actions.editTeacherStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
