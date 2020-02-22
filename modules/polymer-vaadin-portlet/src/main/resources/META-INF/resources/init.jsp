<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %><%@
taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %><%@
taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>
<%@ page import="com.liferay.portal.kernel.util.Validator, com.liferay.portal.kernel.util.StringPool, com.simulationworks.configurable_portlet.MvcPortletConfiguration" %>

<liferay-theme:defineObjects />

<portlet:defineObjects />


<%
    MvcPortletConfiguration configuration =
            (MvcPortletConfiguration)
                    renderRequest.getAttribute( MvcPortletConfiguration.class.getName() );
    String configStr = StringPool.BLANK;
    if ( Validator.isNotNull( configuration )) {
        configStr =
                portletPreferences.getValue(
                        "configStr", configuration.configStr());
    }
%>