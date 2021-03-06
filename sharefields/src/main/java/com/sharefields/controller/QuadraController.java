package com.sharefields.controller;

import com.sharefields.model.Quadra;
import com.sharefields.repository.QuadraRepository;
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

    @GetMapping("/modalidade/{modalidade}")
    public ResponseEntity<List<Quadra>> buscarPorModalidade(@PathVariable String modalidade){

        return ResponseEntity.ok(repository.findAllByModalidadeContainingIgnoreCase(modalidade));
    }

    @GetMapping("/cidade/{cidade}")
    public  ResponseEntity<List<Quadra>> buscarPorCidade(@PathVariable String cidade){
        return ResponseEntity.ok(repository.findAllByCidadeContainingIgnoreCase(cidade));
    }


    @GetMapping("/nome/{nome}")
    public  ResponseEntity<List<Quadra>> buscarPorNome(@PathVariable String nome){

        return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
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