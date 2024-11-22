import React from "react";

export const ModalEmer = ({setModal}) => {
  return (
    <div  className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold">
                Estamos llamando a la linea de emergencia
              </h1>
            </div>
            <div className="background-button item mb-4">
              <button className="button">Emergencia</button>
            </div>
            <div className="space-y-4">
          <button onClick={()=>setModal(false)} className="p-3 bg-black rounded-full text-white w-full font-semibold">Cancelar</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};
