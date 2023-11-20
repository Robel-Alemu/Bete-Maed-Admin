import React, { useState } from "react";
import AppForm from "../form/AppForm";
import AppInput from "../input/AppInput";

const NewRecipe = () => {
  return (
    <AppForm title="Add Recipe" values={{ name: "", lastName: "" }}>
      <>
        {" "}
        <AppInput name="name" placeholder="First Name" />
        <AppInput name="lastName" placeholder="First Name" />
      </>
    </AppForm>
  );
};

export default NewRecipe;
