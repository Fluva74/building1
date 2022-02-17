import "./showcase.css"

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="show-title">
        <h2>Margarita Tales...</h2>
      </div>


      <div className="show-container">

       
      <div className="show-card">
        <div className="show-top">
        <div className="show-card-image">
              <img src="https://live.staticflickr.com/1906/43575810950_928ab28003_b.jpg" alt="margarita the beach" className="card-image" />
            </div>
        </div>
         
          
          <div className="show-bottom">
            <div className="card-title">
              <h4>One Day At The Beach</h4>
            </div>
            <div className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis alias perferendis dicta minima, iusto excepturi ex nisi provident, vitae aliquam non. Sed totam libero deleniti distinctio?
            </div>
            <button className="btn"><a className="more" href="#!">Read More</a></button>
          </div>
          </div>

        
      <div className="show-card">
        <div className="show-top">
        <div className="show-card-image">
              <img src="https://i5.walmartimages.com/asr/8560409f-00bc-4086-bbc1-0b13e42adcab.7aa18120ab3bbf2b4336f979d3881f76.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="halloween margarita" className="card-image" />
            </div>
        </div>
           
        
            <div className="show-bottom">
            <div className="card-title">
              <h4>Hallow-Rita</h4>
            </div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis alias perferendis dicta minima, iusto excepturi ex nisi provident, vitae aliquam non. Sed totam libero deleniti distinctio?
            </div>
            <button className="btn"><a className="more" href="#!">Read More</a></button>
          </div>
        </div>
        

        <div className="show-card">
          <div className="show-top">
          <div className="show-card-image">
              <img src="https://cms.studyinsweden.se//app/uploads/2018/02/IMG_1579-scaled.jpg" alt="margarita and purse on table" className="card-image" />
            </div>
          </div>
          
            <div className="show-bottom">
              <div className="card-title">
                <h4>After Work Top-Shelf</h4>
              </div>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis alias perferendis dicta minima, iusto excepturi ex nisi provident, vitae aliquam non. Sed totam libero deleniti distinctio?
            </div>
            <button className="btn"><a className="more" href="#!">Read More</a></button>
          </div>
          </div>


                
          
      </div>


    </div>
  )
}
