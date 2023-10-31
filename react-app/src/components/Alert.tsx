import { ReactNode } from "react";

interface Props {
  alertStrong: string;
  children: ReactNode;
  onClose: () => void;
}

function Alert({ alertStrong, children, onClose }: Props) {
  return (
    <>
      <div className="alert alert-warning alert-dismissible" role="alert">
        <strong>{alertStrong}</strong> {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
}

export default Alert;
