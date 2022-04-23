import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { emitter } from "../../utils/emitter";
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            Email: '',
            Password: '',
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                ID: user.id,
                Email: user.Email,
                Password: '123',
            })
        }
        console.log('didmout edit ', this.props.currentUser)
    }

    toggle = () => {
        this.props.toggleFromOpen()
    }

    handleOnChangInput = (event, ID) => {

        let copyState = { ...this.state };
        copyState[ID] = event.target.value;

        this.setState({
            ...copyState,
        })
    }

    checkValideInput = () => {
        let isValue = true;
        let arrInput = ['Email', 'Password'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValue = false;
                alert('Missing parameter: '+ arrInput[i])
            }
        }
        return isValue;
    }
    
    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //gọi API
            this.props.EditUser(this.state);
        }
        
    }

    render() {
        console.log('check props', this.props);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Edit a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email: </label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangInput(event, "Email") }}
                                // disabled
                                value={this.state.Email}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label>Password: </label>
                            <input
                                type="Password"
                                onChange={(event) => { this.handleOnChangInput(event, "Password") }}
                                disabled
                                value={this.state.Password}
                            ></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary" 
                        className="px-3"
                        onClick={() => { this.handleSaveUser() }}
                    >Save change
                    </Button>
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);