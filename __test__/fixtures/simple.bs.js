// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -134776506,
    "SuperUser"
  ],
  /* tuple */[
    146451070,
    "Customer"
  ],
  /* tuple */[
    788521005,
    "Administrator"
  ]
];

function userTypesToJs(param) {
  return Js_mapperRt.binarySearch(3, param, jsMapperConstantArray);
}

function userTypesFromJs(param) {
  return Js_mapperRt.revSearch(3, jsMapperConstantArray, param);
}

var jsMapperConstantArray$1 = /* array */[
  /* tuple */[
    -322301012,
    "Female"
  ],
  /* tuple */[
    306622670,
    "NonBinary"
  ],
  /* tuple */[
    858744557,
    "Male"
  ]
];

function genderToJs(param) {
  return Js_mapperRt.binarySearch(3, param, jsMapperConstantArray$1);
}

function genderFromJs(param) {
  return Js_mapperRt.revSearch(3, jsMapperConstantArray$1, param);
}

exports.userTypesToJs = userTypesToJs;
exports.userTypesFromJs = userTypesFromJs;
exports.genderToJs = genderToJs;
exports.genderFromJs = genderFromJs;
/* No side effect */
