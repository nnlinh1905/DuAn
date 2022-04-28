import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import './tableA.scss';
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


class tableA extends Component {


    constructor(props) {
        super(props);
        this.state = {
            classReducer: []
        }
    }

    componentDidMount() {
        this.props.allClass();
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        if (prevProps.listClass !== this.props.listClass) {
            this.setState({
                classReducer: this.props.listClass,
            })
        }
    }

    handleDelete = (Lop) => {
        // console.log('dsds',Lop);
        this.props.deleteNews(Lop.id)
    }

    handleEdit = (lop) => {
        console.log('dsds',lop)
        this.props.handleEditFromParent(lop)
    }

    render() {
        let arrClass = this.state.classReducer;
        return (
            <React.Fragment>
                <table id="tableManageUser">
                    <tbody>
                    <tr>
                        <th>Tên lớp</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                    {arrClass && arrClass.length > 0 &&
                        arrClass.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.TenLop}</td>
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
        listClass: state.class.Class
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allClass: () => dispatch(actions.getAllClass()),
        deleteNews: (id) => dispatch(actions.DeleteClassStart(id)),
        // editTeacherStart: (data) => dispatch(actions.editTeacherStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(tableA);
