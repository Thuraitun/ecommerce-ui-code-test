import image from "../../assets/image/release_1.png"
import image_2 from "../../assets/image/release_2.png"
import image_3 from "../../assets/image/release_3.png"
import image_4 from "../../assets/image/release_4.png"
const Release = () => {
  return (
    <div className="my-10 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-[40px] font-bold">
          <span className="text-red-500">New </span>Released
        </h1>
        <p className="text-sm md:text-lg mb-5">Try Our Latest Flavors Here</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full"
              src={image}
              alt=""
            />
          </div>
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full"
              src={image_2}
              alt=""
            />
          </div>
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full"
              src={image_3}
              alt=""
            />
          </div>
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full"
              src={image_4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
