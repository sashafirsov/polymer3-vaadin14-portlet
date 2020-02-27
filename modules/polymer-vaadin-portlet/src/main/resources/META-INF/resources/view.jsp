<%@ include file="/init.jsp" %>
<%
	boolean hasModule = true;
	String jsProfile = "esm-unbundled";
%>
<div id="p3v14-<%= portletDisplay.getRootPortletId() %>">
<% if("esm-unbundled".equals(jsProfile) ) { %><jsp:include page="/webcomponents/build/esm-unbundled/index.html" /><% }%>
    <webcomponents-element disabled="disabled"  selection="<%=configStr%>" ></webcomponents-element>
</div>
<script>
(function( portletId )
{
    Liferay.on(    'endNavigate', onEndNavigate         );
    Liferay.on( 'destroyPortlet', clearPortletHandlers  );
    function clearPortletHandlers(event)
    {
        if( event.portletId === portletId )
        {   Liferay.detach('endNavigate', onEndNavigate);
            Liferay.detach('destroyPortlet', clearPortletHandlers);
        }
    };
    function onEndNavigate(event)
    {
        // if( event.portletId !== portletId )
        //     return;
debugger;
        $( 'script[type="module"]' ).each( function(n,el)
        {	el.injected || $('<'+'script type="module"><'+'/script>')
                .prop('injected', el.injected =1 )
                .attr('src', el.src )
                .insertAfter( el );
        });
        console.log( "Get ready to navigate to " + event. path );
        clearPortletHandlers(event); // web components need to be initialized only once
    }
})('<%= portletDisplay.getRootPortletId() %>');
</script>