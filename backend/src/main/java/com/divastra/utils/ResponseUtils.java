package com.divastra.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseUtils {

    private ResponseUtils() {}

    public static ResponseEntity<Map<String, Object>> buildResponse(String message, Object data, HttpStatus status) {
        Map<String, Object> body = new HashMap<>();
        body.put("message", message);
        body.put("data", data);
        body.put("status", status.value());
        return new ResponseEntity<>(body, status);
    }
}
