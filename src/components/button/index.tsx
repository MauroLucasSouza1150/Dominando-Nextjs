"use client";

import { useState } from "react";

export function Button() {
  const [nome, setNome] = useState("Nome Qualquer");

  function handleName() {
    return setNome("Mauro Lucas");
  }

  return (
    <div>
      <button onClick={handleName} className="bg-gray-600 py-1 px-2 rounded-md">
        Alterar Nome
      </button>
      <h3>Nome: {nome}</h3>
    </div>
  );
}
