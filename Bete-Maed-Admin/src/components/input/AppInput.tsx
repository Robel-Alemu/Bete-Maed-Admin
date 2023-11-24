"use client";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Field, useFormikContext } from "formik";
interface Props {
  name: string;
  placeholder: string;
  type?: string;
}
const AppInput = ({ name, placeholder, type }: Props) => {
  const { handleChange, setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field }: any) => (
        <FormControl padding={2}>
          <FormLabel htmlFor={name} fontWeight="normal">
            {placeholder}
          </FormLabel>
          {type == "textArea" ? (
            <Textarea
              id={name}
              name={name}
              {...field}
              placeholder={placeholder}
              onChange={(e) => {
                handleChange(e);
                setFieldValue(name, e.target.value);
              }}
            />
          ) : (
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
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default AppInput;
