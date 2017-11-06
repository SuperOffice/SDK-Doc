---
uid: ExtApptable
title: ExtApp table
---

Value for the availableInState field in table ExtApp
====================================================

The enums here may be combined.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>availableInState</strong></td>
<td><strong>Id</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td>Always</td>
<td>0</td>
<td>This application is always available</td>
</tr>
<tr class="odd">
<td>Central db</td>
<td> 1</td>
<td>This application is only available on the Central database</td>
</tr>
<tr class="even">
<td>Satellite db</td>
<td>2</td>
<td>This application is only available on a Satellite database</td>
</tr>
<tr class="odd">
<td>Travel db</td>
<td>4</td>
<td>This application is only available on a Travel database</td>
</tr>
<tr class="even">
<td>Sales &amp; Marketing web</td>
<td>8</td>
<td><p>This application is available on Sales &amp; Marketing Web</p></td>
</tr>
</tbody>
</table>

Value for the executeOnEvent field in table ExtApp
==================================================

|                    |        |                                                                   |
|--------------------|--------|-------------------------------------------------------------------|
| **executeOnEvent** | **Id** | **Comment**                                                       |
| Never              | 0      | This application is never executed automatically                  |
| Log on             |  1     | Execute this application during logon                             |
| Log off            | 2      | Execute this application before logoff                            |
| LocalUpdate        | 3      | Execute this application before a local update (start travelling) |
| Wait               | 16384  | When executing this application, wait for it to start             |

