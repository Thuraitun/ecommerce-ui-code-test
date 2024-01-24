const Release = () => {
  return (
    <div className="max-w-[1500px] mx-auto my-10 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-[40px] font-bold">
          <span className="text-red-500">New </span>Released
        </h1>
        <p className="text-sm md:text-lg mb-5">Try Our Latest Flavors Here</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full h-[300px]"
              src="https://xtrasure.store/cdn/shop/files/RingkeSlimCaseforAppleWatchSeries9-8-7Clear_Pink_41mm_-2.jpg?v=1701419230&width=400"
              alt=""
            />
          </div>
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full h-[300px]"
              src="https://cdn.shopify.com/s/files/1/0762/8917/9936/files/Installment_plan_6b5ce58b-1c8a-4a78-91f6-36997089d098.webp?v=1704077340"
              alt=""
            />
          </div>
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full h-[300px]"
              src="https://xtrasure.store/cdn/shop/files/RingkeSlimCaseforAppleWatchSeries9-8-7Clear_Pink_41mm_-2.jpg?v=1701419230&width=400"
              alt=""
            />
          </div>
          <div className="hover:scale-105 transition-all">
            <img
              className="rounded-xl w-full h-[300px]"
              src="https://cdn.shopify.com/s/files/1/0762/8917/9936/files/Installment_plan_6b5ce58b-1c8a-4a78-91f6-36997089d098.webp?v=1704077340"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
