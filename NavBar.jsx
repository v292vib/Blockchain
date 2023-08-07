import { useEffect, useState, useContext } from "react";

import { TrackingContext } from "../Conetxt/TrackingContext";

export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-gradient-to-r from-violet-200 to-pink-200 pb-4 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-4 md:block">
          {}
            <h1 className="text-black italic hover:not-italic text-3xl font-bold">TechTrio</h1>
            
          {}
          {}
        </div>
        {}
          {}
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {currentUser ? (
              <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-black font-bold bg-red-50 hover:bg-purple-200 active:bg-white-500 rounded-full md:inline-flex">
                {currentUser.slice(0, 25)}..
              </p>
            ) : (
              <button
                onClick={() => connectWallet()}
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-black text-xl font-bold bg-red-50 hover:bg-purple-200 active:bg-white-500 rounded-full md:inline-flex"
              >
                Connect Wallet
                {}
              </button>
            )}
          </div>
        {}
      </div>
    </nav>
  );
};
