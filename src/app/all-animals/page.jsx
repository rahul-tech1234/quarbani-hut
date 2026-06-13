import { data } from "@/apicall";
import Card from "@/components/homepage/Card";

const AllAnimalsPage = async() => {
    const getAllData=await data()
    console.log(getAllData);
    return (
        <>
            <h2 className="text-center font-bold text-3xl my-3">All Animals</h2>
            <div className="grid  md:grid-cols-4 gap-5 my-5">
                {
                    getAllData.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
                }
            </div>
        </>
    );
};

export default AllAnimalsPage;