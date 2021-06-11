package com.sharefields.seguranca;


import com.sharefields.model.Usuario;
import com.sharefields.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {


    @Autowired
    private UsuarioRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> user = userRepository.findByEmail(username);
        user.orElseThrow(()-> new UsernameNotFoundException(username + " not found."));

        return user.map(UserDetailsImpl::new).get();
    }

}
