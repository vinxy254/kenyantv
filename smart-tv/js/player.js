// Player and streaming functionality

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

// Load channel
function loadChannel(channelData) {
  if (channelData.type === "youtube") {
    const channelId = channelData.channelUrl;
    if (channelId) {
      loadYouTubeLive(channelId);
    } else {
      console.error("Invalid YouTube Channel ID");
    }
    //const embedUrl = `https://www.youtube.com/embed/live_stream?channel=${channelData.channelUrl}&autoplay=1&rel=0`;
    //loadExternalStream(embedUrl);
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

  // Function to generate YouTube embed URL from channel ID
  function getYouTubeEmbedUrl(channelId) {
    return `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&rel=0&showinfo=0&enablejsapi=0&controls=0&disablekb=1&modestbranding=1`;
  }


// Load external stream (YouTube, etc.)
function loadExternalStream(url) {
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

// Function to load YouTube live stream by channel ID
    function loadYouTubeLive(channelId) {
      const embedUrl = getYouTubeEmbedUrl(channelId);
      const playerContainer = document.getElementById("player");
      const videoEl = document.getElementById('my-video');

      // Stop any HLS instance and video playback
      hideBlueScreen();
      if (hls) {
        try { hls.destroy(); } catch (e) { console.warn('Error destroying Hls instance', e); }
        hls = null;
      }
      try { player.pause(); } catch (e) { /* ignore */ }
      try { if (player.currentTime) player.currentTime(0); } catch (e) {}

      // Hide the Video.js element
      if (videoEl) videoEl.style.display = 'none';

      // Stop any existing iframe playback before reusing
      stopIframePlayback();

      // Reuse or create a persistent iframe so we don't remove the video element
      let iframe = playerContainer.querySelector('.external-iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
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
        playerContainer.appendChild(iframe);
      }
      iframe.src = embedUrl;
      iframe.style.display = 'block';
    }

// Play HLS stream
function playHLSStream(url, channelName) {
  hideBlueScreen();
  const playerContainer = document.getElementById("player");
  const videoEl = document.getElementById('my-video');
  const iframe = playerContainer.querySelector('.external-iframe');
  
  // Hide iframe
  if (iframe) {
        iframe = document.createElement('iframe');
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
        playerContainer.appendChild(iframe);
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
