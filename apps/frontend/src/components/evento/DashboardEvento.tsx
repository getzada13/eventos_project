import { Convidado, Evento } from "core";
import InformacoesEvento from "./informacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidado from "./ListaConvidado";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de Convidado:"
          valor={props.evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          texto="Confrimações:"
          valor={props.presentes.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatistica
          texto="Total Confirmados:"
          valor={props.totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Atulizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <ListaConvidado convidados={props.presentes} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <ListaConvidado convidados={props.ausentes} />
    </div>
  );
}
