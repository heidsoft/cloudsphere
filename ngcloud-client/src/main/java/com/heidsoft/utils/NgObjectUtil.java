package com.heidsoft.utils;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Map;

/**
 * <p>
 *     对象判断工具类
 * </p>
 * @author heidsoft
 * @date 2018-01-19
 */
public class NgObjectUtil {
    public static boolean isNullOrEmpty(final Collection<?> c) {
        return c == null || c.isEmpty();
    }

    public static boolean isNullOrEmpty(final Map<?, ?> m) {
        return m == null || m.isEmpty();
    }

    public static boolean isEmpty(Object[] array) {
        return (array == null || array.length == 0);
    }

    /**
     * <p>
     *     对象为空判断
     * </p>
     * @param obj
     * @return
     */
    public static boolean isEmpty(Object obj) {
        if (obj == null) {
            return true;
        }

        if (obj.getClass().isArray()) {
            return Array.getLength(obj) == 0;
        }
        if (obj instanceof CharSequence) {
            return ((CharSequence) obj).length() == 0;
        }
        if (obj instanceof Collection) {
            return ((Collection) obj).isEmpty();
        }
        if (obj instanceof Map) {
            return ((Map) obj).isEmpty();
        }
        // 字符串为空判断
        if (obj instanceof String) {
            return ((String) obj).trim().isEmpty();
        }

        // else
        return false;
    }

}