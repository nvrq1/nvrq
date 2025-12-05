const userId = "1435071462087327785";

async function loadDiscord() {
    try {
        let req = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        let json = await req.json();

        if (!json.success) {
            document.getElementById("discord-profile").innerHTML = "<p>Discord Profil nicht gefunden.</p>";
            return;
        }

        let d = json.data;

        let avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${d.discord_user.avatar}.png?size=128`;

        document.getElementById("discord-profile").innerHTML = `
            <img class="d-avatar" src="${avatarUrl}">
            <p><b>${d.discord_user.username}</b>#${d.discord_user.discriminator}</p>
            <p>Status: ${d.discord_status}</p>
        `;
    } catch (error) {
        document.getElementById("discord-profile").innerHTML = "<p>Fehler beim Laden.</p>";
    }
}

loadDiscord();
