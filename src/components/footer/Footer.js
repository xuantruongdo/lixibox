import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-3 col-sm-6">
            <h3 className="text-white mb-4">LIXIBOX</h3>
            <p>
              www.lixibox.com là kênh mua sắm mỹ phẩm, làm đẹp hàng đầu Việt Nam
              được các beauty blogger lựa chọn để giới thiệu sản phẩm họ yêu
              thích tới khách hàng, người hâm mộ.
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="mb-4">Danh mục Sản phẩm</h4>
            <ul>
              <li>Beauty Box</li>
              <li>Trang điểm</li>
              <li>Tóc</li>
              <li>Dưỡng da</li>
              <li>Cơ thể</li>
              <li>Cọ & Phụ kiện</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h4 className="mb-4">Thông tin & Hướng dẫn</h4>
            <ul>
              <li>Về Lixibox</li>
              <li>Mời bạn bè - Nhận thưởng ngay</li>
              <li>HDSD & Bảo hành</li>
              <li>Cửa hàng Lixibox</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức giao hàng</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h4 className="mb-4">Tải ứng dụng LIXIBOX</h4>
            <div className="download d-flex mb-4">
              <img
                src="https://js.lixibox.com/image-assets/app-icon/ios-app.png"
                alt="alt"
              />
              <img
                src="https://js.lixibox.com/image-assets/app-icon/android-app.png"
                alt="alt"
              />
            </div>
            <div className="contact">
              <h4>HOTLINE: 1800 2040</h4>
              <div className="socials mt-3 d-flex justify-content-center">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-facebook-messenger"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright align-items-center">
          <div className="certificate d-flex align-items-center">
            <img
              src="https://js.lixibox.com/image-assets/policy/logo.png"
              alt="alt"
            />
            <div className="ml-3">
              <p>
                © 2017 - Bản quyền của Công Ty Cổ Phần Sachi - www.lixibox.com
              </p>
              <p>
                Giấy chứng nhận ĐKKD số 0314414731 do Sở Kế hoạch và Đầu tư Tp.
                HCM cấp ngày 19/05/2017
              </p>
            </div>
          </div>
          <div className="address">
            <p>
              {" "}
              <i className="fa-solid fa-location-pin mr-2"></i>Địa chỉ: Số 13 Đường
              34, Kp. 2, <br />
              P. Bình An, Q. 2, Tp. Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
