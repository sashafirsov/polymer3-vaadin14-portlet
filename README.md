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
replace urls in build/<%=jsProfile%>/index.html
# Debug
Liferay side debug mode could be triggered by

    ?js_fast_load=0&css_fast_load=0&strip=0

`js_fast_load=0` also would trigger `esm-debug` bundle.  


# Implementation notes
## Loader ui - webcomponents-element
Shows WC collections to check the dependencies in collection to be loaded 
* for each collection
  * "enabled" attribute on collection level. 
  * list of collection elements
  * "enabled" flag for each element within collection.
Attributes
* `selection`- dependencies csv to be loaded, added when dependency module is checked. 
    A subject to serialise in portal as portlet property.
* `disabled` - makes UI read-only
* `loadonly` - no UI, just load dependencies from config 

## Collection WC 
( load- prefix for tag & module )

* loads dependencies lazily via `import()`
* ui shows: 
  * dependencies, 
  * revisions ( from `package-lock.json` ) 
  * html live tag for dependency.
  * help/docs link
  * `active` checkbox
Actual dependencies are added manually into `package.json` and hardcoded in load-XXX collection component.

"active" dependencies are added to `dependencies` csv attribute, which if passed via html would trigger modules load.
