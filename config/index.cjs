/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx42b8e6491838a8e7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a3aee723e63dbac4ad47dd8bac6c1089',

  PROVINCE: '上海',
  CITY: '嘉定',

  USERS: [
    {
      // 想要发送的人的名字
      name: '大帅比',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJrLg6nsEnOc7RJM-V6RLqeI4V0A',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'cjPGZj9cLiOyHDgxROLIwt7FbBnPhBt_BntXeXkYww8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '大帅比', year: '2000', date: '02-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '刘亦菲', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2027-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'd7ZYc8c4kPEPozpWVE25-nwPs-M28Af2R3vlDUHDWvg',

  CALLBACK_USERS: [
    {
      name: '帅比左',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJrLg6m8EkwkdVVYu0SbYpBvOLtE',
    }
  ],

}

module.exports = USER_CONFIG

