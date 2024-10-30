
const BorderStyles="border-2 border-gray-500 rounded-lg"
const FilledStyles="text-white bg-black rounded-lg font-bold  py-4 px-6 mx-0 hover:bg-transparent hover:text-black  border-2 border-black"
// eslint-disable-next-line react/prop-types
export const Button = ({children="", hasBorder=false, isFilled=false}) => {
  return (
    <button className={` text-red-700 px-5 py-2 ${hasBorder && BorderStyles} ${isFilled && FilledStyles}`}>{children}</button>
  )
};

