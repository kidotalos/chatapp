import React, { useState } from "react";
import SignIn from "./SingIn";

export default () => {
  const [name, setName] = useState("");
  console.log({ name });
  return <SignIn setName={setName} />;
};
