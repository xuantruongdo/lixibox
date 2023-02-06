import "../components/cart/cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <h3>Giỏ Hàng Của Bạn</h3>
        <div className="d-flex">
          <div className="cart-list">
            <div className="cart-item d-flex justify-content-between bg-white align-items-center">
              <div className="cart-item-info d-flex align-items-center">
                <img
                  src="https://upload.lixibox.com/system/pictures/files/000/069/396/medium/1645675778.jpg?t=1672938007"
                  alt="alt"
                />
                <div className='cart-info'>
                  <h5 className='my-2'>
                    Nước Cân Bằng Ahc Brilliant Gold Toner AHC 140ml
                  </h5>
                  <p className='my-2'>1.300.000</p>
                  <p className="old-price my-2">2.000.000</p>
                  <div className="setCount">

                  </div>
                </div>
              </div>
              <div>
                <button>DELETE</button>
              </div>
            </div>
          </div>
          <div className="cart-action"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
