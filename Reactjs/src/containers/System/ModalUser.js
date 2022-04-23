import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
            this.state = {
                Email: '',
                Password: '',
            }
        })
    }

    componentDidMount() {
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
    
    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //gọi API
            this.props.createNewUser(this.state);
        }
        
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email: </label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangInput(event, "Email") }}
                                value={this.state.Email}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label>Password: </label>
                            <input
                                type="Password"
                                onChange={(event) => { this.handleOnChangInput(event, "Password") }}
                                value={this.state.Password}
                            ></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary" 
                        className="px-3"
                        onClick={() => { this.handleAddNewUser() }}
                    >Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);