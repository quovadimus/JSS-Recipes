<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Description</key>
	<string>Downloads the latest version of Adobe Reader and makes a pkg of it then uploads it to the JSS.</string>
	<key>Identifier</key>
	<string>com.github.quovadimus.jss.AdobeReaderUpdates</string>
	<key>Input</key>
	<dict>
		<key>CATEGORY</key>
		<string>Digital Media</string>
		<key>GROUP_NAME</key>
		<string>Needs Update%NAME%</string>
		<key>GROUP_TEMPLATE</key>
		<string>SmartGroupTemplate.xml</string>
		<key>NAME</key>
		<string>Adobe Reader</string>
		<key>OS_REQUIREMENTS</key>
		<string>10.11.x,10.10.x,10.9.x,10.8.x</string>
		<key>POLICY_CATEGORY</key>
		<string>Testing</string>
		<key>POLICY_TEMPLATE</key>
		<string>PolicyTemplate.xml</string>
		<key>SELF_SERVICE_DESCRIPTION</key>
		<string>Views, prints, and comments on PDF documents.</string>
		<key>SELF_SERVICE_ICON</key>
		<string>Adobe Reader.png</string>
	</dict>
	<key>MinimumVersion</key>
	<string>0.4.0</string>
	<key>ParentRecipe</key>
	<string>com.github.quovadimus.pkg.AdobeReaderUpdates</string>
	<key>Process</key>
	<array>
		<dict>
			<key>Arguments</key>
			<dict>
				<key>category</key>
				<string>%CATEGORY%</string>
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
				<key>os_requirements</key>
				<string>%OS_REQUIREMENTS%</string>
				<key>policy_category</key>
				<string>%POLICY_CATEGORY%</string>
				<key>policy_template</key>
				<string>%POLICY_TEMPLATE%</string>
				<key>prod_name</key>
				<string>%NAME%</string>
				<key>self_service_description</key>
				<string>%SELF_SERVICE_DESCRIPTION%</string>
				<key>self_service_icon</key>
				<string>%SELF_SERVICE_ICON%</string>
			</dict>
			<key>Processor</key>
			<string>JSSImporter</string>
		</dict>
	</array>
</dict>
</plist>
