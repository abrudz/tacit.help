## Tests
```apl
read ← ⊃∘⎕NGET 1,⍨⊂
failed ← ⍸0⍷{0::⍬ ⋄ 'o' ≡∘explicit∘⊃⍥(read '.dyalog',⍨'tests/aplcart/t',(⍕⍵),⊢) 'i'}¨⍳160
```

## Build
```apl
source ← '2 ⎕FIX''file://'∘{0::⍵ ⋄ n ← ≢⍺ ⋄ read ⍵/⍨0@(≢⍵)∨\(-n)↓(n⍴0),⍺⍷⍵}¨ read 'explicit.aplf'
'explicit.js' 1 ⎕nput⍨ 'const explicit =',(⎕json ⊃,/⊆¨ source),'.join(''\n'')'
```