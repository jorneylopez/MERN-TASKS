import React from "react";
import NuevoProyecto from '../projects/NuevoProyecto';

const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto/>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
      </div>
    </aside>
  );
};

export default SideBar;
