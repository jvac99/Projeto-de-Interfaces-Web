import { DetalheItem } from "../detalheItem";
import "./styles.css";

export const Detalhes = ({ tasks }) => {
  return (
    <div className="">
      {tasks.map((task) => {
        return (
          <ul key={task.id}>
            <DetalheItem titulo={task.titulo} corpo={task.corpo} />
          </ul>
        );
      })}
    </div>
  );
};
