const Banner = ({ title = "", subtitle, bgColor, textColor, button = "" }) => {
    return (
      <div className={`bg-${bgColor} h-140 flex justify-between items-center  p-2 md:p-8`}>
        <div className="flex flex-col justify-start items-center ">
          <h2 className={`text-3xl md:text-5xl mb-0 mt-0 text-${textColor}`}>{title}</h2>
          <p className={`text-lg md:text-xl text-${textColor}`}>{subtitle}</p>
        </div>
        {button}
      </div>
    );
  };
  
  export default Banner;
  