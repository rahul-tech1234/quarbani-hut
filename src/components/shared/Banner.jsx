import Link from 'next/link';
const Banner = () => {
    //console.log(BgBanner.src);  
    return (
        <div className={`h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl`} style={{background:"url('/Banner.png')"}} >
            {/* <div>
                <Image src={BgBanner} alt='name' width={500} height={300}  className='h-auto'></Image>
            </div> */}
           <div className='flex flex-col justify-between items-center mx-auto space-y-3'>
            <h2 className="mx-auto text-5xl font-bold bg-linear-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent text-center leading-20">সুস্থ গরু, সুন্দর কুরবানি, <br></br> আনন্দময় ঈদ</h2>
           <Link href={'/all-animals'} className='bg-purple-500 btn text-white bg-linear-to-r from-purple-400 to-yellow-400  w-40'>Browse</Link>
           </div>
        </div>
    );
};

export default Banner;