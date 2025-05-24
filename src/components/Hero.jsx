import profilePic from "../assets/profilePic.jpg"

const Hero = () => {
  return (
    <div id="hero">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35 lg:pt-48">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                Hi, I'm Harshi Jain
              </h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Frontend Developer
              </span>
              <p className="my-2 max-w-xl py-4 font-light tracking-tight">Passionate frontend developer crafting efficient, scalable solutions with clean, modern code.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-6 lg:pt-0">
            <div className="flex justify-center">
              <img src={profilePic} alt="Harshi Jain" className="size-100 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
