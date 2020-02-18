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
<iron-ajax auto
    url="/o/polymer-vaadin-portlet/webcomponents/package.json" 
    handle-as="json"
    last-response="{{package}}"
    on-response="onPackageReady"
></iron-ajax>
<template is="dom-repeat" items="[[keys(package.dependencies)]]" as="pkg">
    <div>   [[pkg]] 
            [[ rev(pkg) ]]  
            &lt;load-[[ mod(pkg) ]] &gt;
            <div inner-h-t-m-l="<load-[[mod(pkg)]]></load-[[mod(pkg)]]>"></div> 
    </div>    
</template>
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

  onPackageReady()
  {
    // for( let pkg in this.package.dependencies )
    //       import(`/o/polymer-vaadin-portlet/webcomponents/build/esm-unbundled/node_modules/${pkg}`)
  }

  keys(obj){ return Object.keys(obj) }
  mod(pkg){ return pkg.split('/').pop() }
  rev( pkg ){return this.package.dependencies[pkg] }
}

window.customElements.define('webcomponents-element', WebcomponentsElement);
