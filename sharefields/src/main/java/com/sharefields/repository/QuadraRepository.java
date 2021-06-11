package com.sharefields.repository;


import com.sharefields.model.Quadra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuadraRepository extends JpaRepository<Quadra, Long> {

    public List<Quadra> findAllByModalidadeContainingIgnoreCase(String modalidade);
    public List<Quadra> findAllByCidadeContainingIgnoreCase(String cidade);
    public List<Quadra> findAllByNomeContainingIgnoreCase(String nome);
}