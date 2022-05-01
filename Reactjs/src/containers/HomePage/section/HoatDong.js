import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import { withRouter } from 'react-router';

class HoatDong extends Component {

    handleViewAbout = () => {
        this.props.history.push('/home-about')
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="section-Share section-HoatDong">
                <div className="section-center">
                    <div className="center-left">
                        <div className="header">
                            Lịch Sử Hình Thành
                        </div>
                        <div className="left-content">
                            <div className="left-content-left">
                                <div className="img-tvt"></div>
                            </div>
                            <div className="left-content-right" style={{textAlign: "justify", marginRight: "20px"}}>
                                <h3><b>1. Giới Thiệu</b></h3>
                                <ul> <li>Trường <strong>THPT Trần Văn Thành</strong> tọa lạc tại Thị trấn Cái Dầu, trung tâm huyện Châu Phú, Tỉnh An Giang. Từ ngày thành lập trường đến nay đã đổi địa điểm 2 lần, đổi tên trường 6 lần và thay đổi 10 Hiệu trưởng.</li> </ul>
                                <ul> <li>Diện tích toàn trường là 12.717,25 m2, chiều dài trung bình 139,75 m, chiều rộng 91m.</li> </ul>
                                <ul> <li>Tất cả GV của trường đều đạt chuẩn chuyên môn. Hiện trường có 4 Thạc sĩ (1 Hóa, 1 Lý, 2 Toán) và đang học sau ĐH 3 GV.</li> </ul>
                                <ul> <li>Cơ sở vật chất của trường có 01 dãy văn phòng (3 phòng làm việc của BGH, 01 phòng thường trực<b>...</b></li> </ul>
                                <div className="link" onClick={()=> this.handleViewAbout()} style={{color: "blue", cursor: "pointer", padding: "0 200px 0 0"}}>Xem Thêm</div>
                            </div>
                        </div>
                    </div>
                    <div className="center-right">
                        <div className="header">
                            Hoạt Động Ngoại Khóa
                        </div>
                        <div className="right-content">
                            <Slider {...settings}>
                                <div className="section-custom">
                                    <div className="img_anh1 section-HoatDong"></div>
                                    <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginTop: '5px'}}>Hoạt Động Cấm Hoa Ngày 20-11</div>
                                </div>
                                <div className="section-custom">
                                    <div className="img_anh2 section-HoatDong"></div>
                                    <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginTop: '5px'}}>Hội Thi Ca Mua Nhạc</div>
                                </div>
                                <div className="section-custom">
                                    <div className="img_anh3 section-HoatDong"></div>
                                    <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginTop: '5px'}}>Trò Chơi Dân Giang</div>
                                </div>
                                <div className="section-custom">
                                    <div className="img_anh4 section-HoatDong"></div>
                                    <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginTop: '5px'}}>Làm Báo Tường</div>
                                </div>
                                <div className="section-custom">
                                    <div className="img_anh5 section-HoatDong"></div>
                                    <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginTop: '5px'}}>Sân Chơi Bóng Đá</div>
                                </div>
                            </Slider>
                        </div>
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

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HoatDong));
