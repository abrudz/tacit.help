## Tests
```apl
read ← {⊃⎕NGET 1,⍨⊂'.dyalog',⍨'tests/aplcart/t',(⍕⍺),⍵}
failed ← ⍸0⍷{22::⍬ ⋄ 'o' ≡∘explicit⍥((⊃,⍥⊆/)⍵∘read) 'i'}¨⍳150
```

## Build
```apl
source ← '2 ⎕FIX''file://'∘{0::⍵ ⋄ n←≢⍺ ⋄ ⊃⎕NGET 1,⍨⊂ ¯1↓⍵/⍨∨\(-n)↓(n⍴0),⍺⍷⍵}¨⊃⎕NGET 1,⍨⊂'explicit.aplf'
'explicit.js' 1 ⎕nput⍨ '.join(''\n'')' ,⍨ 'const explicit =',⎕json ⊃,/⊆¨ source
```