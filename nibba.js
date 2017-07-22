#!/usr/bin/env node

(function () {

    "use strict";

    /**
     * Convert regular and boring text into Nibba meme text.
     *
     * @author College boy Michael Scofield
     * @license IDGAF
     */
    var nibba = {

        /**
         * Convert a string to NIBBA based on the character map.
         *
         * @param string string Regular ol' text to convert
         * @return string
         */
        convert: function (string, mockify) {
            if (mockify) {
              string = nibba.mockify(string);
            }

            var replace = ['B', 'b', 'C', 'c'];
            for (var i = 0, len = replace.length; i < len; i++) {
              string = string.split(replace[i]).join('🅱️');
            }

            var replace_double = ['GG', 'gg', 'gG', 'Gg']
            for (var i = 0, len = replace_double.length; i < len; i++) {
              string = string.split(replace_double[i]).join('🅱️🅱️');
            }

            if (nibba.occurrences(string, '🅱️') < 2) {
              var stringArray = string.split(' ');
              for  (var str in stringArray) {
                var contains = ['A', 'a', 'O', 'o', 'E', 'e', 'U', 'u', 'I', 'i', 'S', 's', 'Y', 'y'];

                var word = stringArray[str];
                if (!word.includes('🅱️')) {
                  var match = contains.indexOf(word.charAt(0));
                  if (match == -1) {
                    word = word.split(word.charAt(0)).join('🅱️');
                  }
                }
                stringArray[str] = word;
              }
              string = stringArray.join(' ');
            }

            return string;
        },

        /** Function that count occurrences of a substring in a string;
         * @param {String} string               The string
         * @param {String} subString            The sub string to search for
         * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
         *
         */
        occurrences: function(string, subString, allowOverlapping) {
          string += "";
          subString += "";
          if (subString.length <= 0) return (string.length + 1);

          var n = 0,
              pos = 0,
              step = allowOverlapping ? 1 : subString.length;

          while (true) {
              pos = string.indexOf(subString, pos);
              if (pos >= 0) {
                  ++n;
                  pos += step;
              } else break;
          }
          return n;
        },

        /**
         * Convert normal text to mockified string
         * @type {string}
         */
        mockify: function(string) {
          const textArray = string.toLowerCase().split('');

          function capitalizeEven(char, index) {
              if (index % 2 === 0) {
                  return char.toUpperCase();
              } else {
                  return char;
              }
          }

          return textArray.map(capitalizeEven).join('');
        }

    };

    if (/(^|\/)nibba(\.js)?$/.test(process.argv[1])) {
        if (undefined !== process.argv[2]) {
            console.log(nibba.convert(process.argv[2]));
        } else {
            console.error('Usage: nibba.js <string>');
        }
    } else if (undefined !== exports) {
        exports.convert = nibba.convert;
    } else {
        console.error("¯\_(ツ)_/¯");
    }

}());
