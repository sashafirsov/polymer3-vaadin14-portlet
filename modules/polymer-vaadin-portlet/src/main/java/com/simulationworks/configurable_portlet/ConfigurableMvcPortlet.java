package com.simulationworks.configurable_portlet;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;
import com.liferay.portal.kernel.theme.PortletDisplay;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;
import com.simulationworks.pv.constants.PolymerVaadinPortletKeys;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;

import javax.portlet.Portlet;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.io.IOException;
import java.util.Map;

/**
 * @author suns
 */
@Component(
        immediate = true,
        property = {
                "com.liferay.portlet.display-category=category.sample",
                "com.liferay.portlet.header-portlet-css=/css/main.css",
                "com.liferay.portlet.instanceable=true",
                "javax.portlet.display-name=Mvc",
                "javax.portlet.init-param.template-path=/",
                "javax.portlet.init-param.view-template=/view.jsp",
                "javax.portlet.name=" + PolymerVaadinPortletKeys.POLYMERVAADIN,
                "javax.portlet.resource-bundle=content.Language",
                "javax.portlet.security-role-ref=power-user,user"
        },
        service = Portlet.class
)
    public class
ConfigurableMvcPortlet extends MVCPortlet
{

        @Override public void
    doView( RenderRequest renderRequest, RenderResponse renderResponse ) throws IOException, PortletException
    {

        ThemeDisplay     themeDisplay = ( ThemeDisplay ) renderRequest.getAttribute( WebKeys.THEME_DISPLAY );
        PortletDisplay portletDisplay = themeDisplay.getPortletDisplay();

        try{   _configuration = portletDisplay.getPortletInstanceConfiguration( MvcPortletConfiguration.class ); }
        catch( Exception e ){}
        finally{ renderRequest.setAttribute( MvcPortletConfiguration.class.getName(), _configuration ); }

        super.doView( renderRequest, renderResponse );
    }


        @Activate    @Modified    protected  void
    activate( Map< String, Object > properties )
    {
        _configuration = ConfigurableUtil.createConfigurable( MvcPortletConfiguration.class, properties );
    }

    private volatile MvcPortletConfiguration _configuration;
}