import { Quadra } from "./Quadra"
import { Usuario } from "./Usuario"

export class InfoQuadra{

    public id : number
    private quadra: Quadra
    private dataDisponivel: string
    private horaInicio: string
    private horaFim: string
    private jogadores: Usuario[]
}