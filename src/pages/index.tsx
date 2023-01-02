import React, { RefObject } from "react";
import Conhecimentos from "../Components/Conhecimentos";
import Contato from "../Components/Contato";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import Projetos from "../Components/Projetos";

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions
  dy = sy;

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

function render(main: HTMLDivElement) {
  function li(a: number, b: number, n: number) {
    return (1 - n) * a + n * b;
  }
  //We calculate our container position by linear interpolation method
  dx = li(dx, sx, 0.07);
  dy = li(dy, sy, 0.07);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

  window.requestAnimationFrame(() => render(main));
}

function teste(mainObj: RefObject<HTMLDivElement>) {
  const body = document.querySelector("body");
  const main = mainObj.current;
  if (!main || !body) return;

  body.style.height = main.clientHeight + "px";
  main.style.position = "fixed";
  main.style.top = "0";
  main.style.left = "0";

  return { body, main };
}

export default function Home() {
  const elementRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const references = teste(elementRef);
    if (!references || !references.main) return;

    window.addEventListener("scroll", easeScroll);
    window.requestAnimationFrame(() => render(references.main));

    return () => window.removeEventListener("scroll", easeScroll);
  }, []);

  return (
    <>
      <div ref={elementRef}>
        <Header />
        <Intro />
        <Conhecimentos />
        <Projetos />
        <Contato />
      </div>
    </>
  );
}
