
export const MenuItem = ({text, icon}) => {
  return (
    <div className="flex space-x-2">
      <span>{icon}</span>
      <span className="text-gray-800 font-bold cursor-pointer hover:text-red-800">{text}</span> 
    </div>
  )
}
 
