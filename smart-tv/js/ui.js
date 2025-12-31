// UI initialization and event handling

// Initialize categories and channels
function initChannels() {
  const categoriesSide = document.getElementById("categoriesSide");
  const channelsSide = document.getElementById("channelsSide");
  
  categoriesSide.innerHTML = '<h3>CATEGORIES</h3>';
  channelsSide.innerHTML = '<h3>ALL CHANNELS</h3>';
  
  // Get categories using the sorting function
  const sortedCategories = ["All Channels", ...getCategories()];
  
  // Add categories
  sortedCategories.forEach(category => {
    const categoryItem = document.createElement('div');
    categoryItem.className = 'category-item';
    categoryItem.innerHTML = `<span class="category-name">${category}</span>`;
    categoryItem.dataset.category = category;
    categoriesSide.appendChild(categoryItem);
  });
  
  // Set first category as active
  document.querySelector('.category-item').classList.add('active');
  
  // Initialize with all channels
  renderChannelsByCategory("All Channels");
  
  // Add click event listeners to categories
  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      
      currentCategory = this.dataset.category;
      document.querySelector('#channelsSide h3').textContent = currentCategory.toUpperCase();
      renderChannelsByCategory(currentCategory);
    });
  });
}

// Render channels by category
function renderChannelsByCategory(category) {
  const channelsSide = document.getElementById("channelsSide");
  const channelsContainer = channelsSide.querySelector('.channels-container');
  
  if (channelsContainer) {
    channelsContainer.remove();
  }
  
  const newChannelsContainer = document.createElement('div');
  newChannelsContainer.className = 'channels-container';
  
  // Filter channels
  let filteredChannels = channels;
  if (category !== "All Channels") {
    filteredChannels = channels.filter(channel => channel.category === category);
  }
  
  // Store current channels list for navigation
  currentChannelsList = filteredChannels;
  
  // Create channel cards
  filteredChannels.forEach((channel, index) => {
    const infoIcon = channel.infoPage !== "N/A" ? 
      `<a href="${channel.infoPage}" target="_blank" class="info-icon"><i class="fas fa-info-circle"></i></a>` : '';
    
    const channelHTML = `
      <div class="channel-card" data-channel-id="${channel.name}" data-channel-index="${index}">
        <img src="${channel.logo}" class="channel-logo" alt="${channel.name}">
        <div class="channel-info">
          <div class="channel-header">
            <h3>${channel.name}</h3>
            ${infoIcon}
          </div>
          <p>${channel.category}</p>
        </div>
      </div>
    `;
    newChannelsContainer.innerHTML += channelHTML;
  });
  
  channelsSide.appendChild(newChannelsContainer);
  
  // Add click event listeners to channel cards
  newChannelsContainer.querySelectorAll(".channel-card").forEach((card) => {
    card.addEventListener("click", function() {
      document.querySelectorAll(".channel-card").forEach(c => c.classList.remove("active"));
      this.classList.add("active");

      const channelName = this.dataset.channelId;
      const channelData = channels.find(c => c.name === channelName);
      
      // Load channel
      loadChannel(channelData);
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  initChannels();
  
  // Load first channel
  const firstChannel = channels[0];
  loadChannel(firstChannel);
  
  // Activate first channel card
  setTimeout(() => {
    const firstChannelCard = document.querySelector('.channel-card');
    if (firstChannelCard) {
      firstChannelCard.classList.add('active');
    }
  }, 100);
  
  // Add event listeners
  document.addEventListener('keydown', handleKeyPress);
  
  document.getElementById('closeSidebar').addEventListener('click', closeSidebar);
  document.querySelector('.sidebar-trigger').addEventListener('click', toggleSidebar);
  
  document.getElementById('player').addEventListener('click', function() {
    if (sidebarOpen) closeSidebar();
  });
  
  document.querySelector('.channel-sidebar').addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
  // Show initial instruction
  setTimeout(() => {
    showRemoteStatus('Press any arrow key to open channel list');
  }, 3000);
});
