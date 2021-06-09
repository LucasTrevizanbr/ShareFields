import { InfoQuadra } from "./InfoQuadra"
import { Quadra } from "./Quadra"

export class Usuario{

    public id : number
    public disponibilizadorDeQuadra: boolean
    public nome: string
    public avatar: string
    public apelido: string
    public email: string
    public senha: string
    public quadrasDoUsuario: Quadra[]
    public usaQuadras: InfoQuadra[]

}