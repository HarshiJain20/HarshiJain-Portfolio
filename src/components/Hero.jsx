import profilePic from "../assets/profilePic.jpg"

const Hero = () => {
  return (
    <div id="hero">
      <div className="border-b border-neutral-900 pb-4 pt-35 lg:mb-20 lg:pt-53">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-10 text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight mt-6 lg:mt-0">
                Hi, I'm Harshi Jain
              </h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl text-3xl tracking-tight text-transparent">
                Frontend Developer
              </span>
              <p className="my-2 max-w-xl py-4 font-light tracking-tight">Passionate frontend developer crafting efficient, scalable solutions with clean, modern code.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-6 lg:pt-0">
            <div className="flex justify-center">
              <img src={profilePic} alt="Harshi Jain" className="lg:size-100 sm:w-80 sm:h-80 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
