package com.sharefields.sharefields.controller;

import com.sharefields.sharefields.model.InfoQuadra;
import com.sharefields.sharefields.repository.InfoQuadraRepository;
import com.sharefields.sharefields.service.InfoQuadraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/infoQuadra")
@CrossOrigin("*")
public class InfoQuadraController {

    @Autowired
    private InfoQuadraRepository repository;

    @Autowired
    private InfoQuadraService service;

    @GetMapping
    public ResponseEntity<List<InfoQuadra>> buscarTodosAsInfoQuadra(){

        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<InfoQuadra> buscarPorId(@PathVariable long id){

        return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<InfoQuadra> criarInfoQuadra(@RequestBody InfoQuadra infoQuadra){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(infoQuadra));

    }

    @PutMapping("/inserir/infoquadra/{infoQuadraId}/usuario/{usuarioId}")
    public ResponseEntity<InfoQuadra> adicionarJogador(@PathVariable long infoQuadraId,
                                                       @PathVariable long usuarioId){
          return ResponseEntity.status(HttpStatus.OK).body(service.cadastrarUsuarioNaQuadra(infoQuadraId,usuarioId));
    }

    @PutMapping("/remover/infoquadra/{infoQuadraId}/usuario/{usuarioId}")
    public ResponseEntity<InfoQuadra> removerJogador(@PathVariable long infoQuadraId,
                                                     @PathVariable long usuarioId){
        return ResponseEntity.status(HttpStatus.OK).body(service.removerUsuarioDaQuadra(infoQuadraId,usuarioId));
    }

    @PutMapping
    public ResponseEntity<InfoQuadra> atualizarInfoQuadra (@RequestBody InfoQuadra infoQuadra){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(infoQuadra));

    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        repository.deleteById(id);
    }
}
