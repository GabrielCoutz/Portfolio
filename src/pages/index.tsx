import React from "react";
import Conhecimentos from "../Components/Conhecimentos";
import Contato from "../Components/Contato";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import Projetos from "../Components/Projetos";
export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Conhecimentos />
      <Projetos />
      <Contato />
    </>
  );
}
