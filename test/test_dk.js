const assert = require('assert');
const n2words = require('../n2words.js');

const testCasesDanish = [
  [0, 'nul'],
  [1, 'et'],
  [2, 'to'],
  [3, 'tre'],
  [11, 'elleve'],
  [12, 'tolv'],
  [16, 'seksten'],
  [19, 'nitten'],
  [20, 'tyve'],
  [21, 'enogtyve'],
  [26, 'seksogtyve'],
  [28, 'otteogtyve'],
  [30, 'tredive'],
  [31, 'enogtredive'],
  [40, 'fyrre'],
  [44, 'fireogfyrre'],
  [50, 'halvtreds'],
  [55, 'femoghalvtreds'],
  [60, 'treds'],
  [67, 'syvogtreds'],
  [70, 'halvfjerds'],
  [79, 'nioghalvfjerds'],
  [89, 'niogfirs'],
  [95, 'femoghalvfems'],
  [100, 'ethundrede'],
  [101, 'ethundrede og et'],
  [199, 'ethundrede og nioghalvfems'],
  [203, 'tohundrede og tre'],
  [287, 'tohundrede og syvogfirs'],
  [356, 'trehundrede og seksoghalvtreds'],
  [400, 'firehundrede'],
  [434, 'firehundrede og fireogtredive'],
  [578, 'femhundrede og otteoghalvfjerds'],
  [689, 'sekshundrede og niogfirs'],
  [729, 'syvhundrede og niogtyve'],
  [894, 'ottehundrede og fireoghalvfems'],
  [999, 'nihundrede og nioghalvfems'],
  [1000, 'ettusind'],
  [1001, 'ettusinde og et'],
  [1097, 'ettusinde og syvoghalvfems'],
  [1104, 'ettusinde og ethundrede og fire'],
  [1243, 'ettusinde og tohundrede og treogfyrre'],
  [2385, 'totusinde og trehundrede og femogfirs'],
  [3766, 'tretusinde og syvhundrede og seksogtreds'],
  [4196, 'firetusinde og ethundrede og seksoghalvfems'],
  [5846, 'femtusinde og ottehundrede og seksogfyrre'],
  [6459, 'sekstusinde og firehundrede og nioghalvtreds'],
  [7232, 'syvtusinde og tohundrede og toogtredive'],
  [8569, 'ottetusinde og femhundrede og niogtreds'],
  [9539, 'nitusinde og femhundrede og niogtredive'],
  [1000000, 'en millioner'],
  [1000001, 'en millioner et'],
  [4000000, 'fire millioner'],
  [10000000000000, 'ti billioner'],
  [100000000000000, 'ethundrede billioner'],
  [1000000000000000000, 'en trillioner']
]


describe('Danish', function () {
  it('should convert numbers correctly (Danish)', function () {
    for (let i = 0; i < testCasesDanish.length; i++) {
      assert.equal(n2words(testCasesDanish[i][0], { lang: 'dk' }), testCasesDanish[i][1])
    }
  });
});
