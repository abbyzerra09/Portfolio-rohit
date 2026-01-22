function About(){
    return(
        <>
            <div className="pt-30 md:pt-50 bg-[#FCFCFC] px-10 md:px-20">
            <h2 className="text-3xl font-nohemi px-5">About Me</h2>
            <div className="flex h-screen w-full items-center justify-center ">
                <div className="grid h-full w-full p-2 md:grid-cols-4 md:grid-rows-4 grid-cols-1 rounded-lg gap-4">
                <div className="col-span-3 row-span-2 bg-pink-200 rounded-lg shadow-md flex items-center justify-center">
                    <p>Texts</p>
                </div>
                <div className="col-span-1 row-span-2 bg-lime-200 rounded-lg shadow-md flex items-center justify-center">
                    <p>Image</p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default About;