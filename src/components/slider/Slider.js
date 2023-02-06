import "./slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://upload.lixibox.com/system/pictures/files/000/080/622/original/1672906821.jpeg?v=1"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://upload.lixibox.com/system/banners/covers/000/001/443/original/1672908637.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://upload.lixibox.com/system/banners/covers/000/001/422/original/1672311770.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-btn carousel-control-prev abc"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark px-4 py-3"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-btn carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark px-4 py-3"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
