import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './news.scss';
import TableNews from './tableNews';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../../utils';
import Lightbox from 'react-image-lightbox';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            listNews: '',
            title: '',
            isOpen: false,
            action: '',
            newsID: '',
            previewImg: '',
            avatar: '',
        }

        
    }

    componentDidMount() {
        this.props.allNews();
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        if (prevProps.listNews !== this.props.listNews) {
            this.setState({
                action: CRUD_ACTIONS.CREATE,
                contentMarkdown: '',
                contentHTML: '',
                description: '',
                title: '',
                previewImg: '',
                avatar: '',
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
        
        let arrCheck = ['contentMarkdown','contentHTML','description','title']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('this input is required: '+ arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    };

    handleSaveNews = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) 
            return
        let { action } = this.state

        if (action === CRUD_ACTIONS.CREATE) {
            this.props.saveNewsStart({
                contentHTML: this.state.contentHTML,
                contentMarkdown: this.state.contentMarkdown,
                description: this.state.description,
                title: this.state.title,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editNewsStart({
                contentHTML: this.state.contentHTML,
                contentMarkdown: this.state.contentMarkdown,
                description: this.state.description,
                title: this.state.title,
                ID: this.state.newsID,
                avatar: this.state.avatar,
            })
        }

        // setTimeout(() => {
        //     this.props.allNews();
        // },1000)
        
        // console.log('check state', this.state);
    }

    handleOnChangeNews = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    handleEditFromParent = (news) => {
        let imageBase64 = '';
        if (news.avatar) {
            imageBase64 = new Buffer(news.avatar, 'base64').toString('binary')  
        }

        this.setState({
            contentMarkdown: news.contentMarkdown,
            contentHTML: news.contentHTML,
            description: news.description,
            title: news.title,
            action: CRUD_ACTIONS.EDIT,
            newsID: news.id,
            avatar: imageBase64,
            previewImg: imageBase64,
        })
    }

    openPreviewImage = () => {
        if (!this.state.previewImg) {
            return;
        }
        this.setState({
            isOpen: true,
        })
    }

    render() {
        return (
            <div className="news-container">
                <div className="news-about-title"><FormattedMessage id="news.about"/></div>

                <div className="row">
                    <div className="col-3 form-group">
                        <label style={{fontSize: "18px", fontWeight: "bold"}}>
                            <FormattedMessage id="news.anh"/>
                        </label>
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
                    <div className="col-4 form-group">
                        <label style={{fontSize: "18px", fontWeight: "bold"}}>
                            <FormattedMessage id="news.ten"/>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tiêu đề"
                            value={this.state.title}
                            onChange={(event) => {this.handleOnChangeNews(event, 'title')}}
                        />
                    </div>
                    <div className="col-5 form-group">
                        <label style={{fontSize: "18px", fontWeight: "bold"}}>
                            <FormattedMessage id="news.introduce"/>
                        </label>
                        <textarea className="form-control" placeholder="miêu tả" rows="4"
                            onChange={(event) => this.handleOnChangeNews(event, 'description')}
                            value={this.state.description}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="news-about-editor mt-3">
                    <label style={{fontSize: "18px", fontWeight: "bold"}}>
                        <FormattedMessage id="news.tintuc" />
                    </label>
                    <MdEditor
                        style={{ height: '300px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <div
                    className="btn-save mt-3"
                    onClick={() => this.handleSaveNews()}
                >
                    <button
                        className={ this.state.action === CRUD_ACTIONS.EDIT?"btn btn-warning":"btn btn-primary" }
                    >
                        {this.state.action === CRUD_ACTIONS.EDIT?
                            <FormattedMessage id="news.edit" /> :
                            <FormattedMessage id="news.save"/>
                        }
                    </button>
                </div>
                <TableNews
                    handleEditFromParent={this.handleEditFromParent}
                    action= {this.state.action}
                />
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImg}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        // teachers: state.news.teachers,
        // language: state.app.language,
        listNews: state.news.News
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveNewsStart: (data) => dispatch(actions.saveNewsStart(data)),
        editNewsStart: (data) => dispatch(actions.editNewsStart(data)),
        allNews: () => dispatch(actions.getAllNews()),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
