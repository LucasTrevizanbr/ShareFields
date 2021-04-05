package com.sharefields.sharefields.controller;

import com.sharefields.sharefields.model.EnderecoQuadra;
import com.sharefields.sharefields.model.Quadra;
import com.sharefields.sharefields.repository.EnderecoQuadraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/enderecoQuadra")
@CrossOrigin("*")
public class EnderecoQuadraController {

    @Autowired
    EnderecoQuadraRepository repository;

    @GetMapping
    public ResponseEntity<List<EnderecoQuadra>> buscarTodosOsEnderecos(){

        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoQuadra> buscarPorId(@PathVariable long id){

        return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EnderecoQuadra> criarEnderecoQuadra(@RequestBody EnderecoQuadra enderecoQuadra){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(enderecoQuadra));

    }

    @PutMapping
    public ResponseEntity<EnderecoQuadra> atualizarEnderecoQuadra(@RequestBody EnderecoQuadra quadra){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(quadra));

    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        repository.deleteById(id);
    }
}
