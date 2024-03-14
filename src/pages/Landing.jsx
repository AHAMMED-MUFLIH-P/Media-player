import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
 <>
 <div className='w-100 d-flex justify-content-center align-item-center'>
  <div className='row p-5 shadow'>
    <div className='col d-flex flex-column justify-content-center'>
     <h4>Media player 2024</h4> 
      <p>
        Explore Media player for youtube vedio upload and manged you can add and manage vedio,categories and even check history
      </p>
      <div>
      <Link to={'/his'} className='btn btn-success'>Explore</Link>
      </div>
      
    </div>
<div className='col'>
  <img src="https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/yp/images/dj_0.jpg?itok=HBj8c8h3" className='img-fluid shadow' alt="img" />
</div>
  </div>
 </div>

 <div className='mt-3 p-5'>
  <h2 className='text-center'>features</h2>
<div className='d-flex mt-5 flex-row justify-content-around'>

  <div className="card" style={{width:'18rem'}}>
  <img src="https://i.pinimg.com/originals/01/5f/b5/015fb50f8acc4ec86359e68669361403.gif" style={{height:'300px'}} className="card-img-top" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">upload vedio</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
  </div>

  <div className="card" style={{width:'18rem'}}>
  <img src="https://localbrandmanager.com/wp-content/uploads/2021/12/youtube-watch-gif.gif" style={{height:'300px'}} className="card-img-top" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">watch vedio</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
  </div>
  
  <div className="card" style={{width:'18rem'}}>
  <img src="https://media.giphy.com/media/BNQ31CjPWCRTa/giphy.gif" style={{height:'300px'}} className="card-img-top" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">view history</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
  </div>


</div>

 </div>

 <div className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
  <div className='col'>
    <h2>simple fast & secure</h2>
    <p style={{textAlign:'justify'}}>Media player 2024 is a platform for simple and faster youtube vedio uploading and managment.You vedio watch history too where you get
      a simple vedio player interface with the app it self...
    </p>
  </div>
  <div className='col'>
  <iframe width="653" height="335" src="https://www.youtube.com/embed/id848Ww1YLo" title="Manjummel Boys - Trailer | Chidambaram | Soubin Shahir, Sreenath Bhasi | Sushin Shyam | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

 </div>
 
 </>
  )
}

export default Landing
