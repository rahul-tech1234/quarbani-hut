'use client';
import { data } from "@/apicall";
import Card from "@/components/homepage/Card";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const AllAnimalsPage = () => {

const [data, setData] = useState([]);
const [sortOption, setSortOption] = useState("");

useEffect(() => {
  const getAllData = async () => {
    const res = await fetch("/data.json");
    const result = await res.json();
    setData(result);
  };
  

  getAllData();
}, []);


const handleSort = (option) => {
  setSortOption(option);

  const sorted = [...data];

  if (option === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (option === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  }

  setData(sorted);
};

    //console.log(getAllData);
    return (
        <>
            <h2 className="text-center font-bold text-3xl my-3">All Animals</h2>
            <div className="flex flex-col justify-center items-center">
                


<select onChange={(e) => handleSort(e.target.value)}>
  <option value="">Default</option>
  <option value="price-asc">Low to High</option>
  <option value="price-desc">High to Low</option>
</select>




                <div className="grid  md:grid-cols-4 gap-5 my-5">
                {
                    data.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
                }
            </div>
            </div>
        </>
    );
};

export default AllAnimalsPage;