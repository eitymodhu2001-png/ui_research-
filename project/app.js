// State management
let currentApp = null;
let expandedCategories = [];

// DOM Elements
const searchBar = document.getElementById('searchBar');
const appsGrid = document.getElementById('appsGrid');
const appDetailModal = document.getElementById('appDetailModal');
const dataReportModal = document.getElementById('dataReportModal');
const closeAppDetailBtn = document.getElementById('closeAppDetail');
const closeDataReportBtn = document.getElementById('closeDataReport');
const openDataReportBtn = document.getElementById('openDataReport');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderApps(appsData);
    setupEventListeners();
});

// Render apps grid
function renderApps(apps) {
    appsGrid.innerHTML = '';
    apps.forEach(app => {
        const appCard = createAppCard(app);
        appsGrid.appendChild(appCard);
    });
}

// Create app card element with custom images
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    
    // Use custom icon if available, otherwise use emoji
    const iconContent = app.iconUrl 
        ? `<img src="${app.iconUrl}" alt="${app.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">` 
        : app.icon;
    
    card.innerHTML = `
        <div class="app-icon">${iconContent}</div>
        <div class="app-info">
            <div class="app-name">${app.name}</div>
            <div class="app-category">${app.category}</div>
        </div>
    `;
    card.addEventListener('click', () => openAppDetail(app));
    return card;
}

// Open app detail modal
function openAppDetail(app) {
    currentApp = app;
    
    // Update app detail icon with custom image
    const iconElement = document.getElementById('appDetailIcon');
    if (app.iconUrl) {
        iconElement.innerHTML = `<img src="${app.iconUrl}" alt="${app.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">`;
    } else {
        iconElement.textContent = app.icon;
    }
    
    // Update other app detail content
    document.getElementById('appDetailName').textContent = app.name;
    document.getElementById('appDetailCategory').textContent = app.category;
    // Update stats section
    document.getElementById('statRating').textContent = app.rating + ' ⭐';
    document.getElementById('statRatingLabel').textContent = app.downloads.replace('+', '') + ' Reviews';

// Update this line to show size instead of downloads
    document.getElementById('statDownloads1').textContent = app.size; 

    document.getElementById('statDownloads2').textContent = app.downloads.replace('+', '');
    document.getElementById('aboutText').textContent = app.description || `The ultimate ${app.category.toLowerCase()} app is available. Install now for pure entertainment.`;
    
    // Render screenshots (custom or default)
    renderScreenshots(app.screenshots);
    
    // Update security practices
    renderSecurityPractices(app.data.securityPractices);
    
    // Show modal
    appDetailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Render screenshots with custom images
function renderScreenshots(screenshots) {
    const container = document.getElementById('appScreenshots');
    container.innerHTML = '';
    
    if (screenshots && screenshots.length > 0) {
        // Use custom screenshots
        screenshots.forEach((screenshot, index) => {
            const img = document.createElement('img');
            img.src = screenshot;
            img.alt = `Screenshot ${index + 1}`;
            img.className = 'screenshot';
            img.style.objectFit = 'cover';
            container.appendChild(img);
        });
    } else {
        // Use default gradient placeholders
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        ];
        
        gradients.forEach(gradient => {
            const div = document.createElement('div');
            div.className = 'screenshot';
            div.style.background = gradient;
            container.appendChild(div);
        });
    }
}

// Render security practices
function renderSecurityPractices(practices) {
    const container = document.getElementById('securityPractices');
    const itemsHTML = [];
    
    if (practices.dataEncryptedInTransit) {
        itemsHTML.push(`
            <div class="security-item">
                <span class="security-item-icon">🔒</span>
                <div class="security-item-text">
                    <div class="security-item-title">Data is encrypted in transit</div>
                    <div class="security-item-desc">Your data is transferred over a secure connection</div>
                </div>
            </div>
        `);
    } else {
        itemsHTML.push(`
            <div class="security-item">
                <span class="security-item-icon">⚠️</span>
                <div class="security-item-text">
                    <div class="security-item-title">Data isn't encrypted</div>
                    <div class="security-item-desc">Your data isn't transferred over a secure connection</div>
                </div>
            </div>
        `);
    }
    
    if (practices.dataCanBeDeleted) {
        itemsHTML.push(`
            <div class="security-item">
                <span class="security-item-icon">🗑️</span>
                <div class="security-item-text">
                    <div class="security-item-title">You can request that data be deleted</div>
                    <div class="security-item-desc">The developer provides a way for you to request that your data be deleted</div>
                </div>
            </div>
        `);
    }
    
    container.innerHTML = `
        <h4 class="security-title">Security Practices</h4>
        ${itemsHTML.join('')}
    `;
}

