export const data=async()=>{
    const res=await fetch('https://quarbani-hut-sigma.vercel.app/data.json');
    const data=await res.json();
    return data;
}