
// import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useAudio } from "../../components/contexts/AudioContext";


const SoundToggle = () => {

    const { isPlaying, toggleAudio } = useAudio(); //USE CONTEXT STATE MANGE ON ALL ROUTES, PATH 
    // This happens because React components unmount when you navigate away from a page, which stops the audio.
    //  Here's how to maintain audio continuity across pages using React Context:
 


  return (

    <div
    onClick={toggleAudio}
    className="cursor-pointer rounded-full border-background/80  hover:border-gray-700 transition"
  >
    {isPlaying ? (
    //   <HiSpeakerWave className="text-xl text-gray-800" />
  <svg className="on dark:bg-white rounded-full" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="15" cy="15" r="14.5" stroke="black"></circle>
<path d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364" stroke="black" stroke-linecap="round"></path>
</svg> 
    ) : (
    //   <HiSpeakerXMark className="text-xl text-gray-400" />
    // Here's the modified SVG with white strokes that will work with the dark background (using Tailwind classes):
<svg 
  className="off dark:bg-background/80 rounded-full stroke-black dark:stroke-white" 
  width="30" 
  height="30" 
  viewBox="0 0 30 30" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <circle 
    opacity="0.1" 
    cx="15" 
    cy="15" 
    r="14.5" 
    className="stroke-black dark:stroke-white"
  />
  <path 
    d="M11.9091 14V15M9 14V15M15 14V15M18.0909 14.0002V15M21 14V15" 
    strokeLinecap="round"
  />
</svg>
    )}
  </div>

  )

};

export default SoundToggle;



{/* <svg className="on dark:bg-white rounded-full" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="15" cy="15" r="14.5" stroke="black"></circle>
<path d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364" stroke="black" stroke-linecap="round"></path>
</svg> */}




{/* <svg className="off dark:bg-white rounded-full" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="15" cy="15" r="14.5" stroke="black"></circle>
<path d="M11.9091 14V15M9 14V15M15 14V15M18.0909 14.0002V15M21 14V15" stroke="black" stroke-linecap="round"></path>
</svg> */}