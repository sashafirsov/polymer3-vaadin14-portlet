<%@ include file="/init.jsp" %>
<%
	boolean hasModule = true;
	String jsProfile = "esm-unbundled";
%>
<% if("esm-unbundled".equals(jsProfile) ) { %><jsp:include page="/webcomponents/build/esm-unbundled/index.html" /><% }%>
<div style="display: none">
    <webcomponents-element disabled="disabled"  selection="<%=configStr%>" ></webcomponents-element>
</div>
