package com.simulationworks.configurable_portlet;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.portlet.ConfigurationAction;
import com.liferay.portal.kernel.portlet.DefaultConfigurationAction;
import com.liferay.portal.kernel.util.ParamUtil;
import com.simulationworks.pv.constants.PolymerVaadinPortletKeys;
import org.osgi.service.component.annotations.*;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletConfig;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Component(
        configurationPid = "com.simulationworks.configurable_portlet.MvcPortletConfiguration",
        configurationPolicy = ConfigurationPolicy.OPTIONAL,
        immediate = true,
        property = {
                "javax.portlet.name=" + PolymerVaadinPortletKeys.POLYMERVAADIN
        },
        service = ConfigurationAction.class
)
    public class
MvcPortletConfigurationAction extends DefaultConfigurationAction
{

    /**
     * getJspPath: Return the path to our configuration jsp file.
     *
     * @param request The servlet request.
     * @return String The path
     */
        @Override public
    String getJspPath( HttpServletRequest request )
    {
        return "/configuration.jsp";
    }

        @Override public void
    processAction( PortletConfig portletConfig, ActionRequest actionRequest, ActionResponse actionResponse )
            throws Exception
    {

        String configStr = ParamUtil.getString( actionRequest, "configStr" );
        setPreference( actionRequest, "configStr", configStr );

        super.processAction( portletConfig, actionRequest, actionResponse );
    }

        @Override public void
    include(  PortletConfig portletConfig, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse )
            throws Exception
    {

        httpServletRequest.setAttribute( MvcPortletConfiguration.class.getName(), _configuration );

        super.include( portletConfig, httpServletRequest, httpServletResponse );
    }

        @Activate @Modified protected void
    activate( Map< Object, Object > properties )
    {
        _configuration = ConfigurableUtil.createConfigurable(
                MvcPortletConfiguration.class, properties );
    }

    private volatile MvcPortletConfiguration _configuration;

    /**
     * setServletContext: Sets the servlet context, use your portlet's bnd.bnd Bundle-SymbolicName value.
     *
     * @param servletContext The servlet context to use.
     */
    @Override
    @Reference(
            target = "(osgi.web.symbolicname=polymer-vaadin-portlet)",
            unbind = "-"
    )
        public void
    setServletContext( ServletContext servletContext )
    {
        super.setServletContext( servletContext );
    }
}