interface InputErrorProps {
  message?: string;
}

export const InputError = ({ message }: InputErrorProps) => {
  return (
    <div className="label">
      <span className="label-text-alt text-error">{message}</span>
    </div>
  );
};
