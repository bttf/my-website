import clsx from "clsx";
import { FC } from "react";
import { Inter_Tight } from "next/font/google";
import Link from "next/link";

const interTight = Inter_Tight({ subsets: ["latin"], weight: "600" });

const Header: FC<{ small?: boolean }> = ({ small }) => (
  <>
    <div
      className={clsx(interTight.className, {
        "text-4xl": !small,
        "text-xl": small,
      })}
    >
      <Link className="hover:no-underline" href="/">
        <span className="dark:text-white text-black">Adnan Chowdhury</span>
      </Link>
    </div>
    <div className={clsx({ "text-xs": small })}>
      Software engineer, musician, content creator
    </div>
    {!small && (
      <div className="text-[.75rem]">
        <a href="https://github.com/bttf" target="_blank">
          GitHub
        </a>
        {" ⎸ "}
        <a href="https://www.linkedin.com/in/adnanchowdhury88/" target="_blank">
          LinkedIn
        </a>
      </div>
    )}
  </>
);

export default Header;
