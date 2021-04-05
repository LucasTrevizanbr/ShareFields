package com.sharefields.sharefields.model;


public class UserLogin {

    private long id;

    private String nome;

    private String avatar;

    private boolean disponibilizadorDeQuadra;

    private String apelido;

    private String email;

    private String senha;

    private String token;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public boolean isDisponibilizadorDeQuadra() {
        return disponibilizadorDeQuadra;
    }

    public void setDisponibilizadorDeQuadra(boolean disponibilizadorDeQuadra) {
        this.disponibilizadorDeQuadra = disponibilizadorDeQuadra;
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

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
