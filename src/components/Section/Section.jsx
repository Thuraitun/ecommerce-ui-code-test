import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Section = ({ products }) => {
  return (
    <div className=" my-10">
      <div className="px-4 py-6">
        <img
          className="rounded-lg object-cover h-[300px] w-full"
          src="https://t3.ftcdn.net/jpg/01/08/81/98/360_F_108819818_1Schnn0A0GpkHo2UOxrfXOLx7OUFH8P8.jpg"
          alt=""
        />
      </div>
      <div className="px-4 py-6 relative">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="">
          
        </div>
      </div>

      {/* <div className="px-4 py-6 relative">
        <img
          className="rounded-lg object-cover h-[350px] w-full"
          src="https://xtrasure.store/cdn/shop/files/iPhone_15_Pro_14a9bd1a-10be-4212-859f-b6599436ff57.webp?v=1702778145&width=2000"
          alt=""
        />
        <div className="absolute top-10 right-6 lg:right-auto lg:left-6 z-20">
          <div className="max-w-[1000px] mx-auto text-white">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable={true}
            >
              {products.map((product) => (
                <div className="mr-3" key={product.id}>
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="flex justify-center mb-6">
                      <span className="bg-red-500 py-[2px] px-4 rounded-b-md text-white ">
                        {product?.discountPercentage} Off
                      </span>
                    </div>
                    <div className="">
                      <img
                        className="w-full h-[150px]"
                        src={product?.thumbnail}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">{product?.title}</h1>
                    <p className="">{product?.price * 3000} MMK</p>
                    <p className="line-through text-red-500">
                      {product?.price * 3000 +
                        (product?.discountPercentage * 3000) / 100}{" "}
                      MMK
                    </p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Section;
