import BlackBg from '../assets/Black-Bg.jpg'

function HeroSection(){
    return(
        <>
        <div className='overflow-hidden'>
            <div className='relative w-screen h-screen'>
                <img src={BlackBg} className='absolute w-full h-full bg-contain bg-center'></img>
            <h2 className='absolute text-white font-5xl'>Hello</h2>
            </div>
        </div>
        </>
    );
}

export default HeroSection;