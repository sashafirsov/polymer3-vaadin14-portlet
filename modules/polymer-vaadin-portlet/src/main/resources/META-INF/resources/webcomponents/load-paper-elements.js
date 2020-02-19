import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPaperElement extends LoadCollection
{

    static get is(){ return 'load-paper-elements'}

    ready()
    {   super.ready();
        if( !this.enabled )
            return this.msg = "disabled";
        this.msg = "";
        const errback = err => console.error( this.msg+=" load error "+err, err );


        if( this.initModule("@polymer/paper-badge"                  ) ) import( "@polymer/paper-badge"                   ).catch(errback);
        if( this.initModule("@polymer/paper-button"                 ) ) import( "@polymer/paper-button"                  ).catch(errback);
        if( this.initModule("@polymer/paper-card"                   ) ) import( "@polymer/paper-card"                    ).catch(errback);
        if( this.initModule("@polymer/paper-checkbox"               ) ) import( "@polymer/paper-checkbox"                ).catch(errback);

        if( this.initModule("@polymer/paper-dialog"                                     ) ) import( "@polymer/paper-dialog"                                     ).catch(errback);
        if( this.initModule("@polymer/paper-dialog-behavior/paper-dialog-behavior"      ) ) import( "@polymer/paper-dialog-behavior/paper-dialog-behavior"      ).catch(errback);
        if( this.initModule("@polymer/paper-dialog-behavior/paper-dialog-shared-styles" ) ) import( "@polymer/paper-dialog-behavior/paper-dialog-shared-styles" ).catch(errback);
        if( this.initModule("@polymer/paper-dialog-scrollable"                          ) ) import( "@polymer/paper-dialog-scrollable"                          ).catch(errback);

        if( this.initModule("@polymer/paper-drawer-panel"           ) ) import( "@polymer/paper-drawer-panel"            ).catch(errback);

        if( this.initModule("@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles"    ) ) import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles"   ).catch(errback);
        if( this.initModule("@polymer/paper-dropdown-menu/paper-dropdown-menu-icons"            ) ) import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-icons"           ).catch(errback);
        if( this.initModule("@polymer/paper-dropdown-menu/paper-dropdown-menu-light"            ) ) import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-light"           ).catch(errback);
        if( this.initModule("@polymer/paper-dropdown-menu/paper-dropdown-menu"                  ) ) import( "@polymer/paper-dropdown-menu/paper-dropdown-menu"                 ).catch(errback);

        if( this.initModule("@polymer/paper-fab"                    ) ) import( "@polymer/paper-fab"                     ).catch(errback);
        if( this.initModule("@polymer/paper-header-panel"           ) ) import( "@polymer/paper-header-panel"            ).catch(errback);
        if( this.initModule("@polymer/paper-icon-button"            ) ) import( "@polymer/paper-icon-button"             ).catch(errback);

        if( this.initModule("@polymer/paper-input/paper-input"                  ) ) import( "@polymer/paper-input/paper-input"                  ).catch(errback);
        // if( this.initModule("@polymer/paper-input/paper-input-container"        ) ) import( "@polymer/paper-input/paper-input-container"        ).catch(errback);
        if( this.initModule("@polymer/paper-input/paper-input-behavior"         ) ) import( "@polymer/paper-input/paper-input-behavior"         ).catch(errback);
        if( this.initModule("@polymer/paper-input/paper-input-addon-behavior"   ) ) import( "@polymer/paper-input/paper-input-addon-behavior"   ).catch(errback);
        if( this.initModule("@polymer/paper-input/paper-input-char-counter"     ) ) import( "@polymer/paper-input/paper-input-char-counter"     ).catch(errback);
        if( this.initModule("@polymer/paper-input/paper-textarea"               ) ) import( "@polymer/paper-input/paper-textarea"               ).catch(errback);
        if( this.initModule("@polymer/paper-input/paper-input-error"            ) ) import( "@polymer/paper-input/paper-input-error"            ).catch(errback);

        if( this.initModule("@polymer/paper-item"                   ) ) import( "@polymer/paper-item"                    ).catch(errback);
        if( this.initModule("@polymer/paper-listbox"                ) ) import( "@polymer/paper-listbox"                 ).catch(errback);
        if( this.initModule("@polymer/paper-material"               ) ) import( "@polymer/paper-material"                ).catch(errback);
        // if( this.initModule("@polymer/paper-menu"                   ) ) import( "@polymer/paper-menu/"                    ).catch(errback);
        if( this.initModule("@polymer/paper-menu-button"            ) ) import( "@polymer/paper-menu-button"             ).catch(errback);
        if( this.initModule("@polymer/paper-progress"               ) ) import( "@polymer/paper-progress"                ).catch(errback);
        if( this.initModule("@polymer/paper-radio-button"           ) ) import( "@polymer/paper-radio-button"            ).catch(errback);
        if( this.initModule("@polymer/paper-radio-group"            ) ) import( "@polymer/paper-radio-group"             ).catch(errback);
        if( this.initModule("@polymer/paper-ripple"                 ) ) import( "@polymer/paper-ripple"                  ).catch(errback);
        if( this.initModule("@polymer/paper-scroll-header-panel"    ) ) import( "@polymer/paper-scroll-header-panel"     ).catch(errback);
        if( this.initModule("@polymer/paper-slider"                 ) ) import( "@polymer/paper-slider"                  ).catch(errback);

        if( this.initModule("@polymer/paper-spinner/paper-spinner-behavior" ) ) import( "@polymer/paper-spinner/paper-spinner-behavior" ).catch(errback);
        if( this.initModule("@polymer/paper-spinner/paper-spinner-lite"     ) ) import( "@polymer/paper-spinner/paper-spinner-lite"     ).catch(errback);
        if( this.initModule("@polymer/paper-spinner/paper-spinner-styles"   ) ) import( "@polymer/paper-spinner/paper-spinner-styles"   ).catch(errback);
        if( this.initModule("@polymer/paper-spinner/paper-spinner"          ) ) import( "@polymer/paper-spinner/paper-spinner"          ).catch(errback);

        if( this.initModule("@polymer/paper-styles/default-theme"           ) ) import( "@polymer/paper-styles/default-theme"           ).catch(errback);
        if( this.initModule("@polymer/paper-styles/paper-styles"            ) ) import( "@polymer/paper-styles/paper-styles"            ).catch(errback);
        if( this.initModule("@polymer/paper-styles/paper-styles-classes"    ) ) import( "@polymer/paper-styles/paper-styles-classes"    ).catch(errback);
        if( this.initModule("@polymer/paper-styles/shadow"                  ) ) import( "@polymer/paper-styles/shadow"                  ).catch(errback);
        if( this.initModule("@polymer/paper-styles/color"                   ) ) import( "@polymer/paper-styles/color"                   ).catch(errback);
        if( this.initModule("@polymer/paper-styles/typography"              ) ) import( "@polymer/paper-styles/typography"              ).catch(errback);
        if( this.initModule("@polymer/paper-styles/demo-pages"              ) ) import( "@polymer/paper-styles/demo-pages"              ).catch(errback);

        if( this.initModule("@polymer/paper-tabs"                   ) ) import( "@polymer/paper-tabs"                    ).catch(errback);
        if( this.initModule("@polymer/paper-toast"                  ) ) import( "@polymer/paper-toast"                   ).catch(errback);
        if( this.initModule("@polymer/paper-toggle-button"          ) ) import( "@polymer/paper-toggle-button"           ).catch(errback);
        if( this.initModule("@polymer/paper-toolbar"                ) ) import( "@polymer/paper-toolbar"                 ).catch(errback);
        if( this.initModule("@polymer/paper-tooltip"                ) ) import( "@polymer/paper-tooltip"                 ).catch(errback);

    }
}

window.customElements.define( LoadPaperElement.is, LoadPaperElement);
