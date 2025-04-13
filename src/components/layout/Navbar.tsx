import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="flex w-full items-center gap-[40px_74px] font-normal tracking-[-0px] leading-[26px] justify-center flex-wrap py-[13px] border-[rgba(255,255,255,0.15)] border-b">
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/1fdd2ccdec23ba1de5aeb2003aa324104b4d1481?placeholderIfAbsent=true"
          alt="CodeFlow Logo"
          className="aspect-[1] object-contain w-[38px] self-stretch shrink-0 my-auto"
        />
      </Link>

      <nav className="border self-stretch flex min-w-60 items-center gap-[30px] text-[13px] text-white whitespace-nowrap justify-center flex-wrap my-auto px-10 py-2 rounded-[60px] border-[rgba(255,255,255,0.15)] border-solid max-md:max-w-full max-md:px-5">
        <button className="self-stretch flex items-center gap-[3px] my-auto">
          <span>Features</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/51a379ca1142c7b75e3052e869c9d9c41a289b8b?placeholderIfAbsent=true"
            alt="Dropdown"
            className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
          />
        </button>

        <button>Developers</button>

        <button className="self-stretch flex items-center gap-[3px] my-auto">
          <span>Company</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/51a379ca1142c7b75e3052e869c9d9c41a289b8b?placeholderIfAbsent=true"
            alt="Dropdown"
            className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
          />
        </button>

        <button>Blog</button>
        <button>Changelog</button>
      </nav>

      <div className="border self-stretch flex flex-col overflow-hidden items-center text-sm text-white text-center justify-center w-[121px] my-auto p-1.5 rounded-xl border-[rgba(255,255,255,0.15)] border-solid">
        <button className="self-stretch bg-[rgba(140,69,255,0.4)] border min-h-[30px] max-w-full w-[109px] gap-2.5 overflow-hidden px-[15px] py-0.5 rounded-lg border-[rgba(255,255,255,0.15)] border-solid hover:bg-[rgba(140,69,255,0.6)] transition-colors">
          Join waitlist
        </button>
      </div>
    </header>
  );
};
