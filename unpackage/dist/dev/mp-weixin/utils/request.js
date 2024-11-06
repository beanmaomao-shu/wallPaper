"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
function request(config = {}) {
  let {
    url,
    data = {},
    method = "GET",
    header = {}
  } = config;
  url = BASE_URL + url;
  header["access-key"] = "696326";
  return new Promise((resole, reject) => {
    common_vendor.index.request({
      url,
      method,
      data,
      header,
      success: (res2) => {
        if (res2.data.errCode === 0) {
          resole(res2);
        } else if (res2.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res2.data.errMsg,
            showCancel: false
          });
        } else {
          common_vendor.index.showToast({
            title: res2.data.errMsg,
            icon: "none"
          });
        }
      },
      fail: (err) => {
        reject(res);
      }
    });
  });
}
exports.request = request;
