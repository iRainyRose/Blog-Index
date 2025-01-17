/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "Nukkit Plugin",
    sites: [
      {
        title: "KillRanking",
        url: "https://github.com/iRainyRose/KillRanking/",
        description: "玩家击杀排行榜",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "IgnoreBiomeCheck",
        description: "忽略NK的生物群系检查",
        url: "https://github.com/iRainyRose/IgnoreBiomeCheck",
        icon: "",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "Nukkit-MOT",
        description: "Nukkit-MOT",
        url: "https://www.nukkit-mot.com/",
        icon: "",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "RainyRose 的GitHub",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://github.com/iRainyRose",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/iRainyRose",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "不忘初心，一生浪漫",
    "坚守梦想，岁月如歌",
    "追求真理，心怀热情",
    "铭记初衷，人生如诗",
    "勇敢前行，心中有光",
    "珍惜当下，笑对未来",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "iRainyRose",
    keywords: "iRainyRose, RainyRose",
    description: "This is my personal index page.",
  },
};

export default GLOBAL_CONFIG;
