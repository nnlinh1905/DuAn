import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers,editUserService, createNewUserService,deleteUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser'; 
class UserManage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }
            else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
            }
            emitter.emit('EVENT_CLEAR_MODAL_DATA')
        } catch (e) {
            console.log(e);
        }
    }

    handleDelete = async (user) => {
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(res.errMessage);
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleEdit = (user) => {
        this.setState({
            isOpenModalEditUser: true,//!this.state.isOpenModalEditUser
            userEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let res = await editUserService(user)
            console.log(res)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact()
            } else {
                alert(res.errMessage)
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromOpen={this.toggleUserModal}
                    createNewUser ={this.createNewUser}
                />
                {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        // this.state.isOpenModalUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromOpen={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        EditUser = {this.doEditUser}
                        // createNewUser ={this.createNewUser}
                    />
                }
                <div className="title text-center">
                    Nguyen Nhut Linh
                </div>
                <div className="mx-1">
                    <button className="btn btn-primary px-3"
                        onClick={()=> this.handleAddNewUser()}>
                        <i className="fas fa-plus"></i> Add new users</button>
                </div>
                <div className="users-table mt-3 mx-2">
                    <table id="customers">
                        <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Sửa</th>
                            <th>Xóa</th>                  
                        </tr>
                        {
                            arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{item.Email}</td>
                                            <td>
                                                <button className='btn-edit' onClick={()=>this.handleEdit(item)}><i className="fas fa-edit"></i></button>
                                            </td>
                                            <td>
                                                <button className='btn-delete' onClick={()=>this.handleDelete(item)}><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
