// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

var User = /* module */[];

var $$class = CamlinternalOO.create_table(["getGender"]);

var getGender = CamlinternalOO.get_method_label($$class, "getGender");

CamlinternalOO.set_method($$class, getGender, (function (_, _$1, name, ctx) {
        console.log(Caml_oo_curry.js1(5097222, 1, ctx));
        console.log(name);
        return /* Male */858744557;
      }));

CamlinternalOO.init_class($$class);

var obj = CamlinternalOO.create_object_opt(0, $$class);

var class_tables = [
  0,
  0,
  0
];

function make() {
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table(0);
    var env_init = function () {
      return CamlinternalOO.create_object_opt(0, $$class);
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], 0);
}

exports.User = User;
exports.obj = obj;
exports.make = make;
/* class Not a pure module */
