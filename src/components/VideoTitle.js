
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute  z-20 text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <div className="h-[7rem] w-1/4 py-6 overflow-hidden mb-[17px] "><p className="text-lg  ">{overview}</p></div>
      <div className="">
        <button className=" bg-white text-black p-2 px-6 text-xl  rounded-lg hover:bg-opacity-80">
        ⏵ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50  hover:bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
// const VideoTitle = ({title,overview}) => {
//   return (
//     <div className="w-screen aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black absolute" >
//         <h1 className="text-6xl font-bold" >{title}</h1>
//         <p className="py-6 text-lg w-1/4">{overview}</p>
//         <div className="">
//             <button className="bg-white text-black p-2 px-8 text-lg  rounded-lg hover:bg-opacity-80">
//             ⏵ Play
//             </button>
//             <button className=" mx-2 bg-gray-500 text-white p-2 px-8 text-lg  rounded-lg">
//               More info
//             </button>
//         </div>
        
//     </div>
//     // console.log("title")
//   )
// }

// export default VideoTitle