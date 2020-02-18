<%@ include file="/init.jsp" %>
<%
	boolean hasModule = true;
	String jsProfile = "esm-unbundled";
%>
<% if("esm-unbundled".equals(jsProfile) ) { %><jsp:include page="/webcomponents/build/esm-unbundled/index.html" /><% }%>

<p>
	<b><liferay-ui:message key="polymervaadin.caption"/></b>
	<webcomponents-element></webcomponents-element>
</p>