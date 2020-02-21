import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPaperBehaviors extends LoadCollection
{

    static get is(){ return 'load-paper-behaviors'}

    initDependencies()
    {   const errback = err => console.error( this.msg+=" load error "+err, err );

        if( this.initModule("@polymer/paper-behaviors/paper-button-behavior"            ) ) import( "@polymer/paper-behaviors/paper-button-behavior"          ).catch(errback);
        if( this.initModule("@polymer/paper-behaviors/paper-checked-element-behavior"   ) ) import( "@polymer/paper-behaviors/paper-checked-element-behavior" ).catch(errback);
        if( this.initModule("@polymer/paper-behaviors/paper-inky-focus-behavior"        ) ) import( "@polymer/paper-behaviors/paper-inky-focus-behavior"      ).catch(errback);
        if( this.initModule("@polymer/paper-behaviors/paper-ripple-behavior"            ) ) import( "@polymer/paper-behaviors/paper-ripple-behavior"          ).catch(errback);
    }
}

window.customElements.define( LoadPaperBehaviors.is, LoadPaperBehaviors);
