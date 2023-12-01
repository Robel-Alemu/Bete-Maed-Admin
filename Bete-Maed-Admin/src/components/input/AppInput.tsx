"use client";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Field, useFormikContext, ErrorMessage } from "formik";
import AppErrorMessage from "../AppErrorMessage";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
}
const AppInput = ({ name, placeholder, type }: Props) => {
  const { handleChange, setFieldValue, errors, touched } = useFormikContext<{
    [key: string]: any;
  }>();

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
              isRequired
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

          <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </FormControl>
      )}
    </Field>
  );
};

export default AppInput;
