import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import * as actions from '../../../store/actions';
import './news.scss';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
class news extends Component {

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
        this.props.history.push(`/newsdetail/${news.id}`);
    }

    render() {
        let newsArr = this.state.arrNews
        return (
            <div>
                <HomeHeader isShowBackground={false}/>
                
                <div className="News-container">
                    <div className="News-content">
                        
                    </div>
                    <div className="News-frames">
                        <div className="News-header">
                            <div className="content-up">
                                <div className="News-title">Tin Tức</div>
                            </div>
                        </div>

                        {newsArr && newsArr.length > 0 &&
                            newsArr.map((item, index) => {
                                let imageBase64 = '';
                                if (item.avatar) {
                                    imageBase64 = new Buffer(item.avatar, 'base64').toString('binary')  
                                }
                                // let data = item.createdAt;
                                // let date = data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear();
                                // let time = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
                                // let dateTime = date + ' ' + time; 
                                return (
                                    <div className="frames-content">
                                        <div className="News-img col-3"
                                            style={{ backgroundImage: `url(${imageBase64})` }}
                                        ></div>
                                        <div className="News-cent col-9">
                                            <div className="cent-on"
                                                onClick={() => this.handleViewNews(item)}
                                            >
                                                {item.title}
                                                <div className="news-time">
                                                    <i class="far fa-clock"></i>
                                                    {/* {dateTime} */}
                                                    <Moment parse="DD-MM-YYYY HH:mm">{item.createdAt}</Moment>
                                                </div>
                                            </div>
                                            <div className="cent-down">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        
                    </div>
                </div>

                <HomeFooter/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.News,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllNews: () => dispatch(actions.getAllNews()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(news));
