const Banner = () => {

    return (
        <div className="relative">
            <div className="h-[70vh] flex items-center justify-center bg-opacity-25 text-black opacity-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(./banner.jpg)' }}>
            </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center ">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text=[#0B0B0B] text-center">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center mt-10">
                        <input type="text" placeholder="Search here...." className="text-[#0B0B0B66] p-4 rounded-l-lg border border-[#DEDEDE] focus:outline-none w-2/3 md:w-auto" />
                        <button className="bg-[#FF444A] border border-[#FF444A] py-4 px-7 rounded-r-lg text-white font-semibold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;