/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (arr) {
  const res = [];
  flat(arr, res);
  return res;
};

function flat(arr, res) {
  if(!Array.isArray(arr)) return res.push(arr);
  return arr.forEach(i => flat(i, res));
}
