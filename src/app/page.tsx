"use client"

import { useState, useEffect } from "react";

const Page = () => {

  const [horas, setHoras] = useState("");
  const [saudacoes, setSaudacoes] = useState("");

  useEffect(() => {
    const atualizarHorario = () => {
      const momento = new Date();
      const formatoHora = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'medium',
        hour12: false
      }).format(momento);

      setHoras(formatoHora);

      const frase = momento.getHours();  
      let momentoDia = '';

      if (frase >= 6 && frase < 12) {
        momentoDia = 'Bom Dia! 🌥️';
      } else if (frase >= 12 && frase < 18) {
        momentoDia = 'Boa Tarde! 🌤️';
      } else if (frase >= 18) {
        momentoDia = 'Boa Noite! 🌗';
      } else if (frase >= 0 && frase < 6) {
        momentoDia = 'Boa Madrugada! 🌕';
      }

      setSaudacoes(momentoDia);
    };

  
    atualizarHorario();

   
    const tempoIntervalo = setInterval(atualizarHorario, 1000);

   
    return () => {
      clearInterval(tempoIntervalo);
    };
  }, []); 

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-l from-indigo-500 to-cyan-500">
      <div className="text-9xl">{horas}</div>
      <div className="text-5xl font-bold">{saudacoes}</div>
    </div>
  );

};

export default Page;