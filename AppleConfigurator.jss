<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Description</key>
        <string>Checks for Apple Configurator, packages, and adds to the JSS</string>
        <key>Identifier</key>
        <string>com.github.quovadimus.jss.AppleConfigurator</string>
        <key>Input</key>
        <dict>
            <key>NAME</key>
            <string>Apple Configurator</string>
            <key>CATEGORY</key>
            <string>Developer Tools</string>
            <key>POLICY_CATEGORY</key>
            <string>Testing</string>
            <key>OS_REQUIREMENTS</key>
            <string>10.10.x</string>
            <key>POLICY_TEMPLATE</key>
            <string>%RECIPE_DIR%/PolicyTemplate.xml</string>
            <key>ICON</key>
            <string>%RECIPE_DIR%/configurator.png</string>
            <key>GROUP_NAME</key>
            <string>Needs Update %NAME%</string>
            <key>GROUP_TEMPLATE</key>
            <string>%RECIPE_DIR%/SmartGroupTemplate.xml</string>
            <key>DESCRIPTION</key>
            <string/>
        </dict>
        <key>MinimumVersion</key>
        <string>0.4.0</string>
        <key>ParentRecipe</key>
        <string>com.github.nmcspadden.pkg.appstore</string>
        <key>Process</key>
        <array>
            <dict>
                <key>Arguments</key>
                <dict>
                    <key>prod_name</key>
                    <string>%NAME%</string>
                    <key>category</key>
                    <string>%CATEGORY%</string>
                    <key>policy_category</key>
                    <string>%POLICY_CATEGORY%</string>
                    <key>os_requirements</key>
                    <string>%OS_REQUIREMENTS%</string>
                    <key>policy_template</key>
                    <string>%POLICY_TEMPLATE%</string>
                    <key>self_service_icon</key>
                    <string>%ICON%</string>
                    <key>self_service_description</key>
                    <string>%DESCRIPTION%</string>
                    <key>groups</key>
                    <array>
                        <dict>
                            <key>name</key>
                            <string>%GROUP_NAME%</string>
                            <key>smart</key>
                            <true/>
                            <key>template_path</key>
                            <string>%GROUP_TEMPLATE%</string>
                        </dict>
                    </array>
                </dict>
                <key>Processor</key>
                <string>JSSImporter</string>
            </dict>
        </array>
    </dict>
</plist>
