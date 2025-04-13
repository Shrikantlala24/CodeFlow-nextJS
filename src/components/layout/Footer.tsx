import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border flex w-full max-w-[1195px] flex-wrap px-[45px] py-[41px] border-[rgba(255,255,255,0.15)] border-solid max-md:max-w-full max-md:px-5">
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/e2c8bd6e46a41ea6fdfb1a6ff5158cc2d0021418?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[3.64] object-contain w-[138px] shrink-0"
        />
      </Link>

      <nav className="flex min-w-60 gap-[40px_60px] text-[13px] text-white font-normal whitespace-nowrap tracking-[-0px] leading-[26px] justify-center max-md:max-w-full">
        <div className="flex gap-[40px_60px] justify-center">
          <div>
            <h3 className="text-white font-medium">Product</h3>
            <ul className="mt-5 space-y-5">
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/integration">Integration</Link>
              </li>
              <li>
                <Link to="/updates">Updates</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium">Company</h3>
            <ul className="mt-5 space-y-5">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/manifesto">Manifesto</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
              <li>
                <Link to="/contract">Contract</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-[40px_60px] justify-center">
          <div>
            <h3 className="text-white font-medium">Resources</h3>
            <ul className="mt-5 space-y-5">
              <li>
                <Link to="/examples">Examples</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/guides">Guides</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium">Legal</h3>
            <ul className="mt-5 space-y-5">
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/security">Security</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex gap-[30px]">
        <a href="#" aria-label="Twitter">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/897075a6a19eb52b80394a84654ca165105456d6?placeholderIfAbsent=true"
            alt="Twitter"
            className="aspect-[1] object-contain w-6 shrink-0"
          />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/94f2a18776d2ef464cf5f2996f64a95c88bbb295?placeholderIfAbsent=true"
            alt="LinkedIn"
            className="aspect-[1] object-contain w-6 shrink-0"
          />
        </a>
        <a href="#" aria-label="GitHub">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/200cb9c433534172b9d9ed52ab4b1cd9/cea0e404d185ece183b3f765d66eda6b7217db3a?placeholderIfAbsent=true"
            alt="GitHub"
            className="aspect-[1] object-contain w-6 shrink-0"
          />
        </a>
      </div>
    </footer>
  );
};
