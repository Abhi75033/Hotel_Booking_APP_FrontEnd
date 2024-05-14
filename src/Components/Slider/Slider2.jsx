import img1 from "../../assets/London1.jpg";
import img2 from "../../assets/London2.jpg";


function Slider2() {
  return (
    <div id="carouselExampleCaptions" className=" container-fluid carousel slide mt-2  h-75">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100 h-25 rounded-4" alt="..." />
        </div>
        <div className="carousel-item">
        <img src={img2} className="d-block w-100 h-25 rounded-4" alt="..." />
        </div>
        <div className="carousel-item">
        <img src="..." className="d-block w-100 h-25 rounded-4" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <h3 className="text-center slide">Visit London</h3>
    </div>
  );
}

export default Slider2;
