export default {
  resizable: true,
  darkmode: true,
  themeLocation: "theme.json",
  pages: ["pages/index/index", "pages/me/index"],
  window: {
    navigationBarTitleText: "WeChat",
    navigationBarBackgroundColor: "@navBgColor",
    navigationBarTextStyle: "@navTxtStyle",
    backgroundColor: "@bgColor",
    backgroundTextStyle: "@bgTxtStyle",
    backgroundColorTop: "@bgColorTop",
    backgroundColorBottom: "@bgColorBottom"
  },
  tabBar: {
    color: "@tabFontColor",
    selectedColor: "@tabSelectedColor",
    backgroundColor: "@tabBgColor",
    borderStyle: "@tabBorderStyle",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "@iconPath1",
        selectedIconPath: "@selectedIconPath1",
        // text: "活动"
      },
      {
        pagePath: "pages/index/index",
        iconPath: "@iconPath2",
        selectedIconPath: "@selectedIconPath2",
        // text: "精彩瞬间"
      },
      {
        pagePath: "pages/me/index",
        iconPath: "@iconPath3",
        selectedIconPath: "@selectedIconPath3",
        // text: "帐户"
      }
    ]
  }
};
