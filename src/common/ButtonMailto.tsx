import React from "react";

interface ButtonMailtoProps {
  mailto: string;
  label: React.ReactNode;
}

const ButtonMailto = ({ mailto, label }: ButtonMailtoProps) => {
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        window.location.href = mailto;
      };

  return (
    <a
      className='font-semibold text-m text-dark sm:text-lg'
      href="#"
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

export default ButtonMailto;
