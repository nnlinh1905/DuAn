import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageTeacher.scss';
import * as actions from "../../../store/actions";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './AboutTeacher.scss';
import Select from 'react-select';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class AboutTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedTeacher: '',
            description: '',
            listTeacher: '',
        }
    }

    componentDidMount() {
        this.props.fetchAllTeacherStart();
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        if (prevProps.teachers !== this.props.teachers) {
            let dataSelect = this.buildDataInputSelect(this.props.teachers)
            this.setState({
                listTeacher: dataSelect
            })
        }
    }

    buildDataInputSelect = (data) => {
        let result = []; 
        if (data && data.length > 0) {
            data.map((item, index) => {
                let object = {};
                object.label = item.HoTenGV;
                object.value = item.id;
                result.push(object);
            })
        }
        return result;
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    };

    handleSaveContentMark = () => {
        this.props.saveInforTeacherStart({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            teacherID: this.state.selectedTeacher.value,
        })
        console.log('check state', this.state);
    }

    handleChange = selectedTeacher => {
        this.setState({selectedTeacher});
    };

    handleOnChangeTeacher = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        console.log('check listteacher', this.state.listTeacher)
        return (
            <div className="teacher-container">
                <div className="teacher-about-title"><FormattedMessage id="teacher.about"/></div>

                <div className="more-information">
                    <div className="content-left form-group">
                        <label><FormattedMessage id="teacher.select"/></label>
                        <Select
                            value={this.state.selectedTeacher}
                            onChange={this.handleChange}
                            options={this.state.listTeacher}
                        />
                    </div>
                    <div className="content-right form-group">
                        <label>
                            <FormattedMessage id="teacher.introduce"/>
                        </label>
                        <textarea className="form-control" placeholder="miêu tả" rows="4"
                            onChange={(event) => this.handleOnChangeTeacher(event)}
                            value={this.state.description}
                        >
                            
                        </textarea>
                    </div>
                </div>
                <div className="teacher-about-editor mt-3">
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange} />
                </div>
                <div
                    className="btn-save"
                    onClick={() => this.handleSaveContentMark()}
                >
                    <button className="save-content-teacher"><FormattedMessage id="teacher.save"/></button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        teachers: state.teacher.teachers,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveInforTeacherStart: (data) => dispatch(actions.saveInforTeacherStart(data)),
        fetchAllTeacherStart: () => dispatch(actions.fetchAllTeacherStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutTeacher);
