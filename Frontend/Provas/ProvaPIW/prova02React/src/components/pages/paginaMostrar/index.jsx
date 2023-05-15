import { useEffect, useState } from "react";
import { findAll } from "../../../api/service";
import { Detalhes } from "../../commom/detalhes";
import "./styles.css";

export const PaginaMostrar = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    findAll()
      .then((result) => {
        setTasks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Detalhes tasks={tasks} />
    </div>
  );
};
