import { Button } from "@chakra-ui/react";
import { useFormikContext } from "formik";

const AppButton = ({ title }: { title: string }) => {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} type="submit" onClick={() => handleSubmit} />;
};

export default AppButton;
