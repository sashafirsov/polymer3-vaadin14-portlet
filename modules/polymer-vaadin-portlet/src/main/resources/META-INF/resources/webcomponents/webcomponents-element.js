import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-ajax";
import "./load-iron-elements";
import "./load-paper-behaviors";
import "./load-paper-elements";
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
<h2>Web Components Collections</h2>
<i>Components are pulled as lazy loaded dependencies.</i>
<template is="dom-repeat" items="[[dependencies]]" as="pkg">
    <div inner-h-t-m-l="<[[pkg]]></[[pkg]]>"></div>
</template>
    `;
  }
  static get properties() {
    return { dependencies: { type: Array, value:["load-paper-behaviors","load-paper-elements","load-iron-elements"] }    };
  }
}

window.customElements.define('webcomponents-element', WebcomponentsElement);
