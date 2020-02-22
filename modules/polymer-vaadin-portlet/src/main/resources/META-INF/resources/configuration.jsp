<%@ include file="/init.jsp" %>
<%
	boolean hasModule = true;
	String jsProfile = "esm-unbundled";
%>
<% if("esm-unbundled".equals(jsProfile) ) { %><jsp:include page="/webcomponents/build/esm-unbundled/index.html" /><% }%>


<b><liferay-ui:message key="polymervaadin.caption"/></b>
<webcomponents-element selection="<%=configStr%>"></webcomponents-element>

<%@ page import="com.liferay.portal.kernel.util.Constants" %>

<liferay-portlet:actionURL portletConfiguration="<%= true %>"   var="configurationActionURL" />
<liferay-portlet:renderURL portletConfiguration="<%= true %>"   var="configurationRenderURL" />

<aui:form action="<%= configurationActionURL %>" method="post" name="fm">

    <aui:input name="<%= Constants.CMD %>" type="hidden"
               value="<%= Constants.UPDATE %>" />

    <aui:input name="redirect" type="hidden"
               value="<%= configurationRenderURL %>" />

    <aui:fieldset>

        <aui:input name="configStr" label="String config parameter"
                   value="<%= configStr %>" />


    </aui:fieldset>
    <aui:button-row>
        <aui:button type="submit"></aui:button>
    </aui:button-row>
</aui:form>
<script>
    $(x=>
    {
        $('button[type=submit]').click( x=>
        {
            $('input[type=text]').val( document.querySelector('webcomponents-element').selection );
        });
    });
</script>