import { data } from "@/apicall";
import Card from "@/components/homepage/Card";
import { RiArrowDropDownLine } from "react-icons/ri";

const AllAnimalsPage = async() => {
    const getAllData=await data()
    //console.log(getAllData);
    const low=[...getAllData]?.sort((a,b)=>a.price-b.price);
    console.log(low);
    return (
        <>
            <h2 className="text-center font-bold text-3xl my-3">All Animals</h2>
            <div className="flex flex-col justify-center items-center">
                

<div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">All ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li ><a>High</a></li>
    <li><a>Low</a></li>
  </ul>
</div>

                
                <div className="grid  md:grid-cols-4 gap-5 my-5">
                {
                    getAllData.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
                }
            </div>
            </div>
        </>
    );
};

export default AllAnimalsPage;