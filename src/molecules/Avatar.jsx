



const Avatar = ({src, size, shape, status,  direction, username, occupation="", links="" }) => {
    const getSizeClass = () => {
        switch(size) {
            case "small":
            return 'w-8 h-8';
            case 'medium':
              return 'w-12 h-12';
            case 'large':
              return 'w-16 h-16';
            default:
              return 'w-12 h-12';
        }
    };

    const getStatusClass = () => {
        if (status === 'online') {
            return 'border-4  border-lime-600';
        } else if (status === 'offline') {
            return 'border-4 border-slate-400';
        }
        return '';
    }

    const getShapeClass = () => {
        return shape === 'rounded' ? 'rounded-full' : 'rounded';
    };

    const getLayoutClass = () => {
        return direction === 'col' ? 'flex flex-col justify-items-center md:gap-y-2 sm:gap-y-1 w-min p-4 text-center' : 'flex flex-row gap-x-4'
    }
  
    return (
    <div className={`${getLayoutClass()}`}>
        <div className={`inline-block overflow-hidden ${getSizeClass()} ${getStatusClass()} ${getShapeClass()}`}>
            <img src={src} alt={username} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
            {username && <span className="text-sm font-semibold md:leading-5 sm:leading-3">{username}</span>} 
            {occupation && <span className="text-sm text-slate-600 md:leading-5 sm:leading-3 sm:mt-2">{occupation}</span>} 
            {links && <span className="text-sm text-slate-600 md:leading-5 sm:leading-4">{links}</span>}
        </div>
    </div>
  )
}

export default Avatar