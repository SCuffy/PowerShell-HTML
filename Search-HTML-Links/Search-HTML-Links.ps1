$SiteAdress = "https://techcommunity.microsoft.com/t5/azure-data-explorer/the-new-scan-operator-process-mining-in-azure-data-explorer/ba-p/2378795"
$HttpContent = Invoke-WebRequest -URI $SiteAdress -Body System.Object 

$locales = @('ar-sa','bg-bg','bs-latn-ba','ca-es','cs-cz','da-dk','de-at','de-ch','de-de','el-gr','en-au','en-ca','en-gb','en-ie','en-in','en-my','en-nz','en-sg','en-us','en-za','en-es','es-es','es-mx','et-ee','fi-fi','fr-be','fr-ca','fr-ch','fr-fr','he-il','hi-in','hr-hr','hu-hu','id-id','is-is','it-ch','it-it','ja-jp','ko-kr','lt-lt','lv-lv','nb-no','nl-be','nl-nl','pl-pl','pt-br','pt-pt','ro-ro','ru-ru','sk-sk','sl-si','sr-cyrl-rs','sv-se','th-th','tr-tr','vi-vn','zh-cn','zh-hk','zh-tw')
$pattern = $locales.ForEach({[regex]::Escape($_)})-join'|'

$HttpContent.Links | Where-Object {($_.href -match $pattern) -and ($_."data-bi-source" -notmatch "Compass") -and ($_."data-bi-name" -notmatch "Footer_SiteMap")} | Select-Object outerHTML
