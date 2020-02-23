import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-ajax";
import "./load-iron-elements";
import "./load-paper-behaviors";
import "./load-paper-elements";
import "./load-vaadin-elements";

/**
 * `webcomponents-element`
 * Container of Polymer Elements and Vaadin web components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WebcomponentsElement extends PolymerElement
{
    static get template()
    {
        return html`
<style>
  :host { display: block; }
</style>
<h2>Web Components Collections</h2>
<i>Components are pulled as lazy loaded dependencies.</i>
<load-paper-behaviors [[disabled]] selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection"></load-paper-behaviors>
<load-paper-elements  [[disabled]] selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection"></load-paper-elements>
<load-iron-elements   [[disabled]] selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection"></load-iron-elements>
<load-vaadin-elements [[disabled]] selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection"></load-vaadin-elements>
    `;
    }

    static get properties()
    {
        return  {   selection: { type: String, value: "all", notify:true }
                ,    disabled: String
                };
    }

    ready()
    {   super.ready();
        this.onCollectionChanged();
    }
    onCollectionChanged()
    {
        const o={};
        [...this.shadowRoot.querySelectorAll('.load-collection')]
            .map( col=> col.getSelection() ).forEach( sel=>sel.split(',').forEach( m=>o[m]=m ));

        this.set( 'selection',Object.keys(o).join(',') );
    }
}

window.customElements.define( 'webcomponents-element', WebcomponentsElement );
