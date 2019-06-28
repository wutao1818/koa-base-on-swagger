import {
  request,
  summary,
  tags,
  query,
  body,
  prefix,
  path
} from '../../../dist/index';

import { getData } from '../../service/index';

// 模块标签名称
const tag = tags(['获取基础数据']);

export default class BaseData {
  @request('get', '/getBaseDataToken')
  @summary('获取基础数据')
  @tag
  @query({
    token: { type: 'string', description: 'user token' }
  })
  static async getBaseDataToken(ctx) {
    const token = ctx.request.query.token;
    const diseaseCategoryList = await getData(token);
    ctx.body = { data: diseaseCategoryList };
  }
}
