package com.sharefields.sharefields.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;



@Entity
@Table(name = "tb_infoQuadra")
public class InfoQuadra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JsonIgnoreProperties({"infoQuadra","endereco"})
    private Quadra quadra;

    private boolean disponivel;

    private String dataDisponivel;

    private String horaInicio;

    private String horaFim;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            joinColumns = @JoinColumn(name = "jogadores_id"),
            inverseJoinColumns = @JoinColumn(name = "quadras_id") )
    @JsonIgnoreProperties({"quadra", "usaQuadras","quadrasDoUsuario","email","senha","nome"})
    private Set<Usuario> jogadores = new HashSet<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Quadra getQuadra() {
        return quadra;
    }

    public void setQuadra(Quadra quadra) {
        this.quadra = quadra;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    public String getDataDisponivel() {
        return dataDisponivel;
    }

    public void setDataDisponivel(String dataDisponivel) {
        this.dataDisponivel = dataDisponivel;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public String getHoraFim() {
        return horaFim;
    }

    public void setHoraFim(String horaFim) {
        this.horaFim = horaFim;
    }

    public Set<Usuario> getJogadores() {
        return jogadores;
    }

    public void setJogadores(Set<Usuario> jogadores) {
        this.jogadores = jogadores;
    }
}
