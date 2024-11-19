
const Badge = ({text,bgColor,textColor,size}) => {
  return (
    <span className={`inline-block p-2 rounded-full font-semibold  ${bgColor} text-${size} text-${textColor} self-center`}>
      {text}
    </span>
  );
}

export default Badge;