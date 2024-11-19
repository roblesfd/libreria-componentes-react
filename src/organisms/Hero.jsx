const Hero = ({ button, title, subtitle, img }) => {
    return (
      <div
        className="relative h-96 bg-cover bg-center flex justify-start items-center p-6 md:p-8 lg:px-14 lg:py-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white" >{title}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white">{subtitle}</p>
          {button}
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    );
  };
  
  export default Hero;
  