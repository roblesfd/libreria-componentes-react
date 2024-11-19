
/*
    Variantes
    -basica x
    -image -

    -outlined
    -complex
*/

const Card = ({ variant, header, title, content, footerContent, imgUrl}) => {
  return (
    <div className={`flex flex-col justify-start ${variant == "basic" && "p-4"}  mt-3 mb-3  shadow-md w-48 max-w-full rounded-md`}>
        { variant === "basic" && 
        <div>
            {/* header */}
            <div className="">
                <h4 className="text-sm text-slate-600">{header}</h4>
            </div>
                    {/* title */}
            <div className="">
                <h3 className="font-semibold">{title}</h3>
            </div>
        </div>
        }

        {/* content */}
        <div className="divide-y divide-slate-400">
            <div>
                {
                    variant === "image" ?    
                    <img className="w-full h-48 object-cover" src={imgUrl} alt={title} />
                    :
                    <p className="text-sm mt-3 mb-3">{content}</p>
                }
            </div>
            {/* footer */}
            <div className={`pt-3 flex justify-between font-semibold ${variant == "image" && "p-4"}`}>
                {footerContent}
            </div>

        </div>
        
    </div>
  )
}

export default Card