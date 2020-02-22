package com.simulationworks.configurable_portlet;
import com.liferay.portal.kernel.settings.definition.ConfigurationBeanDeclaration;
import org.osgi.service.component.annotations.Component;

@Component public class
MvcPortletConfigurationBeanDeclaration implements ConfigurationBeanDeclaration
{
    @Override public
Class< ? > getConfigurationBeanClass()
{
    return MvcPortletConfiguration.class;
}
}