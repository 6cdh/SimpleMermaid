# SimpleMermaid

The SimpleMermaid extension enables [mermaid](https://github.com/mermaid-js/mermaid)
between `<mermaid>` and `</mermaid>`.

## Features

-   Client-side rendering
-   Simple (less than 100 LOC)
-   Usable at preview page
-   Full mermaid support

## Install

1.  Clone into your extension directory

``` shell
git clone https://github.com/6cdh/SimpleMermaid.git SimpleMermaid
```

2.  Enable extension in `LocalSettings.php`

``` php
wfLoadExtension( 'SimpleMermaid' );
```

## Example

``` html
<mermaid>
flowchart LR
    Start --> Stop
</mermaid>
```

The example above will be expanded as

```html
<div class="mermaid">
flowchart LR
    Start --> Stop
</div>
```

Then processed by mermaid.

## Settings

``` php
# $setting_name = default_value # Available values

# mermaid theme
$wgSimpleMermaidTheme = 'default' # 'default' | 'base' | 'forest' | 'neutral'
```
