import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadIronElement extends PolymerElement
{
    static get template()
    {   return html`
        <style>
          :host { display: block; }
        </style>
        <h2>&lt;load-iron-elements&gt; Container of  Iron Elements pulled as lazy loaded dependencies.</h2>
        <p>[[msg]]</p>
        To hide component UI set css rule to 
        <pre>
            load-iron-elements{ display: none; }
        </pre>       
      `;
    }
    static get is(){ return 'load-iron-elements'}
    static get properties()
    {
        return { enabled: { type: Boolean, value: true } };
    }
    ready()
    {   if( !this.enabled )
            return this.msg = "disabled";
        this.msg = "loading";
        const errback = err => console.error( this.msg+=" load error "+err, err );

//      if( this.isEnabled("@polymer/iron-a11y-announcer"           ) ) import("@polymer/iron-a11y-announcer"           ).catch(errback);
//      if( this.isEnabled("@polymer/iron-a11y-keys"                ) ) import("@polymer/iron-a11y-keys"                ).catch(errback);
//      if( this.isEnabled("@polymer/iron-a11y-keys-behavior"       ) ) import("@polymer/iron-a11y-keys-behavior"       ).catch(errback);
        if( this.isEnabled("@polymer/iron-ajax"                     ) ) import("@polymer/iron-ajax"                     ).catch(errback);
        if( this.isEnabled("@polymer/iron-autogrow-textarea"        ) ) import("@polymer/iron-autogrow-textarea"        ).catch(errback);
//      if( this.isEnabled("@polymer/iron-behaviors"                ) ) import("@polymer/iron-behaviors"                ).catch(errback);
        if( this.isEnabled("@polymer/iron-checked-element-behavior" ) ) import("@polymer/iron-checked-element-behavior" ).catch(errback);
        if( this.isEnabled("@polymer/iron-collapse"                 ) ) import("@polymer/iron-collapse"                 ).catch(errback);
        if( this.isEnabled("@polymer/iron-component-page"           ) ) import("@polymer/iron-component-page"           ).catch(errback);
//      if( this.isEnabled("@polymer/iron-demo-helpers"             ) ) import("@polymer/iron-demo-helpers"             ).catch(errback);
//      if( this.isEnabled("@polymer/iron-doc-viewer"               ) ) import("@polymer/iron-doc-viewer"               ).catch(errback);
        if( this.isEnabled("@polymer/iron-dropdown"                 ) ) import("@polymer/iron-dropdown"                 ).catch(errback);
        if( this.isEnabled("@polymer/iron-fit-behavior"             ) ) import("@polymer/iron-fit-behavior"             ).catch(errback);
//      if( this.isEnabled("@polymer/iron-flex-layout"              ) ) import("@polymer/iron-flex-layout"              ).catch(errback);
        if( this.isEnabled("@polymer/iron-form"                     ) ) import("@polymer/iron-form"                     ).catch(errback);
        if( this.isEnabled("@polymer/iron-form-element-behavior"    ) ) import("@polymer/iron-form-element-behavior"    ).catch(errback);
        if( this.isEnabled("@polymer/iron-icon"                     ) ) import("@polymer/iron-icon"                     ).catch(errback);
        if( this.isEnabled("@polymer/iron-icons"                    ) ) import("@polymer/iron-icons"                    ).catch(errback);
        if( this.isEnabled("@polymer/iron-iconset"                  ) ) import("@polymer/iron-iconset"                  ).catch(errback);
        if( this.isEnabled("@polymer/iron-iconset-svg"              ) ) import("@polymer/iron-iconset-svg"              ).catch(errback);
        if( this.isEnabled("@polymer/iron-image"                    ) ) import("@polymer/iron-image"                    ).catch(errback);
        if( this.isEnabled("@polymer/iron-input"                    ) ) import("@polymer/iron-input"                    ).catch(errback);
        if( this.isEnabled("@polymer/iron-jsonp-library"            ) ) import("@polymer/iron-jsonp-library"            ).catch(errback);
        if( this.isEnabled("@polymer/iron-label"                    ) ) import("@polymer/iron-label"                    ).catch(errback);
        if( this.isEnabled("@polymer/iron-list"                     ) ) import("@polymer/iron-list"                     ).catch(errback);
        if( this.isEnabled("@polymer/iron-localstorage"             ) ) import("@polymer/iron-localstorage"             ).catch(errback);
        if( this.isEnabled("@polymer/iron-media-query"              ) ) import("@polymer/iron-media-query"              ).catch(errback);
//      if( this.isEnabled("@polymer/iron-menu-behavior"            ) ) import("@polymer/iron-menu-behavior"            ).catch(errback);
        if( this.isEnabled("@polymer/iron-meta"                     ) ) import("@polymer/iron-meta"                     ).catch(errback);
        if( this.isEnabled("@polymer/iron-overlay-behavior"         ) ) import("@polymer/iron-overlay-behavior"         ).catch(errback);
//      if( this.isEnabled("@polymer/iron-page-url"                 ) ) import("@polymer/iron-page-url"                 ).catch(errback);
        if( this.isEnabled("@polymer/iron-pages"                    ) ) import("@polymer/iron-pages"                    ).catch(errback);
        if( this.isEnabled("@polymer/iron-range-behavior"           ) ) import("@polymer/iron-range-behavior"           ).catch(errback);
        if( this.isEnabled("@polymer/iron-resizable-behavior"       ) ) import("@polymer/iron-resizable-behavior"       ).catch(errback);
        if( this.isEnabled("@polymer/iron-scroll-target-behavior"   ) ) import("@polymer/iron-scroll-target-behavior"   ).catch(errback);
        if( this.isEnabled("@polymer/iron-scroll-threshold"         ) ) import("@polymer/iron-scroll-threshold"         ).catch(errback);
//      if( this.isEnabled("@polymer/iron-selector"                 ) ) import("@polymer/iron-selector"                 ).catch(errback);
//      if( this.isEnabled("@polymer/iron-signals"                  ) ) import("@polymer/iron-signals"                  ).catch(errback);
        if( this.isEnabled("@polymer/iron-swipeable-container"      ) ) import("@polymer/iron-swipeable-container"      ).catch(errback);
        if( this.isEnabled("@polymer/iron-test-helpers"             ) ) import("@polymer/iron-test-helpers"             ).catch(errback);
        if( this.isEnabled("@polymer/iron-validatable-behavior"     ) ) import("@polymer/iron-validatable-behavior"     ).catch(errback);
        if( this.isEnabled("@polymer/iron-validator-behavior"       ) ) import("@polymer/iron-validator-behavior"       ).catch(errback);

     //        import("@polymer/iron-elements")
     //            .then( x=> console.log( this.msg="\"@polymer/iron-elements\" loaded", x ) )
     //            .catch( err => console.error( this.msg="\"@polymer/iron-elements\" load error", err ) );

    }
    isEnabled( pkg ){ return true;}
}

window.customElements.define( LoadIronElement.is, LoadIronElement);
