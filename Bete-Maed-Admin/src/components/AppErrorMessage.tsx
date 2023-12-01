import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  error: any;
  visible: any;
}
const AppErrorMessage = ({ error, visible }: Props) => {
  if (!visible || !error) return null;
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Your browser is outdated!</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default AppErrorMessage;
