<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Description</key>
        <string>Uses parent pkg recipe to download latest Sublime Text and import it into the JSS.</string>
        <key>Identifier</key>
        <string>com.github.quovadimus.jss.SublimeText3</string>
        <key>Input</key>
        <dict>
            <key>NAME</key>
            <string>Sublime Text 3</string>
            <key>JSS_INVENTORY_NAME</key>
            <string>Sublime Text.app</string>
            <key>CATEGORY</key>
            <string>Productivity</string>
            <key>POLICY_CATEGORY</key>
            <string>Testing</string>
            <key>POLICY_TEMPLATE</key>
            <string>%RECIPE_DIR%/PolicyTemplate.xml</string>
            <key>ICON</key>
            <string>%RECIPE_DIR%/Sublime.png</string>
            <key>GROUP_NAME</key>
            <string>Needs Update %NAME%</string>
            <key>GROUP_TEMPLATE</key>
            <string>%RECIPE_DIR%/SmartGroupTemplate.xml</string>
            <key>DESCRIPTION</key>
            <string>Text Editor.</string>
        </dict>
        <key>MinimumVersion</key>
        <string>0.4.0</string>
        <key>ParentRecipe</key>
        <string>com.justinrummel.pkg.SublimeText3</string>
        <key>Process</key>
        <array>
            <dict>
                <key>Arguments</key>
                <dict>
                    <key>prod_name</key>
                    <string>%NAME%</string>
                    <key>jss_inventory_name</key>
                    <string>%JSS_INVENTORY_NAME%</string>
                    <key>category</key>
                    <string>%CATEGORY%</string>
                    <key>policy_category</key>
                    <string>%POLICY_CATEGORY%</string>
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