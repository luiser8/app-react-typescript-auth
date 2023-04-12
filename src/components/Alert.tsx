type Props = {
  isError: { isError: boolean; msj: string };
};

const Alert = ({ isError }: Props) => {
  return (
    <div>
      <p>{isError.msj}</p>
    </div>
  );
};

export default Alert;
