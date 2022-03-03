import objectAssign from 'object.assign';
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';
import 'core-js/fn/array/from';
import 'core-js/fn/array/fill';
import 'core-js/fn/string/repeat';
import 'es6-symbol/implement';
import PromisePolyfill from 'promise-polyfill';
import viewportPolyfill from 'viewport-units-buggyfill';
import 'iterators-polyfill';

declare global {
  interface Window {
    Promise: Promise<any>;
  }
}

/* fixes relative units in mobile safari */
viewportPolyfill.init();

objectAssign.shim();

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = PromisePolyfill;
}

export default async () => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.fetch) {
    await import(/* webpackChunkName: "fetch-polyfill" */ 'whatwg-fetch');
  }
};
