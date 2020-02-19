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
    constructor()
    {   super();
        this.dependencies=[];
    }

    static get template()
    {   return html`
        <style>
          :host { display: block; }
          iron-component-page,paper-drawer-panel{display: none;}
        </style>
        <fieldset>
            [[msg]]
            <details>      
                <summary>&lt;[[getTag()]]&gt;</summary>     
                <iron-ajax auto
                    ZZurl="/package-lock.json" 
                    url="/o/polymer-vaadin-portlet/webcomponents/package-lock.json" 
                    handle-as="json"
                    last-response="{{packages}}"
                ></iron-ajax>
                <template is="dom-repeat" items="[[dependencies]]" as="pkg">
                    <div>   <a href="https://www.webcomponents.org/element/[[ pkg ]]">[[pkg]]</a>
                            [[ rev(pkg,packages) ]]
                            <div inner-h-t-m-l="<[[mod(pkg)]]></[[mod(pkg)]]>"></div> 
                    </div>    
                </template> 
            </details>          
        </fieldset>     
      `;
    }
    // static get is(){ return 'load-collection'}
    static get properties()
    {
        return { enabled: { type: Boolean, value: true }, dependencies: Array };
    }
    initModule( pkg ){ this.dependencies.push(pkg); return true;}
    mod( pkg ){ return pkg.split('/').pop(); }
    rev( pkg, packages ){ return packages && packages.dependencies[pkg].version; }
    getTag(){ return this.localName }
}

// window.customElements.define( LoadCollection.is, LoadCollection);
