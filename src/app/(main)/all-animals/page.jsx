import { data } from "@/apicall";
import Card from "@/components/homepage/Card";

const AllAnimalsPage = async() => {
    const getAllData=await data()
    //console.log(getAllData);
    const low=[...getAllData].sort((a,b)=>a.price-b.price);
    console.log(low);
    return (
        <>
            <h2 className="text-center font-bold text-3xl my-3">All Animals</h2>
            <div>
                <button className="btn w-30 mx-auto block">Sort</button>
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