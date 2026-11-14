/**
 * CALABAR KITCHEN — PRODUCTION ENGINE (VANILLA JAVASCRIPT ES6+)
 * Authentic Cross River Native Cuisine & Hospitality
 * 41 & 42 Ikwerre Road, Port Harcourt, Rivers State, Nigeria
 */

(function () {
  'use strict';

  // 1. RESTAURANT DATA & CATALOGUE
  const RESTAURANT_PROFILE = {
    name: 'Calabar Kitchen',
    tagline: 'Cross River Native Cuisine',
    address: '41 & 42 Ikwerre Road, Port Harcourt, Rivers State, Nigeria',
    shortAddress: '41 & 42 Ikwerre Road, Port Harcourt',
    phone: '09016607242',
    phoneFormatted: '+234 901 660 7242',
    email: 'calabarkitchen482@gmail.com',
    whatsappNumber: '2349016607242',
    hours: {
      weekdays: 'Monday – Saturday: 8:30 AM – 10:00 PM',
      sunday: 'Sunday: 12:00 PM – 9:00 PM',
    },
    deliveryZones: [
      { zone: 'Ikwerre Road & Mile 1/2/3 (Pickup / Nearby)', fee: 0 },
      { zone: 'Old GRA & New GRA (Port Harcourt)', fee: 1200 },
      { zone: 'D-Line & Olu Obasanjo', fee: 1000 },
      { zone: 'Trans-Amadi Industrial Layout', fee: 1500 },
      { zone: 'Rumuola & Rumuokwuta', fee: 1200 },
      { zone: 'Peter Odili & Abuloma Road', fee: 2000 },
      { zone: 'Rumuokoro & Choba Axis', fee: 2200 },
      { zone: 'Woji & Elelenwo Axis', fee: 2200 },
    ],
  };

  const SWALLOW_PRICES = {
    'Pounded Yam': 1000,
    'Yellow Garri (Eba)': 700,
    Semovita: 800,
    'Calabar Fufu (Akpu)': 700,
  };

  const SWALLOW_OPTIONS = [
    'Pounded Yam',
    'Yellow Garri (Eba)',
    'Semovita',
    'Calabar Fufu (Akpu)',
    'No Swallow',
  ];

  const MENU_ITEMS = [
    {
      id: 'afang-soup',
      name: 'Royal Afang Soup',
      nativeName: 'Afang Native Pot',
      category: 'soups',
      price: 4500,
      description:
        'The crowning glory of Cross River cuisine. Shredded wild ukazi leaves and tender waterleaf slow-simmered with assorted beef, stockfish, dried river prawns, and deshelled periwinkles in rich unrefined palm oil.',
      ingredients: [
        'Wild Ukazi Leaves',
        'Fresh Waterleaf',
        'Assorted Beef',
        'Stockfish Head',
        'River Periwinkles (Mfi)',
        'Smoked Catfish',
        'Pure Palm Oil',
      ],
      spiceLevel: 'Medium',
      isChefSpecial: true,
      image: './assets/images/dish_afang_soup_1794102728482.jpg',
      recommendedSwallow: 'Pounded Yam or Yellow Garri (Eba)',
      isDailyPot: true,
    },
    {
      id: 'white-soup',
      name: 'Calabar White Soup',
      nativeName: 'Afia Efere',
      category: 'soups',
      price: 4200,
      description:
        'An aromatic, oil-free Cross River native soup enriched with pounded yam starch, native uyayak (aromatic fruit pod), local peppers, and choice chunks of tender goat meat and smoked bushfish.',
      ingredients: [
        'Tender Goat Meat',
        'Native Uyayak Pod',
        'Uziza Seeds',
        'Smoked Fish',
        'Yam Thickener',
        'Native Crayfish',
      ],
      spiceLevel: 'Medium',
      isChefSpecial: true,
      image: './assets/images/dish_white_soup_1794102729231.jpg',
      recommendedSwallow: 'Steaming Hot Pounded Yam',
      isDailyPot: true,
    },
    {
      id: 'edikang-ikong',
      name: 'Edikang Ikong Royale',
      nativeName: 'Edikang Ikong',
      category: 'soups',
      price: 4800,
      description:
        'The quintessential Calabar vegetable soup. An exquisite, nutrient-dense pot prepared strictly with pristine fluted pumpkin leaves (Ugwu), tender waterleaf, seasoned kpomo, dry fish, periwinkles, and tender beef cuts.',
      ingredients: [
        'Fluted Pumpkin (Ugwu)',
        'Waterleaf',
        'Tender Beef Chunks',
        'Seasoned Kpomo',
        'Deboned Dry Fish',
        'Periwinkles',
        'Crayfish',
      ],
      spiceLevel: 'Mild',
      isChefSpecial: true,
      image: './assets/images/dish_edikang_ikong_1794194343523.jpg',
      recommendedSwallow: 'Yellow Garri (Eba) or Semovita',
      isDailyPot: true,
    },
    {
      id: 'editan-soup',
      name: 'Editan Native Soup',
      nativeName: 'Editan Ye Mfi',
      category: 'soups',
      price: 4600,
      description:
        'Rare traditional Cross River specialty made from finely sliced editan leaves with their characteristic pleasant bitter notes, balanced with fresh waterleaf, assorted meats, and dried river prawns.',
      ingredients: [
        'Editan Leaves',
        'Fresh Waterleaf',
        'Assorted Offals & Beef',
        'River Prawns',
        'Periwinkles',
        'Smoked Bonga Fish',
      ],
      spiceLevel: 'Medium',
      image: './assets/images/dish_editan_soup_nanobanana.jpg',
      recommendedSwallow: 'Fufu (Akpu) or Pounded Yam',
      isDailyPot: true,
    },
    {
      id: 'waterleaf-soup',
      name: 'Fresh Waterleaf Soup',
      nativeName: 'Mmong Mmong Ikong',
      category: 'soups',
      price: 3800,
      description:
        'Light, silky, and profoundly comforting native soup made with freshly harvested waterleaf, smoked dried fish, crayfish, and tender shredded meats simmered in aromatic broth.',
      ingredients: ['Garden Fresh Waterleaf', 'Smoked Fish', 'Shredded Beef', 'Native Seasoning', 'Crayfish'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_waterleaf_soup_nanobanana.jpg',
      recommendedSwallow: 'Yellow Garri or Semovita',
      isDailyPot: true,
    },
    {
      id: 'dog-meat-pepper-soup',
      name: 'Special "404" Pepper Soup',
      nativeName: 'Native Dog Meat Pepper Soup',
      category: 'peppersoups',
      price: 4200,
      description:
        'Authentic spicy delicacy prepared in the legendary Calabar tradition. Richly seasoned with wild alligator pepper, uziza seeds, uda pods, and fresh scent leaves. Unsurpassed depth of flavor.',
      ingredients: [
        'Selected Native Cuts',
        'Calabar Pepper Soup Spices',
        'Uziza Seeds',
        'Uda Pod',
        'Fresh Scent Leaves',
        'Scotch Bonnet Peppers',
      ],
      spiceLevel: 'Fiery',
      isChefSpecial: true,
      image: './assets/images/dish_pepper_soup_1794102730377.jpg',
      isDailyPot: true,
    },
    {
      id: 'cow-head-tail-pepper-soup',
      name: 'Cow Head & Tail Pepper Soup',
      nativeName: 'Isi & Odu Ebot Pepper Soup',
      category: 'peppersoups',
      price: 4000,
      description:
        'Hearty, gelatinous cuts of slow-braised cow tail and tender cow head in an invigorating, piping hot herbal native broth with fresh utazi and habanero chilies.',
      ingredients: [
        'Braised Cow Tail',
        'Cow Head Cuts',
        'Calabash Nutmeg',
        'Utazi Leaves',
        'Native Herbal Infusion',
        'Crushed Chili',
      ],
      spiceLevel: 'Hot',
      image: './assets/images/dish_cow_head_tail_fresh.jpg',
      isDailyPot: true,
    },
    {
      id: 'assorted-meat-pepper-soup',
      name: 'Assorted Meat Pepper Soup',
      nativeName: 'Assorted Native Pepper Broth',
      category: 'peppersoups',
      price: 3600,
      description:
        'Generous medley of tender shaki (tripe), liver, kidney, and soft beef cuts in a steaming aromatic herbal pepper broth with bold native spice.',
      ingredients: ['Beef Tripe (Shaki)', 'Liver & Kidney', 'Tender Beef', 'Aromatic Native Spices', 'Scent Leaves'],
      spiceLevel: 'Hot',
      image: './assets/images/dish_assorted_meat_1794196880883.jpg',
      isDailyPot: true,
    },
    {
      id: 'pounded-yam',
      name: 'Pounded Yam',
      nativeName: 'Iyan / Steaming Yam',
      category: 'swallows',
      price: 1000,
      description:
        'Smooth, stretchy, and lump-free authentic pounded yam prepared freshly per order from premium Rivers and Benue white yams.',
      ingredients: ['100% Premium White Yam'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_pounded_yam_1794196895734.jpg',
    },
    {
      id: 'yellow-garri',
      name: 'Yellow Garri (Eba)',
      nativeName: 'Bendel / Calabar Eba',
      category: 'swallows',
      price: 700,
      description:
        'Finely processed palm-oil fermented cassava flour turned with boiling water into a firm, satisfying traditional swallow in a plate.',
      ingredients: ['Yellow Cassava Garri', 'Hot Filtered Water'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_yellow_garri_1794196895648.jpg',
    },
    {
      id: 'semovita',
      name: 'Smooth Semovita',
      nativeName: 'Semo Portion',
      category: 'swallows',
      price: 800,
      description: 'Light, golden, perfectly whisked semolina swallow with velvety consistency.',
      ingredients: ['Premium Milled Semolina'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_semovita_nanobanana.jpg',
    },
    {
      id: 'fufu',
      name: 'Calabar Native Fufu (Akpu)',
      nativeName: 'Traditional Akpu',
      category: 'swallows',
      price: 700,
      description:
        'Silky, traditionally fermented cassava fufu with distinct pleasant aroma, ideal for soaking up rich Afang and Editan soups.',
      ingredients: ['Fermented Wet Cassava Paste'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_native_fufu_akpu_nanobanana.jpg',
    },
    {
      id: 'party-jollof',
      name: 'Smoky Firewood Jollof Rice',
      nativeName: 'Calabar Party Jollof',
      category: 'rice',
      price: 3800,
      description:
        'Long-grain parboiled rice cooked in a rich reduction of fire-roasted tomatoes, tatashe, ginger, and garlic with authentic bottom-pot firewood smoke. Served with fried sweet plantain (Dodo) and tender peppered chicken.',
      ingredients: [
        'Long Grain Rice',
        'Fire Roasted Pepper Medley',
        'Spiced Peppered Chicken',
        'Fried Sweet Plantain (Dodo)',
        'Secret Calabar Spices',
      ],
      spiceLevel: 'Medium',
      isChefSpecial: true,
      image: './assets/images/dish_party_jollof_1794194344303.jpg',
      isDailyPot: true,
    },
    {
      id: 'native-coconut-rice',
      name: 'Cross River Native Coconut Rice',
      nativeName: 'Rice Ye Isip Eyop',
      category: 'rice',
      price: 4000,
      description:
        'Fragrant rice cooked gently in freshly pressed rich coconut milk, smoked bonga fish, ground river crayfish, and dry pepper. Topped with peppered smoked fish.',
      ingredients: ['Pure Fresh Coconut Milk', 'Smoked Fish Chunks', 'Crayfish', 'Scotch Bonnet', 'Tender Seasoned Beef'],
      spiceLevel: 'Medium',
      image: './assets/images/dish_coconut_rice_nanobanana.jpg',
      isDailyPot: true,
    },
    {
      id: 'fresh-palm-wine',
      name: 'Fresh Tapped Calabar Palm Wine',
      nativeName: 'Mmín Efik (Native Wine)',
      category: 'drinks',
      price: 1200,
      description: 'Naturally sweet, gently effervescent palm sap served chilled for dine-in and takeaway.',
      ingredients: ['Pure Natural Palm Sap'],
      spiceLevel: 'Mild',
      image: './assets/images/drink_palm_wine_fresh.jpg',
    },
    {
      id: 'calabar-zobo',
      name: 'Artisanal Spiced Zobo',
      nativeName: 'Infused Hibiscus & Cloves',
      category: 'drinks',
      price: 800,
      description:
        'Refreshing cold brew of natural roselle hibiscus petals steeped with pressed ginger, cloves, and pineapple peel.',
      ingredients: ['Hibiscus Sepals', 'Fresh Ginger', 'Cloves (Kanunfari)', 'Pineapple Essence'],
      spiceLevel: 'Mild',
      image: './assets/images/drink_spiced_zobo_fresh.jpg',
    },
  ];

  // 2. HELPERS, SANITIZATION & SECURITY
  const CART_STORAGE_KEY = 'calabar_kitchen_cart';

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/`/g, '&#96;');
  }

  function toWebpPath(jpgPath) {
    return String(jpgPath || '').replace(/\.(jpg|jpeg)$/i, '.webp');
  }

  function getTodayLocalISO() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function validatePhone(rawPhone) {
    const cleaned = String(rawPhone || '').trim();
    if (!cleaned) return false;
    // Allow optional leading '+', digits, spaces, hyphens, parentheses only
    if (!/^\+?[\d\s()-]+$/.test(cleaned)) return false;
    const digitsOnly = cleaned.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  }

  function validateNotPastDate(dateStr) {
    const trimmed = String(dateStr || '').trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return false;
    const parsed = new Date(`${trimmed}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return false;
    return trimmed >= getTodayLocalISO();
  }

  function setFieldError(errorEl, message, invalidInputs) {
    if (Array.isArray(invalidInputs)) {
      invalidInputs.forEach((input) => {
        if (input) input.classList.remove('is-invalid');
      });
    }
    if (!errorEl) return;
    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    } else {
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
  }

  function markFieldInvalid(errorEl, inputEl, message, groupInputs) {
    setFieldError(errorEl, message, groupInputs);
    if (inputEl) {
      inputEl.classList.add('is-invalid');
      inputEl.focus();
    }
  }

  function sanitizeCart(raw) {
    if (!Array.isArray(raw)) return [];
    const mergedMap = new Map();

    raw.forEach((entry) => {
      if (!entry || typeof entry !== 'object') return;
      const dish = MENU_ITEMS.find((d) => d.id === entry.dishId);
      if (!dish) return;

      let cleanSwallow;
      if (dish.category === 'soups' && typeof entry.swallow === 'string') {
        if (Object.prototype.hasOwnProperty.call(SWALLOW_PRICES, entry.swallow)) {
          cleanSwallow = entry.swallow;
        }
      }

      const rawQty = Number(entry.quantity);
      if (!Number.isFinite(rawQty)) return;
      const cleanQty = Math.min(99, Math.max(1, Math.floor(rawQty)));

      const extraPrice = cleanSwallow ? SWALLOW_PRICES[cleanSwallow] : 0;
      const canonicalPrice = dish.price + extraPrice;
      const canonicalId = `${dish.id}-${cleanSwallow || 'none'}`;

      const existing = mergedMap.get(canonicalId);
      if (existing) {
        existing.quantity = Math.min(99, existing.quantity + cleanQty);
      } else {
        mergedMap.set(canonicalId, {
          id: canonicalId,
          dishId: dish.id,
          swallow: cleanSwallow,
          quantity: cleanQty,
          unitPrice: canonicalPrice,
        });
      }
    });

    return Array.from(mergedMap.values());
  }

  function loadCartFromStorage() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      const cleaned = sanitizeCart(parsed);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cleaned));
      return cleaned;
    } catch (err) {
      try {
        localStorage.removeItem(CART_STORAGE_KEY);
      } catch (e) {}
      return [];
    }
  }

  // 3. STATE MANAGEMENT
  let cart = loadCartFromStorage();
  let activeCategory = 'all';
  let activeModalDish = null;
  let selectedModalSwallow = 'Pounded Yam';
  let deliveryType = 'delivery';
  let selectedZoneIndex = 0;
  let selectedResZone = 'Main Dining Room';
  let lastCompletedOrder = null;

  let initialReservationHTML = '';
  let initialContactHTML = '';

  // Focus restoration stacks
  const focusReturnMap = {
    lightbox: null,
    dish: null,
    legal: null,
    cart: null,
  };

  function saveCart() {
    cart = sanitizeCart(cart);
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  // 4. ACCESSIBILITY & FOCUS MANAGEMENT
  function getFocusableElements(container) {
    if (!container) return [];
    const selector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll(selector)).filter(
      (el) => el.offsetParent !== null || el === document.activeElement
    );
  }

  function focusFirstInModal(container) {
    const focusables = getFocusableElements(container);
    if (focusables.length > 0) {
      focusables[0].focus();
    }
  }

  function syncBodyScrollLock() {
    const lightbox = document.getElementById('image-lightbox-overlay');
    const dishModal = document.getElementById('dish-modal-overlay');
    const legalModal = document.getElementById('legal-modal-overlay');
    const drawerCart = document.getElementById('drawer-overlay');

    const anyOpen =
      (lightbox && lightbox.classList.contains('is-open')) ||
      (dishModal && dishModal.classList.contains('is-open')) ||
      (legalModal && legalModal.classList.contains('is-open')) ||
      (drawerCart && drawerCart.classList.contains('is-open'));

    document.body.style.overflow = anyOpen ? 'hidden' : '';
  }

  function restoreFocus(modalKey) {
    const prevEl = focusReturnMap[modalKey];
    focusReturnMap[modalKey] = null;
    if (prevEl && typeof prevEl.focus === 'function' && document.contains(prevEl)) {
      prevEl.focus();
    }
  }

  function getActiveTopModal() {
    const lightbox = document.getElementById('image-lightbox-overlay');
    if (lightbox && lightbox.classList.contains('is-open')) return lightbox;

    const dishModal = document.getElementById('dish-modal-overlay');
    if (dishModal && dishModal.classList.contains('is-open')) return dishModal;

    const legalModal = document.getElementById('legal-modal-overlay');
    if (legalModal && legalModal.classList.contains('is-open')) return legalModal;

    const drawerCart = document.getElementById('drawer-overlay');
    if (drawerCart && drawerCart.classList.contains('is-open')) return drawerCart;

    return null;
  }

  // 5. UI RENDERING ENGINES
  function renderDailyPots() {
    const container = document.getElementById('daily-pots-grid');
    if (!container) return;

    const dailyPots = MENU_ITEMS.filter((item) => item.isDailyPot);
    container.innerHTML = dailyPots
      .map((dish) => {
        const whatsappAvailabilityUrl = `https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${encodeURIComponent(
          "Hello Calabar Kitchen, I would like to check today's availability for " +
            dish.name +
            ' (₦' +
            dish.price.toLocaleString() +
            ').'
        )}`;
        const safeName = escapeHtml(dish.name);
        const safeNative = escapeHtml(dish.nativeName || '');
        const safeDesc = escapeHtml(dish.description);
        const safeId = escapeHtml(dish.id);
        const safeImg = escapeHtml(dish.image);
        const safeWebp = escapeHtml(toWebpPath(dish.image));

        return `
        <article class="pot-card">
          <div>
            <div class="pot-status-strip">
              <span class="status-badge-ready">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                Daily Pot Specialty
              </span>
              <a href="${whatsappAvailabilityUrl}" target="_blank" rel="noopener noreferrer" class="pot-availability-link" title="Check portion availability with kitchen">
                Confirm Availability &rarr;
              </a>
            </div>

            <div class="pot-body">
              <div class="pot-thumb-box" role="button" tabindex="0" data-action="open-lightbox" data-dish-id="${safeId}" aria-label="View full photo of ${safeName}" title="Click to view full image">
                <picture>
                  <source srcset="${safeWebp}" type="image/webp" />
                  <img src="${safeImg}" alt="${safeName} - Traditional Cross River dish at Calabar Kitchen" class="pot-thumb" width="800" height="597" loading="lazy" decoding="async" />
                </picture>
              </div>
              <div>
                <h3 class="pot-title">${safeName}</h3>
                <p class="pot-native">${safeNative}</p>
                <p class="pot-price tabular-nums">₦${dish.price.toLocaleString()}</p>
              </div>
            </div>

            <p class="pot-desc">${safeDesc}</p>
            ${
              dish.recommendedSwallow
                ? `<p class="pot-swallow-note"><strong>Best paired with:</strong> ${escapeHtml(dish.recommendedSwallow)}</p>`
                : ''
            }
          </div>

          <div class="pot-actions">
            <button type="button" class="btn-pot-detail" data-action="open-dish-modal" data-dish-id="${safeId}">View Pot Ingredients</button>
            <button type="button" class="btn-pot-order" data-action="quick-add" data-dish-id="${safeId}">
              <span>Order Portion</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </article>
      `;
      })
      .join('');
  }

  function renderMenu() {
    const container = document.getElementById('dishes-grid');
    if (!container) return;

    const filtered = MENU_ITEMS.filter(
      (item) => activeCategory === 'all' || item.category === activeCategory
    );

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="menu-empty-state">
          <h3>No dishes available in this category</h3>
          <p>Select Complete Menu to explore all freshly prepared dishes from our kitchen.</p>
          <button type="button" class="btn-reset-menu" data-action="reset-menu-filter">
            View Complete Menu
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map((dish) => {
        const safeName = escapeHtml(dish.name);
        const safeNative = escapeHtml(dish.nativeName || '');
        const safeDesc = escapeHtml(dish.description);
        const safeId = escapeHtml(dish.id);
        const safeImg = escapeHtml(dish.image);
        const safeWebp = escapeHtml(toWebpPath(dish.image));
        const safeIngredients = dish.ingredients.slice(0, 4).map(escapeHtml).join(' · ');

        return `
        <article class="dish-card">
          <div>
            <div class="dish-card-image-box" role="button" tabindex="0" data-action="open-lightbox" data-dish-id="${safeId}" aria-label="View full photo of ${safeName}" title="Click to view full image">
              <picture>
                <source srcset="${safeWebp}" type="image/webp" />
                <img src="${safeImg}" alt="${safeName} - Traditional Cross River dish prepared fresh at Calabar Kitchen Port Harcourt" class="dish-card-img" width="800" height="597" loading="lazy" decoding="async" />
              </picture>
              ${dish.isChefSpecial ? `<span class="dish-special-tag">House Signature</span>` : ''}
              <span class="dish-spice-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-brass)" stroke-width="2" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                ${escapeHtml(dish.spiceLevel)}
              </span>
            </div>

            <div class="dish-card-content">
              <div class="dish-title-row">
                <h3 class="dish-title">${safeName}</h3>
                <span class="dish-price tabular-nums">₦${dish.price.toLocaleString()}</span>
              </div>

              ${dish.nativeName ? `<p class="dish-native-name">${safeNative}</p>` : ''}
              <p class="dish-description">${safeDesc}</p>

              <div class="dish-ingredients-preview">
                <strong>Contains: </strong>
                <span>${safeIngredients}${dish.ingredients.length > 4 ? ' · +more' : ''}</span>
              </div>
            </div>
          </div>

          <div class="dish-card-footer">
            <button type="button" class="btn-dish-detail" data-action="open-dish-modal" data-dish-id="${safeId}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>Dish Details</span>
            </button>
            <button type="button" id="add-btn-${safeId}" class="btn-dish-add" data-action="quick-add" data-dish-id="${safeId}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              <span>Add to Order</span>
            </button>
          </div>
        </article>
      `;
      })
      .join('');
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counterEl = document.getElementById('cart-counter-badge');
    if (counterEl) {
      if (totalCount > 0) {
        counterEl.textContent = String(totalCount);
        counterEl.style.display = 'flex';
      } else {
        counterEl.style.display = 'none';
      }
    }

    renderCartDrawer();
  }

  function renderCartDrawer() {
    const bodyEl = document.getElementById('drawer-body-content');
    const footerEl = document.getElementById('drawer-footer-content');
    if (!bodyEl || !footerEl) return;

    if (lastCompletedOrder) {
      bodyEl.innerHTML = `
        <div class="confirm-panel">
          <div class="confirm-icon-circle is-success">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3 class="confirm-title">Order Request Prepared</h3>
          <p class="confirm-subtitle">Your order details are ready. Please send them via WhatsApp to confirm availability and preparation timing.</p>

          <div class="confirm-details-card is-surface">
            <div class="confirm-detail-row">
              <span class="confirm-detail-label">Order Reference</span>
              <span class="confirm-ref-code">${escapeHtml(lastCompletedOrder.orderId)}</span>
            </div>
            <div class="confirm-detail-row">
              <span class="confirm-detail-label">Customer Name</span>
              <span class="confirm-detail-value">${escapeHtml(lastCompletedOrder.customerName || 'Customer')}</span>
            </div>
            <div class="confirm-detail-row">
              <span class="confirm-detail-label">Total Amount</span>
              <span class="confirm-detail-value tabular-nums">₦${lastCompletedOrder.total.toLocaleString()}</span>
            </div>
            <div class="confirm-detail-row is-last">
              <span class="confirm-detail-label">Fulfillment</span>
              <span class="confirm-detail-value">${
                lastCompletedOrder.deliveryType === 'delivery'
                  ? 'Dispatch Delivery'
                  : 'Self Pickup at 41 & 42 Ikwerre Road'
              }</span>
            </div>
            <p class="confirm-payment-note">
              Payment is settled upon delivery or pickup via Cash or Direct Bank Transfer.
            </p>
          </div>

          <div class="confirm-actions-stack">
            <button type="button" class="confirm-whatsapp-btn" data-action="dispatch-completed-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>Send Order via WhatsApp to Confirm</span>
            </button>
            <a href="tel:09016607242" class="cart-call-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Kitchen Directly: 09016607242</span>
            </a>
            <button type="button" class="cart-secondary-btn" data-action="reset-completed-order">
              Done / Close Cart
            </button>
          </div>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    if (cart.length === 0) {
      bodyEl.innerHTML = `
        <div class="cart-empty-box">
          <div class="cart-empty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <h3 class="cart-empty-title">Your cart is empty</h3>
          <p class="cart-empty-desc">
            Explore our freshly prepared Afang soup, authentic White soup, or spicy 404 pepper soup and add portions to your cart.
          </p>
          <a href="#menu" class="cart-browse-btn" data-action="browse-menu">
            Browse Menu Dishes
          </a>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    // Preserve typed checkout values across re-renders
    const prevName = (document.getElementById('order-cust-name') || {}).value || '';
    const prevPhone = (document.getElementById('order-cust-phone') || {}).value || '';
    const prevAddress = (document.getElementById('order-cust-address') || {}).value || '';
    const prevNotes = (document.getElementById('order-cust-notes') || {}).value || '';

    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const activeZone = RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex] || RESTAURANT_PROFILE.deliveryZones[0];
    const fee = deliveryType === 'delivery' ? activeZone.fee : 0;
    const total = subtotal + fee;

    bodyEl.innerHTML = `
      <div class="cart-items-header">
        <span>Selected Items (${cart.length})</span>
        <button type="button" class="cart-clear-btn" data-action="clear-cart">Clear All</button>
      </div>

      <div class="cart-items-list">
        ${cart
          .map((item) => {
            const dish = MENU_ITEMS.find((d) => d.id === item.dishId);
            if (!dish) return '';
            const safeItemId = escapeHtml(item.id);
            const safeDishName = escapeHtml(dish.name);
            return `
            <div class="cart-item-card">
              <div class="cart-item-info">
                <h4 class="cart-item-title truncate">${safeDishName}</h4>
                ${item.swallow ? `<p class="cart-item-swallow truncate">+ ${escapeHtml(item.swallow)}</p>` : ''}
                <p class="cart-item-price tabular-nums">₦${(item.unitPrice * item.quantity).toLocaleString()}</p>
              </div>

              <div class="cart-item-controls">
                <div class="cart-stepper">
                  <button type="button" data-action="qty-dec" data-item-id="${safeItemId}" aria-label="Decrease quantity of ${safeDishName}">&minus;</button>
                  <span class="cart-stepper-qty tabular-nums">${item.quantity}</span>
                  <button type="button" data-action="qty-inc" data-item-id="${safeItemId}" aria-label="Increase quantity of ${safeDishName}">&plus;</button>
                </div>
                <button type="button" class="cart-remove-btn" data-action="remove-item" data-item-id="${safeItemId}" aria-label="Remove ${safeDishName} from cart">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          `;
          })
          .join('')}
      </div>

      <!-- Fulfillment Preference Toggle -->
      <div class="cart-fulfillment-block">
        <span class="cart-fulfillment-label">Fulfillment Preference</span>
        <div class="cart-fulfillment-toggle" role="group" aria-label="Fulfillment preference">
          <button type="button" class="cart-toggle-btn ${deliveryType === 'delivery' ? 'is-active' : ''}" data-action="set-delivery" data-type="delivery" aria-pressed="${deliveryType === 'delivery'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <span>Dispatch Delivery</span>
          </button>
          <button type="button" class="cart-toggle-btn ${deliveryType === 'pickup' ? 'is-active' : ''}" data-action="set-delivery" data-type="pickup" aria-pressed="${deliveryType === 'pickup'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>
            <span>Self Pickup (Free)</span>
          </button>
        </div>
      </div>

      <!-- Delivery / Contact Form -->
      <form id="drawer-checkout-form" class="cart-checkout-form" novalidate>
        <div>
          <label for="order-cust-name" class="cart-field-label">Your Full Name *</label>
          <input type="text" id="order-cust-name" required placeholder="e.g. Kenneth Briggs" class="cart-field-input" value="${escapeHtml(prevName)}" />
        </div>

        <div>
          <label for="order-cust-phone" class="cart-field-label">Phone Number (for kitchen confirmation) *</label>
          <input type="tel" id="order-cust-phone" required placeholder="e.g. 09016607242" class="cart-field-input" value="${escapeHtml(prevPhone)}" />
        </div>

        ${
          deliveryType === 'delivery'
            ? `
          <div>
            <label for="order-zone-select" class="cart-field-label">Port Harcourt Area / Zone *</label>
            <select id="order-zone-select" class="cart-field-input">
              ${RESTAURANT_PROFILE.deliveryZones
                .map(
                  (z, idx) => `
                <option value="${idx}" ${idx === selectedZoneIndex ? 'selected' : ''}>
                  ${escapeHtml(z.zone)} ${z.fee > 0 ? `(+₦${z.fee.toLocaleString()})` : '(Free)'}
                </option>
              `
                )
                .join('')}
            </select>
          </div>

          <div>
            <label for="order-cust-address" class="cart-field-label">Delivery Street Address &amp; Landmark *</label>
            <textarea id="order-cust-address" required rows="2" placeholder="e.g. Flat 4, 18 Tombia Street, New GRA, near Market Square" class="cart-field-input">${escapeHtml(prevAddress)}</textarea>
          </div>
        `
            : `
          <div class="cart-pickup-notice">
            <p class="cart-pickup-title">Pickup Location:</p>
            <p>Calabar Kitchen, 41 &amp; 42 Ikwerre Road, Port Harcourt.</p>
            <p class="cart-pickup-sub">Pickup readiness will be confirmed by our kitchen via WhatsApp or phone.</p>
          </div>
        `
        }

        <div>
          <label for="order-cust-notes" class="cart-field-label">Preparation Notes (Optional)</label>
          <input type="text" id="order-cust-notes" placeholder="e.g. Extra hot pepper in the 404, or pack swallow separately." class="cart-field-input" value="${escapeHtml(prevNotes)}" />
        </div>

        <p id="cart-form-error" class="form-error-msg" role="alert" hidden></p>
      </form>
    `;

    footerEl.innerHTML = `
      <div class="cart-totals-breakdown">
        <div class="cart-total-row">
          <span>Food Items Subtotal</span>
          <span class="cart-total-value tabular-nums">₦${subtotal.toLocaleString()}</span>
        </div>
        ${
          deliveryType === 'delivery'
            ? `
          <div class="cart-total-row">
            <span>Dispatch Delivery Fee</span>
            <span class="cart-total-value tabular-nums">₦${fee.toLocaleString()}</span>
          </div>
        `
            : ''
        }
        <div class="cart-total-grand">
          <span>Total Amount</span>
          <span class="cart-total-accent tabular-nums">₦${total.toLocaleString()}</span>
        </div>
      </div>

      <div class="cart-footer-actions">
        <button type="submit" form="drawer-checkout-form" class="cart-confirm-btn">
          <span>Confirm Order (Pay on Delivery/Transfer)</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <button type="button" class="cart-whatsapp-btn" data-action="dispatch-direct-whatsapp">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>Order Directly via WhatsApp</span>
        </button>
      </div>
    `;
  }

  // 6. MODAL & DRAWER CONTROLS
  function openDishModal(dishId, triggerEl) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish) return;

    activeModalDish = dish;
    selectedModalSwallow = 'Pounded Yam';

    const modalOverlay = document.getElementById('dish-modal-overlay');
    const content = document.getElementById('dish-modal-content');
    if (!modalOverlay || !content) return;

    focusReturnMap.dish = triggerEl || document.activeElement;

    const isSoup = dish.category === 'soups';
    const safeId = escapeHtml(dish.id);
    const safeName = escapeHtml(dish.name);
    const safeNative = escapeHtml(dish.nativeName || 'Calabar Native Specialty');
    const safeImg = escapeHtml(dish.image);
    const safeWebp = escapeHtml(toWebpPath(dish.image));

    content.innerHTML = `
      <div class="dish-modal-hero" role="button" tabindex="0" data-action="open-lightbox" data-dish-id="${safeId}" aria-label="View enlarged photo of ${safeName}" title="Click for full photo view">
        <picture>
          <source srcset="${safeWebp}" type="image/webp" />
          <img src="${safeImg}" alt="${safeName} - Calabar Kitchen Port Harcourt" class="dish-modal-hero-img" width="800" height="597" decoding="async" />
        </picture>
        <div class="dish-modal-hero-overlay">
          <div>
            <span class="dish-modal-native">${safeNative}</span>
            <h3 class="dish-modal-title">${safeName}</h3>
          </div>
        </div>
      </div>

      <div class="dish-modal-body">
        <div class="dish-modal-meta-row">
          <div class="dish-modal-badges">
            <span class="dish-modal-spice">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              ${escapeHtml(dish.spiceLevel)} Spice
            </span>
            <span class="dish-modal-fresh">Prepared fresh daily</span>
          </div>
          <span class="dish-modal-price tabular-nums">₦${dish.price.toLocaleString()}</span>
        </div>

        <p class="dish-modal-desc">${escapeHtml(dish.description)}</p>

        <div>
          <h4 class="dish-modal-section-label">Authentic Ingredients</h4>
          <div class="dish-modal-ingredients">
            ${dish.ingredients
              .map(
                (ing) => `<span class="dish-modal-ingredient-tag">${escapeHtml(ing)}</span>`
              )
              .join('')}
          </div>
        </div>

        ${
          isSoup
            ? `
          <div>
            <span class="dish-modal-section-label">Choose Traditional Swallow Accompaniment</span>
            <div id="modal-swallow-grid" class="modal-swallow-grid" role="group" aria-label="Choose traditional swallow">
              ${SWALLOW_OPTIONS.map(
                (opt) => `
                <button type="button" class="modal-swallow-opt ${opt === selectedModalSwallow ? 'is-selected' : ''}" data-action="select-swallow" data-opt="${escapeHtml(opt)}" aria-pressed="${opt === selectedModalSwallow}">
                  ${escapeHtml(opt)}
                </button>
              `
              ).join('')}
            </div>
          </div>
        `
            : ''
        }

        <div class="dish-modal-actions">
          <button type="button" id="modal-add-btn" class="dish-modal-add-btn" data-action="add-from-modal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Add to Cart — ₦${dish.price.toLocaleString()}</span>
          </button>
          <a href="https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${encodeURIComponent(
      'Hello Calabar Kitchen, I would like to enquire about ordering ' +
        dish.name +
        ' (₦' +
        dish.price.toLocaleString() +
        '). Is it currently available?'
    )}" target="_blank" rel="noopener noreferrer" class="confirm-whatsapp-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>Enquire About This Dish via WhatsApp</span>
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add('is-open');
    syncBodyScrollLock();
    const closeBtn = modalOverlay.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
    else focusFirstInModal(modalOverlay);
  }

  function closeDishModal() {
    const modalOverlay = document.getElementById('dish-modal-overlay');
    if (!modalOverlay || !modalOverlay.classList.contains('is-open')) return;
    modalOverlay.classList.remove('is-open');
    activeModalDish = null;
    syncBodyScrollLock();
    restoreFocus('dish');
  }

  function selectModalSwallow(opt) {
    if (!SWALLOW_OPTIONS.includes(opt)) return;
    selectedModalSwallow = opt;
    const buttons = document.querySelectorAll('.modal-swallow-opt');
    buttons.forEach((btn) => {
      const match = btn.getAttribute('data-opt') === opt;
      btn.classList.toggle('is-selected', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });
  }

  function addFromModal() {
    if (!activeModalDish) return;
    const swallow =
      activeModalDish.category === 'soups' && selectedModalSwallow !== 'No Swallow'
        ? selectedModalSwallow
        : undefined;
    addToCart(activeModalDish.id, swallow);

    const btn = document.getElementById('modal-add-btn');
    if (btn) {
      btn.classList.add('is-added');
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Added to Cart!</span>
      `;
    }

    setTimeout(() => {
      closeDishModal();
    }, 650);
  }

  function openLegalModal(type, triggerEl) {
    const overlay = document.getElementById('legal-modal-overlay');
    const titleEl = document.getElementById('legal-modal-title');
    const bodyEl = document.getElementById('legal-modal-body');
    if (!overlay || !titleEl || !bodyEl) return;

    focusReturnMap.legal = triggerEl || document.activeElement;

    if (type === 'privacy') {
      titleEl.textContent = 'Privacy Policy';
      bodyEl.innerHTML = `
        <p>At <strong>${escapeHtml(RESTAURANT_PROFILE.name)}</strong> (located at ${escapeHtml(
        RESTAURANT_PROFILE.address
      )}), we take the privacy of our diners and patrons seriously.</p>
        <h4>1. Information We Collect</h4>
        <p>We collect your contact name, phone number, delivery address in Port Harcourt, and dietary preferences when you place an order, make a table reservation, or send an enquiry.</p>
        <h4>2. How Your Information is Used</h4>
        <p>Your phone number is used exclusively by our dispatch riders and kitchen staff to confirm order delivery status or table reservations. We do not sell, rent, or distribute your personal details to third parties.</p>
        <h4>3. Direct Communications</h4>
        <p>If you choose to contact us via WhatsApp or phone at ${escapeHtml(
          RESTAURANT_PROFILE.phoneFormatted
        )}, messages are handled strictly for customer service and meal fulfillment.</p>
      `;
    } else {
      titleEl.textContent = 'Terms of Service';
      bodyEl.innerHTML = `
        <p>Welcome to <strong>${escapeHtml(
          RESTAURANT_PROFILE.name
        )}</strong>. By making a reservation or placing an order through this website, you agree to these operational terms.</p>
        <h4>1. Fresh Daily Preparations</h4>
        <p>Because our native Cross River soups (Afang, White soup, Edikang Ikong) and pepper soups are prepared daily using authentic wild herbs and fresh ingredients, all orders are subject to fresh pot availability.</p>
        <h4>2. Delivery and Self-Pickup</h4>
        <p>Dispatch delivery is provided throughout Port Harcourt (GRA, D-Line, Trans-Amadi, Mile 1/2/3, Choba, Peter Odili). Dispatch fees reflect distance and road logistics. Self-pickup is always complimentary at 41 &amp; 42 Ikwerre Road.</p>
        <h4>3. Payments</h4>
        <p>Payment for orders may be settled upon delivery or pickup via Cash on Delivery or verified Direct Bank Transfer.</p>
      `;
    }

    overlay.classList.add('is-open');
    syncBodyScrollLock();
    const closeBtn = overlay.querySelector('.legal-close-icon-btn');
    if (closeBtn) closeBtn.focus();
    else focusFirstInModal(overlay);
  }

  function closeLegalModal() {
    const overlay = document.getElementById('legal-modal-overlay');
    if (!overlay || !overlay.classList.contains('is-open')) return;
    overlay.classList.remove('is-open');
    syncBodyScrollLock();
    restoreFocus('legal');
  }

  function openImageLightbox(src, title, desc, triggerEl) {
    const overlay = document.getElementById('image-lightbox-overlay');
    const sourceWebpEl = document.getElementById('lightbox-source-webp');
    const imgEl = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');
    if (!overlay || !imgEl) return;

    focusReturnMap.lightbox = triggerEl || document.activeElement;

    if (sourceWebpEl) {
      sourceWebpEl.srcset = toWebpPath(src);
    }
    imgEl.src = src;
    imgEl.alt = title || 'Dish Photo';
    if (titleEl) titleEl.textContent = title || 'Calabar Kitchen Native Dish';
    if (descEl) descEl.textContent = desc || 'Prepared daily at 41 & 42 Ikwerre Road, Port Harcourt.';

    overlay.classList.add('is-open');
    syncBodyScrollLock();
    const closeBtn = overlay.querySelector('.lightbox-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeImageLightbox() {
    const overlay = document.getElementById('image-lightbox-overlay');
    if (!overlay || !overlay.classList.contains('is-open')) return;
    overlay.classList.remove('is-open');
    syncBodyScrollLock();
    restoreFocus('lightbox');
  }

  // 7. BACK TO TOP & HEADER SCROLL
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleScroll() {
    const btn = document.getElementById('back-to-top-btn');
    if (btn) {
      btn.classList.toggle('is-visible', window.scrollY > 350);
    }

    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 15);
    }
  }

  // 8. CART OPERATIONS
  function addToCart(dishId, swallow) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish) return;

    const cleanSwallow =
      dish.category === 'soups' && swallow && Object.prototype.hasOwnProperty.call(SWALLOW_PRICES, swallow)
        ? swallow
        : undefined;

    const extraPrice = cleanSwallow ? SWALLOW_PRICES[cleanSwallow] : 0;
    const key = `${dish.id}-${cleanSwallow || 'none'}`;
    const existing = cart.find((i) => i.id === key);

    if (existing) {
      existing.quantity = Math.min(99, existing.quantity + 1);
    } else {
      cart.push({
        id: key,
        dishId: dish.id,
        swallow: cleanSwallow,
        quantity: 1,
        unitPrice: dish.price + extraPrice,
      });
    }

    saveCart();
  }

  function quickAddDish(dishId) {
    addToCart(dishId);
    const btn = document.getElementById(`add-btn-${dishId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.classList.add('is-added');
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Added</span>
      `;
      setTimeout(() => {
        btn.classList.remove('is-added');
        btn.innerHTML = orig;
      }, 1500);
    }
  }

  function updateCartQty(itemKey, delta) {
    const item = cart.find((i) => i.id === itemKey);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== itemKey);
    }
    saveCart();
  }

  function removeCartItem(itemKey) {
    cart = cart.filter((i) => i.id !== itemKey);
    saveCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
  }

  function openCart(triggerEl) {
    const overlay = document.getElementById('drawer-overlay');
    if (!overlay) return;
    focusReturnMap.cart = triggerEl || document.activeElement;
    overlay.classList.add('is-open');
    renderCartDrawer();
    syncBodyScrollLock();
    const closeBtn = overlay.querySelector('.drawer-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeCart() {
    const overlay = document.getElementById('drawer-overlay');
    if (!overlay || !overlay.classList.contains('is-open')) return;
    overlay.classList.remove('is-open');
    syncBodyScrollLock();
    restoreFocus('cart');
  }

  function setDeliveryType(type) {
    if (type !== 'delivery' && type !== 'pickup') return;
    deliveryType = type;
    renderCartDrawer();
  }

  function setZone(idx) {
    const parsed = parseInt(idx, 10);
    if (Number.isNaN(parsed) || parsed < 0 || parsed >= RESTAURANT_PROFILE.deliveryZones.length) {
      selectedZoneIndex = 0;
    } else {
      selectedZoneIndex = parsed;
    }
    renderCartDrawer();
  }

  function resetCompletedOrder() {
    lastCompletedOrder = null;
    closeCart();
  }

  function validateCheckoutFields() {
    const nameInput = document.getElementById('order-cust-name');
    const phoneInput = document.getElementById('order-cust-phone');
    const addressInput = document.getElementById('order-cust-address');
    const notesInput = document.getElementById('order-cust-notes');
    const errorEl = document.getElementById('cart-form-error');
    const groupInputs = [nameInput, phoneInput, addressInput];

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const address = addressInput ? addressInput.value.trim() : '';
    const notes = notesInput ? notesInput.value.trim() : '';

    setFieldError(errorEl, '', groupInputs);

    if (!name || name.length < 2) {
      markFieldInvalid(errorEl, nameInput, 'Please enter your full name (at least 2 characters).', groupInputs);
      return null;
    }
    if (!validatePhone(phone)) {
      markFieldInvalid(
        errorEl,
        phoneInput,
        'Please enter a valid phone number (10 to 15 digits, e.g. 09016607242).',
        groupInputs
      );
      return null;
    }
    if (deliveryType === 'delivery' && (!address || address.length < 5)) {
      markFieldInvalid(
        errorEl,
        addressInput,
        'Please enter your street address and landmark for dispatch delivery.',
        groupInputs
      );
      return null;
    }

    return { name, phone, address, notes };
  }

  function handleOrderSubmit(e) {
    e.preventDefault();
    if (cart.length === 0) return;

    const validated = validateCheckoutFields();
    if (!validated) return;

    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const activeZone = RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex] || RESTAURANT_PROFILE.deliveryZones[0];
    const fee = deliveryType === 'delivery' ? activeZone.fee : 0;
    const total = subtotal + fee;
    const orderId = `CK-ORD-${Math.floor(10000 + Math.random() * 90000)}`;

    lastCompletedOrder = {
      orderId,
      total,
      deliveryType,
      customerName: validated.name,
      customerPhone: validated.phone,
      deliveryAddress: validated.address,
      zoneName: activeZone.zone,
      notes: validated.notes,
      items: [...cart],
    };

    cart = [];
    saveCart();
  }

  function dispatchWhatsAppFromCompleted() {
    if (!lastCompletedOrder) return;
    const itemsSummary = lastCompletedOrder.items
      .map((i) => {
        const dish = MENU_ITEMS.find((d) => d.id === i.dishId);
        return `• ${dish ? dish.name : 'Dish'} ${i.swallow ? `(with ${i.swallow})` : ''} x${i.quantity} — ₦${(
          i.unitPrice * i.quantity
        ).toLocaleString()}`;
      })
      .join('\n');

    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I just placed an order on your website!\n\n` +
        `Order Ref: ${lastCompletedOrder.orderId}\n` +
        `Customer Name: ${lastCompletedOrder.customerName || 'Customer'}\n` +
        `Phone: ${lastCompletedOrder.customerPhone || 'Not provided'}\n` +
        `Fulfillment: ${
          lastCompletedOrder.deliveryType === 'delivery'
            ? 'Dispatch Delivery'
            : 'Self Pickup at 41 & 42 Ikwerre Road'
        }\n` +
        (lastCompletedOrder.deliveryType === 'delivery'
          ? `Destination: ${lastCompletedOrder.deliveryAddress} (${lastCompletedOrder.zoneName})\n`
          : '') +
        (lastCompletedOrder.notes ? `Special Notes: ${lastCompletedOrder.notes}\n` : '') +
        `\nItems:\n${itemsSummary}\n\n` +
        `TOTAL AMOUNT: ₦${lastCompletedOrder.total.toLocaleString()}\n\n` +
        `Please confirm receipt and preparation timing.`
    );

    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }

  function dispatchWhatsAppDirect() {
    if (cart.length === 0) return;

    const validated = validateCheckoutFields();
    if (!validated) return;

    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const activeZone = RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex] || RESTAURANT_PROFILE.deliveryZones[0];
    const fee = deliveryType === 'delivery' ? activeZone.fee : 0;
    const total = subtotal + fee;

    const itemsSummary = cart
      .map((i) => {
        const dish = MENU_ITEMS.find((d) => d.id === i.dishId);
        return `• ${dish ? dish.name : 'Dish'} ${i.swallow ? `(with ${i.swallow})` : ''} x${i.quantity} — ₦${(
          i.unitPrice * i.quantity
        ).toLocaleString()}`;
      })
      .join('\n');

    const orderId = `CK-ORD-${Math.floor(10000 + Math.random() * 90000)}`;

    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I want to place an order via WhatsApp!\n\n` +
        `Order Ref: ${orderId}\n` +
        `Customer Name: ${validated.name}\n` +
        `Phone: ${validated.phone}\n` +
        `Fulfillment: ${
          deliveryType === 'delivery' ? 'Dispatch Delivery' : 'Self Pickup at 41 & 42 Ikwerre Road'
        }\n` +
        (deliveryType === 'delivery' ? `Destination: ${validated.address} (${activeZone.zone})\n` : '') +
        (validated.notes ? `Notes: ${validated.notes}\n` : '') +
        `\nItems Ordered:\n${itemsSummary}\n\n` +
        `Food Subtotal: ₦${subtotal.toLocaleString()}\n` +
        (deliveryType === 'delivery' ? `Delivery Fee: ₦${fee.toLocaleString()}\n` : '') +
        `TOTAL AMOUNT: ₦${total.toLocaleString()}\n\n` +
        `Please confirm preparation.`
    );

    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }

  // 9. FORM HANDLERS (RESERVATION & CONTACT)
  function selectResZone(zone) {
    selectedResZone = zone;
    const buttons = document.querySelectorAll('.zone-selector-btn');
    buttons.forEach((btn) => {
      const match = btn.getAttribute('data-zone') === zone;
      btn.classList.toggle('is-selected', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });
  }

  function applyReservationDateDefaults() {
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
      const today = getTodayLocalISO();
      dateInput.value = today;
      dateInput.min = today;
    }
  }

  function bindReservationForm() {
    const resForm = document.getElementById('table-reservation-form');
    if (resForm) {
      resForm.addEventListener('submit', handleReservationSubmit);
    }
    const zoneButtons = document.querySelectorAll('#reservation-card-container .zone-selector-btn');
    zoneButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.classList.contains('is-selected') ? 'true' : 'false');
      btn.addEventListener('click', () => {
        const zone = btn.getAttribute('data-zone');
        if (zone) selectResZone(zone);
      });
    });
    applyReservationDateDefaults();
  }

  function handleReservationSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const nameEl = form.querySelector('#res-guest-name');
    const phoneEl = form.querySelector('#res-phone');
    const dateEl = form.querySelector('#res-date');
    const timeEl = form.querySelector('#res-time');
    const guestsEl = form.querySelector('#res-guests');
    const notesEl = form.querySelector('#res-notes');
    const errorEl = form.querySelector('#res-form-error');
    const groupInputs = [nameEl, phoneEl, dateEl];

    const name = nameEl ? nameEl.value.trim() : '';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const date = dateEl ? dateEl.value.trim() : '';
    const time = timeEl ? timeEl.value.trim() : '';
    const guests = guestsEl ? guestsEl.value.trim() : '2';
    const notes = notesEl ? notesEl.value.trim() : '';

    setFieldError(errorEl, '', groupInputs);

    if (!name || name.length < 2) {
      markFieldInvalid(errorEl, nameEl, 'Please enter your full name (at least 2 characters).', groupInputs);
      return;
    }
    if (!validatePhone(phone)) {
      markFieldInvalid(
        errorEl,
        phoneEl,
        'Please enter a valid phone number (10 to 15 digits, e.g. 09016607242).',
        groupInputs
      );
      return;
    }
    if (!date) {
      markFieldInvalid(errorEl, dateEl, 'Please select a preferred reservation date.', groupInputs);
      return;
    }
    if (!validateNotPastDate(date)) {
      markFieldInvalid(
        errorEl,
        dateEl,
        'Reservation date cannot be in the past. Please choose today or a future date.',
        groupInputs
      );
      return;
    }

    const code = `CK-RES-${Math.floor(1000 + Math.random() * 9000)}`;
    const whatsappMsg = encodeURIComponent(
      `Hello Calabar Kitchen, I would like to submit a table reservation request!\n\n` +
        `Reservation Ref: ${code}\n` +
        `Customer Name: ${name}\n` +
        `Phone Number: ${phone}\n` +
        `Requested Date: ${date}\n` +
        `Requested Time: ${time}\n` +
        `Number of Guests: ${guests} Guests\n` +
        `Seating Preference: ${selectedResZone}\n` +
        (notes ? `Special Notes: ${notes}\n` : '') +
        `\nPlease let me know if this table can be confirmed. Thank you!`
    );
    const whatsappUrl = `https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${whatsappMsg}`;

    const container = document.getElementById('reservation-card-container');
    if (!container) return;

    container.innerHTML = `
      <div class="confirm-panel">
        <div class="confirm-icon-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </div>
        <h3 class="confirm-title">Your Reservation Request is Ready</h3>
        <p class="confirm-subtitle">
          Please send it through WhatsApp. Your table reservation is only confirmed once the restaurant responds.
        </p>

        <div class="confirm-details-card">
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Reference ID</span>
            <span class="confirm-ref-code">${escapeHtml(code)}</span>
          </div>
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Guest Name</span>
            <span class="confirm-detail-value">${escapeHtml(name)}</span>
          </div>
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Phone Number</span>
            <span class="confirm-detail-value">${escapeHtml(phone)}</span>
          </div>
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Date &amp; Time</span>
            <span class="confirm-detail-value">${escapeHtml(date)} at ${escapeHtml(time)}</span>
          </div>
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Party Size</span>
            <span class="confirm-detail-value">${escapeHtml(guests)} Guests</span>
          </div>
          <div class="confirm-detail-row ${notes ? '' : 'is-last'}">
            <span class="confirm-detail-label">Seating Preference</span>
            <span class="confirm-detail-value">${escapeHtml(selectedResZone)}</span>
          </div>
          ${
            notes
              ? `
            <div class="confirm-note-block">
              <span class="confirm-detail-label">Special Notes / Dishes</span>
              <p class="confirm-note-text">${escapeHtml(notes)}</p>
            </div>
          `
              : ''
          }
        </div>

        <div class="confirm-actions-stack">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="confirm-whatsapp-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>Send Request via WhatsApp Now</span>
          </a>

          <div class="confirm-alt-box">
            <p class="confirm-alt-title">Prefer to call or email?</p>
            <p>Call our dining room directly: <a href="tel:09016607242" class="confirm-alt-link">09016607242</a></p>
            <p>Or send an email to: <a href="mailto:calabarkitchen482@gmail.com" class="confirm-alt-link">calabarkitchen482@gmail.com</a></p>
          </div>

          <button type="button" class="confirm-reset-btn" data-action="reset-reservation">
            Edit Details / Make Another Request
          </button>
        </div>
      </div>
    `;
  }

  function resetReservationForm() {
    const container = document.getElementById('reservation-card-container');
    if (!container || !initialReservationHTML) return;
    container.innerHTML = initialReservationHTML;
    selectedResZone = 'Main Dining Room';
    bindReservationForm();
    const nameInput = container.querySelector('#res-guest-name');
    if (nameInput) nameInput.focus();
  }

  function bindContactForm() {
    const contactForm = document.getElementById('general-enquiry-form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleContactSubmit);
    }
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const nameEl = form.querySelector('#contact-name');
    const phoneEl = form.querySelector('#contact-phone');
    const emailEl = form.querySelector('#contact-email');
    const subjectEl = form.querySelector('#contact-subject');
    const msgEl = form.querySelector('#contact-msg');
    const errorEl = form.querySelector('#contact-form-error');
    const groupInputs = [nameEl, phoneEl, emailEl, msgEl];

    const name = nameEl ? nameEl.value.trim() : '';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const subject = subjectEl ? subjectEl.value.trim() : 'General Enquiry';
    const message = msgEl ? msgEl.value.trim() : '';

    setFieldError(errorEl, '', groupInputs);

    if (!name || name.length < 2) {
      markFieldInvalid(errorEl, nameEl, 'Please enter your name (at least 2 characters).', groupInputs);
      return;
    }
    if (!validatePhone(phone)) {
      markFieldInvalid(
        errorEl,
        phoneEl,
        'Please enter a valid phone number (10 to 15 digits, e.g. 09016607242).',
        groupInputs
      );
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      markFieldInvalid(errorEl, emailEl, 'Please enter a valid email address or leave it blank.', groupInputs);
      return;
    }
    if (!message || message.length < 3) {
      markFieldInvalid(errorEl, msgEl, 'Please enter your enquiry message (at least 3 characters).', groupInputs);
      return;
    }

    const whatsappMsg = encodeURIComponent(
      `Hello Calabar Kitchen, I have an enquiry from your website!\n\n` +
        `Sender Name: ${name}\n` +
        `Phone Number: ${phone}\n` +
        (email ? `Email: ${email}\n` : '') +
        `Inquiry Topic: ${subject}\n` +
        `Message: ${message}\n\n` +
        `Please reply at your earliest convenience. Thank you!`
    );
    const whatsappUrl = `https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${whatsappMsg}`;

    const card = document.getElementById('contact-form-container');
    if (!card) return;

    card.innerHTML = `
      <div class="confirm-panel">
        <div class="confirm-icon-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </div>
        <h3 class="confirm-title">Your Enquiry is Ready</h3>
        <p class="confirm-subtitle">
          Thank you for contacting Calabar Kitchen. Your message has been prepared below. Please send it through WhatsApp; our team will review your enquiry and respond as soon as possible.
        </p>

        <div class="confirm-details-card">
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Sender Name</span>
            <span class="confirm-detail-value">${escapeHtml(name)}</span>
          </div>
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Phone Number</span>
            <span class="confirm-detail-value">${escapeHtml(phone)}</span>
          </div>
          ${
            email
              ? `
            <div class="confirm-detail-row">
              <span class="confirm-detail-label">Email</span>
              <span class="confirm-detail-value">${escapeHtml(email)}</span>
            </div>
          `
              : ''
          }
          <div class="confirm-detail-row">
            <span class="confirm-detail-label">Topic</span>
            <span class="confirm-detail-value">${escapeHtml(subject)}</span>
          </div>
          <div class="confirm-note-block">
            <span class="confirm-detail-label">Message:</span>
            <p class="confirm-note-text">${escapeHtml(message)}</p>
          </div>
        </div>

        <div class="confirm-actions-stack">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="confirm-whatsapp-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>Send Enquiry via WhatsApp Now</span>
          </a>

          <div class="confirm-alt-box">
            <p class="confirm-alt-title">Alternative ways to reach us:</p>
            <p>Direct Call: <a href="tel:09016607242" class="confirm-alt-link">+234 901 660 7242</a></p>
            <p>Official Email: <a href="mailto:calabarkitchen482@gmail.com" class="confirm-alt-link">calabarkitchen482@gmail.com</a></p>
          </div>

          <button type="button" class="confirm-reset-btn" data-action="reset-contact">
            Write Another Message
          </button>
        </div>
      </div>
    `;
  }

  function resetContactForm() {
    const card = document.getElementById('contact-form-container');
    if (!card || !initialContactHTML) return;
    card.innerHTML = initialContactHTML;
    bindContactForm();
    const nameInput = card.querySelector('#contact-name');
    if (nameInput) nameInput.focus();
  }

  // 10. NAVIGATION & FILTERS
  function filterCategory(catId) {
    activeCategory = catId;
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach((btn) => {
      const match = btn.getAttribute('data-cat') === catId;
      btn.classList.toggle('is-active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });
    renderMenu();
  }

  function toggleMobileMenu(forceClose) {
    const sheet = document.getElementById('mobile-nav-sheet');
    const btn = document.getElementById('mobile-menu-toggle-btn') || document.querySelector('.hamburger-btn');
    if (!sheet) return;

    const isOpen = sheet.classList.contains('is-open');
    const shouldClose = forceClose || isOpen;

    if (shouldClose) {
      sheet.classList.remove('is-open');
      if (btn) {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open navigation menu');
      }
    } else {
      sheet.classList.add('is-open');
      if (btn) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Close navigation menu');
      }
    }
  }

  // 11. EVENT DELEGATION & INITIALIZATION
  function openDishLightboxById(dishId, triggerEl) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish) return;
    openImageLightbox(dish.image, dish.name, `₦${dish.price.toLocaleString()} — ${dish.description}`, triggerEl);
  }

  function bindStaticListeners() {
    // Open cart buttons
    document.querySelectorAll('[data-action="open-cart"]').forEach((el) => {
      el.addEventListener('click', () => openCart(el));
    });

    // Close cart buttons + overlay click outside container
    const drawerOverlay = document.getElementById('drawer-overlay');
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', (e) => {
        if (e.target === drawerOverlay || e.target.closest('[data-action="close-cart"]')) {
          closeCart();
        }
      });
    }

    // Mobile menu toggle and close links
    const mobileToggle = document.querySelector('[data-action="toggle-mobile-menu"]');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => toggleMobileMenu());
    }
    document.querySelectorAll('[data-action="close-mobile-menu"]').forEach((el) => {
      el.addEventListener('click', () => toggleMobileMenu(true));
    });

    // Category tabs
    document.querySelectorAll('.cat-btn[data-cat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        if (cat) filterCategory(cat);
      });
    });

    // Static Hero / Heritage Lightbox triggers
    document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
      const launch = () => {
        openImageLightbox(
          el.getAttribute('data-lightbox-src'),
          el.getAttribute('data-lightbox-title'),
          el.getAttribute('data-lightbox-desc'),
          el
        );
      };
      el.addEventListener('click', launch);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          launch();
        }
      });
    });

    // Legal modal buttons
    document.querySelectorAll('[data-legal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-legal');
        if (type) openLegalModal(type, btn);
      });
    });

    // Dish modal close / backdrop
    const dishOverlay = document.getElementById('dish-modal-overlay');
    if (dishOverlay) {
      dishOverlay.addEventListener('click', (e) => {
        if (e.target === dishOverlay || e.target.closest('[data-action="close-dish-modal"]')) {
          closeDishModal();
        }
      });
    }

    // Legal modal close / backdrop
    const legalOverlay = document.getElementById('legal-modal-overlay');
    if (legalOverlay) {
      legalOverlay.addEventListener('click', (e) => {
        if (e.target === legalOverlay || e.target.closest('[data-action="close-legal-modal"]')) {
          closeLegalModal();
        }
      });
    }

    // Lightbox close / backdrop
    const lightboxOverlay = document.getElementById('image-lightbox-overlay');
    if (lightboxOverlay) {
      lightboxOverlay.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="close-lightbox"]')) {
          closeImageLightbox();
          return;
        }
        if (!e.target.closest('.lightbox-dialog')) {
          closeImageLightbox();
        }
      });
    }

    // Back to top button
    const bttBtn = document.querySelector('[data-action="scroll-top"]');
    if (bttBtn) {
      bttBtn.addEventListener('click', scrollToTop);
    }

    // Delegated actions inside Daily Pots & Menu grids (supports click & keyboard on thumb/card boxes)
    const handleCardGridActivation = (e) => {
      const actionEl = e.target.closest('[data-action]');
      if (!actionEl) return;
      const action = actionEl.getAttribute('data-action');
      const dishId = actionEl.getAttribute('data-dish-id');

      if (action === 'open-lightbox' && dishId) {
        openDishLightboxById(dishId, actionEl);
      } else if (action === 'open-dish-modal' && dishId) {
        openDishModal(dishId, actionEl);
      } else if (action === 'quick-add' && dishId) {
        quickAddDish(dishId);
      } else if (action === 'reset-menu-filter') {
        filterCategory('all');
      }
    };

    const handleCardGridKeydown = (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const box = e.target.closest('[data-action="open-lightbox"][data-dish-id]');
      if (!box) return;
      e.preventDefault();
      openDishLightboxById(box.getAttribute('data-dish-id'), box);
    };

    const potsGrid = document.getElementById('daily-pots-grid');
    if (potsGrid) {
      potsGrid.addEventListener('click', handleCardGridActivation);
      potsGrid.addEventListener('keydown', handleCardGridKeydown);
    }

    const dishesGrid = document.getElementById('dishes-grid');
    if (dishesGrid) {
      dishesGrid.addEventListener('click', handleCardGridActivation);
      dishesGrid.addEventListener('keydown', handleCardGridKeydown);
    }

    // Delegated actions inside Dish Modal
    const dishModalContent = document.getElementById('dish-modal-content');
    if (dishModalContent) {
      dishModalContent.addEventListener('click', (e) => {
        const actionEl = e.target.closest('[data-action]');
        if (!actionEl) return;
        const action = actionEl.getAttribute('data-action');
        if (action === 'open-lightbox') {
          openDishLightboxById(actionEl.getAttribute('data-dish-id'), actionEl);
        } else if (action === 'select-swallow') {
          selectModalSwallow(actionEl.getAttribute('data-opt'));
        } else if (action === 'add-from-modal') {
          addFromModal();
        }
      });
      dishModalContent.addEventListener('keydown', handleCardGridKeydown);
    }

    // Delegated actions inside Cart Drawer Body & Footer
    const drawerBody = document.getElementById('drawer-body-content');
    if (drawerBody) {
      drawerBody.addEventListener('click', (e) => {
        const actionEl = e.target.closest('[data-action]');
        if (!actionEl) return;
        const action = actionEl.getAttribute('data-action');
        const itemId = actionEl.getAttribute('data-item-id');

        if (action === 'clear-cart') {
          clearCart();
        } else if (action === 'qty-dec' && itemId) {
          updateCartQty(itemId, -1);
        } else if (action === 'qty-inc' && itemId) {
          updateCartQty(itemId, 1);
        } else if (action === 'remove-item' && itemId) {
          removeCartItem(itemId);
        } else if (action === 'set-delivery') {
          setDeliveryType(actionEl.getAttribute('data-type'));
        } else if (action === 'browse-menu') {
          closeCart();
        } else if (action === 'dispatch-completed-whatsapp') {
          dispatchWhatsAppFromCompleted();
        } else if (action === 'reset-completed-order') {
          resetCompletedOrder();
        }
      });

      drawerBody.addEventListener('change', (e) => {
        if (e.target && e.target.id === 'order-zone-select') {
          setZone(e.target.value);
        }
      });

      drawerBody.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'drawer-checkout-form') {
          handleOrderSubmit(e);
        }
      });
    }

    const drawerFooter = document.getElementById('drawer-footer-content');
    if (drawerFooter) {
      drawerFooter.addEventListener('click', (e) => {
        const actionEl = e.target.closest('[data-action="dispatch-direct-whatsapp"]');
        if (actionEl) {
          dispatchWhatsAppDirect();
        }
      });
    }

    // Delegated reset handlers inside Reservation & Contact containers
    const resContainer = document.getElementById('reservation-card-container');
    if (resContainer) {
      resContainer.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="reset-reservation"]')) {
          resetReservationForm();
        }
      });
    }

    const contactContainer = document.getElementById('contact-form-container');
    if (contactContainer) {
      contactContainer.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="reset-contact"]')) {
          resetContactForm();
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const copyrightYearEl = document.getElementById('copyright-year');
    if (copyrightYearEl) {
      copyrightYearEl.textContent = String(new Date().getFullYear());
    }

    const resContainer = document.getElementById('reservation-card-container');
    if (resContainer) {
      initialReservationHTML = resContainer.innerHTML;
    }
    const contactContainer = document.getElementById('contact-form-container');
    if (contactContainer) {
      initialContactHTML = contactContainer.innerHTML;
    }

    bindReservationForm();
    bindContactForm();
    bindStaticListeners();

    renderDailyPots();
    renderMenu();
    updateCartUI();

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Global Escape & Tab Focus Trap for active modals/drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const topModal = getActiveTopModal();
        if (topModal) {
          if (topModal.id === 'image-lightbox-overlay') closeImageLightbox();
          else if (topModal.id === 'dish-modal-overlay') closeDishModal();
          else if (topModal.id === 'legal-modal-overlay') closeLegalModal();
          else if (topModal.id === 'drawer-overlay') closeCart();
          return;
        }
        toggleMobileMenu(true);
        return;
      }

      if (e.key === 'Tab') {
        const topModal = getActiveTopModal();
        if (!topModal) return;
        const focusables = getFocusableElements(topModal);
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first || !topModal.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last || !topModal.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  });

  // Expose controlled public API (read/action helpers without unsafe inline reliance)
  window.CalabarApp = {
    openDishModal,
    closeDishModal,
    selectModalSwallow,
    addFromModal,
    openImageLightbox,
    closeImageLightbox,
    scrollToTop,
    openLegalModal,
    closeLegalModal,
    addToCart,
    quickAddDish,
    updateCartQty,
    removeCartItem,
    clearCart,
    openCart,
    closeCart,
    setDeliveryType,
    setZone,
    handleOrderSubmit,
    dispatchWhatsAppFromCompleted,
    dispatchWhatsAppDirect,
    resetCompletedOrder,
    selectResZone,
    handleReservationSubmit,
    handleContactSubmit,
    filterCategory,
    toggleMobileMenu,
  };
})();
