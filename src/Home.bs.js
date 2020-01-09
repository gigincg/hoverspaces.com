'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");

function str(prim) {
  return prim;
}

var logo = (require('./assets/logo.png'));

function Home(Props) {
  return React.createElement("div", {
              className: "h-screen flex justify-center items-center"
            }, React.createElement("div", {
                  className: "max-w-sm rounded overflow-hidden shadow-lg p-4"
                }, React.createElement("img", {
                      className: "w-full",
                      alt: "Sunset in the mountains",
                      src: logo
                    }), React.createElement("div", {
                      className: "px-6 py-4"
                    }, React.createElement("div", {
                          className: "font-bold text-xl mb-2"
                        }, "Hover Spaces"), React.createElement("p", {
                          className: "text-gray-700 text-base"
                        }, "We are under getting stuff ready for you!")), React.createElement("div", {
                      className: "px-6 py-4"
                    }, $$Array.map((function (tag) {
                            return React.createElement("span", {
                                        key: tag,
                                        className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                                      }, "#" + tag);
                          }), /* array */[
                          "Remote work",
                          "Digital nomads"
                        ]))));
}

var make = Home;

exports.str = str;
exports.logo = logo;
exports.make = make;
/* logo Not a pure module */
