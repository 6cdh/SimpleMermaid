<?php
class SimpleMermaidHooks
{
    public static function onParserFirstCallInit(Parser $parser)
    {
        global $wgOut, $wgSimpleMermaidTheme;

        $wgOut->addJsConfigVars('wgSimpleMermaidTheme', $wgSimpleMermaidTheme);

        $parser->setHook('mermaid', __CLASS__ . '::renderMermaid');
    }

    public static function renderMermaid($input, array $args, Parser $parser, PPFrame $frame)
    {
        global $wgSimpleMermaidTheme;
        $parser->getOutput()->addModules(['ext.SimpleMermaid']);
        $attributes = ["class" => "mermaid"];
        $element = Html::Element("div", $attributes, $input);
        return [$element, 'markerType' => 'nowiki'];
    }
}
