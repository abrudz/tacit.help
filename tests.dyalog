2 ⎕fix'file://explain.aplf'
⎕SE.Link.Import # 'tests'
{(ns,'.o') ≡⍥⍎ '0 explain',(ns ← '#.t',⍕⍵),'.i'}¨⍳27