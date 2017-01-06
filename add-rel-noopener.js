/**
 * Add rel="noopener" attribute to all a-elements with target="_blank".
 *
 * See https://mathiasbynens.github.io/rel-noopener/
 *
 */
;(function () {
    let elements = document.querySelectorAll('a[target=_blank]');

    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].setAttribute("rel", "noopener");
    }
})();
