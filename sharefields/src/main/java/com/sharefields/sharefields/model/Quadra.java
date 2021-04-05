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

    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"quadra"})
    private EnderecoQuadra endereco;

    @ManyToOne
    @JsonIgnoreProperties({"senha","email","quadrasDoUsuario","usaQuadras"})
    private Usuario proprietarioQuadra;

    @OneToMany(mappedBy = "quadra", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("quadra")
    private List<InfoQuadra> infoQuadra;


    public EnderecoQuadra getEndereco() {
        return endereco;
    }

    public void setEndereco(EnderecoQuadra endereco) {
        this.endereco = endereco;
    }

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
}
