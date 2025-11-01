package com.divastra.services.utils;

import java.util.UUID;

public class AppUtils {

    // Generate random unique IDs
    public static String generateUniqueId() {
        return UUID.randomUUID().toString();
    }

    // Capitalize first letter of a string
    public static String capitalize(String input) {
        if (input == null || input.isEmpty()) return input;
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
}
