const Banner = () => {
    return (
        <div className="h-[50vh] flex items-center justify-center">
            <div>
                <h1 className="text-5xl font-bold text=[#0B0B0B] text-center">I Grow By Helping People In Need</h1>
                <div className="flex justify-center mt-10">
                    <input type="text" placeholder="Search here...." className="text-[#0B0B0B66] p-4 rounded-l-lg border border-[#DEDEDE] focus:outline-none" />
                    <button className="bg-[#FF444A] border border-[#FF444A] py-4 px-7 rounded-r-lg text-white font-semibold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;