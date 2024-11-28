import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import complementarConvidado from "./function/complementarConvidado";
import complementarEvento from "./function/complementarEvento";
import criarConvidadoVazio from "./function/criarConvidadoVazio";
import criarEventoVazio from "./function/criarEventoVazio";

export type { Evento, Convidado };
export {
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
};
