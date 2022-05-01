import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageTeacher.scss';
import * as actions from "../../../store/actions";
import { LANGUAGES } from '../../../utils';
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


class TableManageTeacher extends Component {


    constructor(props) {
        super(props);
        this.state = {
            teacherReducer: []
        }
    }

    componentDidMount() {
        this.props.allTeachers();
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        if (prevProps.listTeacher !== this.props.listTeacher) {
            this.setState({
                teacherReducer: this.props.listTeacher,
            })
        }
    }

    handleDelete = (user) => {
        this.props.deleteTeacherStart(user.id)
    }

    handleEdit = (user) => {
        this.props.handleEditFromParent(user)
    }

    render() {
        let arrTeacher = this.state.teacherReducer;
        let language = this.props.language;
        return (
            <React.Fragment>
                <table id="TableManageTeacher">
                    <tbody>
                    <tr>
                        <th>Họ Tên Giáo Viên</th>
                        <th>Ảnh Đại Diện</th>    
                        <th>Giới Tính</th>
                        <th>Ngày Sinh</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>Số Điện Thoại</th>
                        <th>Chuyên Môn</th>    
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                    {arrTeacher && arrTeacher.length > 0 &&
                        arrTeacher.map((item, index) => {
                            let imageBase64 = '';
                            if (item.avatar) {
                                imageBase64 = new Buffer(item.avatar, 'base64').toString('binary')  
                            }
                            // console.log('sdfsd', item.specializeArr.valueVi);
                            return (
                                <tr key={index}>
                                    <td>{item.HoTenGV}</td>
                                    <td>
                                        <div className="img">
                                            <img src={imageBase64} className="img-img"  alt=" "/>
                                        </div>
                                    </td>
                                    <td>{item.GioiTinh}</td>
                                    <td>{item.NgaySinh}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.DiaChi}</td>
                                    <td>{item.SDT}</td>
                                    <td>{item.MaChuyenMon}</td>
                                    <td><button className='btn-edit' onClick={()=>this.handleEdit(item)}><i className="fas fa-edit"></i></button></td>
                                    <td><button className='btn-delete' onClick={()=>this.handleDelete(item)}><i className="fas fa-trash-alt"></i></button></td>
                                </tr>
                            )
                        })
                    }        
                    </tbody>
                </table>

                {/* <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} /> */}
        
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        listTeacher: state.teacher.teachers,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allTeachers: () => dispatch(actions.fetchAllTeacherStart()),
        deleteTeacherStart: (id) => dispatch(actions.deleteTeacherStart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageTeacher);
