import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import Slider from 'react-slick';
import { withRouter } from 'react-router';

class ThongBao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrNews: []
        }
    }

    componentDidMount() {
        this.props.getAllNews();
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        if(prevProps.news !== this.props.news){
            this.setState({
                arrNews: this.props.news
            })
        }
    }

    handleViewNews = (news) => {
        // this.props.history.push(`/home-news`)
        this.props.history.push(`/newsdetail/${news.id}`);
    }

    render() {
        let newsArr = this.state.arrNews
        return (
            <div className="section-Share section-ThongBao">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id = "thongbao.title"/></span>
                        <button className = "btn-section"><FormattedMessage id = "thongbao.more"/></button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {newsArr && newsArr.length > 0 &&
                                newsArr.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.avatar) {
                                        imageBase64 = new Buffer(item.avatar, 'base64').toString('binary')  
                                    }
                                    return (
                                        <div className="section-custom"
                                            onClick={() => this.handleViewNews(item)}
                                        >
                                            <div
                                                className="img_anh section-ThongBao"
                                                style={{ backgroundImage: `url(${imageBase64})` }}
                                            ></div>
                                            <div style={{marginRight: "35px",textAlign: "justify", fontSize: "14px"}}>&lt;&lt; {item.title} &gt;&gt;</div>
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
        news: state.news.News,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllNews: () => dispatch(actions.getAllNews()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThongBao));
