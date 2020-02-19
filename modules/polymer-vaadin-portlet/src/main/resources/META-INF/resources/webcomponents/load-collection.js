import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
    export default class
LoadCollection extends PolymerElement
{
    static get template()
    {   return html`
        <style>
          :host { display: block; }
          iron-component-page{display: none;}
        </style>
        <h3>&lt;[[getTag()]]&gt; Container of Elements pulled as lazy loaded dependencies.</h3>
        <p>[[msg]]</p>
                   
        <iron-ajax auto
            url="/package-lock.json" 
            url="/o/polymer-vaadin-portlet/webcomponents/package-lock.json" 
            handle-as="json"
            last-response="{{packages}}"
        ></iron-ajax>
<template is="dom-repeat" items="[[dependencies]]" as="pkg">
    <div>   [[pkg]] 
            [[ rev(pkg,packages) ]]  
            &lt;[[ mod(pkg) ]] &gt;
            <div inner-h-t-m-l="<[[mod(pkg)]]></[[mod(pkg)]]>"></div> 
    </div>    
</template>            
      `;
    }
    // static get is(){ return 'load-collection'}
    static get properties()
    {
        return { enabled: { type: Boolean, value: true }, dependencies:{ type:Array, value:[] } };
    }
    initModule( pkg ){ this.dependencies.push(pkg); return true;}
    mod( pkg ){ return pkg.split('/').pop(); }
    rev( pkg, packages ){ return packages && packages.dependencies[pkg].version; }
    getTag(){ return this.localName }
}

// window.customElements.define( LoadCollection.is, LoadCollection);
