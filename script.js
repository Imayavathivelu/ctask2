document.getElementById('login-button').addEventListener('click', loginUser);

function loginUser() {
    // Placeholder for login functionality
    // In a real app, you'd handle OAuth and API authentication here
    alert("This is a placeholder for the login functionality.");
    fetchFeeds();
}

function fetchFeeds() {
    // Simulated feed data
    const feeds = [
        {
            platform: 'Twitter',
            content: 'This is a tweet from Twitter.'
        },
        {
            platform: 'Facebook',
            content: 'This is a post from Facebook.'
        },
        {
            platform: 'Instagram',
            content: 'This is an image from Instagram.'
        }
    ];
    
    displayFeeds(feeds);
}

function displayFeeds(feeds) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    feeds.forEach(feed => {
        const feedItem = document.createElement('div');
        feedItem.className = 'feed-item';
        feedItem.innerHTML = `<strong>${feed.platform}</strong>: ${feed.content}`;
        contentDiv.appendChild(feedItem);
    });
}
