import React from "react";
import '../App.css'
export default function Tareas(props) {

  const eliminar = (item) => {
    props.eliminarClick(item);
  };

   const Editar = (item) => {
     props.editarClick(item);
  };
  
  console.log(props.tareas);
  return (
    <div className="container">
      <div className="row">
        {props.tareas.map((tarea) => {
          return (
            <div className="col-md-4" key={tarea.id}>
              <div className="justify-content-center">
                <div className="card mt-4 ">
                  <div className="card header car">
                    <h3>{tarea.titulo}</h3>
                  </div>
                  <div className="card-body ">
                    <p>
                      <strong>{tarea.descripcion}</strong>
                    </p>
                    <p>{tarea.responsable}</p>
                  </div>
                  <div className="card-footer">
                    <mark>{tarea.prioridad}</mark>
                    <p>
                      <button
                        className="btn btn-primary"
                        onClick={() => eliminar(tarea)}
                      >
                        Eliminar
                      </button>

                      <button
                        className="btn btn-success"
                        onClick={() => Editar(tarea)}
                      >
                          Editar
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
