import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import './Class.scss';
import TableClass from './tableClass';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class Class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            yearArr: [],
            MaKhoiArr: [],

            TenLop: '',
            MaKhoi: '',
            NamHoc: '',


            idClass:'',
            action: '',
        }

        
    }

    componentDidMount() {
        this.props.allClass();
        this.props.getYearStart();
        this.props.getKhoiStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if (prevProps.years !== this.props.years) {
            let arrYear= this.props.years
            this.setState({
                yearArr: arrYear,
                NamHoc: arrYear && arrYear.length > 0 ? arrYear[0].keyMap : '',
            })
        }

        if (prevProps.khoi !== this.props.khoi) {
            let arrKhoi = this.props.khoi
            this.setState({
                MaKhoiArr: arrKhoi,
                MaKhoi: arrKhoi && arrKhoi.length > 0 ? arrKhoi[0].keyMap : '',
            })
        }

        if (prevProps.listClass !== this.props.listClass) {
            let arrYear = this.props.years
            let arrKhoi = this.props.khoi
            this.setState({
                action: CRUD_ACTIONS.CREATE,
                TenLop: '',
                MaKhoi: arrKhoi && arrKhoi.length > 0 ? arrKhoi[0].keyMap : '',
                NamHoc: arrYear && arrYear.length > 0 ? arrYear[0].keyMap : '',
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        
        let arrCheck = ['TenLop','MaKhoi','NamHoc']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required: '+ arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveClass = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) 
            return
        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            this.props.saveClassStart({
                TenLop: this.state.TenLop,
                MaKhoi: this.state.MaKhoi,
                NamHoc: this.state.NamHoc,
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editClassStart({
                action: CRUD_ACTIONS.EDIT,
                TenLop: this.state.TenLop,
                MaKhoi: this.state.MaKhoi,
                NamHoc: this.state.NamHoc,
                id: this.state.idClass
            })
        }

        // setTimeout(() => {
        //     this.props.allClass();
        // },1000)
        
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    handleEditFromParent = (lop) => {

        this.setState({
            action: CRUD_ACTIONS.EDIT,
            TenLop: lop.TenLop,
            MaKhoi: lop.MaKhoi,
            NamHoc: lop.NamHoc,
            idClass: lop.id
        })
    }

    render() {
        let years = this.state.yearArr;
        let Khoi = this.state.MaKhoiArr;
        let { NamHoc, MaKhoi, TenLop } = this.state;
        let language = this.props.language;
        return (
            <>
                <div className="class-container">
                    <div className="class-title"><FormattedMessage id="class.QLClass" /></div>

                    <div className="row">
                        <div className="col-4 font-group">
                            <label
                                style={{fontSize: "18px", fontWeight: "bold"}}
                            >
                                <FormattedMessage id="class.class"/>
                            </label>

                            <input type="text" className="form-control"
                                value={TenLop}
                                onChange={(event) => {this.onChangeInput(event, 'TenLop')}}
                            />
                        </div>

                        <div className="col-4 font-group">
                            <label
                                style={{fontSize: "18px", fontWeight: "bold"}}
                            >
                                <FormattedMessage id="class.year"/>
                            </label>

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

                        <div className="col-4 font-group">
                            <label
                                style={{fontSize: "18px", fontWeight: "bold"}}
                            >
                                <FormattedMessage id="class.grade"/>
                            </label>

                            <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'MaKhoi')}
                                    value={MaKhoi}
                                >
                                    {Khoi && Khoi.length > 0 && Khoi.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div
                            className="btn-save mt-3"
                            onClick={() => this.handleSaveClass()}
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
                    <TableClass
                        handleEditFromParent={this.handleEditFromParent}
                        action= {this.state.action}
                    />
                </div>
                
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listClass: state.class.Class,
        years: state.admin.years,
        khoi: state.class.Khoi
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveClassStart: (data) => dispatch(actions.saveClassStart(data)),
        allClass: () => dispatch(actions.getAllClass()),
        getYearStart: () => dispatch(actions.fetchYearStart()),
        getKhoiStart: () => dispatch(actions.fetchKhoiStart()),
        editClassStart: (data) => dispatch(actions.editClassStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Class);
