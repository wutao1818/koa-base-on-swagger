import {
  request,
  summary,
  tags,
  query,
  body,
  prefix,
  path
} from '../../../dist/index';

import { agreements, agreementsType } from '../../service/doctors';

// 模块标签名称
const tag = tags(['用户协议相关']);

export default class Agreements {
  @request('get', '/getAgreements')
  @summary('根据协议类型查询最新协议')
  @tag
  @query({
    agreementType: {
      type: 'string',
      description: '协议类型 1：用户协议 5：隐私协议'
    }
  })
  static async getAgreements(ctx) {
    const agreementType = ctx.request.query.agreementType;
    const agreementsData = await agreements(agreementType);
    if (agreementsData.statusCode == 200) {
      ctx.body = { code: '000000', data: agreementsData.data, message: '成功' };
    } else {
      ctx.body = {
        code: agreementsData.statusCode,
        data: agreementsData.statusMessage,
        message: 'error'
      };
    }
  }

  @request('get', '/getAgreementsType')
  @summary('获取用户需要同意的协议类型')
  @tag
  @query({
    doctorId: { type: 'string', description: 'doctorId' }
  })
  static async getAgreementsType(ctx) {
    const doctorId = ctx.request.query.doctorId;
    const agreementsData = await agreementsType(doctorId);
    if (agreementsData.statusCode == 200) {
      ctx.body = { code: '000000', data: agreementsData.data, message: '成功' };
    } else {
      ctx.body = {
        code: agreementsData.statusCode,
        data: agreementsData.statusMessage,
        message: 'error'
      };
    }
  }
}
