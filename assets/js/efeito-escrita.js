export default class EfeitoEscrita {
  constructor(elemento) {
    this.elemento = document.querySelector(elemento);
    this.frases = this.elemento.dataset.jsEscrita.split(",");
    this.escrevendo = true;
    this.index = 0;
    this.fraseIndex = 0;
  }

  apagar() {
    this.escrevendo = false;
    return setTimeout(() => {
      this.escrever();
    }, 2000);
  }

  resetar() {
    if (this.index) return this.index--;
    this.escrevendo = true;
    this.fraseIndex = (this.fraseIndex + 1) % this.frases.length;
  }

  mudarFonte() {
    this.fraseIndex === 1
      ? this.elemento.classList.add("textFont")
      : this.elemento.classList.remove("textFont");
  }

  escrever() {
    const acabouDeEscrever = this.index > this.frases[this.fraseIndex].length;

    setTimeout(
      () => {
        let letra = this.frases[this.fraseIndex].slice(0, this.index);
        this.elemento.innerText = letra;
        this.mudarFonte();
        if (this.escrevendo) {
          if (acabouDeEscrever) {
            return this.apagar();
          } else this.index++;
        } else this.resetar();

        this.escrever();
      },
      this.escrevendo ? 120 : 60
    );
  }

  init() {
    this.escrever();
    return this;
  }
}
