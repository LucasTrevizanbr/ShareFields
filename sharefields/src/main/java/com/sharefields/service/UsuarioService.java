package com.sharefields.service;


import com.sharefields.model.UserLogin;
import com.sharefields.model.Usuario;
import com.sharefields.repository.UsuarioRepository;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Optional<Usuario> CadastrarUsuario(Usuario usuario) {

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String senhaEncoder = encoder.encode(usuario.getSenha());
        usuario.setSenha(senhaEncoder);

        return Optional.of(repository.save(usuario));
    }

    public Optional<UserLogin> Logar(Optional<UserLogin> user){

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        Optional<Usuario> usuario = repository.findByEmail(user.get().getEmail());

        if(usuario.isPresent()) {
            if(encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {

                String auth = user.get().getEmail() + ":" + user.get().getSenha();
                byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
                String authHeader= "Basic " + new String(encodeAuth);

                user.get().setToken(authHeader);
                user.get().setNome(usuario.get().getNome());
                user.get().setDisponibilizadorDeQuadra(usuario.get().isDisponibilizadorDeQuadra());
                user.get().setApelido(usuario.get().getApelido());
                user.get().setAvatar(usuario.get().getAvatar());
                user.get().setId(usuario.get().getId());
                return user;
            }
        }
        return null;
    }



}