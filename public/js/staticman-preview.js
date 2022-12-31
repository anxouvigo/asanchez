$( document ).ready(function() {
  var myKaTeXOptions = {
    // LaTeX like math delimiters
    delimiters: [
    {left: "$$", right: "$$", display: true},
    {left: "\\[", right: "\\]", display: true},
    {left: "$", right: "$", display: false},
    {left: "\\(", right: "\\)", display: false}
    ],
    throwOnError: false
  };

  ...
});

