mw.hook("wikipage.content").add(function ($content) {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
  script.async = true;
  script.onload = function () {
    mermaid.initialize({
      startOnLoad: true,
      theme: mw.config.get("wgSimpleMermaidTheme"),
    });
    mermaid.init();
  };
  document.head.appendChild(script);
});
