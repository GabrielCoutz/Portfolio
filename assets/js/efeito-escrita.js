export default class EfeitoEscrita {
  constructor(elemento) {
    this.elemento = document.querySelector(elemento);
  }

  apagar(time) {
    return setTimeout(() => {
      clearTimeout(time);
      this.playAnim();
      console.log("apagou");
    }, 2000);
  }

  playAnim() {
    var textToBeTypedArr = this.elemento.dataset.jsEscrita.split(",");
    var index = 0,
      isAdding = true,
      textToBeTypedIndex = 0;

    let time = setTimeout(
      () => {
        this.elemento.innerText = textToBeTypedArr[textToBeTypedIndex].slice(
          0,
          index
        );
        console.log(isAdding);
        if (isAdding) {
          if (index > textToBeTypedArr[textToBeTypedIndex].length) {
            isAdding = false;

            time = this.apagar(time);
            return;
          } else {
            index++;
          }
        } else {
          if (index === 0) {
            isAdding = true;

            textToBeTypedIndex =
              (textToBeTypedIndex + 1) % textToBeTypedArr.length;
          } else {
            index--;
          }
        }

        this.playAnim();
      },

      isAdding ? 120 : 60
    );
  }
  init() {
    this.playAnim();
  }
}
