import axios from "axios";
import  { useEffect,useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Tag = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
 
  const [tag,setTag] = useState("car");
//   const [gif, setGif] = useState("");
//   const [loading, setloading] = useState('false');

//   async function fetchData() {
//      setloading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data} = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url; 
//     console.log(imageSource);
//      setGif(imageSource);
//      setloading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

   const {gif,loading,fetchData}=useGif(tag);

 
  return (
    <>
      <div
        className="w-1/2  bg-blue-500 rounded-lg border border-black
             flex flex-col items-center gap-y-5  mt-[15px] py-2"
      >
        <h1 className="text-2xl underline uppercase font-bold"> 
          {" "}
          A Tag Gif
        </h1>

        {
          loading ? (<Spinner/>) : ( <img src={gif}   className="object-cover" />)
        }
       
        <input
          className="w-10/12 text-lg py-2 rounded-lg-mb-[3px]"
          onChange={(event)=> setTag(event.target.value)}
          value={tag}       
        />
        
        <button
          onClick={()=> fetchData(tag)}
          className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg "
        >
          Generate
        </button>
      </div>
    </>
  );
};
export default Tag;
