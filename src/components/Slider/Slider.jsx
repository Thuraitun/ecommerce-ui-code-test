const Slider = () => {
  return (
    <div>
      
      <div id="carouselExampleCaptions" className="carousel slide">
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
            <img
              src="https://wowslider.com/sliders/demo-76/data1/images/camera349948_1280.jpg"
              className="d-block w-100 h-[550px]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block space-y-2">
              <h1 className="text-lg">Lorem ipsum dolor sit.</h1>
              <h1 className="text-3xl text-white font-bold">Lorem ipsum dolor sit amet consectetur, </h1>
              <p>
                Start from 1000 MMK
              </p>
              <button className="px-3 py-1 rounded-lg bg-gray-500 mb-3">View</button>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://wowslider.com/sliders/demo-76/data1/images/purse407176_1280.jpg"
              className="d-block w-100 h-[550px]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block space-y-2">
              <h1 className="text-lg">Lorem ipsum dolor sit.</h1>
              <h1 className="text-3xl text-white font-bold">Lorem ipsum dolor sit amet consectetur, </h1>
              <p>
                Start from 4000 MMK
              </p>
              <button className="px-3 py-1 rounded-lg bg-gray-500 mb-3">View</button>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://wowslider.com/sliders/demo-76/data1/images/bookshelf349946_1280.jpg"
              className="d-block w-100 h-[550px]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block space-y-2">
              <h1 className="text-lg">Lorem ipsum dolor sit.</h1>
              <h1 className="text-3xl text-white font-bold">Lorem ipsum dolor sit amet consectetur, </h1>
              <p>
                Start from 5000 MMK
              </p>
              <button className="px-3 py-1 rounded-lg bg-gray-500 mb-3">View</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <div className="bg-gray-600 py-10 px-1 rounded-md">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </div>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className="bg-gray-600 py-10 px-1 rounded-md">
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
