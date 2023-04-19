import React from "react";
import Userfront from "@userfront/react";

Userfront.init("6bg44jvn");

const LogoutButton = Userfront.build({
  toolId: "dkrankn"
});

function LogOut() {
  return <LogoutButton />;
}

export default LogOut;