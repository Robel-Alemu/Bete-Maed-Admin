import { Heading } from "@chakra-ui/react";
import { Form, Formik, useFormikContext } from "formik";
import { ReactNode } from "react";
import ErrorMessage from "../ErrorMessage";

interface Props {
  title: string;
  initialValues: any;
  children: ReactNode;
  display: string;
  handleClick: () => void;
  validationSchema: any;
}

const AppForm = ({
  title,
  initialValues,
  children,
  validationSchema,
}: Props) => {
  //   const { errors } = useFormikContext();

  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        {title}
      </Heading>

      {/* <ErrorMessage error={errors} visible={true} /> */}

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, error) => {
          console.log({ values, error });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <>
          <Form>{children}</Form>
        </>
      </Formik>
    </>
  );
};

export default AppForm;
