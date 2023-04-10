type Props = {
  error: { error: boolean; msj: string };
};

const Alert = ({ error }: Props) => {
  return (
    <div>
      <p>{error.msj}</p>
    </div>
  );
};

export default Alert;
