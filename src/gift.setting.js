
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '幸运大转盘',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'Hi 酸辣小公主', },
    { key: 's', wording: '这次的礼物，用抽奖的形式', },
    { key: 'd', wording: '把“选择权”交给你', },
  ],
  // 最终解释权归属人
  owner: 'EdisonEdz',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'Dior口红兑奖券', alias: 'Dior口红', image: '/images/1.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'w', name: '上岸祈福', alias: '祈福', image: '/images/2.png',  description: '“这次一定行”' },
  { key: 'e', name: '饮品兑换券20张', alias: '饮品', image: '/images/3.png',  description: '「想喝就喝」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '草莓熊公仔', alias: '草莓熊', image: '/images/5.jpg',  description: '「陪你在身边」' },
  { key: 'y', name: '210红包', alias: '210', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '玫瑰花一束', alias: '玫瑰花', image: '/images/7.png',  description: '“热恋、热情、热爱着你”' },
  { key: 'i', name: '小女朋友套装', alias: '套装', image: '/images/8.png',  description: '「永远爱你，哪里都爱」' },
];
