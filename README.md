## Tests
```
read ← {⊃,⍥⊆/⊃⎕NGET 1,⍨⊂ 'tests/aplcart/t',⍵}
failed ← ⍸0={0::0 ⋄ ((⍕⍵),'o.dyalog') ≡∘explicit⍥read (⍕⍵),'i.dyalog'}¨⍳150

({0::⍵'N/A' ⋄ ⍵(read (⍕⍵),'i.dyalog')}⍤0)failed

≢failed
```

## Build o.aplf

```
⎕json ⊃,/⊆¨'2 ⎕FIX''file://'∘{0::⍵ ⋄ n←≢⍺ ⋄ ⊃⎕NGET 1,⍨⊂ ¯1↓⍵/⍨∨\(-n)↓(n⍴0),⍺⍷⍵}¨⊃⎕NGET 1,⍨⊂'explicit.aplf'
```