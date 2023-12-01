import { Heading, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { ReactNode, useState } from "react";

interface Props {
  title: string;
  initialValues: any;
  children: ReactNode;
  display?: string;
  handleClick?: () => void;
  validationSchema?: any;
}

const AppForm = ({
  title,
  initialValues,
  children,
  validationSchema,
}: Props) => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        {title}
      </Heading>

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <>
          <Form>
            <>{children}</>
          </Form>
        </>
      </Formik>
    </>
  );
};

export default AppForm;
