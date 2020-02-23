import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { wrap } from "@polymer/polymer/lib/utils/wrap";

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
        this.wcRoot= location.port==="8081" ? '' : '/o/polymer-vaadin-portlet/webcomponents';
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
                    url="[[wcRoot]]/package-lock.json" 
                    handle-as="json"
                    last-response="{{packages}}"
                ></iron-ajax>
                <template is="dom-repeat" items="[[dependencies]]" as="pkg">
                    <div>
                    
                       <input type="checkbox" [[disabled]] on-change="onSelect" id="cb-[[ pkg.name ]]"
                        checked="{{ pkg.active }}"                         
                        />
                       <a href="[[ docs(pkg) ]]" target="_blank" >[[pkg.name]]</a>
                            [[ rev(pkg.name,packages) ]]
                        <span inner-h-t-m-l="<[[pkg.tag]]>\t&hellip;</[[pkg.tag]]>"></span> 
                    </div>    
                </template> 
            </details>          
        </fieldset>           
      `;
    }
    static get is(){ return 'load-collection'}
    static get properties()
    {
        return { disabled: String, dependencies: Array, selection:{type:String, notify:true}, active:{ type:Boolean, value:true } };
    }
    ready()
    {   super.ready();
        if( !this.active )
            return this.msg = "inactive";
        this.msg = "";
        this.initDependencies();
    }
    getSelection(){ return this.dependencies && this.dependencies.filter( p=>p.active ).map(p=>p.name).join(",") }

    onSelect(ev)
    {
        this.dependencies.find(d=>d.name===ev.target.id.substring(3)).active = ev.target.checked
        this.set("selection",this.dependencies.filter( p=>p.active ).map(p=>p.name).join(",") );
    }

    initDependencies()
    {   // override to load collection dependencies
        // if( this.initModule("@polymer/iron-ajax"                     ) ) import("@polymer/iron-ajax"                     ).catch(errback);
    }
    initModule( pkg )
    {   let active =  this.checkedAttr(pkg);
        this.dependencies.push({ name:pkg,active, tag:pkg.split('/').pop() });
        return active;
    }
    checkedAttr(pkg){ return ( !this.selection || this.selection ==='all' || this.selection.split(',').includes(pkg) )?'checked' : '' }
    mod( pkg ){ return pkg.split('/').pop(); }
    rev( pkg, packages ){ return packages && packages.dependencies[pkg].version; }
    getTag(){ return this.localName }
    docs(pkg){ return `https://www.webcomponents.org/element/${ pkg.name }` }
}

window.customElements.define( LoadCollection.is, LoadCollection); // for extending by custom collections via
