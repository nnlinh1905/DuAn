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
                                <div className="About-title">Giới thiệu</div>
                            </div>
                            <div className="content-down">
                                <div className="img"></div>
                                <div className="gt">	<h3><b>1. Giới Thiệu</b></h3> <ul> <li>Trường <strong>THPT Trần Văn Thành</strong> tọa lạc tại Thị trấn Cái Dầu, trung tâm huyện Châu Phú, Tỉnh An Giang. Từ ngày thành lập trường đến nay đã đổi địa điểm 2 lần, đổi tên trường 6 lần và thay đổi 10 Hiệu trưởng.</li> </ul> <ul> <li>Diện tích toàn trường là 12.717,25 m2, chiều dài trung bình 139,75 m, chiều rộng 91m.</li> </ul> <ul> <li>Tất cả GV của trường đều đạt chuẩn chuyên môn. Hiện trường có 4 Thạc sĩ (1 Hóa, 1 Lý, 2 Toán) và đang học sau ĐH 3 GV.</li> </ul> <ul> <li> <p>Cơ sở vật chất của trường có 01 dãy văn phòng (3 phòng làm việc của BGH, 01 phòng thường trực, 01 phòng y tế, 01 phòng giáo viên, 01 phòng thư viện, 01 phòng truyền thống, 01 phòng Internet với 08 máy phục vụ cho 8 tổ chuyên môn); 01 trung tâm THTN (4 môn: Lý, Hóa, Sinh) 2 phòng Tin học; 24 phòng học với 3 tầng: làm 16 phòng học và 8 phòng dự trữ.</p> </li> <li> <p>Ban đại diện CMHS và Hội Khuyến học Trường rất nhiệt tình giúp đỡ Trường nhiều mặt, PHHS đa số có trình độ dân trí cao so với các vùng nông thôn khác trong Huyện rất quan tâm việc học của con cái.</p> </li> </ul></div>
                            </div>
                            <div className="content-LichSu">
                                <div> <h3><strong>2. Những khó khăn, tồn tại của đơn vị:</strong></h3> <p><strong>2.1 Khó khăn:</strong></p> <ul> <li> <p>Trường chưa có hàng rào tường, các trang thiết bị phục vụ giảng dạy và học tập còn thiếu nhiều.</p> </li> <li> <p>Nhà vệ sinh chỉ có 01 chưa đủ phục vụ cho HS toàn trường, chưa có nhà công vụ.</p> </li> <li> <p>Đời sống của nhân dân còn nhiều khó khăn đã ảnh hưởng phần nào đến việc học của con em, vì thế một bộ phận không nhỏ HS chưa xác định đúng đắn động cơ học tập.</p> </li> </ul> <p><strong>2.2 Tồn tại:</strong></p> <ul> <li> <p>Tỉ lệ tốt nghiệp THPT hằng năm chưa ổn định, còn thấp và chưa tương xứng với vị thế của nhà trường. Tỉ lệ đậu Đại học – Cao đẳng còn thấp.</p> </li> <li> <p>Tổ chuyên môn hoạt động chưa mạnh, sự chuyển đổi phương pháp giảng dạy của một bộ phận giáo viên còn chậm.</p> </li> <li> <p>Nhiều giáo viên chủ nhiệm chưa có kinh nghiệm về công tác quản lý lớp.</p> </li> <li> <p>Hoạt động phục vụ (phòng bộ môn, phòng thư viện, văn phòng) chưa phát huy được vai trò.</p> </li> <li> <p>Các hoạt động ngoài giờ như CLB học tập, các hội thi, . . . chưa thực sự mạnh đễ hỗ trợ tích cực cho giảng dạy học tập.</p> </li> <li> <p>Công tác hướng nghiệp cho HS còn nhiều hạn chế.</p> </li> </ul></div>
                                <div>	<h3><strong>3. Định hướng phát triển của đơn vị trong tương lai:</strong></h3> <ol> <li> <p>Phấn đấu xây dựng trường đạt chuẩn quốc gia; đẩy mạnh chuyên môn, cải thiện tỉ lệ TN.THPT và đỗ vào ĐH, tích cực ứng dụng CNTT trong dạy học.</p> </li> <li> <p>Chỉnh trang trường sở, xây dựng hàng rào tường, trồng hoa kiểng, cây che bóng mát, tạo cảnh quan để xây dựng môi trường xanh, sạch, đẹp, phục vụ tốt cho hoạt động dạy và học.</p> </li> <li> <p>Đầu tư trang thiết bị các phòng bộ môn để giúp giáo viên thay đổi phương pháp giảng dạy, nâng cao hiệu quả đào tạo. Củng cố hoạt động Thư viện để phục vụ tốt cho hoạt động dạy và học.</p> </li> <li> <p>Tổ chức phụ đạo HS yếu kém để HS có đủ khả năng học tập và định hướng nghề nghiệp tương lai.</p> </li> <li> <p>Xây dựng kế hoạch bồi dưỡng HS giỏi, luyện thi ĐH dài hạn để đáp ứng yêu cầu công tác bồi dưỡng HS giỏi và công tác tuyển sinh Đại học – Cao đẳng.</p> </li> <li> <p>Đẩy mạnh công tác hướng nghiệp để HS định hướng nghề nghiệp sau khi tốt nghiệp THPT.</p> </li> <li> <p>Củng cố hoạt động Tổ chuyên môn để nâng cao hiệu quả công tác, nhất là bồi dưỡng GV thay đổi nhanh phương pháp dạy học.</p> </li> <li> <p>Đẩy mạnh công tác chủ nhiệm, nâng cao trách nhiệm của giáo viên chủ nhiệm để quản lý lớp đạt hiệu quả tốt.</p> </li> <li> <p>Củng cố hoạt động của các đoàn thể để thể hiện vai trò xung kích trong hoạt động.</p> </li> <li> <p>Nâng cao ý thức trách nhiệm, lương tâm nghề nghiệp của đội ngũ thầy cô giáo để phục vụ tốt hơn.</p> </li> </ol></div>
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
