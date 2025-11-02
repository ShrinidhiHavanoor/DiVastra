package com.divastra.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerUtils {

    private LoggerUtils() {}

    public static void logInfo(Class<?> clazz, String message) {
        Logger logger = LoggerFactory.getLogger(clazz);
        logger.info(message);
    }

    public static void logError(Class<?> clazz, String message, Throwable e) {
        Logger logger = LoggerFactory.getLogger(clazz);
        logger.error(message, e);
    }
}
