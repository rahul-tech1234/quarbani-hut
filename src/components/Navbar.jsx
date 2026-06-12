import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center gap-5 mt-2 py-5 bg-gray-100 rounded px-2">
            <div className="start font-bold text-4xl">QurbaniHat </div>       
            <ul className="middle flex justify-between items-center gap-5">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>All Animals</Link></li>
            </ul>       
            <div className="end"><button className="btn bg-purple-500 text-white">Sign Up</button></div>       
        </div>
    );
};

export default Navbar;


{/* Basic */}
