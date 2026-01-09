import React, { useState } from "react";

const categories = [
  "True Wireless Earbuds",
  "Wireless Earbuds",
  "Neckband Earphones",
  "Over-Ear Headphones",
  "On-Ear Headphones",
  "Wired Earphones",
  "Wired Headphones",
  "Wireless Speakers",
  "Portable Bluetooth Speakers",
  "Party Speakers",
  "Soundbars",
  "Home Audio Systems",
  "Studio Headphones",
  "DJ Headphones",
  "Gaming Headsets",
  "Noise Cancelling Headphones",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      {/* ===== ROW 1 : LOGO ===== */}
      <div className="flex justify-center py-3 border-b border-gray-100 bg-black">
        <div className="text-3xl font-bold cursor-pointer text-white uppercase">
          <span className="text-red-600 text-4xl">A</span>udi<span className="text-red-600 ">o</span>vo<span className="text-red-600 text-4xl ">x</span>
        </div>
      </div>

      {/* ===== ROW 2 : NAVIGATION ===== */}
    <div className="w-full py-3 border-b border-gray-100">

  {/* CENTERED CONTAINER */}
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

    {/* ===== LEFT MENU ===== */}
    <ul className="flex items-center gap-8 font-medium text-gray-800">

      {/* Categories Dropdown */}
      <li
        className="relative cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Categories <span className="ml-1">▾</span>

        {open && (
          <div className="absolute left-0 top-10 w-[720px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-4 gap-4 z-50">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 hover:text-red-600 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        )}
      </li>

      <li className="cursor-pointer hover:text-red-600">Personalisation</li>
      <li className="cursor-pointer hover:text-red-600">Corporate Orders</li>
      <li className="cursor-pointer hover:text-red-600">Gifting Store</li>
      <li className="cursor-pointer hover:text-red-600">
        More <span className="ml-1">▾</span>
      </li>
    </ul>

    {/* ===== RIGHT SECTION ===== */}
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder='Search "Speakers"'
        className="px-6 py-2 w-70 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-black text-sm"
      />
      <span className="text-xl cursor-pointer">⚡</span>
      <span className="text-xl cursor-pointer">👜</span>
    </div>

  </div>
</div>

    </nav>
  );
};

export default Navbar;
