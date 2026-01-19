async function checkServer() {
          const ip = "ability-skip.gl.joinmc.link:25565"; // replace this
          const res = await fetch(`https://mcapi.us/server/status?ip=ability-skip.gl.joinmc.link`);
          const data = await res.json();

          const statusEl = document.getElementById("status");
          const playersEl = document.getElementById("players");
        
            if (data.online) {
            statusEl.innerHTML = "<span class='status-icon online'></span> Online";
            playersEl.textContent = `Players: ${data.players.now}/${data.players.max}`;
            } else {
            statusEl.innerHTML = "<span class='status-icon offline'></span> Offline";
            playersEl.textContent = "";
            }
        }

        checkServer();
        setInterval(checkServer, 5000); // refresh every 60s