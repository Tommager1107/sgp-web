// ID servera, o ktorom chceš získať informácie
const serverId = 75096; // Nahradiť skutočným server ID

// URL API pre SCP:SL (prispôsob podľa potreby)
const apiUrl = `https://scplist.kr/api/servers/${serverId}`;

// Funkcia na získanie údajov zo servera
async function fetchServerData() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json;charset=UTF-8'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateServerInfo(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Funkcia na aktualizáciu informácií o serveri na stránke
function updateServerInfo(server) {
    const serverInfoDiv = document.getElementById('server-info');
    
    serverInfoDiv.innerHTML = `
        <h2>Server ID: ${server.serverId}</h2>
        <p><strong>IP:</strong> ${server.ip}</p>
        <p><strong>Port:</strong> ${server.port}</p>
        <p><strong>Online:</strong> ${server.online ? 'Yes' : 'No'}</p>
        <p><strong>Version:</strong> ${server.version}</p>
        <p><strong>Friendly Fire:</strong> ${server.friendlyFire ? 'Enabled' : 'Disabled'}</p>
        <p><strong>Modded:</strong> ${server.modded ? 'Yes' : 'No'}</p>
        <p><strong>Whitelist:</strong> ${server.whitelist ? 'Yes' : 'No'}</p>
        <p><strong>Players:</strong> ${server.players}</p>
        <p><strong>Information:</strong> ${server.info}</p>
        <p><strong>Official:</strong> ${server.official ? 'Yes' : 'No'}</p>
        <p><strong>Distance:</strong> ${server.distance}</p>
    `;
}

// Aktualizácia údajov každých 5 sekúnd
setInterval(fetchServerData, 5000);

// Načítanie údajov pri prvom načítaní stránky
fetchServerData();
