import { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [title, setTitle] = useState("");
  const [descripion, setDescripion] = useState("");
  const [conter, setConter]=useState(0)

  const actionSubmit = (event) => {
    event.preventDefault();

    const newTarefas = {
      id: tarefas.length + 1,
      title,
      descripion,
    };

    setTarefas([...tarefas, newTarefas]);
    setTitle("");
    setDescripion("");
    setConter(conter + 1)
  };


  return (
    <>
      <div className="container">
        <h1>Gerenciador de Tarefas</h1>
        <p className="qtd-tarefas">Você tem ({conter}) tarefas</p>

        <form onSubmit={actionSubmit} action="#">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Registre sua tarefa"
          />
          <input
            value={descripion}
            onChange={(e) => setDescripion(e.target.value)}
            type="text"
            placeholder="Descreva sua tarefa"
          />
          <button type="submit">Registrar</button>
        </form>

        <ul>
          {tarefas.map((item) => (
            <li key={item.id}>
              <div className="actions">
                <h2>{item.title}</h2>
                <div className="delet">Deletar</div>
                <button /* onClick={() => actionEdit(item.id)} */ className="edit">
                  Editar
                </button>
              </div>
              <p>{item.descripion}</p>
            </li>
          ))}
          {tarefas.length === 0 && (
            <span>
              <h2>Nenhuma Tarefa Adicionada</h2>
            </span>
          )}
        </ul>
      </div>
    </>
  );
}
