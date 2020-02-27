<%@ include file="/init.jsp" %>
<%
	boolean hasModule = true;
	String jsProfile = "esm-unbundled";
%>
<% if("esm-unbundled".equals(jsProfile) ) { %><jsp:include page="/webcomponents/build/esm-unbundled/index.html" /><% }%>


<webcomponents-element selection="<%=configStr%>"  visible="1"></webcomponents-element>

<%@ page import="com.liferay.portal.kernel.util.Constants" %>

<liferay-portlet:actionURL portletConfiguration="<%= true %>"   var="configurationActionURL" />
<liferay-portlet:renderURL portletConfiguration="<%= true %>"   var="configurationRenderURL" />
<div id="p3v14<%= portletDisplay.getRootPortletId() %>">
<aui:form action="<%= configurationActionURL %>" method="post" name="fm" >

    <aui:input name="<%= Constants.CMD %>" type="hidden"
               value="<%= Constants.UPDATE %>" />

    <aui:input name="redirect" type="hidden"
               value="<%= configurationRenderURL %>" />

    <aui:fieldset>

        <aui:input name="configStr" label="configStr, CSV of modules to load by webcomponents-element"
                   description="filled from webcomponents-element UI above"
                   value="<%= configStr %>" />

    </aui:fieldset>
    <aui:button-row>
        <aui:button type="submit"></aui:button>
    </aui:button-row>
</aui:form>
</div>
<script>
    $( function()
    {   var cfg = document.querySelector('webcomponents-element');
debugger;
        cfg.addEventListener("selection-changed",function( ev )
        {
debugger;
            $('input[type=text]',p3v14<%= portletDisplay.getRootPortletId() %>).val( cfg.selection );
        });
        // $('button[type=submit]').click( x=>
        // {
        //     $('input[type=text]').val( document.querySelector('webcomponents-element').selection );
        // });
    });
</script>