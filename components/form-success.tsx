import { BsCheckCircle } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-success/20 alert alert-success p-3 rounded-md flex items-center gap-x-2 text-sm text-success">
      <BsCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
