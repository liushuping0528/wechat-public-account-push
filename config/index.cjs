/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx334dca6a26e94990',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7106a6dc7d3e2e4e19d8c48b9e85cd78',

  PROVINCE: '江苏',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '张雪盼',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owv7u6jf3oIFqP3PodHeiMRlBeQg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'v90s0F7aODXmE3gopqIoYgkhB9a8kSTWFE-o1coqcZw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张雪盼', year: '2001', date: '03-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张雪盼', year: '2001', date: '04-16',
        },
        {
          type: '节日', name: '第一次相识', year: '2023', date: '04-02',
        },
        {
          type: '*节日', name: '七夕', year: '2023', date: '07-07',
        },
        {
          type: '*节日', name: '中秋节', year: '2023', date: '08-15',
        },
        {
          type: '节日', name: '国庆节', year: '2023', date: '10-01',
        },
        
        {
          type: '节日', name: '周年纪念日', year: '2023', date: '07-06',
        },
        {
          type: '节日', name: '2025跨年', year: '2025', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },

    {
      // 想要发送的人的名字
      name: '刘书平',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owv7u6td9eFCsVno-Fhh8VWreUAM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'v90s0F7aODXmE3gopqIoYgkhB9a8kSTWFE-o1coqcZw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张雪盼', year: '2001', date: '03-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张雪盼', year: '2001', date: '04-16',
        },
        {
          type: '节日', name: '第一次相识', year: '2023', date: '04-02',
        },
        {
          type: '*节日', name: '七夕', year: '2023', date: '07-07',
        },
        {
          type: '*节日', name: '中秋节', year: '2023', date: '08-15',
        },
        {
          type: '节日', name: '国庆节', year: '2023', date: '10-01',
        },
        
        {
          type: '节日', name: '周年纪念日', year: '2023', date: '07-06',
        },
        {
          type: '节日', name: '2025跨年', year: '2025', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '小助理',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owv7u6v_FS5eFjrNdH0Y7amaA2cc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'soxwNNyvUD4SXY6e0rS3Kz1fYTvtvXanJ_BFHh_uxco',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张雪盼', year: '2001', date: '03-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '第一次相识纪念', year: '2023', date: '04-02',
        },
        {
          type: '节日', name: '周年纪念日', year: '2023', date: '07-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Ssr2wbCQ46cMUrecFZvWmhA1TCaR6SgdiMgJrKkI3sY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owv7u6td9eFCsVno-Fhh8VWreUAM',
    }
  ],

}

module.exports = USER_CONFIG
