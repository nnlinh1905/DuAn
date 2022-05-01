import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils'
import { FormattedMessage } from 'react-intl';
class MonHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrSubjects: []
        }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        if(prevProps.subject !== this.props.subject){
            this.setState({
                arrSubjects: this.props.subject
            })
        }
    }

    componentDidMount() {
        this.props.loadSubject();
    }

    render() {
        let subjects = this.state.arrSubjects
        let {language} = this.props
        return (
            <div className="section-Share section-BoMon">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="homePage.subject"/></span>
                        <button className = "btn-section"><FormattedMessage id="homePage.addView"/></button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {subjects && subjects.length > 0 &&
                                subjects.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.avatar) {
                                        imageBase64 = new Buffer(item.avatar, 'base64').toString('binary')  
                                    }
                                    let subjectVi = `${item.valueVi}` 
                                    let subjectEn = `${item.valueEn}`
                                    return (
                                        <div className="section-custom" key = {index}>
                                            <div
                                                className="img_anh section-BoMon"
                                                style={{ backgroundImage: `url(${imageBase64})` }}
                                            >
                                            </div>
                                            <div className='name'>{language === LANGUAGES.VI ? subjectVi : subjectEn}</div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        subject: state.admin.subject,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadSubject: () => dispatch(actions.fetchSubject()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonHoc);
