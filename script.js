// Loader configurations
const loaders = [
    {
        id: 'spinner-dots',
        name: 'Spinning Dots',
        description: 'Các chấm xoay tròn với hiệu ứng mượt mà'
    },
    {
        id: 'pulse-ring',
        name: 'Pulse Ring',
        description: 'Vòng tròn nhấp nháy lan tỏa'
    },
    {
        id: 'bouncing-balls',
        name: 'Bouncing Balls',
        description: 'Các quả bóng nảy lên xuống nhịp nhàng'
    },
    {
        id: 'wave-bars',
        name: 'Wave Bars',
        description: 'Thanh sóng âm thanh chuyển động'
    },
    {
        id: 'circular-progress',
        name: 'Circular Progress',
        description: 'Vòng tròn tiến trình gradient'
    },
    {
        id: 'square-flip',
        name: 'Square Flip',
        description: 'Hình vuông lật xoay 3D'
    },
    {
        id: 'dots-grid',
        name: 'Dots Grid',
        description: 'Lưới các chấm nhấp nháy'
    },
    {
        id: 'infinity-loop',
        name: 'Infinity Loop',
        description: 'Dấu vô cực quay liên tục'
    },
    {
        id: 'neon-orbit',
        name: 'Neon Orbit',
        description: 'Quỹ đạo neon cyberpunk với ánh sáng rực rỡ'
    },
    {
        id: 'liquid-morph',
        name: 'Liquid Morph',
        description: 'Hình dạng lỏng biến hình mượt mà'
    },
    {
        id: 'pixel-cascade',
        name: 'Pixel Cascade',
        description: 'Hiệu ứng pixel thác đổ phong cách retro'
    },
    {
        id: 'geometric-fold',
        name: 'Geometric Fold',
        description: 'Tam giác gấp xoay tối giản'
    },
    {
        id: 'glitch-pulse',
        name: 'Glitch Pulse',
        description: 'Text glitch với hiệu ứng lỗi ma trận'
    },
    {
        id: 'aurora-wave',
        name: 'Aurora Wave',
        description: 'Sóng cực quang gradient mơ màng'
    },
    {
        id: 'quantum-sphere',
        name: 'Quantum Sphere',
        description: 'Quả cầu 3D với hạt quỹ đạo và hiệu ứng ánh sáng'
    },
    {
        id: 'hexagon-matrix',
        name: 'Hexagon Matrix',
        description: 'Ma trận lục giác sáng lên theo sóng'
    }
];

let currentLoader = null;

// Initialize gallery
function initGallery() {
    const gallery = document.getElementById('gallery');
    
    loaders.forEach((loader, index) => {
        const card = document.createElement('div');
        card.className = 'loader-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="loader-preview">
                <iframe src="loaders/${loader.id}/index.html" scrolling="no"></iframe>
            </div>
            <div class="loader-info">
                <div class="loader-name">${loader.name}</div>
                <div class="loader-description">${loader.description}</div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(loader));
        gallery.appendChild(card);
    });
}

// Open modal with loader details
async function openModal(loader) {
    currentLoader = loader;
    const modal = document.getElementById('modal');
    const previewFrame = document.getElementById('previewFrame');
    
    // Load preview
    previewFrame.src = `loaders/${loader.id}/index.html`;
    
    // Load code files
    try {
        const [html, css, js] = await Promise.all([
            fetch(`loaders/${loader.id}/index.html`).then(r => r.text()),
            fetch(`loaders/${loader.id}/styles.css`).then(r => r.text()),
            fetch(`loaders/${loader.id}/script.js`).then(r => r.text()).catch(() => '// No JavaScript needed')
        ]);
        
        document.getElementById('code-html').textContent = html;
        document.getElementById('code-css').textContent = css;
        document.getElementById('code-js').textContent = js;
    } catch (error) {
        console.error('Error loading code:', error);
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset preview
    setTimeout(() => {
        document.getElementById('previewFrame').src = '';
    }, 300);
}

// Tab switching
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.code-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Update active states
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`panel-${targetTab}`).classList.add('active');
        });
    });
}

// Copy code to clipboard
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const codeType = btn.dataset.code;
            const code = document.getElementById(`code-${codeType}`).textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Visual feedback
                const originalText = btn.innerHTML;
                btn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Đã copy!
                `;
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            } catch (error) {
                console.error('Copy failed:', error);
            }
        });
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initTabs();
    initCopyButtons();
    
    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalBackdrop').addEventListener('click', closeModal);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});