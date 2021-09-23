mw.hook("wikipage.content").add(function ($content) {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
  script.async = true;
  script.onload = function () {
    mermaid.parseError = function (err, hash) {
      console.error(err);
      var pre = document.createElement("pre");
      pre.textContent = err;
      var targetElement = document
        .getElementsByClassName("error-icon")[0]
        .closest("svg").parentElement;
      targetElement.appendChild(pre);
    };
    mermaid.initialize({
      startOnLoad: true,
      theme: mw.config.get("wgSimpleMermaidTheme"),
    });
    mermaid.init();
  };
  document.head.appendChild(script);
});
