import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import './Assignment.scss';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class Assignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classArr: [],
            teacherReducer: [],
            subjectArr: [],

            byMathArr: [],
            byVanArr: [],
            byAnhArr: [],
            byLyArr: [],
            byDiaArr: [],
            byHoaArr: [],
            bySinhArr: [],
            bySuArr: [],
            byGDCDArr: [],
            byGDQPArr: [],
            byCNArr: [],
            byTinArr: [],
            byTDArr: [],

            NamHoc: '',
            MaLop: '',
            MaGV: '',

            
            
            Toan: '',
            Van: '',
            Anh: '',
            Ly: '',
            Hoa: '',
            Sinh: '',
            Su: '',
            Dia: '',
            CN: '',
            GDCD: '',
            GDQP: '',
            Tin: '',
            TD: '',

            idClass: '',
            Lop: '',

            action: '',

            teacherByClass: [],
            TBClass: '',
        }
    }

    componentDidMount() {
        this.props.allClass();
        this.props.allTeachers();
        this.props.fetchSubjectStart();
        this.props.teachersByLop('18')
        this.props.teacherByMath();
        this.props.teacherByVan();
        this.props.teacherByAnh();
        this.props.teacherByLy();
        this.props.teacherByHoa();
        this.props.teacherBySinh();
        this.props.teacherBySu();
        this.props.teacherByDia();
        this.props.teacherByGDCD();
        this.props.teacherByGDQP();
        this.props.teacherByCN();
        this.props.teacherByTin();
        this.props.teacherByTDuc();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        // if (prevProps.listClass !== this.props.listClass) {
        //     let LopHoc = this.props.listClass
        //     this.setState({
        //         action: CRUD_ACTIONS.CREATE,
        //         classArr: LopHoc,
        //         MaLop: LopHoc && LopHoc.length > 0 ? LopHoc[0].id : '',
        //     })
        // }

        if (prevProps.byMath !== this.props.byMath) {
            let ToanArr = this.props.byMath
            this.setState({
                byMathArr: ToanArr,
                Toan: ToanArr && ToanArr.length > 0 ? ToanArr[0].id : '',
            })
        }
        if (prevProps.byVan !== this.props.byVan) {
            let VanArr = this.props.byVan
            this.setState({
                byVanArr: VanArr,
                Van: VanArr && VanArr.length > 0 ? VanArr[0].id : '',
            })
        }
        if (prevProps.byAnh !== this.props.byAnh) {
            let AnhArr = this.props.byAnh
            this.setState({
                byAnhArr: AnhArr,
                Anh: AnhArr && AnhArr.length > 0 ? AnhArr[0].id : '',
            })
        }
        if (prevProps.byLy !== this.props.byLy) {
            let LyArr = this.props.byLy
            this.setState({
                byLyArr: LyArr,
                Ly: LyArr && LyArr.length > 0 ? LyArr[0].id : '',
            })
        }
        if (prevProps.byHoa !== this.props.byHoa) {
            let HoaArr = this.props.byHoa
            this.setState({
                byHoaArr: HoaArr,
                Hoa: HoaArr && HoaArr.length > 0 ? HoaArr[0].id : '',
            })
        }
        if (prevProps.bySinh !== this.props.bySinh) {
            let SinhArr = this.props.bySinh
            this.setState({
                bySinhArr: SinhArr,
                Sinh: SinhArr && SinhArr.length > 0 ? SinhArr[0].id : '',
            })
        }
        if (prevProps.bySu !== this.props.bySu) {
            let SuArr = this.props.bySu
            this.setState({
                bySuArr: SuArr,
                Su: SuArr && SuArr.length > 0 ? SuArr[0].id : '',
            })
        }
        if (prevProps.byDia !== this.props.byDia) {
            let DiaArr = this.props.byDia
            this.setState({
                byDiaArr: DiaArr,
                Dia: DiaArr && DiaArr.length > 0 ? DiaArr[0].id : '',
            })
        }
        if (prevProps.byGDCD !== this.props.byGDCD) {
            let GDCDArr = this.props.byGDCD
            this.setState({
                byGDCDArr: GDCDArr,
                GDCD: GDCDArr && GDCDArr.length > 0 ? GDCDArr[0].id : '',
            })
        }
        if (prevProps.byGDQP !== this.props.byGDQP) {
            let GDQPArr = this.props.byGDQP
            this.setState({
                byGDQPArr: GDQPArr,
                GDQP: GDQPArr && GDQPArr.length > 0 ? GDQPArr[0].id : '',
            })
        }
        if (prevProps.byCN !== this.props.byCN) {
            let CNArr = this.props.byCN
            this.setState({
                byCNArr: CNArr,
                CN: CNArr && CNArr.length > 0 ? CNArr[0].id : '',
            })
        }
        if (prevProps.byTin !== this.props.byTin) {
            let TinArr = this.props.byTin
            this.setState({
                byTinArr: TinArr,
                Tin: TinArr && TinArr.length > 0 ? TinArr[0].id : '',
            })
        }
        if (prevProps.byTD !== this.props.byTD) {
            let TDArr = this.props.byTD
            this.setState({
                byTDArr: TDArr,
                TD: TDArr && TDArr.length > 0 ? TDArr[0].id : '',
            })
        }

        if (prevProps.listClass !== this.props.listClass) {
            let listClassArr = this.props.listClass
            this.setState({
                classArr: listClassArr,
                MaLop: listClassArr && listClassArr.length > 0 ? listClassArr[0].id: ''
            })
        }

        if (prevProps.TBC !== this.props.TBC) {
            let TBCl = this.props.TBC
            console.log('TBCL', TBCl)
            this.handleState(TBCl)
        }
    }

    handleState = (data) => {
        {
            data && data.length > 0 &&
            data.map((item, index) => {
                return (
                    <>

                    </>
                )
        })}
    }

    checkValidateInput = () => {
        let isValid = true;
        
        let arrCheck = ['MaLop','Toan', 'Ly', 'Hoa', 'Sinh', 'Su', 'Dia', 'CN', 'Tin', 'GDCD', 'GDQP', 'Van', 'Anh', 'TD' ]
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required: '+ arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveTeaching = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) 
            return
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            // Toán
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Toan,
                NamHoc: '2022',
            })
            // Văn 
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Van,
                NamHoc: '2022',
            })

            // Anh 
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Anh,
                NamHoc: '2022',
            })

            // Ly
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Ly,
                NamHoc: '2022',
            })

            // Hoa
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Hoa,
                NamHoc: '2022',
            })

            // Sinh
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Sinh,
                NamHoc: '2022',
            })

            // Su
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Su,
                NamHoc: '2022',
            })

            // Dia
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Dia,
                NamHoc: '2022',
            })

            //CN
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.CN,
                NamHoc: '2022',
            })

            //TD
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.TD,
                NamHoc: '2022',
            })

            //GDCD
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.GDCD,
                NamHoc: '2022',
            })

            //GDQP
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.GDQP,
                NamHoc: '2022',
            })

            //Tin
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Tin,
                NamHoc: '2022',
            })
        }
        // if (action === CRUD_ACTIONS.EDIT) {
        //     this.props.editClassStart({
        //         action: CRUD_ACTIONS.EDIT,
        //         TenLop: this.state.TenLop,
        //         MaKhoi: this.state.MaKhoi,
        //         NamHoc: this.state.NamHoc,
        //         id: this.state.idClass
        //     })
        // }

        // setTimeout(() => {
        //     this.props.allClass();
        // },1000)
        
        // console.log('check state', this.state);
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
        console.log('copyState',copyState)
    }

    handleClick = (event) => {
        console.log('handleClick', event.target.value)
        this.props.teachersByLop(event.target.value)
    }

    handleEditFromParent = () => {

        this.setState({
            
        })
    }

    

    render() {
        let classArr = this.state.classArr;
        let arrTeacher = this.state.teacherReducer;
        let arrSubjects = this.state.subjectArr;
        let arrByMath = this.state.byMathArr;
        let language = this.props.language;
        let { NamHoc, MaLop, MaGV,byVanArr,byAnhArr,byLyArr,byDiaArr,byHoaArr,bySinhArr,bySuArr,byGDCDArr,byGDQPArr,byCNArr,byTinArr,byTDArr } = this.state;
        let {Toan, Van, Anh,Ly,Hoa, Sinh, Su, Dia, CN, GDCD ,GDQP, Tin,TD}= this.state
        return (
            <>
                <div className="container-assignment">
                    <div className="assignment-title">Phân Công Giảng Dạy</div>
                    <div className="assignment-content">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label>Lớp</label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaLop')}
                                    onClick={(event) => this.handleClick(event)}
                                    value={MaLop}
                                >
                                    <option value="" selected disabled hidden>Chọn Lớp Học</option>
                                    {classArr && classArr.length > 0 && classArr.map((item, index) => {
                                        return (
                                            
                                            <option key={index} value={item.id}>{item.TenLop}-{item.NamHoc}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-6"></div>

                            <label className="col-1 text-right mt-3">Toán: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Toan')}
                                    value={Toan}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {arrByMath && arrByMath.length > 0 && arrByMath.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>
                            
                            <label className="col-1 text-right mt-3">Ngữ Văn: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Van')}
                                    value={Van}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byVanArr && byVanArr.length > 0 && byVanArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Anh Văn: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Anh')}
                                    value={Anh}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byAnhArr && byAnhArr.length > 0 && byAnhArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Lịch Sử: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Su')}
                                    value={Su}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {bySuArr && bySuArr.length > 0 && bySuArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Địa lý: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Dia')}
                                    value={Dia}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byDiaArr && byDiaArr.length > 0 && byDiaArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Vật Lý: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Ly')}
                                    value={Ly}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byLyArr && byLyArr.length > 0 && byLyArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Hóa Học: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Hoa')}
                                    value={Hoa}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byHoaArr && byHoaArr.length > 0 && byHoaArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Công nghệ: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'CN')}
                                    value={CN}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byCNArr && byCNArr.length > 0 && byCNArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Giáo Dục Công Dân: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'GDCD')}
                                    value={GDCD}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byGDCDArr && byGDCDArr.length > 0 && byGDCDArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Tin Học: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Tin')}
                                    value={Tin}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byTinArr && byTinArr.length > 0 && byTinArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Sinh Học: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Sinh')}
                                    value={Sinh}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {bySinhArr && bySinhArr.length > 0 && bySinhArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Giáo Dục Quốc Phòng: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'GDQP')}
                                    value={GDQP}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byGDQPArr && byGDQPArr.length > 0 && byGDQPArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Thể Dục: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'TD')}
                                    value={TD}
                                >
                                    <option>Chọn Giáo Viên</option>
                                    {byTDArr && byTDArr.length > 0 && byTDArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <div
                                className="btn-save mt-3 col-12"
                                onClick={() => this.handleSaveTeaching()}
                            >
                                <button
                                    className={ this.state.action === CRUD_ACTIONS.EDIT?"btn btn-warning":"btn btn-primary" }
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT?
                                        <FormattedMessage id="class.edit" /> :
                                        <FormattedMessage id="class.save"/>
                                    }
                                </button>
                            </div>
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
        listClass: state.class.Class,
        listTeacher: state.teacher.teachers,
        bySubject: state.admin.subject,
        subjects: state.admin.subject,
        byMath: state.teacher.byMath,
        byVan: state.teacher.byVan,
        byAnh: state.teacher.byAnh,
        byLy: state.teacher.byLy,
        byHoa: state.teacher.byHoa,
        byDia: state.teacher.byDia,
        bySinh: state.teacher.bySinh,
        bySu: state.teacher.bySu,
        byGDCD: state.teacher.byGDCD,
        byGDQP: state.teacher.byGDQP,
        byCN: state.teacher.byCN,
        byTin: state.teacher.byTin,
        byTD: state.teacher.byTD,
        
        TBC: state.assignment.assignments,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allClass: () => dispatch(actions.getAllClass()),
        allTeachers: () => dispatch(actions.fetchAllTeacherStart()),
        fetchSubjectStart: () => dispatch(actions.fetchSubjectStart()),
        teacherByMath: () => dispatch(actions.teacherByMath()),
        teacherByVan: () => dispatch(actions.teacherByVan()),
        teacherByAnh: () => dispatch(actions.teacherByAnh()),
        teacherByLy: () => dispatch(actions.teacherByLy()),
        teacherByHoa: () => dispatch(actions.teacherByHoa()),
        teacherByDia: () => dispatch(actions.teacherByDia()),
        teacherBySinh: () => dispatch(actions.teacherBySinh()),
        teacherBySu: () => dispatch(actions.teacherBySu()),
        teacherByGDCD: () => dispatch(actions.teacherByGDCD()),
        teacherByGDQP: () => dispatch(actions.teacherByGDQP()),
        teacherByCN: () => dispatch(actions.teacherByCN()),
        teacherByTin: () => dispatch(actions.teacherByTin()),
        teacherByTDuc: () => dispatch(actions.teacherByTDuc()),
        saveAssignmentStart: (data) => dispatch(actions.saveAssignmentStart(data)),   
        teachersByLop: (idClass) => dispatch(actions.teachersByLop(idClass)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assignment);
