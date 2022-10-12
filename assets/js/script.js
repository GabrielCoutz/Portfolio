import HeaderFixo from "./header-fixo.js";
import EfeitoEscrita from "./efeito-escrita.js";

const headerfixo = new HeaderFixo(".header");
headerfixo.init();

const efeitoEscrita = new EfeitoEscrita("[data-js-escrita]");
efeitoEscrita.init();
