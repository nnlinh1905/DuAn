import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './tableNews.scss';
import * as actions from "../../../../store/actions";

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
};


class tableNews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            newsReducer: []
        }
    }

    componentDidMount() {
        this.props.allNews();
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        if (prevProps.listNews !== this.props.listNews) {
            this.setState({
                newsReducer: this.props.listNews,
            })
        }
    }

    handleDelete = (news) => {
        this.props.deleteNews(news.id)
    }

    handleEdit = (news) => {
        this.props.handleEditFromParent(news)
    }

    render() {
        let arrNews = this.state.newsReducer;
        return (
            <React.Fragment>
                <table id="tableManageUser">
                    <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Tên tin tức</th> 
                        <th>Hình ảnh</th>    
                        <th>Mô tả</th>
                        <th>ContentHTML</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                    {arrNews && arrNews.length > 0 &&
                        arrNews.map((item, index) => {
                            let imageBase64 = '';
                            if (item.avatar) {
                                imageBase64 = new Buffer(item.avatar, 'base64').toString('binary')  
                            }
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <div className="img">
                                            <img src={imageBase64} className="img-img"  alt=" "/>
                                        </div>
                                    </td>
                                    <td>{item.description}</td>
                                    <td>{item.contentHTML}</td>
                                    <td><button className='btn-edit' onClick={()=>this.handleEdit(item)}><i className="fas fa-edit"></i></button></td>
                                    <td><button className='btn-delete' onClick={()=>this.handleDelete(item)}><i className="fas fa-trash-alt"></i></button></td>
                                </tr>
                            )
                        })
                    }        
                    </tbody>
                </table>        
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        listNews: state.news.News
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allNews: () => dispatch(actions.getAllNews()),
        deleteNews: (id) => dispatch(actions.DeleteNewStart(id)),
        // editTeacherStart: (data) => dispatch(actions.editTeacherStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(tableNews);
