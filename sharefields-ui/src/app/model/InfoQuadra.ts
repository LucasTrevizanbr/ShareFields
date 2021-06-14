import { Quadra } from "./Quadra"
import { Usuario } from "./Usuario"

export class InfoQuadra{

    public id : number
    public quadra: Quadra
    public dataDisponivel: string
    public horaInicio: string
    public horaFim: string
    public jogadores: Usuario[]
}