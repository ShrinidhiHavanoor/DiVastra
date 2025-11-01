package com.divastra.services.dto;

public class ApiResponse<T> {
    private String message;
    private boolean success;
    private T data;

    public ApiResponse(String message, boolean success, T data) {
        this.message = message;
        this.success = success;
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public boolean isSuccess() {
        return success;
    }

    public T getData() {
        return data;
    }
}
