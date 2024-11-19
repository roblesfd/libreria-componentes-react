
const List = ({ items, bgColor, textColor }) => {
  return (
    <ul className={`list-disc pl-4 divide-y divide-primary-400 bg-${bgColor}`}>
      {items.map((item, index) => (
        <li key={index} className={`py-4 px-4 list-none cursor-pointer flex  justify-between items-center gap-x-5  text-${textColor}`}>
          {item.icon && <span className="color-inherit">{item.icon}</span> }
          {item.text}
          {item.button && item.button}
        </li>
      ))}
    </ul>
  );
};

export default List;
