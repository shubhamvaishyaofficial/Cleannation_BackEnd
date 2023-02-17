
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Navbar.css';



const Navbar = () => {
  const [first, setfirst] = useState('')

  onAuthStateChanged(auth, (user) => {
    setfirst(user)
  });

  const singout =()=>{
    signOut(auth).then(() => {
     
    }).catch(() => {
      
    });
    
  }


  return (

    <>
        <div className=" navbar sticky-top" >
          <div className="col-6">
            <div>
              <div className="container">
                <div className="row">
                  <div className=" col-md-12 text-center">
                    <Link  className='om'                  to='/'><h1 className='om'>ॐ</h1><h4>CLEANNATION</h4></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sudiv col-6">


            <div  className="btn warning tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
             <div><img className='burgrr' src='https://img.icons8.com/ios-filled/512/menu-rounded.png' /></div>
            </div>


            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                 
                  <Link className='linku' to='/userid'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                 User id-Pass
                  </li>
                  </Link>

                  <Link className='linku' to='/totalservice'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  Totale Services
                  </li>
                  </Link>

                  <Link className='linku' to='/childerservice'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                 Childe Sevices
                  </li>
                  </Link>

                  <Link className='linku' to='/aboutus'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  About us
                  </li>
                  </Link>

                  <Link className='linku' to='/offer'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  Offer
                  </li>
                  </Link>

                  <Link className='linku' to='/ourteams'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                 Our Teams
                  </li>
                  </Link>

                  <Link className='linku' to='/refund'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                 Refund 
                  </li>
                  </Link>
                  <Link className='linku' to='/paymentmethode'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                 Payment Methode
                  </li>
                  </Link>

                 <Link className='linku' to='/contactus' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                contact us
                  </li>
                  </Link>
                  <Link className='linku' to='/privecypolicy' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
             Privecy Policy
                  </li>
                  </Link>
                  <Link className='linku' to='/tearmcondition' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                tearm & condition
                  </li>
                  </Link>
                  <Link className='linku' to='/footer' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
            Footer
                  </li>
                  </Link>
                  <Link className='linku' to='/menues' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                Add Menues
                  </li>
                  </Link>
                 
                </ul>
              </div>

            </div>
          </div>
        </div>
     
    </>

  )
}

export default Navbar
