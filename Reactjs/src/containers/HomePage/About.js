import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class About extends Component {

    render() {
        return (
            <div className="section-Share section-about">
                <div className="about-container">
                    <div className="section-about-header">
                        Giới Thiệu Tổng Quan Về Trường Trung Học Phổ Thông Trần Văn Thành
                    </div>
                    <div className="section-about-content">
                        <div className="content-left">
                            <iframe
                                width="100%"
                                height="400px"
                                src="https://www.youtube.com/embed/OKzJD2mHAIU"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="content-right">
                            <p>* Trường THPT Trần Văn Thành tọa lạc tại Thị trấn Cái Dầu, trung tâm huyện Châu Phú, Tỉnh An Giang. Từ ngày thành lập trường đến nay đã đổi địa điểm 2 lần, đổi tên trường 6 lần và thay đổi 10 Hiệu trưởng.

Khoảng cách từ trường đến Quốc lộ 91 khoảng 70m. Trường thu hút con em đa số ở 01 thị trấn, 02 xã ( Thị trấn Cái Dầu, Xã Vĩnh Thạnh Trung, Xã Bình Long). Các lộ ở nông thôn đều tráng nhựa hoặc tráng bê-tông, tạo điều kiện thuận lợi cho giáo viên và HS đến trường được dễ dàng.

* Diện tích toàn trường là 12.717,25 m2, chiều dài trung bình 139,75 m, chiều rộng 91m.

* Năm học 2008 – 2009, trường có 24 lớp, 1058 HS, 74 CB-GV-NV.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
