import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      <Button type="submit" value="submit" />
    </form>
  );
}

export default Form;
