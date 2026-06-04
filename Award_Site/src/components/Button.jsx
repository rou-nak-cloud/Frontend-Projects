import { Link } from "react-router-dom";

export default function Button({ text, className = "", innerRef, to }) {
  // The base button markup
  const buttonElement = (
    <button
      ref={innerRef}
      type="button"
      className={`${className} px-4 py-2 border-2 border-transparent font-body text-center tracking-wider min-w-48 rounded-full cursor-pointer text-[1.4rem] mt-3 lg:mt-6 inline-block`}
    >
      {text}
    </button>
  );

  // If a 'to' prop is provided, wrap it in a React Router Link
  if (to) {
    return (
      <Link to={to} className="inline-block decoration-transparent">
        {buttonElement}
      </Link>
    );
  }

  // Otherwise, return the plain button
  return buttonElement;
}
