const Section = ({ products }) => {

  return (
    <div className="max-w-[1500px] mx-auto my-10">
      <div className="px-4 py-6">
        <img
          className="rounded-lg object-cover h-[300px] w-full"
          src="https://xtrasure.store/cdn/shop/files/iPhone_15_Pro_14a9bd1a-10be-4212-859f-b6599436ff57.webp?v=1702778145&width=2000"
          alt=""
        />
      </div>
      <div className="px-4 py-6 relative">
        <img
          className="rounded-lg object-cover h-[350px] w-full"
          src="https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg"
          alt=""
        />
        <div className="absolute top-8">
        
          
        </div>
      </div>
    </div>
  );
};

export default Section;
