import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from '../../../store/actions';
import './NewsDetail.scss';
import { withRouter } from 'react-router';
import { allNews } from '../../../services/userService';
import Moment from 'react-moment';

class news extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // arrNews: [],
            newsDetail: {},
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let newsID = this.props.match.params.id;
            let res = await allNews(newsID);
            if (res && res.errCode === 0) {
                this.setState({
                    newsDetail: res.news,
                })
            }
        }
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        if(prevProps.news !== this.props.news){
            this.setState({
                arrNews: this.props.news
            })
        }
    }

    // handleViewNews = () => {
    //     this.props.history.push(`/home-news`)
    // }

    render() {
        // let newsArr = this.state.arrNews;
        console.log('check newsDetail', this.state.newsDetail)
        let newsDetail = this.state.newsDetail;
        // let newsID = this.props.match.params.id;
        return (
            <>
                <HomeHeader isShowBackground={false}/>
                
                <div className="News-container">
                    <div className="News-content"></div>
                    <div className="News-frames1">
                        <div className="News-header">
                            <div className="content-up">
                                <div className="News-title">Chi Tiết Tin Tức</div>
                            </div>
                        </div>
                        <div className="frames-cont">
                            <div className="frames-title text-center my-3">
                                {newsDetail.title}
                            </div>
                            <div className="frames-header row">
                                <div className="frames-img col-3">
                                    <img src={newsDetail.avatar} alt=" "/>
                                </div>
                                <div className="frames-description col-9">
                                    <div className="description">
                                        {newsDetail.description}
                                    </div>
                                    <div className="frames-time">
                                        <i class="far fa-clock"></i> <Moment parse="DD-MM-YYYY HH:mm">{newsDetail.createdAt}</Moment>
                                    </div>
                                </div>
                            </div>

                            <div className="gach"></div>

                            <div className="cont-content mt-3" dangerouslySetInnerHTML={{ __html: newsDetail.contentHTML }}>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <HomeFooter/>

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        // news: state.news.News,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getAllNews: (id) => dispatch(actions.getAllNews(id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(news));
