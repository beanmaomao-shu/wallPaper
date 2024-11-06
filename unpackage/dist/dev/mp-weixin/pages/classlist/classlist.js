"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const queryParams = {};
    common_vendor.onLoad((e) => {
      let { id = null, name = null } = e;
      queryParams.classid = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    const getClassList = async () => {
      let res = await api_apis.apiGetClassList(queryParams);
      classList.value = res.data.data;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"], ["__file", "C:/Users/黎翠儿/Desktop/Note合集/uni-app/wallPaper/pages/classlist/classlist.vue"]]);
wx.createPage(MiniProgramPage);
