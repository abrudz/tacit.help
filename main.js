w = window; params = new URLSearchParams(w.location.search);

identical = () => {
  const fy = document.getElementById(`fY`)
  const gy = document.getElementById(`gY`)
  const xfy = document.getElementById(`XfY`)
  const xgy = document.getElementById(`XgY`)
  if (fy.textContent == gy.textContent) {
    fy.style.border = "3px green solid"
    gy.style.border = "3px green solid"
  } else {
    fy.style.border = "initial";
    gy.style.border = "initial";
  }

  if (xfy.textContent == xgy.textContent) {
    xfy.style.border = "3px green solid"
    xgy.style.border = "3px green solid"
  } else {
    xfy.style.border = "initial";
    xgy.style.border = "initial";
  }

}

run = async (id) => {
    const i = document.getElementById(id);
  
    const infx = document.getElementById(`${id}Y`)
    const prfx = document.getElementById(`X${id}Y`)
  
    let socket = new WebSocket("wss://dyalog.run/api/v0/ws/execute");
  
    socket.onopen = () => {
     if (i.value == ""){ expr = i.getAttribute("placeholder"); } else { expr = i.value }
     socket.send(
      MessagePack.encode({
        language: "dyalog_apl",
        code:
        "⎕FIX':Class class' '∇ kill' ':Implements Destructor' '⎕ ← ⎕json 2⍴⊂,'' ''' '∇' ':EndClass'\n_←⎕new class\n"  
          + explicit
          + "\n ⎕ ← ⎕JSON explicit '"
          + expr.replace(/\'/g, "''")
          + "'",
        timeout: 5,
      })
    );
  };
  
    socket.onmessage = async (event) => {
      try { 
       const stream = await MessagePack.decodeAsync(event.data.stream())
       values = JSON.parse(new TextDecoder().decode(stream.stdout).split("\n")[0]);
       infx.textContent = values[0];
       prfx.textContent = values[1];

       identical();
      } catch {
       infx.textContent = 'Internal Server Error';
       prfx.textContent = 'Internal Server Error';
     }
    };
  }
  
Copy = () => {
  w.history.replaceState({},w.document.title,w.location.pathname 
    + ("?f=" + encodeURIComponent(document.getElementById("f").value))
    + (document.getElementById('V2').offsetParent != null ? ("&g=" + encodeURIComponent(document.getElementById("g").value)) : ""));
  
  navigator.clipboard.writeText(w.location.toString().replace("#",""))
}

Split = (e) => {
    const pane = document.getElementById("V2");
    if (pane.style.display == "inherit") {
      pane.style.display = "none";
      e.textContent = "+";
      document.getElementById("swap").style.display = "none";
    } else {
      pane.style.display = "inherit";
      e.textContent = "-";
      document.getElementById("swap").style.display = "inherit";
    }
  };

Swap = () => {
    let a,b,c,x,y,z;

    [a,b,c] = [document.getElementById('f'), document.getElementById('fY'), document.getElementById('XfY')];
    [x,y,z] = [document.getElementById('g'), document.getElementById('gY'), document.getElementById('XgY')];


    [a.value,b.textContent,c.textContent,x.value,y.textContent,z.textContent] = [x.value,y.textContent,z.textContent,a.value,b.textContent,c.textContent];
}

if (params.get("f") != null) { document.getElementById("f").value = decodeURIComponent(params.get("f")); }
if (params.get("g") != null) { 
 document.getElementById("g").value = decodeURIComponent(params.get("g"));
 document.getElementById("V2").style.display = 'inherit';
 document.getElementById("expand").textContent = '-'; 
 document.getElementById("swap").style.display = "inherit";
}


run('f')
run('g')
