const assert = require('assert');
const n2words = require('../n2words.js');

const testCasesNorwegian = [
  [0, 'null'],
  [1, 'en'],
  [2, 'to'],
  [3, 'tre'],
  [11, 'elleve'],
  [12, 'tolv'],
  [16, 'seksten'],
  [19, 'nitten'],
  [20, 'tjue'],
  [21, 'tjue-en'],
  [26, 'tjue-seks'],
  [28, 'tjue-åtte'],
  [30, 'tretti'],
  [31, 'tretti-en'],
  [40, 'førti'],
  [44, 'førti-fire'],
  [50, 'femti'],
  [55, 'femti-fem'],
  [60, 'seksti'],
  [67, 'seksti-syv'],
  [70, 'sytti'],
  [79, 'sytti-ni'],
  [89, 'åtti-ni'],
  [95, 'nitti-fem'],
  [100, 'en hundre'],
  [101, 'en hundre og en'],
  [199, 'en hundre og nitti-ni'],
  [203, 'to hundre og tre'],
  [287, 'to hundre og åtti-syv'],
  [356, 'tre hundre og femti-seks'],
  [400, 'fire hundre'],
  [434, 'fire hundre og tretti-fire'],
  [578, 'fem hundre og sytti-åtte'],
  [689, 'seks hundre og åtti-ni'],
  [729, 'syv hundre og tjue-ni'],
  [894, 'åtte hundre og nitti-fire'],
  [999, 'ni hundre og nitti-ni'],
  [1000, 'en tusen'],
  [1001, 'en tusen og en'],
  [1097, 'en tusen og nitti-syv'],
  [1104, 'en tusen, en hundre og fire'],
  [1243, 'en tusen, to hundre og førti-tre'],
  [2385, 'to tusen, tre hundre og åtti-fem'],
  [3766, 'tre tusen, syv hundre og seksti-seks'],
  [4196, 'fire tusen, en hundre og nitti-seks'],
  [5846, 'fem tusen, åtte hundre og førti-seks'],
  [6459, 'seks tusen, fire hundre og femti-ni'],
  [7232, 'syv tusen, to hundre og tretti-to'],
  [8569, 'åtte tusen, fem hundre og seksti-ni'],
  [9539, 'ni tusen, fem hundre og tretti-ni'],
  [1000000, 'en million'],
  [1000001, 'en million og en'],
  [4000000, 'fire million'],
  [10000000000000, 'ti billion'],
  [100000000000000, 'en hundre billion'],
  [1000000000000000000, 'en trillion']
]

describe('Norwegian', function () {
  it('should convert numbers correctly (Norwegian)', function () {
    for (let i = 0; i < testCasesNorwegian.length; i++) {
      assert.equal(n2words(testCasesNorwegian[i][0], { lang: 'no' }), testCasesNorwegian[i][1])
    }
  });
});
