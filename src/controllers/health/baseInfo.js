import {
  request,
  summary,
  tags,
  query,
  body,
  prefix,
  path
} from '../../../dist/index';

// 模块标签名称
const tag = tags(['获取用户信息']);

export default class BaseInfoRouter {
  @request('get', '/getUserInfoByToken')
  @summary('根据token查询用户信息')
  @tag
  @query({
    no: { type: 'string', description: 'user token' }
  })
  static async getUserInfoByToken(ctx) {
    const { no } = ctx.validatedQuery;
    ctx.body = { no };
  }

  @request('post', '/updateUserInfo')
  @summary('修改用户信息')
  @tag
  @body({
    yes: {
      type: 'string',
      require: true,
      description: 'yesyesyes',
      nullable: true
    }
  })
  static async updateUserInfo(ctx) {
    const { yes } = ctx.validatedBody;
    ctx.body = { yes };
  }

  @request('delete', '/deleteUser/{id}')
  @summary('根据id删除用户')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async deleteUser(ctx) {
    const { id } = ctx.validatedParams;
    console.log('id:', id);
    ctx.body = { msg: 'success' };
  }
}