// Open data report modal
function openDataReport() {
    if (!currentApp) return;
    
    expandedCategories = [];
    
    // Update report header icon with custom image
    const reportIconElement = document.getElementById('reportIcon');
    if (currentApp.iconUrl) {
        reportIconElement.innerHTML = `<img src="${currentApp.iconUrl}" alt="${currentApp.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
    } else {
        reportIconElement.textContent = currentApp.icon;
    }
    
    document.getElementById('reportTitle').textContent = currentApp.data.reportTitle;
    
    // Render categories
    renderCategories(currentApp.data.categories);
    
    // Hide app detail and show data report
    appDetailModal.style.display = 'none';
    dataReportModal.style.display = 'flex';
}

// Render category cards with custom icons
function renderCategories(categories) {
    const container = document.getElementById('reportContent');
    container.innerHTML = '';
    
    categories.forEach(category => {
        const card = createCategoryCard(category);
        container.appendChild(card);
    });
}

// Create category card element with custom icons
function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card';
    
    const isExpanded = expandedCategories.includes(category.id);
    
    const indicators = [];
    if (category.status.shared) {
        indicators.push('<div class="indicator shared"><span class="indicator-arrow">←</span><span>Shared</span></div>');
    }
    if (category.status.collected) {
        indicators.push('<div class="indicator collected"><span>Collected</span><span class="indicator-arrow">→</span></div>');
    }
    
    // Use custom category icon if available, otherwise use emoji
    const categoryIconContent = category.iconUrl 
        ? `<img src="${category.iconUrl}" alt="${category.name}" style="width: 100%; height: 100%; object-fit: contain;">` 
        : category.icon;
    
    card.innerHTML = `
        <div class="category-header" data-category-id="${category.id}">
            <div class="category-icon">${categoryIconContent}</div>
            <div class="category-info">
                <div class="category-name">${category.name}</div>
                <div class="category-indicators">
                    ${indicators.join('')}
                </div>
            </div>
            <span class="expand-icon ${isExpanded ? 'expanded' : ''}">∧</span>
        </div>
        ${isExpanded ? createCategoryDetails(category) : ''}
    `;
    
    // Add click event to header
    card.querySelector('.category-header').addEventListener('click', () => {
        toggleCategory(category.id);
    });
    
    return card;
}

// Create category details HTML
function createCategoryDetails(category) {
    let html = '<div class="category-details">';
    
    // Shared section
    html += '<div class="detail-section">';
    html += '<div class="detail-label shared"><span>←</span> Shared:</div>';
    if (category.details.shared.items.length > 0) {
        html += '<div class="detail-items">';
        category.details.shared.items.forEach(item => {
            html += `<div class="detail-item">${item}</div>`;
        });
        html += '</div>';
        if (category.details.shared.purpose) {
            html += `<div class="detail-purpose">Purpose: ${category.details.shared.purpose}</div>`;
        }
    } else {
        html += '<div class="none-text">None</div>';
    }
    html += '</div>';
    
    // Collected section
    html += '<div class="detail-section">';
    html += '<div class="detail-label collected">Collected: <span>→</span></div>';
    if (category.details.collected.items.length > 0) {
        html += '<div class="detail-items">';
        category.details.collected.items.forEach(item => {
            html += `<div class="detail-item">${item}</div>`;
        });
        html += '</div>';
        if (category.details.collected.purpose) {
            html += `<div class="detail-purpose">Purpose: ${category.details.collected.purpose}</div>`;
        }
    } else {
        html += '<div class="none-text">None</div>';
    }
    html += '</div>';
    
    html += '</div>';
    return html;
}

// Toggle category expansion
function toggleCategory(categoryId) {
    if (expandedCategories.includes(categoryId)) {
        expandedCategories = expandedCategories.filter(id => id !== categoryId);
    } else {
        expandedCategories.push(categoryId);
    }
    
    // Re-render categories
    renderCategories(currentApp.data.categories);
}

// Close app detail modal
function closeAppDetail() {
    appDetailModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentApp = null;
}

// Close data report modal
function closeDataReport() {
    dataReportModal.style.display = 'none';
    appDetailModal.style.display = 'flex';
    expandedCategories = [];
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredApps = appsData.filter(app => 
            app.name.toLowerCase().includes(query) || 
            app.category.toLowerCase().includes(query)
        );
        renderApps(filteredApps);
    });
    
    // Modal close buttons
    closeAppDetailBtn.addEventListener('click', closeAppDetail);
    closeDataReportBtn.addEventListener('click', closeDataReport);
    openDataReportBtn.addEventListener('click', openDataReport);
    
    // Close modals when clicking overlay
    appDetailModal.addEventListener('click', (e) => {
        if (e.target === appDetailModal) {
            closeAppDetail();
        }
    });
    
    dataReportModal.addEventListener('click', (e) => {
        if (e.target === dataReportModal) {
            dataReportModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentApp = null;
            expandedCategories = [];
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (dataReportModal.style.display === 'flex') {
                closeDataReport();
            } else if (appDetailModal.style.display === 'flex') {
                closeAppDetail();
            }
        }
    });
}
