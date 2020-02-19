[GIT](https://github.com/sashafirsov/polymer3-vaadin14-portlet)
# polymer3-vaadin14-portlet
A portlet to serve Polymer and Vaadin web components from deployed osgi module. 
It would be reused by independently deployed portlets UI without the need for embedding web components within each portlet.

# Goal
* provide reusable across portal unbundled build of web components sets
* Configurable loading of es6 modules for LR page. 
* convenience tools for module/web component info & preview.

# Use instructions
TODO

# implementation notes
## Loader ui 
* WC collections list
* for each collection
  * "enabled" attribute on collection level. 
  * list of collection elements
  * "enabled" flag for each element.

Collection WC 
* load- prefix for tag & module
* loads dependencies lazily via `import()`
* ui shows: 
  * dependencies, 
  * revisions ( from `package-lock.json` ) 
  * html live tag for dependency.
  * help/docs link
  * `enabled` checkbox
Actual dependencies are added manually into `package.json` and hardcoded in load-XXX collection component.

Enabled dependencies are added to `dependencies` csv attribute, which if passed via html would trigger modules load.
