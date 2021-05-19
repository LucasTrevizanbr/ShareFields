package com.sharefields.sharefields.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;


@Entity
@Table(name = "tb_quadra")
public class Quadra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 5, max = 50)
    private String nome;

    private String imagem;

    @NotNull
    private String modalidade;

    @NotNull
    private int qtdJogadoresMax;

    @NotNull
    @Size(min = 5, max = 2000)
    private String descricao;

    @ManyToOne
    @JsonIgnoreProperties({"senha","email","quadrasDoUsuario","usaQuadras"})
    private Usuario proprietarioQuadra;

    @OneToMany(mappedBy = "quadra", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("quadra")
    private List<InfoQuadra> infoQuadra;

    private int cep;

    private String rua;

    private int numero;

    private String complemento;

    private String bairro;

    private String cidade;

    private String uf;

    private String referencia;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getModalidade() {
        return modalidade;
    }

    public void setModalidade(String modalidade) {
        this.modalidade = modalidade;
    }

    public int getQtdJogadoresMax() {
        return qtdJogadoresMax;
    }

    public void setQtdJogadoresMax(int qtdJogadoresMax) {
        this.qtdJogadoresMax = qtdJogadoresMax;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Usuario getProprietarioQuadra() {
        return proprietarioQuadra;
    }

    public void setProprietarioQuadra(Usuario proprietarioQuadra) {
        this.proprietarioQuadra = proprietarioQuadra;
    }

    public List<InfoQuadra> getInfoQuadra() {
        return infoQuadra;
    }

    public void setInfoQuadra(List<InfoQuadra> infoQuadra) {
        this.infoQuadra = infoQuadra;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }
}
