import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from '../../HomePage/HomeFooter';
import './About.scss';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        
    }

    render() {
        return (
            <div>
                <HomeHeader isShowBackground={false}/>
                <div className="About-container">
                    <div className="About-content"></div>
                    <div className="About-frames">
                        <div className="About-header">
                            <div className="content-up">
                                <div className="About-title">Đôi Nét Về Trường</div>
                            </div>
                            <div className="content-down">
                                <div className="img"></div>
                                <div className="gt">	<h3>1. Giới Thiệu</h3> <ul> <li>Trường <strong>THPT Trần Văn Thành</strong> tọa lạc tại Thị trấn Cái Dầu, trung tâm huyện Châu Phú, Tỉnh An Giang. Từ ngày thành lập trường đến nay đã đổi địa điểm 2 lần, đổi tên trường 6 lần và thay đổi 10 Hiệu trưởng.</li> </ul> <ul> <li>Diện tích toàn trường là 12.717,25 m2, chiều dài trung bình 139,75 m, chiều rộng 91m.</li> </ul> <ul> <li>Tất cả GV của trường đều đạt chuẩn chuyên môn. Hiện trường có 4 Thạc sĩ (1 Hóa, 1 Lý, 2 Toán) và đang học sau ĐH 3 GV.</li> </ul> <ul> <li> <p>Cơ sở vật chất của trường có 01 dãy văn phòng (3 phòng làm việc của BGH, 01 phòng thường trực, 01 phòng y tế, 01 phòng giáo viên, 01 phòng thư viện, 01 phòng truyền thống, 01 phòng Internet với 08 máy phục vụ cho 8 tổ chuyên môn); 01 trung tâm THTN (4 môn: Lý, Hóa, Sinh) 2 phòng Tin học; 24 phòng học với 3 tầng: làm 16 phòng học và 8 phòng dự trữ.</p> </li> <li> <p>Ban đại diện CMHS và Hội Khuyến học Trường rất nhiệt tình giúp đỡ Trường nhiều mặt, PHHS đa số có trình độ dân trí cao so với các vùng nông thôn khác trong Huyện rất quan tâm việc học của con cái.</p> </li> </ul></div>
                            </div>
                            <div className="content-LichSu">
                                <div></div>
                            </div>
                        </div>                     
                    </div>
                </div>
                <HomeFooter/>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
