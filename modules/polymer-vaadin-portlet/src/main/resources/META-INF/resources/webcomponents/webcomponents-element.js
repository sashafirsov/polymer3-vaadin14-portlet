import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-ajax";
import "./load-iron-elements";
/**
 * `webcomponents-element`
 * Container of Polymer Elements and Vaadin web components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WebcomponentsElement extends PolymerElement {
  static get template() {
    return html`
<style>
  :host { display: block; }
</style>
<h2>Available collections</h2>
To hide component UI, set css rule to 
<pre>
    webcomponents-element{ display: none; }
</pre>
<template is="dom-repeat" items="[[dependencies]]" as="pkg">
    <hr/>
    <div inner-h-t-m-l="<[[pkg]]></[[pkg]]>"></div>
</template>
    `;
  }
  static get properties() {
    return { dependencies: { type: Array, value:["load-iron-elements"] }    };
  }
}

window.customElements.define('webcomponents-element', WebcomponentsElement);
