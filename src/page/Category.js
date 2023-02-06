import "../components/category/category.css";
import { useState, useRef, useEffect } from "react";
import ModalButton from "../components/category/ModalButton";
import Product from "../components/category/Product";

const Category = () => {
  const menuRef = useRef("");

  const [isShown, setIsShown] = useState("");

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)){
            setIsShown('')
        }
    })
  }, [])

  return (
    <div className="category">
      <div className="container">
        <ul className="breadcrumb-line d-flex align-items-center">
          <li>Trang chủ</li>
          <li className="breadcrumb-line-active">Beauty Box</li>
        </ul>
        <div className="category-content d-flex">
          <div className="sidebar">
            <h5 className="my-3">Danh mục</h5>
            <ul>
              <li className="sidebar-item">
                <div
                  className="d-flex align-items-center sidebar-item-active"
                  data-bs-toggle="collapse"
                  href="#beauty-box"
                  role="button"
                  aria-expanded="false"
                  aria-controls="beauty-box"
                >
                  <i className="fa-solid fa-chevron-down"></i>
                  <span className="ml-2">Beauty Box</span>
                </div>
                <div className="collapse" id="beauty-box">
                  <div className="sub-sidebar">
                    <ul>
                      <li>New Arrivals</li>
                      <li>Bestsellers Box</li>
                      <li>Makeup Box</li>
                      <li>Skincare Box</li>
                      <li>Acne Box</li>
                      <li>Mom & Baby Box</li>
                      <li>Supplement Box</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sidebar-item">
                <div
                  className="d-flex align-items-center"
                  data-bs-toggle="collapse"
                  href="#LifeStylex"
                  role="button"
                  aria-expanded="false"
                  aria-controls="LifeStylex"
                >
                  <i className="fa-solid fa-chevron-down"></i>
                  <span className="ml-2">LifeStyle</span>
                </div>
                <div className="collapse" id="LifeStylex">
                  <div className="sub-sidebar">
                    <ul>
                      <li>Wedding shoes</li>
                      <li>Jewelry</li>
                      <li>Lingerie</li>
                      <li>Sunglasses</li>
                      <li>Hat</li>
                      <li>Bag</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sidebar-item">
                <div
                  className="d-flex align-items-center"
                  data-bs-toggle="collapse"
                  href="#Skincare-Concern"
                  role="button"
                  aria-expanded="false"
                  aria-controls="Skincare-Concern"
                >
                  <i className="fa-solid fa-chevron-down"></i>
                  <span className="ml-2">Skincare Concerns</span>
                </div>

                <div className="collapse" id="Skincare-Concern">
                  <div className="sub-sidebar">
                    <ul>
                      <li>Dry Skin</li>
                      <li>Oily Skin</li>
                      <li>Acne & Blemishes</li>
                      <li>Sensitive Skin</li>
                      <li>Anti Aging</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="sidebar-item">
                <div
                  className="d-flex align-items-center"
                  data-bs-toggle="collapse"
                  href="#Mom-Baby"
                  role="button"
                  aria-expanded="false"
                  aria-controls="Mom-Baby"
                >
                  <i className="fa-solid fa-chevron-down"></i>
                  <span className="ml-2">Mom & Baby</span>
                </div>
                <div className="collapse" id="Mom-Baby">
                  <div className="sub-sidebar">
                    <ul>
                      <li>Mom</li>
                      <li>Baby</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="content ml-3">
            <h4 className="my-3 font-weight-bold">BEAUTY BOX</h4>
            <div className="filter d-flex justify-content-between p-4">
              <div className="d-flex">
                <div
                  className="filter-item"
                  onClick={() => setIsShown("brand")}
                >
                  <span>THƯƠNG HIỆU</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div
                  className="filter-item"
                  onClick={() => setIsShown("price")}
                >
                  <span>GIÁ</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="filter-item">
                  <span>TRẠNG THÁI</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="filter-item">
                <span>SẮP XẾP THEO</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            {isShown === "brand" ? (
              <div className="mt-3" id="brand">
                <div className="modal-filter w-50">
                  <div ref={menuRef} className="container">
                    <div className="pl-3 pt-3">
                      <input type="checkbox" id="beautyBox" />
                      <label className="ml-3" htmlFor="beautyBox">
                        Beauty Box
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input type="checkbox" id="lifeStyles" />
                      <label className="ml-3" htmlFor="lifeStyles">
                        Life Styles
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input type="checkbox" id="Skincare" />
                      <label className="ml-3" htmlFor="Skincare">
                        Skincare Concerns
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input type="checkbox" id="momBaby" />
                      <label className="ml-3" htmlFor="momBaby">
                        Mom & Baby
                      </label>
                    </div>
                    <hr />
                    <ModalButton />
                  </div>
                </div>
              </div>
            ) : isShown === "price" ? (
              <div className="mt-3" id="price">
                <div className="modal-filter w-50">
                  <div ref={menuRef} className="container">
                    <div className="pl-3 pt-3">
                      <input name="price" type="radio" value={1} id="1" />
                      <label className="ml-3" htmlFor="1">
                        0 - 100k
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input name="price" type="radio" id="2" />
                      <label className="ml-3" value={2} htmlFor="2">
                        100k - 500k
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input name="price" type="radio" id="2" />
                      <label className="ml-3" value={3} htmlFor="3">
                        500k - 1tr
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input name="price" type="radio" id="2" />
                      <label className="ml-3" value={4} htmlFor="4">
                        1tr - 2tr
                      </label>
                    </div>
                    <div className="pl-3 pt-3">
                      <input name="price" type="radio" id="2" />
                      <label className="ml-3" value={5} htmlFor="5">
                        2tr - 5tr
                      </label>
                    </div>
                    <hr />
                    <ModalButton />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <Product/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
