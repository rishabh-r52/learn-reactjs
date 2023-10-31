interface Props {
  btnText: string;
  btnType: string;
  clickfunction?: () => void;
}

const Button = ({ btnText, btnType, clickfunction }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + btnType}
      onClick={clickfunction}
    >
      {btnText}
    </button>
  );
};

export default Button;
