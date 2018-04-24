// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Gen = require("./gen");
var Simple = require("./simple.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var myUser = {
  name: (function () {
      return "foo";
    }),
  email: (function () {
      return "foo";
    }),
  gender: (function () {
      return "foo";
    }),
  listNullable: (function () {
      return /* :: */[
              "foo",
              /* [] */0
            ];
    }),
  list: (function () {
      return /* :: */[
              "foo",
              /* [] */0
            ];
    }),
  getGender: (function (_, _$1) {
      return "foo";
    }),
  self: (function (_, _$1) {
      return /* Foo */0;
    })
};

describe("construct types", (function () {
        describe("Wrapper", (function () {
                return Jest.test("object construction", (function () {
                              var wrapper = Gen.getWrapper();
                              return Jest.Expect[/* toEqual */12](/* Some */["sup"], Jest.Expect[/* expect */0](Js_primitive.null_undefined_to_opt(wrapper.foo)));
                            }));
              }));
        describe("GenderInput", (function () {
                return Jest.test("object construction", (function () {
                              var genderInput = Gen.getGenderInput();
                              var match = genderInput.gender;
                              var gender = (match == null) ? /* None */0 : Simple.genderFromJs(match);
                              Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](genderInput.check));
                              Jest.Expect[/* toEqual */12](/* Some */["yup"], Jest.Expect[/* expect */0](Js_primitive.null_undefined_to_opt(genderInput.wrapper.foo)));
                              return Jest.Expect[/* toEqual */12](/* Some */[/* Male */858744557], Jest.Expect[/* expect */0](gender));
                            }));
              }));
        return /* () */0;
      }));

exports.myUser = myUser;
/*  Not a pure module */
