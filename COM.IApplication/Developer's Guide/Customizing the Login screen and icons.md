---
uid: guide_custom_startup
title: Customizing the Login screen and icons
---

To make SuperOffice use custom bitmaps for the login and progress screens, do the following:

-   create an IMAGES folder below the  folder containing SOCRM.  [SoLoader](@refIniSoloader.md) can help you do this automatically.
-   Place images with the appropriate file names in the folder.



SuperOffice will automatically detect the image files and use them next time it starts up.



The image files should have names as described in this table:

| **Filename**           | **Description**                     |
|------------------------|-------------------------------------|
| LoginCRM.bmp           | Login to SOCRM                      |
| LoginCRMProgress.bmp   | Progress bar on SOCRM               |
| LoginAdmin.bmp         | Login to SOADMIN                    |
| LoginAdminProgress.bmp | Progress bar on SOADMIN             |
| HintCRM.bmp            | Bitmap shown in startup hint dialog |
| AboutCRM.bmp           | About SOCRM dialog background       |
| AboutAdmin.bmp         | About SOADMIN dialog background     |
| NavigatorIcon.bmp      | Owl Button above navigator.         |
| AppIconCRM.ico         | Taskbar icon for SOCRM              |
| AppIconAdmin.ico       | Taskbar icon for SOADMIN            |



In addition there are a couple of [SUPEROFFICE.INI](@refIniSuperOffice) settings you can use to modify the text color used on the login/progress screens to better match the custom backgrounds:



\[SuperOffice\]
LoginCRMTextColor= 0,0,0             ; = black
LoginCRMProgressTextColor= 255,0,0   ; = red
LoginAdminTextColor= 0,255,0         ; = green
LoginAdminProgressTextColor= 200,200,200 ; = light grey

The colors are specified as RGB values: 0 is black, 255 is maximum intensity.



Note that the color values are always read from the INI file in the SOCRM.EXE folder - it ignores the INIPATH parameter you may have specified on the commandline.



Dimensions
----------

|                     |                    |
|---------------------|--------------------|
| **Type of bitmap**  | **Width x Height** |
| About dialog bitmap | 427 x 286 pixels   |
| Hint bitmap         | 64 x 128 pixels    |
| Login bitmap        | 427 x 286 pixels   |
| Progress bitmap     | 427 x 286 pixels   |
| Navigator button    | 41 x 41 pixels     |