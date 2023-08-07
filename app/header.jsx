import React from "react";
import Link from "next/link";
import "../styles/globals.css";
import NameInput from "@/component/client/NameInput";
function Header() {
  return (
    <>
      <div>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/about/contact"}>Contact...</Link>
          <NameInput/>
        </nav>
      </div>
    </>
  );
}

export default Header;
