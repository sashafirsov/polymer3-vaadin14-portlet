<%@ page import="com.liferay.portal.kernel.servlet.BrowserSnifferUtil" %>
<%@ include file="/init.jsp" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fn" uri = "http://java.sun.com/jsp/jstl/functions" %>

<%
    String   browser = BrowserSnifferUtil.getBrowserId(request);
    float    version = BrowserSnifferUtil.getMajorVersion(request);
    boolean isWebkit = BrowserSnifferUtil.isWebKit(request);
    boolean isSafari = BrowserSnifferUtil.isSafari(request);
    boolean hasModule 	=  (  version >= 16   && BrowserSnifferUtil.isEdge		(request) )
                        || (  version >= 60   && BrowserSnifferUtil.isFirefox	(request) )
                        || (  version >= 61   && BrowserSnifferUtil.isChrome	(request) )
                        || (  version >= 11   && BrowserSnifferUtil.isSafari	(request) )
                        || (  version >= 48   && BrowserSnifferUtil.isOpera		(request) )
                        ;
    boolean hasWebComponent
                =  (  version >= 75   && BrowserSnifferUtil.isEdge		(request) )
                || (  version >= 63   && BrowserSnifferUtil.isFirefox	(request) )
                || (  version >= 67   && BrowserSnifferUtil.isChrome	(request) )
                || (  version >= 12.1 && BrowserSnifferUtil.isSafari	(request) )
                || (  version >= 58   && BrowserSnifferUtil.isOpera     (request) )
                ;
    String jsProfile = (hasModule && hasWebComponent) ? "esm-unbundled" : hasWebComponent? "esm-unbundled": "es5-bundled";
    boolean themeJsFastLoad = themeDisplay.isThemeJsFastLoad();
    if( !themeJsFastLoad && hasModule && hasWebComponent )
        jsProfile = "esm-debug";
%>
<div id="p3v14_<%= portletDisplay.getRootPortletId() %>" data-js-profile="<%=jsProfile%>" >

<% if( "esm-unbundled".equals(jsProfile) ) { %> esm-unbundled: <jsp:include page="/webcomponents/build/esm-unbundled/index.html" /><% }%>
<% if( "esm-debug"    .equals(jsProfile) ) { %> esm-unbundled: <jsp:include page="/webcomponents/build/esm-debug/index.html" /><% }%>
<% if( "es5-bundled"  .equals(jsProfile) ) { %> esm-unbundled: <jsp:include page="/webcomponents/build/es5-bundled/index.html" /><% }%>
    <webcomponents-element disabled="disabled"  selection="<%=configStr%>" ></webcomponents-element>
</div>
<script>
$( 'script[type="module"]',p3v14_<%= portletDisplay.getRootPortletId() %> ).each( function reinjectScript(n,el)
{
    if( !el.injected )
        $('<'+'script type="module"><'+'/script>')
                .prop('injected', el.injected =1 )
                .attr('src', el.src )
                .insertAfter( el );
});
</script>