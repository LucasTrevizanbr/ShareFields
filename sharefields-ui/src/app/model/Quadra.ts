import { InfoQuadra } from "./InfoQuadra"
import { Usuario } from "./Usuario"

export class Quadra{

    public id : number
    public nome: string
    public imagem: string
    public modalidade: string
    public qtdJogadoresMax: number
    public descricao: string
    public proprietarioQuadra : Usuario
    public cep: string
    public rua: string
    public numero: number
    public bairro: string
    public cidade: string
    public uf: string
    public complemento: string
    public referencia: string
    public infoQuadra: InfoQuadra[]

}