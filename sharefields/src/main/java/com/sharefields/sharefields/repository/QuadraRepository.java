package com.sharefields.sharefields.repository;

import com.sharefields.sharefields.model.Quadra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuadraRepository extends JpaRepository<Quadra, Long> {

    public List<Quadra> findAllByModalidadeContainingIgnoreCase(String modalidade);
}
