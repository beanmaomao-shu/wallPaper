"use strict";
function formatTimeDifference(timestamp) {
  const now = Date.now();
  const inputTimestamp = timestamp * 1e3 || timestamp;
  const differenceInMilliseconds = now - inputTimestamp;
  if (differenceInMilliseconds < 0) {
    return null;
  }
  const seconds = Math.floor(differenceInMilliseconds / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  if (seconds < 60) {
    return "1分钟";
  } else if (minutes < 60) {
    return `${minutes}分钟`;
  } else if (hours < 24) {
    return `${hours}小时`;
  } else if (days < 30) {
    return `${days}天`;
  } else if (months < 3) {
    return `${months}月`;
  } else {
    return null;
  }
}
exports.formatTimeDifference = formatTimeDifference;
