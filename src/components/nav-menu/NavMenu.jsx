/* eslint-disable react/prop-types */

import { MenuItem } from "../menu-item";

export default function NavMenu({ items = [] }) {
  return (
    <div className="flex flex-col  py-2 px-4 bg-slate-50 drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30">
      {items.map(({ text, icon }) => (
        <MenuItem key={text} text={text} icon={icon} />
      ))}
    </div>
  );
}
