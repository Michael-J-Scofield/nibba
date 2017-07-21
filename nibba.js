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
        convert: function (string) {
            var replace = ['B', 'b', 'C', 'c'];
            for (var i = 0, len = replace.length; i < len; i++) {
              string = string.split(replace[i]).join('🅱️');
            }

            var replace_double = ['GG', 'gg', 'gG', 'Gg']
            for (var i = 0, len = replace_double.length; i < len; i++) {
              string = string.split(replace_double[i]).join('🅱️🅱️');
            }

            if (!string.includes('🅱️')) {
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

    };

    if (/(^|\/)nibba(\.js)?$/) {
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
