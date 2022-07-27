:NameSpace t7
i←'''\\(u...)?.''⎕R{0⎕JSON''"'',⍵.Match,''"''}'
o←'{(''\\(u...)?.''⎕R{0 ⎕JSON''"'',⍵.Match,''"''})⍵}' '{⍺(''\\(u...)?.''⎕R{0 ⎕JSON''"'',⍵.Match,''"''})⍵}'
:EndNameSpace
