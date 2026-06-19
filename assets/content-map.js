const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["爱游戏", "推荐", "热门"],
      keywords: ["娱乐", "游戏", "首页"],
      url: "https://official-web-i-game.com.cn"
    },
    {
      id: "news",
      title: "新闻中心",
      tags: ["爱游戏", "资讯", "更新"],
      keywords: ["新闻", "公告", "活动"],
      url: "https://official-web-i-game.com.cn/news"
    },
    {
      id: "guides",
      title: "攻略专区",
      tags: ["爱游戏", "攻略", "技巧"],
      keywords: ["指南", "教程", "秘籍"],
      url: "https://official-web-i-game.com.cn/guides"
    },
    {
      id: "community",
      title: "社区互动",
      tags: ["爱游戏", "讨论", "分享"],
      keywords: ["论坛", "交流", "玩家"],
      url: "https://official-web-i-game.com.cn/community"
    },
    {
      id: "download",
      title: "下载中心",
      tags: ["爱游戏", "客户端", "资源"],
      keywords: ["下载", "安装", "补丁"],
      url: "https://official-web-i-game.com.cn/download"
    }
  ],
  globalTags: ["爱游戏", "官方", "游戏平台"]
};

function searchContent(query, sectionList) {
  if (!query || query.trim() === "") {
    return [];
  }
  const lowerQuery = query.toLowerCase().trim();
  const results = [];
  for (let i = 0; i < sectionList.length; i++) {
    const section = sectionList[i];
    const matchInTags = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const matchInKeywords = section.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery));
    const matchInTitle = section.title.toLowerCase().includes(lowerQuery);
    if (matchInTags || matchInKeywords || matchInTitle) {
      results.push({
        sectionId: section.id,
        title: section.title,
        url: section.url,
        matchedReason: matchInTags ? "标签匹配" : (matchInKeywords ? "关键词匹配" : "标题匹配")
      });
    }
  }
  return results;
}

function filterByTag(tag, sectionList) {
  if (!tag || tag.trim() === "") {
    return [];
  }
  const lowerTag = tag.toLowerCase().trim();
  return sectionList.filter(section =>
    section.tags.some(t => t.toLowerCase() === lowerTag)
  ).map(section => ({
    sectionId: section.id,
    title: section.title,
    url: section.url
  }));
}

function listAllUrls(sectionList) {
  return sectionList.map(section => ({
    title: section.title,
    url: section.url
  }));
}

const exampleQuery = "爱游戏";
const searchResults = searchContent(exampleQuery, contentMap.sections);
const tagResults = filterByTag("爱游戏", contentMap.sections);
const allUrls = listAllUrls(contentMap.sections);