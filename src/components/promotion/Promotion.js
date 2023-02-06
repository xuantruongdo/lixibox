import './promotion.css'

const Promotion = () => {
    return ( 
        <div className="promotion container my-5">
            <h3>CHƯƠNG TRÌNH NỔI BẬT</h3>
            <div className="row mt-3">
                <div className="col-md-3 col-sm-6 col-12 mt-3">
                    <img className="w-100" src="https://upload.lixibox.com/system/banners/covers/000/001/446/original/1672400900.jpg" alt="alt" />
                </div>
                <div className="col-md-3 col-sm-6 col-12 mt-3">
                    <img className="w-100" src="https://upload.lixibox.com/system/banners/covers/000/001/445/original/1672936953.jpg" alt="alt" />
                </div>
                <div className="col-md-3 col-sm-6 col-12 mt-3">
                    <img className="w-100" src="https://upload.lixibox.com/system/banners/covers/000/001/412/original/1671795783.png" alt="alt" />
                </div>
                <div className="col-md-3 col-sm-6 col-12 mt-3">
                    <img className="w-100" src="https://upload.lixibox.com/system/banners/covers/000/001/444/original/1672936783.png" alt="alt" />
                </div>
            </div>
        </div>
     );
}
 
export default Promotion;