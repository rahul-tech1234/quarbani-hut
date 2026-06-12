import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center gap-5 mt-2 py-5 bg-gray-100 rounded px-2">
            <div className="start font-bold text-4xl ">
                <h1 className="bg-linear-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">QurbaniHat</h1> 
            </div>       
            <ul className="middle flex justify-between items-center gap-5">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/all-animals'}>All Animals</Link></li>
            </ul>       
            <div className="end"><button className="btn bg-linear-to-r from-purple-400 to-yellow-500  text-white">Sign Up</button></div>       
        </div>
    );
};

export default Navbar;


{/* Basic */}
