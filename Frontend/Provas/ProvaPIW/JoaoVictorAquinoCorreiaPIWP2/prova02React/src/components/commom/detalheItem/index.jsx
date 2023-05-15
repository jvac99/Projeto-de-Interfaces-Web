import "./styles.css";

export const DetalheItem = ({ titulo, corpo }) => {
  return (
    <div className="item">
      <li className="item-title">{titulo}</li>
      <li className="item-body">{corpo}</li>
    </div>
  );
};
