package com.sharefields.controller;


import com.sharefields.model.UserLogin;
import com.sharefields.model.Usuario;
import com.sharefields.repository.UsuarioRepository;
import com.sharefields.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/v1/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable long id){
        return usuarioRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/logar")
    public ResponseEntity<UserLogin> Autentication(@RequestBody Optional<UserLogin> user){
        return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
                .orElse( ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario){

        Optional<Usuario> user = usuarioService.CadastrarUsuario(usuario);
        try {
            return ResponseEntity.ok(user.get());
        }catch(Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}