package com.sharefields.service;



import com.sharefields.model.InfoQuadra;
import com.sharefields.model.Usuario;
import com.sharefields.repository.InfoQuadraRepository;
import com.sharefields.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class InfoQuadraService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private InfoQuadraRepository infoQuadraRepository;

    public InfoQuadra cadastrarUsuarioNaQuadra(long infoQuadraId, long usuarioId){
        Optional<InfoQuadra> informacaoDaQuadraExistente = infoQuadraRepository.findById(infoQuadraId);
        Optional<Usuario> jogadorExistente = usuarioRepository.findById(usuarioId);

        if(informacaoDaQuadraExistente.isPresent()&&jogadorExistente.isPresent()){

            informacaoDaQuadraExistente.get().getJogadores().add(jogadorExistente.get());
            infoQuadraRepository.save(informacaoDaQuadraExistente.get());

            return infoQuadraRepository.save(informacaoDaQuadraExistente.get());
        }
        return null;
    }

    public InfoQuadra removerUsuarioDaQuadra(long infoQuadraID, long usuarioId){
        Optional<InfoQuadra> informacaoDaQuadraExistente = infoQuadraRepository.findById(infoQuadraID);
        Optional<Usuario> jogadorExistente = usuarioRepository.findById(usuarioId);

        if(informacaoDaQuadraExistente.isPresent()&& jogadorExistente.isPresent()){
            informacaoDaQuadraExistente.get().getJogadores().remove(jogadorExistente.get());
            infoQuadraRepository.save(informacaoDaQuadraExistente.get());

            return infoQuadraRepository.save(informacaoDaQuadraExistente.get());
        }
        return null;
    }


}