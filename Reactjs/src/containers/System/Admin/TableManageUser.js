import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions";

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import {GetStudentByClass} from '../../../services/userService'
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


class TableManageUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userReducer: [],
            classArr: [],
            MaLop: '',
            TBC: []
        }
    }

    async componentDidMount() {
        this.props.allUsers();
        // await this.handleGetStudentByClass()
    }

    handleGetStudentByClass = async (event) => {
        let res = await GetStudentByClass(event.target.value)
        this.setState({
            TBC: res.users,
        })
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        if (prevProps.listUser !== this.props.listUser) {
            this.setState({
                userReducer: this.props.listUser,
            })
        }

        if (prevProps.class !== this.props.class) {
            let arrClass = this.props.class
            this.setState({
                classArr: arrClass,
                // MaLop: arrClass && arrClass.length > 0 ? arrClass[0].id : '',
            })
        }
    }

    handleDelete = (user) => {
        this.props.deleteUserStart(user.id)
    }

    handleEdit = (user) => {
        this.props.handleEditFromParent(user)
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    render() {
        let arrUser = this.state.userReducer;
        let classs = this.state.classArr;
        let {MaLop, TBC} = this.state
        return (
            <React.Fragment>

                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Danh Sách Lớp</label>
                </div>
                    <select class="custom-select"
                        id="inputGroupSelect01"
                        onChange={(event) => this.onChangeInput(event, 'MaLop')}
                        onClick={(event) => this.handleGetStudentByClass(event)}
                        value={MaLop}
                    >
                        <option selected>Chọn Lớp</option>
                        {classs && classs.length > 0 && classs.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>{item.TenLop}</option>
                            )
                        })}
                    </select>
                </div>

                <table id="tableManageUser">
                    <tbody>
                    <tr>
                        <th>Họ Tên Học Sinh</th>
                        <th>Ảnh đại diện</th>
                        <th>Giới Tính</th>
                        <th>Ngày Sinh</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>Số Điện Thoại</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                    {TBC && TBC.length > 0 &&
                        TBC.map((item, index) => {
                            let imageBase64 = '';
                            if (item.avatar) {
                                imageBase64 = new Buffer(item.avatar, 'base64').toString('binary')  
                            }
                            return (
                                <tr key={index}>
                                    <td>{item.HoTenHS}</td>
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
        listUser: state.admin.users,
        class: state.class.Class,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allUsers: () => dispatch(actions.fetchAllUserStart()),
        deleteUserStart: (id) => dispatch(actions.deleteUserStart(id)),
        getAllClass: () => dispatch(actions.getAllClass()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
