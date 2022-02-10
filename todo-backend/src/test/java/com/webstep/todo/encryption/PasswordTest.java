package com.webstep.todo.encryption;

import com.webstep.todo.configuration.WebSecurityConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class PasswordTest {
    @Autowired
    WebSecurityConfig webSecurityConfig;

    @Test
    public void testCorrectPassword(){
        assertTrue(
                webSecurityConfig.passwordEncoder().matches("password","$2a$10$x0Om3Rx.lDSSUrapB8i4jujGu8dnr.N6VQUSWV1M7edHQdtvhLs.W"));
    }

    @Test
    public void testWrongPassword(){
        assertFalse(
                webSecurityConfig.passwordEncoder().matches("password","$2a$10$x0Om3Rx.lDSSUrapB8i4jujGu8dnr.N6VQUSWV1MsdfasdftvhLs.W"));
    }
}
