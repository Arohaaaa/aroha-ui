const ENV_MAP = {
  zuul: {
    name: '演示环境',
    path: 'http://www.gdie.com:10023/platform-zuul',

  },
  test: {
    name: '测试环境',
    path: 'http://www.gdie.com:10023/platform-gateway-test',

  },
  cn: {
    name: '国产环境',
    path: 'http://192.168.20.149:9008/platform-gateway',

  }
}
const SERVER_PATH = ENV_MAP['test'].path
const APP_MAP = {
  portal: {
    name: '门户引擎',
    path: '/portal-web/index.html',

  },
  activiti: {
    path: '/activiti-web/index.html',
    name: '工作流'
  },
  report: {
    name: '报表引擎',
    path: '/report-web/index.html',

  },
  form: {
    name: '表单引擎',
    path: '/form-web/index.html',

  },
  auth: {
    name: '认证中心',
    path: '/auth/index.html',

  },
  upms: {
    name: '统一用户中心',
    path: '/upms-web/index.html',

  },
  business: {
    name: '通用业务系统',
    path: '/business-system/index.html',

  }
}

export default {
  ENV_MAP,
  SERVER_PATH,
  APP_MAP
}
