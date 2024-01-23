

const Hero = () => {
  return (
    <div className="max-w-[1500px] mx-auto my-6">
        <div className="flex gap-3 h-[420px] w-full">
            <div className="w-2/4">
                <img src="https://imgs.search.brave.com/utNTVm1hnqKbaUx8iH8KG8zUMEciKUyEeCgKElNnNh4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcy5u/cHN0YXRpYy5jb20v/dXNlcmZpbGVzLzc2/ODcyNTQvaW1hZ2Uv/bmV4dHBpdF9pUGhv/bmVfMTVfUHJvX3Zz/X2lQaG9uZV8xNV9Q/cm9fTWF4X0NhbWVy/YS13ODEwaDQ2Mi5q/cGc" className="w-full object-cover h-[420px] rounded-lg" alt="" />
            </div>
            <div className="w-2/4 flex gap-3">
                <div className="w-1/2">
                    <img className=" h-[420px] rounded-lg" src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg" alt="" />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="">
                        <img className="rounded-lg h-[200px] w-full" src="https://cdn.dummyjson.com/product-images/5/thumbnail.jpg" alt="" />
                    </div>
                    <div className="">
                        <img className="rounded-lg h-[200px] w-full" src="https://cdn.dummyjson.com/product-images/5/thumbnail.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
