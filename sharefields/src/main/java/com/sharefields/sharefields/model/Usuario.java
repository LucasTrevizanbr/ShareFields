package com.sharefields.sharefields.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tb_usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private boolean disponibilizadorDeQuadra;

    @NotNull
    @Size(min = 3, max = 100)
    private String nome;

    private String avatar;

    @NotNull
    @Size(min = 3, max = 100)
    private String apelido;

    @NotNull
    private String email;

    @NotNull
    @Size(min = 8, max = 50)
    private String senha;

    @OneToMany(mappedBy = "proprietarioQuadra", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"proprietarioQuadra","quadrasDoUsuario"})
    private List<Quadra> quadrasDoUsuario;

    @ManyToMany(mappedBy = "jogadores")
    @JsonIgnoreProperties({"jogadores","proprietarioQuadra"})
    private Set<InfoQuadra> usaQuadras = new HashSet<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isDisponibilizadorDeQuadra() {
        return disponibilizadorDeQuadra;
    }

    public void setDisponibilizadorDeQuadra(boolean disponibilizadorDeQuadra) {
        this.disponibilizadorDeQuadra = disponibilizadorDeQuadra;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<Quadra> getQuadrasDoUsuario() {
        return quadrasDoUsuario;
    }

    public void setQuadrasDoUsuario(List<Quadra> quadrasDoUsuario) {
        this.quadrasDoUsuario = quadrasDoUsuario;
    }

    public Set<InfoQuadra> getUsaQuadras() {
        return usaQuadras;
    }

    public void setUsaQuadras(Set<InfoQuadra> usaQuadras) {
        this.usaQuadras = usaQuadras;
    }
}
