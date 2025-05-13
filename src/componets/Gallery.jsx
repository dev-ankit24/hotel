import { FaFrownOpen } from 'react-icons/fa';

export default function Gallery() {
    let data = [
        {id:3, pic:"/img/room/deluxe/deluxe3.jpg"},
        {id:1, pic:"/img/room/classic/classic1.jpg"},
        {id:5, pic:"/img/room/super/Super-room1.jpg"},
        {id:2, pic:"/img/room/all-room/room1.webp "},
        {id:7, pic:"/img/room/all-room/room2.webp"},
        {id:4, pic:"/img/room/all-room/room3.webp"},
        {id:6, pic:"/img/room/all-room/room4.webp"},
        {id:4, pic:"/img/room/all-room/room5.webp"},
        {id:8, pic:"/img/room/all-room/room6.webp"},
        {id:9, pic:"/img/room/all-room/room7.webp"},
        {id:10, pic:"/img/room/all-room/room8.webp"},
        {id:11, pic:"/img/room/all-room/room9.webp"},
        {id:12, pic:"/img/room/all-room/room10.webp"},
        {id:13, pic:"/img/room/all-room/room11.webp"},
        {id:14, pic:"/img/room/all-room/room12.webp"},
        {id:15, pic:"/img/room/all-room/room12.webp"},
        {id:17, pic:"/img/room/all-room/room17.webp"},
        {id:17, pic:"/img/room/all-room/room18.webp"},
        {id:17, pic:"/img/room/all-room/room19.webp"},
           
      
    ]

  return (
    <>

    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(/img/room/deluxe/deluxe1.jpg)"}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Gallery</h1>
                    <nav aria-label="breadcrumb">
                        {/* <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/gallery">Gallery</Link></li>
                            
                            <li className="breadcrumb-item text-white active" aria-current="page">
                                 <Link to="/">home</Link>
                            </li>
                        </ol> */}
                    </nav>
                </div>
            </div>
        </div>
     {
        data.length?

        <div className="container py-5">
        <div className="row g-4">
          {data.map((item, idx) => (
            <div className="col-12 col-sm-6 col-lg-4">
              {/* <div
                className="card gallery-card border-0 shadow-sm h-100"
               
                style={{ cursor: "pointer" }}
              > */}
                <div className="overflow-hidden m-auto gallery-img-div">
                  <img height={250} 
                    src={item.pic}
                    alt={item.name}
                    className="card-img-top  gallery-img"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            // </div>
          ))}
        </div>
      </div>
      :
     <div className="not-testinomonil mt-3 mb-3">
                    <h3 style={{color:"#856a2b"}}>Sorry! <FaFrownOpen /> Images Record Not Found!!</h3>
                    
                  </div>
      }
    </>
  )
}
