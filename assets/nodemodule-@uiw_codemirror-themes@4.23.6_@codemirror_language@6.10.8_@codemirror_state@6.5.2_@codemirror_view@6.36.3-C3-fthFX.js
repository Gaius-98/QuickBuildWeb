import{E as u}from"./nodemodule-@codemirror_view@6.36.3-NX7sJwro.js";import{H as d,o as m}from"./nodemodule-@codemirror_language@6.10.8-mNL4GyJL.js";var h=i=>{var{theme:c,settings:e={},styles:n=[]}=i,r={".cm-gutters":{}},t={};e.background&&(t.backgroundColor=e.background),e.backgroundImage&&(t.backgroundImage=e.backgroundImage),e.foreground&&(t.color=e.foreground),e.fontSize&&(t.fontSize=e.fontSize),(e.background||e.foreground)&&(r["&"]=t),e.fontFamily&&(r["&.cm-editor .cm-scroller"]={fontFamily:e.fontFamily}),e.gutterBackground&&(r[".cm-gutters"].backgroundColor=e.gutterBackground),e.gutterForeground&&(r[".cm-gutters"].color=e.gutterForeground),e.gutterBorder&&(r[".cm-gutters"].borderRightColor=e.gutterBorder),e.caret&&(r[".cm-content"]={caretColor:e.caret},r[".cm-cursor, .cm-dropCursor"]={borderLeftColor:e.caret});var o={};e.gutterActiveForeground&&(o.color=e.gutterActiveForeground),e.lineHighlight&&(r[".cm-activeLine"]={backgroundColor:e.lineHighlight},o.backgroundColor=e.lineHighlight),r[".cm-activeLineGutter"]=o,e.selection&&(r["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"]={background:e.selection+" !important"}),e.selectionMatch&&(r["& .cm-selectionMatch"]={backgroundColor:e.selectionMatch});var g=u.theme(r,{dark:c==="dark"}),a=d.define(n),l=[g,m(a)];return l};export{h as c};
