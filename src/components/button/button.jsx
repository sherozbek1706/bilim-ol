import "./button.css";
export const Button = ({ name, link }) => {
  return (
    <button className="Button">
      <a href={link} className="Button__text">
        {name}
      </a>
    </button>
  );
};
