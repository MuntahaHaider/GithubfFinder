
let gitUrl = 'https://api.github.com/users/';
let searchInput = document.getElementById("searchInput").value;  
let showProfile = document.getElementById('showProfile');

const searchProfile = async () => {
    let input = document.getElementById("searchInput").value;  
    try {
        const response = await fetch(`https://api.github.com/users/${input}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        let showProfile = document.getElementById('showProfile');

        showProfile.innerHTML = `
            <div class="car">
                <div>
                    <img  src="${data.avatar_url}" alt="User Avatar">
                </div>
                <div class="user-info">
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                    <ul class="info">
                        <li>${data.followers} <strong>Followers</strong></li>
                        <li>${data.following} <strong>Following</strong></li>
                        <li>${data.public_repos} <strong>Repos</strong></li>
                    </ul>
                    <div id="repos" class="repos"></div>
                </div>
            </div>`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        showProfile.innerHTML = `<p>User not found. Please try again.</p>`;
    }
};