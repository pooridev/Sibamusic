import PlayerAudio from "../../components/player";



const Player = () => {

    return (
      <div className=" relative w-full h-screen overflow-hidden m-0 p-0 flex justify-center items-center bg-black ">

        <div className="absolute w-full h-screen bg-red-600 z-20 overflow-hidden bg-[url(/home/bg.jpg)] bg-cover bg-center blur-xl scale-150 "></div>

        <div className="absolute flex justify-center items-center w-full h-screen box-border bg-[rgba(0,0,0,80%)] overflow-hidden z-40">
          <div className=" absolute h-[150vh] w-[150vh] bg-[#006f7e] opacity-25 blur-[188px] rounded-full z-0 "></div>

          <div className=" relative w-full h-screen flex justify-evenly items-center text-white z-50">
            <PlayerAudio/>
          </div>
        </div>
      </div>
    );

}


export default Player

