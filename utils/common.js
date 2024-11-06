export function formatTimeDifference(timestamp) {
    // 获取当前时间的时间戳（以毫秒为单位）
    const now = Date.now();
    // 将传入的时间戳转换为毫秒，如果已经是毫秒则无需转换
    const inputTimestamp = timestamp * 1000 || timestamp;

    // 计算时间差differenceInMilliseconds，单位为毫秒
    const differenceInMilliseconds = now - inputTimestamp;
    
    // 如果时间戳是未来的时间，则返回null
    if (differenceInMilliseconds < 0) {
        return null;
    }

    // 转换为秒
    const seconds = Math.floor(differenceInMilliseconds / 1000);
    // 转换为分钟
    const minutes = Math.floor(seconds / 60);
    // 转换为小时
    const hours = Math.floor(minutes / 60);
    // 转换为天
    const days = Math.floor(hours / 24);
    // 转换为月，这里简单地用30天来近似一个月
    const months = Math.floor(days / 30);

    // 根据时间差返回相应信息
    if (seconds < 60) { // 少于一分钟
        return '1分钟';
    } else if (minutes < 60) { // 少于一小时
        return `${minutes}分钟`;
    } else if (hours < 24) { // 少于一天
        return `${hours}小时`;
    } else if (days < 30) { // 少于一个月
        return `${days}天`;
    } else if (months < 3) { // 少于三个月
        return `${months}月`;
    } else { // 超过三个月
        return null;
    }
}