|               |        |                                                                       |
|---------------|--------|-----------------------------------------------------------------------|
| **ShowState** | **Id** | **Comment**                                                           |
| Minimized     | 0      | Start application in minimized state                                  |
| Maximized     | 1      | Start application in maximized state                                  |
| Default       | 2      | Start application with default window size and position               |
| Toolbar       | 256    | Show the Browser toolbar                                              |
| AddressBar    | 512    | Show the Browser addressbar (where the user can type URL's and stuff) |
| StatusBar     | 1024   | Show the Browser statusbar                                            |
| MenuBar       | 2048   | Show the Browser Menu bar (currently not implemeted)                  |

Value for the navigation field in table ExtApp
==============================================

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>navigation</strong></td>
<td><strong>Id</strong></td>
<td><strong>Comment</strong></td>
</tr>
<tr class="even">
<td>Invisible</td>
<td>0</td>
<td>This application is always available</td>
</tr>
<tr class="odd">
<td>ToolboxMenu</td>
<td> 1</td>
<td>This application is only available on the Central database</td>
</tr>
<tr class="even">
<td>NavigatorButton</td>
<td>2</td>
<td>This application is only available on a Satellite database</td>
</tr>
<tr class="odd">
<td>ViewMenu</td>
<td>3</td>
<td>This application is only available on a Travel database</td>
</tr>
<tr class="even">
<td>SelectionTaskCard</td>
<td>4</td>
<td>(not yet implemented) This application appears as a Task in the Selection Task</td>
</tr>
<tr class="odd">
<td>ContactCard</td>
<td>5</td>
<td>This application (type IntegratedHTML or IntegratedURL) appears as a tab on</td>
</tr>
<tr class="even">
<td>ContactArchive</td>
<td>6</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab on</td>
</tr>
<tr class="odd">
<td>ProjectCard</td>
<td>7</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab on</td>
</tr>
<tr class="even">
<td>ProjectArchive</td>
<td>8</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab on the Project Archive</td>
</tr>
<tr class="odd">
<td>SaleCard</td>
<td>9</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab in</td>
</tr>
<tr class="even">
<td>PersonDialog</td>
<td>10</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab in</td>
</tr>
<tr class="odd">
<td>ActivityDialog</td>
<td>11</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab in</td>
</tr>
<tr class="even">
<td>DocumentDialog</td>
<td>12</td>
<td>This application (type IntegratedHTML or IntegratedURL)  appears as a tab in</td>
</tr>
<tr class="odd">
<td>BrowserPanel</td>
<td>13</td>
<td>In the Browser panel</td>
</tr>
<tr class="even">
<td>ContSelectionTask</td>
<td>14</td>
<td>Task button visible on the Contact Selection task panel</td>
</tr>
<tr class="odd">
<td>AppntSelectionTask</td>
<td>15</td>
<td>Task button visible on the Appointment Selection task panel</td>
</tr>
<tr class="even">
<td>SaleSelectionTask</td>
<td>16</td>
<td>Task button visible on the Sale Selection task panel</td>
</tr>
<tr class="odd">
<td>DocSelectionTask</td>
<td>17</td>
<td>Task button visible on the Document Selection task panel</td>
</tr>
<tr class="even">
<td>ProjSelectionTask</td>
<td>18</td>
<td>Task button visible on the Project Selection task panel</td>
</tr>
<tr class="odd">
<td>CompanyMinicard</td>
<td>19</td>
<td>In company minicard</td>
</tr>
<tr class="even">
<td>ProjectMinicard</td>
<td>20</td>
<td>In project minicard</td>
</tr>
<tr class="odd">
<td>DiaryMinicard</td>
<td>21</td>
<td>In diary minicard</td>
</tr>
<tr class="even">
<td>SelectionMinicard</td>
<td>22</td>
<td>In selection minicard</td>
</tr>
<tr class="odd">
<td>ButtonPanelTask</td>
<td>23</td>
<td>In the main ButtonBar</td>
</tr>
<tr class="even">
<td>AppointmentDialogTask</td>
<td>24</td>
<td>In the appointment dialog</td>
</tr>
<tr class="odd">
<td>SaleDialogTask</td>
<td>25</td>
<td>In the sale dialog</td>
</tr>
<tr class="even">
<td>DocumentDialogTask</td>
<td>26</td>
<td>In the document dialog</td>
</tr>
<tr class="odd">
<td>PersonDialogTask</td>
<td>27</td>
<td>In the person dialog</td>
</tr>
<tr class="even">
<td>SaleMinicard</td>
<td>28</td>
<td>In the sale minicard</td>
</tr>
<tr class="odd">
<td>SaleArchive</td>
<td>29</td>
<td>In the sale archive</td>
</tr>
<tr class="even">
<td><p>AppntSelectionShadowTask</p></td>
<td>30</td>
<td>Task tab for appointment selection, while showing shadow selection</td>
</tr>
<tr class="odd">
<td><p>SaleSelectionShadowTask</p></td>
<td>31</td>
<td><p>Task tab for sale selection, while showing shadow selection</p></td>
</tr>
<tr class="even">
<td><p>DocSelectionShadowTask</p></td>
<td>32</td>
<td>Task tab for document selection, while showing shadow selection</td>
</tr>
<tr class="odd">
<td>ProjSelectionShadowTask</td>
<td>33</td>
<td><p>Task tab for project selection, while showing shadow selection</p></td>
</tr>
<tr class="even">
<td><p>DiaryArchive</p></td>
<td>34</td>
<td><p>Context (popup) menu in Diary archive</p></td>
</tr>
<tr class="odd">
<td><p>SelectionContactArchive</p></td>
<td>35</td>
<td><p>Context (popup) menu in Contact selection</p></td>
</tr>
<tr class="even">
<td><p>SelectionProjectArchive</p></td>
<td>36</td>
<td><p>Context (popup) menu in Project archive</p></td>
</tr>
<tr class="odd">
<td><p>SelectionSaleArchive</p></td>
<td>37</td>
<td><p>Context (popup) menu in Sale archive</p></td>
</tr>
<tr class="even">
<td><p>SelectionAppointmentArchive</p></td>
<td>38</td>
<td><p>Context (popup) menu in Appointment archive</p></td>
</tr>
<tr class="odd">
<td><p>SelectionDocumentArchive</p></td>
<td>39</td>
<td><p>Context (popup) menu in Document archive</p></td>
</tr>
<tr class="even">
<td><p>ContSelectionCustomTask</p></td>
<td>40</td>
<td><p>Task card in Contact selection, when a custom archive is shown</p></td>
</tr>
<tr class="odd">
<td><p>AppntSelectionCustomTask</p></td>
<td>41</td>
<td><p>Task card in Appointment selection, when a custom archive is shown</p></td>
</tr>
<tr class="even">
<td><p>SaleSelectionCustomTask</p></td>
<td>42</td>
<td><p>Task card in Sale selection, when a custom archive is shown</p></td>
</tr>
<tr class="odd">
<td><p>DocSelectionCustomTask</p></td>
<td>43</td>
<td><p>Task card in Document selection, when a custom archive is shown</p></td>
</tr>
<tr class="even">
<td><p>ProjSelectionCustomTask</p></td>
<td>44</td>
<td><p>Task card in Project selection, when a custom archive is shown</p></td>
</tr>
<tr class="odd">
<td><p>CustomArchiveMiniCard</p></td>
<td>45</td>
<td></td>
</tr>
<tr class="even">
<td><p>SelectionCard</p></td>
<td>46</td>
<td></td>
</tr>
<tr class="odd">
<td><p>ReportMinicard</p></td>
<td>47</td>
<td><p>In the Reporter panel minicard, so far only in Web</p></td>
</tr>
<tr class="even">
<td><p>QuoteDialog</p></td>
<td>48</td>
<td></td>
</tr>
<tr class="odd">
<td><p>QuoteDialogTask</p></td>
<td>49</td>
<td></td>
</tr>
<tr class="even">
<td><p>QuoteDialogArchive</p></td>
<td>50</td>
<td></td>
</tr>
<tr class="odd">
<td><p>QuoteLineDialogTask</p></td>
<td>51</td>
<td></td>
</tr>
<tr class="even">
<td><p>QuoteLineDialog</p></td>
<td>52</td>
<td></td>
</tr>
<tr class="odd">
<td><p>QuoteLineSelectionMainTask</p></td>
<td>53</td>
<td></td>
</tr>
<tr class="even">
<td><p>QuoteLineSelectionShadowTask</p></td>
<td>54</td>
<td></td>
</tr>
<tr class="odd">
<td><p>SelectionQuoteLineArchive</p></td>
<td>55</td>
<td></td>
</tr>
<tr class="even">
<td><p>QuoteLineSelectionCustomTask</p></td>
<td>56</td>
<td></td>
</tr>
<tr class="odd">
<td><p>FindSystem</p></td>
<td>57</td>
<td></td>
</tr>
</tbody>
</table>