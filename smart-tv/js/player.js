// Player and streaming functionality

// YouTube helper functions
function getYouTubeEmbedUrl(channelId) {
    return `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&rel=0&showinfo=0&enablejsapi=1&controls=0&disablekb=1&modestbranding=1`;
}

// YouTube iframe API control
let youtubeIframe = null;
let ytPlayer = null; // Global reference for API control


// Initialize Video.js player
const player = videojs('my-video');
const blueScreen = document.getElementById('blue-screen');
const channelDisplay = document.getElementById('channel-display');
let hls = null;
let currentChannel = null;

// Blue screen functions
function showBlueScreen() {
    blueScreen.style.display = 'flex';
}

function hideBlueScreen() {
    blueScreen.style.display = 'none';
}


// Destroy YouTube player and remove iframe
function destroyYouTubePlayer() {
    if (ytPlayer) {
        try {
            ytPlayer.destroy();
        } catch (e) {
            console.warn('Error destroying YT player:', e);
        }
        ytPlayer = null;
    }
    const ytIframe = document.getElementById('youtube-api-iframe');
    if (ytIframe) {
        ytIframe.remove();
    }
}


// Load channel
function loadChannel(channelData) {
    if (channelData.type === "youtube") {
        const channelId = channelData.channelUrl;
        if (channelId) {
            loadYouTubeLive(channelId);
        } else {
            console.error("Invalid YouTube Channel ID");
        }
    } else if (channelData.type === "stream") {
        loadExternalStream(channelData.streamUrl);
    } else if (channelData.type === "m3u8") {
        playHLSStream(channelData.streamUrl, channelData.name);
    }
    
    // Update channel display
    channelDisplay.textContent = channelData.name;
    channelDisplay.style.display = 'block';
    setTimeout(() => { channelDisplay.style.display = 'none'; }, 5000);
    
    currentChannel = channelData;
}

// Load YouTube live stream by channel ID
function loadYouTubeLive(channelId) {
    const embedUrl = getYouTubeEmbedUrl(channelId);
    const playerContainer = document.getElementById("player");
    const videoEl = document.getElementById('my-video');

    // Stop any HLS instance and video playback
    hideBlueScreen();
    if (hls) {
        try { hls.destroy(); } catch (e) { console.warn('Error destroying HLS instance', e); }
        hls = null;
    }
    try { player.pause(); } catch (e) { /* ignore */ }
    try { if (player.currentTime) player.currentTime(0); } catch (e) { }

    // Hide the Video.js element
    if (videoEl) videoEl.style.display = 'none';

    // Stop any existing iframe playback before reusing
    stopIframePlayback();

    // --- YouTube IFrame API integration ---
    // Remove any old iframe to avoid multiple API bindings
    const oldIframe = playerContainer.querySelector('.external-iframe');
    if (oldIframe) oldIframe.remove();

    // Create fresh iframe with API‑ready src
    const iframe = document.createElement('iframe');
    iframe.id = 'youtube-api-iframe'; // fixed ID for API binding
    iframe.className = 'external-iframe';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.src = embedUrl;
    iframe.style.display = 'block';
    playerContainer.appendChild(iframe);

    // If IFrame API is already loaded, create player immediately
    if (window.YT && YT.Player) {
        initializeYTPlayer();
    } else {
        // If API script hasn't finished loading, wait for global callback
        window.onYouTubeIframeAPIReady = initializeYTPlayer;
    }
}


function initializeYTPlayer() {
    if (ytPlayer) {
        // Destroy previous instance to avoid conflicts
        try { ytPlayer.destroy(); } catch (e) {}
    }
    ytPlayer = new YT.Player('youtube-api-iframe', {
        events: {
            onReady: onYTReady,
            onStateChange: onYTStateChange,
            onError: onYTError
        }
    });
}


function onYTReady(event) {
    console.log('✅ YouTube IFrame API ready');
    // Optionally auto-play (already handled by autoplay=1 in URL)
    // If you want to unmute after 3s, add your previous timer logic here
}

function onYTStateChange(event) {
    // You can add state handling (e.g., update UI)
}

function onYTError(event) {
    console.error('YouTube player error:', event.data);
}

// Clean up previous iframe playback (your existing function)
function stopIframePlayback() {
    if (ytPlayer) {
        try { ytPlayer.stopVideo(); } catch (e) {}
    }
}




// Load external stream (YouTube, etc.)
function loadExternalStream(url) {
    destroyYouTubePlayer();   // ✅ Clean up YouTube before HLS


    hideBlueScreen();
    const playerContainer = document.getElementById("player");
    const videoEl = document.getElementById('my-video');
    
    // Hide video.js element
    if (videoEl) {
        player.pause();
        videoEl.style.display = 'none';
    }
    
    // Stop HLS if active
    if (hls) {
        hls.destroy();
        hls = null;
    }
    
    // Create or reuse iframe
    let iframe = playerContainer.querySelector('.external-iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.className = 'external-iframe';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        playerContainer.appendChild(iframe);
    }
    iframe.src = url;
    iframe.style.display = 'block';
}

// Play HLS stream
function playHLSStream(url, channelName) {
    destroyYouTubePlayer();   // ✅ Clean up YouTube before HLS


    hideBlueScreen();
    const playerContainer = document.getElementById("player");
    const videoEl = document.getElementById('my-video');
    const iframe = playerContainer.querySelector('.external-iframe');
    
    // Hide iframe (corrected - don't try to reassign const variable)
    if (iframe) {
        iframe.style.display = 'none';
    }
    
    // Show video element
    videoEl.style.display = 'block';
    
    // Load stream
    player.src({ src: url, type: 'application/x-mpegURL' });
    player.play().catch(err => console.log('Play error:', err));
    
    // Show channel name
    channelDisplay.textContent = channelName;
    channelDisplay.style.display = 'block';
    setTimeout(() => { channelDisplay.style.display = 'none'; }, 5000);
}

// Video.js error handling
player.on('error', function() {
    const error = player.error();
    if (error && error.code === 4) {
        showBlueScreen();
    }
});

player.on('playing', hideBlueScreen);
player.on('loadeddata', hideBlueScreen);
