:NameSpace t3
i←'''&[^;]+;''⎕R{3⊃,⎕XML⍠''Whitespace'' ''Preserve''⊢''<_>'',⍵.Match,''</_>''}'
o←'{(''&[^;]+;''⎕R{3⊃,⎕XML⍠''Whitespace'' ''Preserve''⊢''<_>'',⍵.Match,''</_>''})⍵}' '{⍺(''&[^;]+;''⎕R{3⊃,⎕XML⍠''Whitespace'' ''Preserve''⊢''<_>'',⍵.Match,''</_>''})⍵}'
:EndNameSpace
