document.querySelectorAll(".tree li").forEach(function(e){if(e.firstElementChild){var n=document.createElement("span");e.prepend(n),n.append(n.nextSibling),n.addEventListener("click",function(){var e=n.nextSibling;""===e.style.display?e.style.display="none":e.style.display=""})}});
//# sourceMappingURL=index.152c8002.js.map
