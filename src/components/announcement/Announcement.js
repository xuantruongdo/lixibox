import "./announcement.css";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement-wrapper container text-white d-flex justify-content-between">
        <p>
          Free Quà 815.000đ đơn từ 2 Triệu - Nhập NEW2000
        </p>
        <ul className="d-flex text-nowrap">
          <li className="d-flex align-items-center mx-3">
            <i className="fa-solid fa-shop mr-2"></i>
            Cửa hàng
          </li>
          <li className="d-flex align-items-center mx-3">
            <i className="fa-solid fa-car-side mr-2"></i>
            Kiểm tra đơn hàng
          </li>
          <li className="d-flex align-items-center mx-3">
            <i className="fa-brands fa-bitcoin mr-2"></i>
            Lixicoin
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
