import './magazine.css'

const Magazine = () => {
    return ( 
        <div className='magazine container mt-5'>
            <div className='d-flex row'>
                <div className='col-sm-6 col-12 my-2'>
                <img src="https://upload.lixibox.com/system/banners/covers/000/001/437/medium/1672814902.jpg" alt="alt" />
                </div>
                <div className='col-sm-6 col-12 my-2'>
                <img src="https://upload.lixibox.com/system/pictures/files/000/080/669/original/1673235292.jpg?v=1" alt="alt" />
                </div>
            </div>
        </div>
     );
}
 
export default Magazine;