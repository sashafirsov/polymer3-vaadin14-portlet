import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'webcomponents-element',
      },
    };
  }
}

window.customElements.define('webcomponents-element', WebcomponentsElement);
