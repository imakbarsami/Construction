
const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer>
         <div className="container py-5">
           <div className="row">

             <div className="col-md-3">
               <h3 className='mb-3'>Urban Constructions</h3>
              <div className="pe-5">
                <p>
                  We are a leading construction company dedicated to delivering exceptional
                  projects that stand the test of time. With a passion for excellence and a
                  commitment to quality, we transform visions into reality.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <h3 className='mb-3'>Our Services</h3>
              <ul>

                <li>
                  <a href="">Speciality Construction</a>
                </li>

                <li>
                  <a href="">Civil Construction</a>
                </li>

                <li>
                  <a href="">Residential Construction</a>
                </li>

                <li>
                  <a href="">Corporate Construction</a>
                </li>

                <li>
                  <a href="">Industrial Construction</a>
                </li>

              </ul>
            </div>
            
            <div className="col-md-3">
              <h3 className='mb-3'>Quick Links</h3>
                <ul>

                  <li>
                    <a href="">About Us</a>
                  </li>

                  <li>
                    <a href="">Services</a>
                  </li>

                  <li>
                    <a href="">Projects</a>
                  </li>

                  <li>
                    <a href="">Blog</a>
                  </li>
                  
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  
                </ul>
            </div>

            <div className="col-md-3">
              <h3 className='mb-3'>Contact Us</h3>
               <ul>
                <li>
                  <a href="">(+880 1720423399)</a>
                </li>

                <li>
                  <a href="">info@example.com</a>
                </li>

                <p>
                  Quaish, 12345<br/>
                  Chittagong, Bangladesh<br/>
                </p>
               </ul>
            </div> 
            <hr />
            <div className='text-center pt-4'>
              Copyright ©{currentYear} Urban Constructions. All Rights Reserved.
            </div>
            </div>
         </div>
      </footer>
  )
}

export default Footer