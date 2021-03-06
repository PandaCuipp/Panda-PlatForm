import moment from 'moment';

// mock data
const brinsonData = {
  columns: [
    '组合比例',
    '基准比例',
    '超配比例',
    '行业表现',
    '组合贡献',
    '基准贡献',
    '超额贡献',
    '行业配置',
    '选股+交叉',
  ],
  index: [
    '交通运输',
    '休闲服务',
    '传媒',
    '公用事业',
    '农林牧渔',
    '化工',
    '医药生物',
    '商业贸易',
    '国防军工',
    '家用电器',
    '建筑材料',
    '建筑装饰',
    '房地产',
    '有色金属',
    '机械设备',
    '汽车',
    '电子',
    '电气设备',
    '纺织服装',
    '综合',
    '计算机',
    '轻工制造',
    '通信',
    '采掘',
    '钢铁',
    '银行',
    '非银金融',
    '食品饮料',
    '合计',
  ],
  data: [
    [0.0, 0.03734, -0.03734, -0.0491362257, 0.0, -0.0018347467, 0.0019347467, 0.0017347467, 0.0],
    [0.0, 0.00611, -0.00611, -0.0728227727, 0.0, -0.0004449471, 0.0004449471, 0.0004449471, 0.0],
    [0.0, 0.04437, -0.04437, -0.0768231915, 0.0, -0.003408645, 0.003408645, 0.003408645, 0.0],
    [
      0.038350907,
      0.0408,
      -0.002449093,
      -0.024020312,
      -0.0033822653,
      -0.0009800287,
      -0.0024022366,
      0.000058828,
      -0.0024610646,
    ],
    [0.0, 0.03947, -0.03947, -0.018486955, 0.0, -0.0007296801, 0.0007296801, 0.0007296801, 0.0],
    [
      0.0394436267,
      0.08499,
      -0.0455463733,
      -0.0087050752,
      0.0006399241,
      -0.0007398443,
      0.0013797684,
      0.0003964846,
      0.0009832838,
    ],
    [
      0.2224515374,
      0.10626,
      0.1161915374,
      0.1386781713,
      0.0555590164,
      0.0147359425,
      0.0408230739,
      0.0161132299,
      0.024709844,
    ],
    [0.0, 0.03151, -0.03151, 0.0252119741, 0.0, 0.0007944293, -0.0007944293, -0.0007944293, 0.0],
    [0.0, 0.02017, -0.02017, 0.0294468642, 0.0, 0.0005939433, -0.0005939433, -0.0005939433, 0.0],
    [
      0.0378779116,
      0.02039,
      0.0174879116,
      -0.0617338885,
      -0.0064070543,
      -0.001258754,
      -0.0051483003,
      -0.0010795968,
      -0.0040687036,
    ],
    [0.0, 0.02291, -0.02291, -0.0874192029, 0.0, -0.0020027739, 0.0020027739, 0.0020027739, 0.0],
    [
      0.0365623645,
      0.01871,
      0.0178523645,
      -0.1187267805,
      -0.0034026889,
      -0.0022213781,
      -0.0011813109,
      -0.0021195538,
      0.0009382429,
    ],
    [
      0.0518308211,
      0.06141,
      -0.0095791789,
      -0.0907267004,
      -0.009519824,
      -0.0055715267,
      -0.0039482974,
      0.0008690873,
      -0.0048173847,
    ],
    [0.0, 0.05484, -0.05484, -0.0630180355, 0.0, -0.0034559091, 0.0034559091, 0.0034559091, 0.0],
    [0.0, 0.04539, -0.04539, -0.0702090068, 0.0, -0.0031867868, 0.0031867868, 0.0031867868, 0.0],
    [
      0.0785527845,
      0.0269,
      0.0516527845,
      -0.044122337,
      -0.0042755748,
      -0.0011868909,
      -0.003088684,
      -0.0022790416,
      -0.0008096424,
    ],
    [
      0.0438924267,
      0.07379,
      -0.0298975733,
      -0.0420305256,
      -0.0071355486,
      -0.0031014325,
      -0.0040341161,
      0.0012566107,
      -0.0052907268,
    ],
    [
      0.0407657674,
      0.05056,
      -0.0097942326,
      -0.0261083124,
      0.0014981912,
      -0.0013200363,
      0.0028182274,
      0.0002557109,
      0.0025625165,
    ],
    [0.0, 0.00437, -0.00437, -0.0036019682, 0.0, -0.0000157406, 0.0000157406, 0.0000157406, 0.0],
    [0.0, 0.01077, -0.01077, -0.055010355, 0.0, -0.0005924615, 0.0005924615, 0.0005924615, 0.0],
    [
      0.0202002769,
      0.07737,
      -0.0571697231,
      0.0952332583,
      0.0061060228,
      0.0073681972,
      -0.0012621744,
      -0.005444459,
      0.0041822847,
    ],
    [
      0.0200407891,
      0.02163,
      -0.0015892109,
      -0.0628422983,
      -0.000974399,
      -0.0013592789,
      0.0003848799,
      0.0000998697,
      0.0002850102,
    ],
    [0.0, 0.01567, -0.01567, -0.0159762767, 0.0, -0.0002503483, 0.0002503483, 0.0002503483, 0.0],
    [0.0, 0.01702, -0.01702, -0.1397801266, 0.0, -0.0023790578, 0.0023790578, 0.0023790578, 0.0],
    [0.0, 0.01996, -0.01996, -0.1363552823, 0.0, -0.0027216514, 0.0027216514, 0.0027216514, 0.0],
    [
      0.2523223654,
      0.00397,
      0.2483523654,
      -0.14183063,
      -0.0268854631,
      -0.0005630676,
      -0.0263223955,
      -0.0352239724,
      0.008901577,
    ],
    [
      0.0380392221,
      0.01408,
      0.0239592221,
      -0.1275518839,
      -0.0027639205,
      -0.0017959305,
      -0.00096799,
      -0.0030560439,
      0.0020880539,
    ],
    [
      0.0796691996,
      0.02914,
      0.0505291996,
      0.1729263035,
      -0.0027174851,
      0.0050390725,
      -0.0077565576,
      0.0087378277,
      -0.0164943853,
    ],
    [
      null,
      null,
      null,
      null,
      -0.0036610694,
      -0.0125893321,
      0.0089282627,
      -0.0017806429,
      0.0107089056,
    ],
  ],
};

const strategyInfo = {
  strategy_id: 'S0000000000000000000000000000382',
  strategy_code: 'S0000162',
  strategy_name: 'PE选股策略',
  strategy_version: '1.1.1',
};

export const getFakeBrinson = {
  brinsonData,
  strategyInfo,
};

export default {
  getFakeBrinson,
};
