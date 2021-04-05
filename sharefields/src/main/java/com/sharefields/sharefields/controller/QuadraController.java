package com.sharefields.sharefields.controller;

import com.sharefields.sharefields.model.Quadra;
import com.sharefields.sharefields.repository.QuadraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/quadra")
@CrossOrigin("*")
public class QuadraController {

    @Autowired
    private QuadraRepository repository;

    @GetMapping
    public ResponseEntity<List<Quadra>> buscarTodasAsQuadras(){

        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quadra> buscarPorId(@PathVariable long id){

        return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Quadra> criarQuadra(@RequestBody Quadra quadra){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(quadra));

    }

    @PutMapping
    public ResponseEntity<Quadra> atualizarQuadra (@RequestBody Quadra quadra){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(quadra));

    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        repository.deleteById(id);
    }
}
