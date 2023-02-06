import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <h2 className="logo">LIXIBOX</h2>
          <div className="navbar-input-wrapper d-flex align-items-center justify-content-between">
            <input
              className="flex-1"
              type="text"
              placeholder="Tìm kiếm: son, máy rửa mặt ..."
            />
            <div className="navbar-search text-nowrap">
              <i className="fa-solid fa-search"></i>
              <span>Tìm kiếm</span>
            </div>
          </div>
          <div className="navbar-action d-flex align-items-center ml-5">
            <span className="login">Đăng nhập</span>
            <span className="mx-2">/</span>
            <span className="register">Đăng ký</span>
            <div className="navbar-cart d-flex align-items-center ml-3">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <ul className="navbar-category row text-center">
            <li className="col-lg-2 col-md-4 col-sm-6 col-6 shop-beauty">
              <p>
                <b>SHOP BEAUTY</b>
              </p>
            </li>
            <li className="col-lg-2 col-md-4 col-sm-6 col-6">
              <p>
                <b>ƯU ĐÃI</b>
              </p>
            </li>
            <li className="col-lg-2 col-md-4 col-sm-6 col-6">
              <p>
                <b>THƯƠNG HIỆU</b>
              </p>
            </li>
            <li className="col-lg-2 col-md-4 col-sm-6 col-6">
              <p>
                <b>GIỚI THIỆU BẠN BÈ</b>
              </p>
            </li>
            <li className="col-lg-2 col-md-4 col-sm-6 col-6">
              <p>
                <b>MAGAZINE</b>
              </p>
            </li>
            <li className="col-lg-2 col-md-4 col-sm-6 col-6">
              <p>
                <b>FEED</b>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='category-modal'>
          <div className='container bg-white'>
            <div className='row pt-4'>
              <div className="col-2">
                  <h5>Mua theo Box</h5>
                <ul>
                  <li>New Arrivals</li>
                  <li>Bestsellers Box</li>
                  <li>Makeup box</li>
                  <li>Skincare Box</li>
                  <li>Acne Box</li>
                  <li>Mom & Baby Box</li>
                  <li>Oral Care Box</li>
                  <li>Supplement Box</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Thực phẩm chức năng</h5>
                <ul>
                  <li><p>Beauty</p>
                    <p>(Làm đẹp)</p>
                  </li>
                  <li><p>Health</p>
                    <p>(Sức khỏe)</p>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Dưỡng da</h5>
                <ul>
                  <li>Cleanse</li>
                  <li>Mask</li>
                  <li>Moisturize</li>
                  <li>Treat</li>
                  <li>Lip Treatment</li>
                  <li>Sun protection</li>
                  <li>Skincare Sets</li>
                  <li>Best Sellers Skin Care</li>
                  <li>New Skincare</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Thiết bị làm đẹp</h5>
                <ul>
                  <li>Facials care</li>
                  <li>Body care</li>
                  <li>Oral Care</li>
                  <li>Hair care</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Nước hoa</h5>

              </div>
              <div className="col-2">
                  <h5>Các vấn đề về da</h5>
                <ul>
                  <li>Dry skin</li>
                  <li>Oral Skin</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Trang điểm</h5>
                <ul>
                  <li>Facials care</li>
                  <li>Body care</li>
                  <li>Oral Care</li>
                  <li>Hair care</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Chăm sóc cá nhân</h5>
                <ul>
                  <li>New Arrivals</li>
                  <li>Bestsellers Box</li>
                  <li>Makeup box</li>
                  <li>Skincare Box</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Mua theo Box</h5>
                <ul>
                  <li>New Arrivals</li>
                  <li>Bestsellers Box</li>
                  <li>Makeup box</li>
                  <li>Skincare Box</li>
                  <li>Acne Box</li>
                </ul>
              </div>
              <div className="col-2">
                  <h5>Mua theo Box</h5>
                <ul>
                  <li>New Arrivals</li>
                  <li>Bestsellers Box</li>
                  <li>Makeup box</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
