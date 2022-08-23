w = window; params = new URLSearchParams(w.location.search);

if( params.get("g") == null){ document.getElementById("V2").style.display = 'none'; }

run = async (id) => {
  const i = document.getElementById(id);

  const infx = document.getElementById(`${id}Y`)
  const prfx = document.getElementById(`X${id}Y`)

  let socket = new WebSocket("wss://dyalog.run/api/v0/ws/execute");

  socket.onopen = () => {
   if (i.value == ""){ expr = i.getAttribute("placeholder"); } else { expr = i.value }
   socket.send(MessagePack.encode({language: "dyalog_apl",code: explicit + "\n ⎕ ← ⎕JSON explicit '" + expr.replace(/\'/g, "''") + "'",timeout: 5,}));
  }

  socket.onmessage = async (event) => {
    try { 
     values = JSON.parse(new TextDecoder().decode((await MessagePack.decodeAsync(event.data.stream())).stdout));
     infx.textContent = values[0];
     prfx.textContent = values[1];
    } catch {
     infx.textContent = 'Internal Server Error';
     prfx.textContent = 'Internal Server Error';
   }
  };
}

Copy = () => {
  w.history.replaceState({},w.document.title,w.location.pathname 
    + ("?f=" + encodeURIComponent(document.getElementById("f").value))
    + ("&g=" + encodeURIComponent(document.getElementById("g").value)));
  
  navigator.clipboard.writeText(w.location.toString().replace("#",""))
}

if (params.get("f") != null) { document.getElementById("f").value = decodeURIComponent(params.get("f")); }
if (params.get("g") != null) { document.getElementById("g").value = decodeURIComponent(params.get("g")); }
run('f')
run('g')
