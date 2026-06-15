export const data=async()=>{
    const res=await fetch('https://qurbani-hut-snowy.vercel.app/data.json');
    const data=await res.json();
    return data;
};
