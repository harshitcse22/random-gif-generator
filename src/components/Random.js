import axios from "axios";
import  { useEffect,useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

  
const Random = () => {
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const {gif,loading, fetchData}  = useGif();


  return (
    <>
      <div
        className="w-1/2  bg-green-500 rounded-lg border border-black
             flex flex-col items-center gap-y-5  mt-[15px] py-2"
      >
        <h1 className="text-2xl underline uppercase font-bold"> 
          {" "}
          A Random Gif
        </h1>

        {
          loading ? (<Spinner/>) : ( <img src={gif}   className="object-cover" />)
        }
        
        <button
          onClick={()=> fetchData()}
          className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg "
        >
          Generate
        </button>
      </div>
    </>
  );
};
export default Random;
