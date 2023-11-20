"use client";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, useFormikContext } from "formik";
interface Props {
  name: string;
  placeholder: string;
}
const AppInput = ({ name, placeholder }: Props) => {
  const { handleChange, setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field }: any) => (
        <FormControl>
          <FormLabel htmlFor={name} fontWeight="normal">
            Last name
          </FormLabel>
          <Input
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e);
              setFieldValue(name, e.target.value);
            }}
          />
        </FormControl>
      )}
    </Field>
  );
};

export default AppInput;
