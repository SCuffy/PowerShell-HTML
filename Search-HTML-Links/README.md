# How to use Search-HTMl-Links

This PowerShell script can run against any publicly accessible website, to query URLs inside href links and check for specific words.

The file structure includes:

* $SiteAddress - The website you want to check. I've left a Microsoft Tech Community blog page in as an example
* $locales - The list of values you want to check for. I've used this for a list of common language locales found as part of a URLs for docs.microsoft.com
* $\_."data-bi-source" and $\_."data-bi-name" - These are two components of the website page that I DONT want to check the links that appear here. This is common for things like navigation elements. These two elements are found on a techcommunity.microsoft.com blog page, but can be removed or altered to suit whatever webpage you are checking.

Displaying the results as a list of outerHTML shows me both the URL in the href, the target, and the linked display text. This makes it easy for me to locate it on the page to edit it, and I can confirm at a glance if the link is set to open in a new tab.   page

