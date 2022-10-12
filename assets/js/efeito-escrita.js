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

  escrever() {
    const acabouDeEscrever = this.index > this.frases[this.fraseIndex].length;

    setTimeout(
      () => {
        this.elemento.innerText = this.frases[this.fraseIndex].slice(
          0,
          this.index
        );
        if (this.escrevendo) {
          if (acabouDeEscrever) {
            console.log("acabou");
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
