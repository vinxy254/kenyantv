// Remote Control Variables
let sidebarOpen = false;
let focusedPane = 'categories'; // 'categories' or 'channels'
let activeCategoryIndex = 0;
let activeChannelIndex = 0;
let currentCategory = "All Channels";
let currentChannelsList = [];

// Key code constants
const KEY_ENTER = 13;
const KEY_ESC = 27;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_SPACE = 32;

// Show remote status
function showRemoteStatus(message) {
  const statusEl = document.getElementById('remoteStatus');
  statusEl.textContent = message;
  statusEl.classList.remove('active');
  void statusEl.offsetWidth; // Trigger reflow
  statusEl.classList.add('active');
}

// Refresh UI lists
function refreshLists() {
  return {
    categories: Array.from(document.querySelectorAll('.category-item')),
    channels: Array.from(document.querySelectorAll('.channel-card'))
  };
}

// Open sidebar with arrow key
function openSidebar() {
  if (sidebarOpen) return;
  
  const sidebar = document.querySelector('.channel-sidebar');
  sidebar.classList.add('active');
  sidebarOpen = true;
  
  const lists = refreshLists();
  focusedPane = 'categories';
  activeCategoryIndex = Math.max(0, Math.min(activeCategoryIndex, lists.categories.length - 1));
  activeChannelIndex = 0;
  
  updateFocusUI();
  showRemoteStatus('Channel list opened');
}

// Close sidebar
function closeSidebar() {
  if (!sidebarOpen) return;
  
  const sidebar = document.querySelector('.channel-sidebar');
  sidebar.classList.remove('active');
  sidebarOpen = false;
  
  // Clear focus styles
  const lists = refreshLists();
  lists.categories.forEach(item => item.classList.remove('focused'));
  lists.channels.forEach(card => card.classList.remove('focused'));
  
  showRemoteStatus('Channel list closed');
}

// Toggle sidebar
function toggleSidebar() {
  if (sidebarOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

// Update focus UI
function updateFocusUI() {
  const lists = refreshLists();
  
  // Remove focus from all items
  lists.categories.forEach(item => item.classList.remove('focused'));
  lists.channels.forEach(card => card.classList.remove('focused'));
  
  // Add focus to active item
  if (sidebarOpen) {
    if (focusedPane === 'categories' && lists.categories[activeCategoryIndex]) {
      const categoryItem = lists.categories[activeCategoryIndex];
      categoryItem.classList.add('focused');
      categoryItem.scrollIntoView({ block: 'center', behavior: 'instant' });
    } else if (focusedPane === 'channels' && lists.channels[activeChannelIndex]) {
      const channelCard = lists.channels[activeChannelIndex];
      channelCard.classList.add('focused');
      channelCard.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  }
}

// Navigation functions
function navigateUp() {
  if (!sidebarOpen) return;
  
  if (focusedPane === 'categories') {
    const lists = refreshLists();
    activeCategoryIndex = Math.max(0, activeCategoryIndex - 1);
  } else {
    activeChannelIndex = Math.max(0, activeChannelIndex - 1);
  }
  updateFocusUI();
}

function navigateDown() {
  if (!sidebarOpen) return;
  
  const lists = refreshLists();
  if (focusedPane === 'categories') {
    activeCategoryIndex = Math.min(lists.categories.length - 1, activeCategoryIndex + 1);
  } else {
    activeChannelIndex = Math.min(lists.channels.length - 1, activeChannelIndex + 1);
  }
  updateFocusUI();
}

function navigateLeft() {
  if (!sidebarOpen) return;
  
  if (focusedPane === 'channels') {
    focusedPane = 'categories';
    updateFocusUI();
  } else if (focusedPane === 'categories') {
    closeSidebar();
  }
}

function navigateRight() {
  if (!sidebarOpen) return;
  
  if (focusedPane === 'categories') {
    focusedPane = 'channels';
    activeChannelIndex = 0;
    updateFocusUI();
  }
}

// Select focused item
function selectItem() {
  if (!sidebarOpen) return;
  
  const lists = refreshLists();
  
  if (focusedPane === 'categories') {
    // Select category
    const categoryItem = lists.categories[activeCategoryIndex];
    if (categoryItem) {
      categoryItem.click();
      focusedPane = 'channels';
      activeChannelIndex = 0;
      updateFocusUI();
    }
  } else if (focusedPane === 'channels') {
    // Select channel
    const channelCard = lists.channels[activeChannelIndex];
    if (channelCard) {
      channelCard.click();
      closeSidebar();
      showRemoteStatus(`Loaded: ${currentChannelsList[activeChannelIndex]?.name || 'Channel'}`);
    }
  }
}

// Handle keyboard input
function handleKeyPress(event) {
  // Check if any arrow key is pressed and sidebar is closed
  if (!sidebarOpen && (
    event.keyCode === KEY_LEFT ||
    event.keyCode === KEY_UP ||
    event.keyCode === KEY_RIGHT ||
    event.keyCode === KEY_DOWN
  )) {
    event.preventDefault();
    openSidebar();
    return;
  }

  switch(event.keyCode) {
    case KEY_ENTER:
      event.preventDefault();
      if (sidebarOpen) {
        selectItem();
      } else {
        openSidebar();
      }
      break;
      
    case KEY_ESC:
      event.preventDefault();
      if (sidebarOpen) {
        closeSidebar();
      }
      break;
      
    case KEY_UP:
      event.preventDefault();
      navigateUp();
      break;
      
    case KEY_DOWN:
      event.preventDefault();
      navigateDown();
      break;
      
    case KEY_LEFT:
      event.preventDefault();
      navigateLeft();
      break;
      
    case KEY_RIGHT:
      event.preventDefault();
      navigateRight();
      break;
      
    case KEY_SPACE:
      event.preventDefault();
      if (player && typeof player.paused === 'function') {
        if (player.paused()) {
          player.play();
          showRemoteStatus('Playing');
        } else {
          player.pause();
          showRemoteStatus('Paused');
        }
      }
      break;
  }
}

// Export functions for use in other files
window.remoteControl = {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  handleKeyPress,
  navigateUp,
  navigateDown,
  navigateLeft,
  navigateRight,
  selectItem,
  updateFocusUI
};
