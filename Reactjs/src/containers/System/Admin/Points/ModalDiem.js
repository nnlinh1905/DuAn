import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { emitter } from '../../../../utils/emitter';
import _ from 'lodash';

class ModalDiem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MaHS: '',
            MaGV: '',
            MaMonHoc: '',
            KiemTra1: '',
            KiemTra2: '',
            KiemTra3: '',
            KiemTraCuoiKy: '',
        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
            this.state = {
                MaHS: '',
                MaGV: '',
                MaMonHoc: '',
                KiemTra1: '',
                KiemTra2: '',
                KiemTra3: '',
                KiemTraCuoiKy: '',
            }
        })
    }

    componentDidMount() {
        let HS = this.props.currentUser;
        let GV = this.props.teacher;
        console.log('HS', HS)
        if (HS && !_.isEmpty(HS)) {
            this.setState({
                MaHS: HS.id,
            })
        }
        if (GV && !_.isEmpty(GV)) {
            this.setState({
                MaGV: GV.id,
                MaMonHoc: GV.MaChuyenMon,
            })
        }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.setState({
                MaHS: this.props.currentUser.id,
                MaLop: Number(this.props.currentUser.MaLop),
            })
        }

        if (prevProps.teacher !== this.props.teacher) {
            this.setState({
                MaGV: this.props.teacherV.id,
                MaMonHoc: this.props.teacher.MaChuyenMon,
            })
        }
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
        console.log('copy', copyState)
    }

    // checkValideInput = () => {
    //     let isValue = true;
    //     let arrInput = ['Email', 'Password'];
    //     for (let i = 0; i < arrInput.length; i++) {
    //         if (!this.state[arrInput[i]]) {
    //             isValue = false;
    //             alert('Missing parameter: '+ arrInput[i])
    //         }
    //     }
    //     return isValue;
    // }
    
    handleAddNewUser = () => {
        this.props.createNewUser(this.state);
    }

    render() {
        let HS = this.props.currentUser;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} className="text-center">Quản Lý Điểm Học Sinh: <b>{HS.HoTenHS}</b></ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Kiểm Tra hệ Số 1: </label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangInput(event, "KiemTra1") }}
                                value={this.state.KiemTra1}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label>Kiểm Tra hệ Số 1: </label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangInput(event, "KiemTra2") }}
                                value={this.state.KiemTra2}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label>Kiểm Tra 1 Tiết: </label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangInput(event, "KiemTra3") }}
                                value={this.state.KiemTra3}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label>Kiểm Tra Cuối Kỳ: </label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangInput(event, "KiemTraCuoiKy") }}
                                value={this.state.KiemTraCuoiKy}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDiem);