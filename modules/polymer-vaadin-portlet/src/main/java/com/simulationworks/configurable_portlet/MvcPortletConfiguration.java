package com.simulationworks.configurable_portlet;

import aQute.bnd.annotation.metatype.Meta;
import com.liferay.portal.configuration.metatype.annotations.ExtendedObjectClassDefinition;

@ExtendedObjectClassDefinition(
        category = "Other",
        scope = ExtendedObjectClassDefinition.Scope.PORTLET_INSTANCE
)
@Meta.OCD(
        id = "com.simulationworks.configurable_portlet.MvcPortletConfiguration",
        name = "MvcPortletConfiguration"
)
    public interface
MvcPortletConfiguration
{

    @Meta.AD(
            deflt = "any",
            required = false
    )
    public
    String configStr();

}