const explicit = `∇ Df ← explicit train
:With ⎕ns''
 ns ← ⎕ns''
 _R_ ← {('''[^'']+''' ,⍥⊆ ⍺⍺)⎕R(,¨'&',⊆⍵⍵)⊢⍵}

 {ns⍎⍵ ,'←{⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,''',(⍵),''',⍵}'}¨⎕C ⎕A
 ns.(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)←(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)←906401581768974 965716949993291 67988852284969 98297622389679 420080984422572 438841153165603 263430821026629 690829283312793 318417192647479 930034785351725 464464550011771 880199480693265 129642677927034 45849984323459 990924798541774 947049885552331 763259430847382 547116999329207 422237344533662 708685652211964 237187712939992 782976986292862 74374989772666 692244492137717 834182236843806 680542243721638

 2 ⎕FIX'file://ns/Signal.aplf'
 ns.⍙9051 ← { ⍵≡⍬: (⍺⍺,⍬),'⍛',(⍵⍵,⍬) ⋄ ⍺←⍵ ⋄ (⍺⍺ ⍺) ⍵⍵ ⍵ }

 train ← ('⍛'_R_' ⍙9051 ')train

 illegal ← '⎕load' '⎕cy' '⎕this' '⎕dmx' '⎕exception' '⎕' '⍞'

 _ ← '[A-Za-z](?=(\s*)←)' ⎕S {⎕EX 'ns.',⍵.Match}'''[^'']*''|⍝.*'⎕R''⊢train

 :Trap 0
  :If 0≠idx ← illegal {⊃⍸<\⍺ {(⊂,⍺)∊(('''[^'']+''|',⍺,'(?![a-z])') ⎕S '&')⊢⍵}¨⊂⎕c ⍵} train ⋄ 'impossible' SIGNAL⍨ ⊃illegal[idx] ⋄ :Endif
     aa ← ns⍎train
  :If 0=⍴⎕nr 'aa'
   Df ← 2⍴⊂'SYNTAX ERROR'
   →0
  :EndIf
 :Else
  Df ← 2⍴⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN)
  →0
 :EndTrap

 {⍎('∆',∘⍕⍵),'←{⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,''',(⎕ucs ⍵),''',⍵}'}¨2031⌶6
 {⍎('∆',1↓⍵),'←{⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,''',(     ⍵),''',⍵}'}¨2031⌶7
 {⍎('∆',1↓⍵),'←{v ← 0≠40 ⎕atx ''⍺'' ⋄ ⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o v),''',⍵,''',(⍵⍵_o v)),⍵}'}¨ '⎕OPT' '⎕R' '⎕S'

 ⎕pp ← 34

 ⎕FIX 'file://',(2 ⎕NQ # 'GetEnvironment' 'DYALOG'),'/SALT/core/Utils.dyalog'
 repObj ← Utils.repObj

 dfn     ← '}',⍨'{',⊢(/⍨)∨∘⌽⍨⍤⍷⍨⍲∊∘'()' ⍝ Confused? https://tacit.help
 pad     ← '(',,∘')'
 flatten ← ⊃,/

 _apply ← {
  ⍺←⊢
  (pad⍣(⍬≢⍵)) ⍺,(∊62 ⎕atx '⍺⍺'),⍵
  ⍺⍺
 }

 _o ← {
  ((1=1⊥'_apply'⍷∊)>1⊥'∆⍙'∊∊)62 ⎕atx '⍺⍺' : ⍺⍺ ⍬
  ⍵∧3.3=42 ⎕atx '⍺⍺' : dfn '⍺' ⍺⍺ '⍵'
  ⍵<3.3=42 ⎕atx '⍺⍺' : dfn     ⍺⍺ '⍵'
  ⍺⍺,⍬
 }

 ∆xr ← 183⌶

 2 ⎕FIX'file://ns/At.aplf'
 2 ⎕FIX'file://ns/Backslash.aplf'
 2 ⎕FIX'file://ns/BackslashBar.aplf'
 2 ⎕FIX'file://ns/CircleDiaresis.aplf'
 2 ⎕FIX'file://ns/Diaeresis.aplf'
 2 ⎕FIX'file://ns/Dot.aplf'
 2 ⎕FIX'file://ns/Jot.aplf'
 2 ⎕FIX'file://ns/JotDiaeresis.aplf'
 2 ⎕FIX'file://ns/LeftBracket.aplf'
 2 ⎕FIX'file://ns/LeftTack.aplf'
 2 ⎕FIX'file://ns/QuadDiamond.aplf'
 2 ⎕FIX'file://ns/QuadEqual.aplf'
 2 ⎕FIX'file://ns/RightTack.aplf'
 2 ⎕FIX'file://ns/Slash.aplf'
 2 ⎕FIX'file://ns/SlashBar.aplf'
 2 ⎕FIX'file://ns/StarDiaeresis.aplf'
 2 ⎕FIX'file://ns/TildeDiaeresis.aplf'
 2 ⎕FIX'file://ns/LeftArrow.aplf'
 2 ⎕FIX'file://ns/Ampersand.aplf'
 2 ⎕FIX'file://ns/I-Beam.aplf'

 tree ← (∆xr 'aa') {
    ⍙ ← pad ∘ flatten 1 ↓∘, ' ' ,⍤0 ∇¨
    1≤|≡⍺ : ⍺ ⍙ ⍵
    n ← ∊⍵
        ⍺=2 : '(1 repObj ',(repObj ⍵),')'
    ((⊃⍺)∊3 4)∧('{'=⊃n)∧'}'=⊃⌽n : '(',(('⍙9051'_R_'⍛')n),'_apply)'
    ((⊃⍺)∊3 4)∧('{'=⊃n)<'}'=⊃⌽n : n/⍨∨\¯1⌽'←'=n
    ((⊃⍺)∊3 4)∧'⎕'=1↑n : '∆',1↓n
       1≠⍴n : {((≢⍵)⍴3 4) ⍙ ⍵}n⊂⍨~¯1⌽≠\n∊'{}'
        ⍺=3 : '∆',⍕⎕UCS n
        ⍺=4 : '⍙',⍕⎕UCS n
     '(⍕',(⍕⍵),')'
   } ⎕nr 'aa'

  f ← ⍎tree

  :If 4∊⎕nc'f'
   :Trap 0 ⋄ Df ←⊂dfn   ('⍺⍺'f)'⍵' ⋄ :Else ⋄ Df ←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap
   :Trap 0 ⋄ Df,←⊂dfn'⍺'('⍺⍺'f)'⍵' ⋄ :Else ⋄ Df,←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap
  :Else
   :Trap 0 ⋄ Df ←⊂dfn   f'⍵' ⋄ :Else ⋄ Df ←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap
   :Trap 0 ⋄ Df,←⊂dfn'⍺'f'⍵' ⋄ :Else ⋄ Df,←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap
  :EndIf

  Df ← (⍕¨A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)⎕R(,¨⎕A)⍠'Regex' 0¨Df
:EndWith
∇`
