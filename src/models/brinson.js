import { fakeChartData, getBrinsonData } from '../services/api';

export default {
  namespace: 'brinson',

  state: {
    brinsonData: {},
  },

  effects: {
    *getBrinson({ payload }, { call, put }) {

      const response = yield call(getBrinsonData, payload);
      console.log("payload");
      console.log(payload);
      console.log("response");
      console.log(response);
      yield put({
        type: 'save',
        payload: {
          brinsonData: response,
        },
      });
    },
    *fetchSalesData(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
        },
      });
    },
    //获取策略
    *getStrategyInfo(_, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          strategyInfo: {
            strategy_id: 'S0000000000000000000000000000382',
            strategy_code: 'S0000162',
            strategy_name: 'PE选股策略',
            strategy_version: '1.1.1',
          },
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {
        brinsonData: {},
      };
    },
  },
};
