import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadVaadinElement extends LoadCollection
{

    static get is(){ return 'load-vaadin-elements'}
    docs(pkg){ let n=pkg.name.split('/').pop(); return `https://github.com/vaadin/${ n }` }
    initDependencies()
    {   const errback = err => console.error( this.msg+=" load error "+err, err );

        if( this.initModule('@vaadin/vaadin' ) ) import('@vaadin/vaadin').catch(errback);
        // @vaadin/vaadin aggregation
        if( this.initModule('@vaadin/vaadin-core'            ) ) import('@vaadin/vaadin-core'             ).catch(errback);
        if( this.initModule('@vaadin/vaadin-board'           ) ) import('@vaadin/vaadin-board'            ).catch(errback);
        if( this.initModule('@vaadin/vaadin-charts'          ) ) import('@vaadin/vaadin-charts'           ).catch(errback);
        if( this.initModule('@vaadin/vaadin-confirm-dialog'  ) ) import('@vaadin/vaadin-confirm-dialog'   ).catch(errback);
        if( this.initModule('@vaadin/vaadin-cookie-consent'  ) ) import('@vaadin/vaadin-cookie-consent'   ).catch(errback);
        if( this.initModule('@vaadin/vaadin-crud'            ) ) import('@vaadin/vaadin-crud'             ).catch(errback);
        if( this.initModule('@vaadin/vaadin-grid-pro'        ) ) import('@vaadin/vaadin-grid-pro'         ).catch(errback);
        if( this.initModule('@vaadin/vaadin-rich-text-editor') ) import('@vaadin/vaadin-rich-text-editor' ).catch(errback);

        // @vaadin/vaadin README.md
        if( this.initModule( "@vaadin/vaadin-accordion"      ) ) import("@vaadin/vaadin-accordion"      ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-app-layout"     ) ) import("@vaadin/vaadin-app-layout"     ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-button"         ) ) import("@vaadin/vaadin-button"         ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-checkbox"       ) ) import("@vaadin/vaadin-checkbox"       ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-combo-box"      ) ) import("@vaadin/vaadin-combo-box"      ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-context-menu"   ) ) import("@vaadin/vaadin-context-menu"   ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-custom-field"   ) ) import("@vaadin/vaadin-custom-field"   ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-date-picker"    ) ) import("@vaadin/vaadin-date-picker"    ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-details"        ) ) import("@vaadin/vaadin-details"        ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-dialog"         ) ) import("@vaadin/vaadin-dialog"         ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-form-layout"    ) ) import("@vaadin/vaadin-form-layout"    ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-grid"           ) ) import("@vaadin/vaadin-grid"           ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-icons"          ) ) import("@vaadin/vaadin-icons"          ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-item"           ) ) import("@vaadin/vaadin-item"           ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-list-box"       ) ) import("@vaadin/vaadin-list-box"       ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-login"          ) ) import("@vaadin/vaadin-login"          ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-menu-bar"       ) ) import("@vaadin/vaadin-menu-bar"       ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-notification"   ) ) import("@vaadin/vaadin-notification"   ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-ordered-layout" ) ) import("@vaadin/vaadin-ordered-layout" ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-progress-bar"   ) ) import("@vaadin/vaadin-progress-bar"   ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-radio-button"   ) ) import("@vaadin/vaadin-radio-button"   ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-select"         ) ) import("@vaadin/vaadin-select"         ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-split-layout"   ) ) import("@vaadin/vaadin-split-layout"   ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-tabs"           ) ) import("@vaadin/vaadin-tabs"           ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-text-field"     ) ) import("@vaadin/vaadin-text-field"     ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-time-picker"    ) ) import("@vaadin/vaadin-time-picker"    ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-upload"         ) ) import("@vaadin/vaadin-upload"         ).catch(errback);


        if( this.initModule( "@vaadin/vaadin-lumo-styles"    ) ) import("@vaadin/vaadin-lumo-styles"    ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-material-styles") ) import("@vaadin/vaadin-material-styles").catch(errback);

        if( this.initModule( "@vaadin/vaadin-grid-pro"       ) ) import("@vaadin/vaadin-grid-pro"       ).catch(errback);
        if( this.initModule( "@vaadin/vaadin-overlay"        ) ) import("@vaadin/vaadin-overlay"        ).catch(errback);

    }

}

window.customElements.define( LoadVaadinElement.is, LoadVaadinElement);
