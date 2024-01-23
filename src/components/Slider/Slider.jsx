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
              className="d-block w-100 h-[220px] md:h-[550px]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block space-y-2">
              <h1 className="text-lg">Lorem ipsum dolor sit.</h1>
              <h1 className="text-3xl text-white font-bold">Lorem ipsum dolor sit amet consectetur, </h1>
              <p>
                Start from 1000 MMK
              </p>
              <button className="px-3 py-1 rounded-lg bg-gray-400 mb-3">View</button>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://wowslider.com/sliders/demo-76/data1/images/purse407176_1280.jpg"
              className="d-block w-100 h-[220px] md:h-[550px]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block space-y-2">
              <h1 className="text-lg">Lorem ipsum dolor sit.</h1>
              <h1 className="text-3xl text-white font-bold">Lorem ipsum dolor sit amet consectetur, </h1>
              <p>
                Start from 4000 MMK
              </p>
              <button className="px-3 py-1 rounded-lg bg-gray-400 mb-3">View</button>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://wowslider.com/sliders/demo-76/data1/images/bookshelf349946_1280.jpg"
              className="d-block w-100 h-[220px] md:h-[550px]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block space-y-2">
              <h1 className="text-lg">Lorem ipsum dolor sit.</h1>
              <h1 className="text-3xl text-white font-bold">Lorem ipsum dolor sit amet consectetur, </h1>
              <p>
                Start from 5000 MMK
              </p>
              <button className="px-3 py-1 rounded-lg bg-gray-400 mb-3">View</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <div className="bg-gray-400 py-3 px-[6px] lg:py-10 lg:px-2 rounded-md">
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className="bg-gray-400 py-3 px-[6px] md:py-20 md:px-2 rounded-md">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
