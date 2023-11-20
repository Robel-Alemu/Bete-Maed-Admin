import { Heading, Button, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { ReactNode } from "react";

interface initialValues {
  [key: string]: string;
}
interface Props {
  title: string;
  values: initialValues;
  children: ReactNode;
}
const AppForm = ({ title, values, children }: Props) => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        {title}
      </Heading>

      <Formik initialValues={values} onSubmit={(values) => console.log(values)}>
        <Form>
          <Box>
            {children}
            <Button type="submit">Submit</Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default AppForm;
