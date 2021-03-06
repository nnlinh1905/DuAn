import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import './Assignment.scss';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
import { nameSubject } from '../../../../services/userService';
import TableA from './TableA';
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
        this.props.teachersByLop()
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
                // Toan: ToanArr && ToanArr.length > 0 ? ToanArr[0].id : '',
            })
        }
        if (prevProps.byVan !== this.props.byVan) {
            let VanArr = this.props.byVan
            this.setState({
                byVanArr: VanArr,
                // Van: VanArr && VanArr.length > 0 ? VanArr[0].id : '',
            })
        }
        if (prevProps.byAnh !== this.props.byAnh) {
            let AnhArr = this.props.byAnh
            this.setState({
                byAnhArr: AnhArr,
                // Anh: AnhArr && AnhArr.length > 0 ? AnhArr[0].id : '',
            })
        }
        if (prevProps.byLy !== this.props.byLy) {
            let LyArr = this.props.byLy
            this.setState({
                byLyArr: LyArr,
                // Ly: LyArr && LyArr.length > 0 ? LyArr[0].id : '',
            })
        }
        if (prevProps.byHoa !== this.props.byHoa) {
            let HoaArr = this.props.byHoa
            this.setState({
                byHoaArr: HoaArr,
                // Hoa: HoaArr && HoaArr.length > 0 ? HoaArr[0].id : '',
            })
        }
        if (prevProps.bySinh !== this.props.bySinh) {
            let SinhArr = this.props.bySinh
            this.setState({
                bySinhArr: SinhArr,
                // Sinh: SinhArr && SinhArr.length > 0 ? SinhArr[0].id : '',
            })
        }
        if (prevProps.bySu !== this.props.bySu) {
            let SuArr = this.props.bySu
            this.setState({
                bySuArr: SuArr,
                // Su: SuArr && SuArr.length > 0 ? SuArr[0].id : '',
            })
        }
        if (prevProps.byDia !== this.props.byDia) {
            let DiaArr = this.props.byDia
            this.setState({
                byDiaArr: DiaArr,
                // Dia: DiaArr && DiaArr.length > 0 ? DiaArr[0].id : '',
            })
        }
        if (prevProps.byGDCD !== this.props.byGDCD) {
            let GDCDArr = this.props.byGDCD
            this.setState({
                byGDCDArr: GDCDArr,
                // GDCD: GDCDArr && GDCDArr.length > 0 ? GDCDArr[0].id : '',
            })
        }
        if (prevProps.byGDQP !== this.props.byGDQP) {
            let GDQPArr = this.props.byGDQP
            this.setState({
                byGDQPArr: GDQPArr,
                // GDQP: GDQPArr && GDQPArr.length > 0 ? GDQPArr[0].id : '',
            })
        }
        if (prevProps.byCN !== this.props.byCN) {
            let CNArr = this.props.byCN
            this.setState({
                byCNArr: CNArr,
                // CN: CNArr && CNArr.length > 0 ? CNArr[0].id : '',
            })
        }
        if (prevProps.byTin !== this.props.byTin) {
            let TinArr = this.props.byTin
            this.setState({
                byTinArr: TinArr,
                // Tin: TinArr && TinArr.length > 0 ? TinArr[0].id : '',
            })
        }
        if (prevProps.byTD !== this.props.byTD) {
            let TDArr = this.props.byTD
            this.setState({
                byTDArr: TDArr,
                // TD: TDArr && TDArr.length > 0 ? TDArr[0].id : '',
            })
        }

        if (prevProps.listClass !== this.props.listClass) {
            let listClassArr = this.props.listClass
            this.setState({
                action: CRUD_ACTIONS.CREATE,
                classArr: listClassArr,
                // MaLop: listClassArr && listClassArr.length > 0 ? listClassArr[0].id: ''
            })
        }

        if (prevProps.TBC !== this.props.TBC) {
            let TBCl = this.props.TBC
            this.setState({
                TBClass: TBCl,
            })
        }
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
            // To??n
            this.props.saveAssignmentStart({
                MaLop: this.state.MaLop,
                MaGV: this.state.Toan,
                NamHoc: '2022',
            })
            // V??n 
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
    }

    // handleClick = async (event) => {
    //     this.props.teachersByLop(event.target.value)
    //     console.log('abc', this.state.TBClass)
    //     // let NSubject = nameSubject(event.target.value)
    //     // console.log('NSubject', NSubject)
    //     // for (let i = 0; i < 13; i++){
    //     //     if(!this.state.Toan && )
    //     // }
    // }

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
                    <div className="assignment-title">Ph??n C??ng Gi???ng D???y</div>
                    <div className="assignment-content">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label>L???p</label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaLop')}
                                    // onClick={(event) => this.handleClick(event)}
                                    value={MaLop}
                                >
                                    <option selected>Ch???n L???p H???c</option>
                                    {classArr && classArr.length > 0 && classArr.map((item, index) => {
                                        return (
                                            
                                            <option key={index} value={item.id}>{item.TenLop}-{item.NamHoc}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-6"></div>

                            <label className="col-1 text-right mt-3">To??n: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Toan')}
                                    value={Toan}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {arrByMath && arrByMath.length > 0 && arrByMath.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>
                            
                            <label className="col-1 text-right mt-3">Ng??? V??n: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Van')}
                                    value={Van}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byVanArr && byVanArr.length > 0 && byVanArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Anh V??n: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Anh')}
                                    value={Anh}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byAnhArr && byAnhArr.length > 0 && byAnhArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">L???ch S???: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Su')}
                                    value={Su}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {bySuArr && bySuArr.length > 0 && bySuArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">?????a l??: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Dia')}
                                    value={Dia}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byDiaArr && byDiaArr.length > 0 && byDiaArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">V???t L??: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Ly')}
                                    value={Ly}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byLyArr && byLyArr.length > 0 && byLyArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">H??a H???c: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Hoa')}
                                    value={Hoa}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byHoaArr && byHoaArr.length > 0 && byHoaArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">C??ng ngh???: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'CN')}
                                    value={CN}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byCNArr && byCNArr.length > 0 && byCNArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Gi??o D???c C??ng D??n: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'GDCD')}
                                    value={GDCD}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byGDCDArr && byGDCDArr.length > 0 && byGDCDArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Tin H???c: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Tin')}
                                    value={Tin}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byTinArr && byTinArr.length > 0 && byTinArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Sinh H???c: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'Sinh')}
                                    value={Sinh}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {bySinhArr && bySinhArr.length > 0 && bySinhArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Gi??o D???c Qu???c Ph??ng: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'GDQP')}
                                    value={GDQP}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
                                    {byGDQPArr && byGDQPArr.length > 0 && byGDQPArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.HoTenGV}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-2 form-group"></div>

                            <label className="col-1 text-right mt-3">Th??? D???c: </label>
                            <div className="col-3 mt-4">
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'TD')}
                                    value={TD}
                                >
                                    <option selected>Ch???n Gi??o Vi??n</option>
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
                                
                            >
                                <button
                                    onClick={() => this.handleSaveTeaching()}
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
                    <TableA/>
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
