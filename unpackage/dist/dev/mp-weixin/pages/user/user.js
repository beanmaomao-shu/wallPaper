"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(),
        b: common_vendor.p({
          type: "download-filled",
          size: "20",
          color: "#28b389"
        }),
        c: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        d: common_vendor.p({
          type: "star-filled",
          size: "20",
          color: "#28b389"
        }),
        e: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        f: common_vendor.p({
          type: "chatboxes-filled",
          size: "20",
          color: "#28b389"
        }),
        g: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        h: common_vendor.p({
          type: "notification-filled",
          size: "20",
          color: "#28b389"
        }),
        i: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        j: common_vendor.p({
          type: "info-filled",
          size: "20",
          color: "#28b389"
        }),
        k: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        l: common_vendor.unref(utils_system.getStatusBarHeight)() + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/黎翠儿/Desktop/Note合集/uni-app/wallPaper/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
