# polymer3-vaadin14-portlet
portlet to serve web components from Polymer Elements and Vaadin deployed as osgi module to be used in independently deployed UI without the need for embedding web components.

# Goal
* provide reusable across portal unbundled build of web components set
* Configurable loading of es6 modules for LR page. 
* convenience tools for module/web component info & preview.

# Loader ui 
* dependencies list
* for each dependency
  * "enabled" portlet config flag. Config def list comes from 
  * enabled mark
  * dependencies WC UI.

Post install script 

* generate set of WC into /build from [package.json].dependencies 

 WC 
* name and tag is `loader-${ dep.package}-${dep.name}

* ready() with dynamic imports from own [package.json].dependencies 
* ui lists 
  * dependencies, 
  * revisions, 
  * html snippet with tag name to copy, 
  * html live tag.
  * help/docs link