import React from "react";
import ServerComponent from "@/component/server/ServerComponent";
import Contact from "./contact";
import Sidebar from "../carousie";
function page() {
  return (
    <div>
      <Contact value={"Hello to contact page"}>
        <ServerComponent />
      </Contact>
      <Sidebar />
    </div>
  );
}

export default page;
