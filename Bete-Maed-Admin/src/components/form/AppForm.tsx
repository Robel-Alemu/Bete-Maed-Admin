import { Button, Text, Heading, useDisclosure } from "@chakra-ui/react";
import { Form, Formik, useFormikContext } from "formik";
import { ReactNode, useState } from "react";
import AppErrorMessage from "../AppErrorMessage";

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
  //   const { errors } = useFormikContext();
  const [error, setError] = useState<any>();
  const [generalError, setGeneralError] = useState<any>();
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        {title}
      </Heading>

      {/* {error && <ErrorMessage error={error} visible={true} />} */}
      {generalError && <AppErrorMessage error={generalError} visible={true} />}
      {generalError && (
        <Text color="black" fontSize={20}>
          {" "}
          {generalError}
        </Text>
      )}

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, formikBag) => {
          try {
            console.log({ values, error });
            //   setError(error);
            alert(JSON.stringify(values, null, 2));
            // setGeneralError(null);
          } catch (error: any) {
            setGeneralError(error.message || "An error occurred");
          }
          formikBag.setErrors(generalError || {});
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
