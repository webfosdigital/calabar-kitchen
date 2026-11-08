/**
 * CALABAR KITCHEN — PRODUCTION ENGINE (VANILLA JAVASCRIPT ES6+)
 * Authentic Cross River Native Cuisine & Hospitality
 * 41 & 42 Ikwerre Road, Port Harcourt, Rivers State, Nigeria
 */

(function () {
  'use strict';

  // 1. RESTAURANT DATA & PROFILE
  const RESTAURANT_PROFILE = {
    name: 'Calabar Kitchen',
    nativeTagline: 'Udia Efik Ye Calabar',
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
      { zone: 'Ikwerre Road & Mile 1/2/3 (Instant Pickup / Near)', fee: 0 },
      { zone: 'Old GRA & New GRA (Port Harcourt)', fee: 1200 },
      { zone: 'D-Line & Olu Obasanjo', fee: 1000 },
      { zone: 'Trans-Amadi Industrial Layout', fee: 1500 },
      { zone: 'Rumuola & Rumuokwuta', fee: 1200 },
      { zone: 'Peter Odili & Abuloma Road', fee: 2000 },
      { zone: 'Rumuokoro & Choba Axis', fee: 2200 },
      { zone: 'Woji & Elelenwo Axis', fee: 2200 },
    ],
  };

  const MENU_ITEMS = [
    {
      id: 'afang-soup',
      name: 'Royal Afang Soup',
      nativeName: 'Afang Native Pot',
      category: 'soups',
      price: 4500,
      description: 'The crowning glory of Cross River cuisine. Shredded wild ukazi leaves and tender waterleaf slow-simmered with assorted beef, stockfish, dried river prawns, and deshelled periwinkles in rich unrefined palm oil.',
      ingredients: ['Wild Ukazi Leaves', 'Fresh Waterleaf', 'Assorted Beef', 'Stockfish Head', 'River Periwinkles (Mfi)', 'Smoked Catfish', 'Pure Palm Oil'],
      spiceLevel: 'Medium',
      isChefSpecial: true,
      image: './assets/images/dish_afang_soup_1794102728482.jpg',
      recommendedSwallow: 'Pounded Yam or Yellow Garri (Eba)',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'white-soup',
      name: 'Calabar White Soup',
      nativeName: 'Afia Efere',
      category: 'soups',
      price: 4200,
      description: 'An aromatic, oil-free Cross River native soup enriched with pounded yam starch, native uyayak (aromatic fruit pod), local peppers, and choice chunks of tender goat meat and smoked bushfish.',
      ingredients: ['Tender Goat Meat', 'Native Uyayak Pod', 'Uziza Seeds', 'Smoked Fish', 'Yam Thickener', 'Native Crayfish'],
      spiceLevel: 'Medium',
      isChefSpecial: true,
      image: './assets/images/dish_white_soup_1794102729231.jpg',
      recommendedSwallow: 'Steaming Hot Pounded Yam',
      availableToday: true,
      potStatus: 'Simmering Fresh',
    },
    {
      id: 'edikang-ikong',
      name: 'Edikang Ikong Royale',
      nativeName: 'Edikang Ikong',
      category: 'soups',
      price: 4800,
      description: 'The quintessential Calabar vegetable soup. An exquisite, nutrient-dense pot prepared strictly with pristine fluted pumpkin leaves (Ugwu), tender waterleaf, seasoned kpomo, dry fish, periwinkles, and tender beef cuts.',
      ingredients: ['Fluted Pumpkin (Ugwu)', 'Waterleaf', 'Tender Beef Chunks', 'Seasoned Kpomo', 'Deboned Dry Fish', 'Periwinkles', 'Crayfish'],
      spiceLevel: 'Mild',
      isChefSpecial: true,
      image: './assets/images/dish_afang_soup_1794102728482.jpg',
      recommendedSwallow: 'Yellow Garri (Eba) or Semovita',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'editan-soup',
      name: 'Editan Native Soup',
      nativeName: 'Editan Ye Mfi',
      category: 'soups',
      price: 4600,
      description: 'Rare traditional Cross River specialty made from finely sliced editan leaves with their characteristic pleasant bitter notes, balanced with fresh waterleaf, assorted meats, and dried river prawns.',
      ingredients: ['Editan Leaves', 'Fresh Waterleaf', 'Assorted Offals & Beef', 'River Prawns', 'Periwinkles', 'Smoked Bonga Fish'],
      spiceLevel: 'Medium',
      image: './assets/images/dish_afang_soup_1794102728482.jpg',
      recommendedSwallow: 'Fufu (Akpu) or Pounded Yam',
      availableToday: true,
      potStatus: 'Limited Portions',
    },
    {
      id: 'waterleaf-soup',
      name: 'Fresh Waterleaf Soup',
      nativeName: 'Mmong Mmong Ikong',
      category: 'soups',
      price: 3800,
      description: 'Light, silky, and profoundly comforting native soup made with freshly harvested waterleaf, smoked dried fish, crayfish, and tender shredded meats simmered in aromatic broth.',
      ingredients: ['Garden Fresh Waterleaf', 'Smoked Fish', 'Shredded Beef', 'Native Seasoning', 'Crayfish'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_white_soup_1794102729231.jpg',
      recommendedSwallow: 'Yellow Garri or Semovita',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'dog-meat-pepper-soup',
      name: 'Special "404" Pepper Soup',
      nativeName: 'Native Dog Meat Pepper Soup',
      category: 'peppersoups',
      price: 4200,
      description: 'Authentic spicy delicacy prepared in the legendary Calabar tradition. Richly seasoned with wild alligator pepper, uziza seeds, uda pods, and fresh scent leaves. Unsurpassed depth of flavor.',
      ingredients: ['Selected Native Cuts', 'Calabar Pepper Soup Spices', 'Uziza Seeds', 'Uda Pod', 'Fresh Scent Leaves', 'Scotch Bonnet Peppers'],
      spiceLevel: 'Fiery',
      isChefSpecial: true,
      image: './assets/images/dish_pepper_soup_1794102730377.jpg',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'cow-head-tail-pepper-soup',
      name: 'Cow Head & Tail Pepper Soup',
      nativeName: 'Isi & Odu Ebot Pepper Soup',
      category: 'peppersoups',
      price: 4000,
      description: 'Hearty, gelatinous cuts of slow-braised cow tail and tender cow head in an invigorating, piping hot herbal native broth with fresh utazi and habanero chilies.',
      ingredients: ['Braised Cow Tail', 'Cow Head Cuts', 'Calabash Nutmeg', 'Utazi Leaves', 'Native Herbal Infusion', 'Crushed Chili'],
      spiceLevel: 'Hot',
      image: './assets/images/dish_pepper_soup_1794102730377.jpg',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'assorted-meat-pepper-soup',
      name: 'Assorted Meat Pepper Soup',
      nativeName: 'Assorted Native Pepper Broth',
      category: 'peppersoups',
      price: 3600,
      description: 'Generous medley of tender shaki (tripe), liver, kidney, and soft beef cuts in a steaming aromatic herbal pepper broth that restores energy and warms the soul.',
      ingredients: ['Beef Tripe (Shaki)', 'Liver & Kidney', 'Tender Beef', 'Aromatic Native Spices', 'Scent Leaves'],
      spiceLevel: 'Hot',
      image: './assets/images/dish_pepper_soup_1794102730377.jpg',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'pounded-yam',
      name: 'Pounded Yam',
      nativeName: 'Iyan / Steaming Yam',
      category: 'swallows',
      price: 1000,
      description: 'Smooth, stretchy, and lump-free authentic pounded yam prepared freshly per order from premium Rivers and Benue white yams.',
      ingredients: ['100% Premium White Yam'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_white_soup_1794102729231.jpg',
      availableToday: true,
    },
    {
      id: 'yellow-garri',
      name: 'Yellow Garri (Eba)',
      nativeName: 'Bendel / Calabar Eba',
      category: 'swallows',
      price: 700,
      description: 'Finely processed palm-oil fermented cassava flour turned with boiling water into a firm, satisfying traditional swallow.',
      ingredients: ['Yellow Cassava Garri', 'Hot Filtered Water'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_afang_soup_1794102728482.jpg',
      availableToday: true,
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
      image: './assets/images/dish_white_soup_1794102729231.jpg',
      availableToday: true,
    },
    {
      id: 'fufu',
      name: 'Calabar Native Fufu (Akpu)',
      nativeName: 'Traditional Akpu',
      category: 'swallows',
      price: 700,
      description: 'Silky, traditionally fermented cassava fufu with distinct pleasant aroma, ideal for soaking up rich Afang and Editan soups.',
      ingredients: ['Fermented Wet Cassava Paste'],
      spiceLevel: 'Mild',
      image: './assets/images/dish_afang_soup_1794102728482.jpg',
      availableToday: true,
    },
    {
      id: 'party-jollof',
      name: 'Smoky Firewood Jollof Rice',
      nativeName: 'Calabar Party Jollof',
      category: 'rice',
      price: 3800,
      description: 'Long-grain parboiled rice cooked in a rich reduction of fire-roasted tomatoes, tatashe, ginger, and garlic with authentic bottom-pot firewood smoke. Served with fried sweet plantain (Dodo) and tender peppered chicken.',
      ingredients: ['Long Grain Rice', 'Fire Roasted Pepper Medley', 'Spiced Peppered Chicken', 'Fried Sweet Plantain (Dodo)', 'Secret Calabar Spices'],
      spiceLevel: 'Medium',
      isChefSpecial: true,
      image: './assets/images/hero_calabar_kitchen_1794102728383.jpg',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'native-coconut-rice',
      name: 'Cross River Native Coconut Rice',
      nativeName: 'Rice Ye Isip Eyop',
      category: 'rice',
      price: 4000,
      description: 'Fragrant rice cooked gently in freshly pressed rich coconut milk, smoked bonga fish, ground river crayfish, and dry pepper. Topped with peppered smoked fish.',
      ingredients: ['Pure Fresh Coconut Milk', 'Smoked Fish Chunks', 'Crayfish', 'Scotch Bonnet', 'Tender Seasoned Beef'],
      spiceLevel: 'Medium',
      image: './assets/images/hero_calabar_kitchen_1794102728383.jpg',
      availableToday: true,
      potStatus: 'Ready to Serve',
    },
    {
      id: 'fresh-palm-wine',
      name: 'Fresh Tapped Calabar Palm Wine',
      nativeName: 'Mmín Efik (Native Wine)',
      category: 'drinks',
      price: 1200,
      description: 'Naturally sweet, unadulterated palm sap tapped at dawn from oil palm trees in Cross River groves. Served chilled in a traditional calabash cup.',
      ingredients: ['100% Pure Natural Palm Sap'],
      spiceLevel: 'Mild',
      image: './assets/images/restaurant_ambiance_1794102730506.jpg',
      availableToday: true,
    },
    {
      id: 'calabar-zobo',
      name: 'Artisanal Spiced Zobo',
      nativeName: 'Infused Hibiscus & Cloves',
      category: 'drinks',
      price: 800,
      description: 'Refreshing cold brew of natural roselle hibiscus petals steeped with pressed ginger, cloves, and pineapple peel for natural sweetness.',
      ingredients: ['Hibiscus Sepals', 'Fresh Ginger', 'Cloves (Kanunfari)', 'Pineapple Essence'],
      spiceLevel: 'Mild',
      image: './assets/images/restaurant_ambiance_1794102730506.jpg',
      availableToday: true,
    },
  ];

  // 2. STATE MANAGEMENT
  let cart = [];
  try {
    const saved = localStorage.getItem('calabar_kitchen_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (err) {
    cart = [];
  }

  let activeCategory = 'all';
  let searchQuery = '';
  let activeModalDish = null;
  let selectedModalSwallow = 'Pounded Yam';
  let deliveryType = 'delivery';
  let selectedZoneIndex = 0;
  let lastCompletedOrder = null;

  function saveCart() {
    try {
      localStorage.setItem('calabar_kitchen_cart', JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  // 3. UI RENDERING ENGINES

  // Render Daily Pots
  function renderDailyPots() {
    const container = document.getElementById('daily-pots-grid');
    if (!container) return;

    const dailyPots = MENU_ITEMS.filter((item) => item.potStatus);
    container.innerHTML = dailyPots.map((dish) => {
      let statusHtml = '';
      if (dish.potStatus === 'Ready to Serve') {
        statusHtml = `<span class="status-badge-ready"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Ready to Serve</span>`;
      } else if (dish.potStatus === 'Simmering Fresh') {
        statusHtml = `<span class="status-badge-simmer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> Simmering Fresh</span>`;
      } else {
        statusHtml = `<span class="status-badge-limited"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Limited Portions Left</span>`;
      }

      return `
        <article class="pot-card">
          <div>
            <div class="pot-status-strip">
              ${statusHtml}
              <span style="color: #7A7064; display: flex; align-items: center; gap: 4px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Piping Hot
              </span>
            </div>

            <div class="pot-body">
              <div class="pot-thumb-box">
                <img src="${dish.image}" alt="${dish.name}" class="pot-thumb" loading="lazy">
              </div>
              <div>
                <h3 class="pot-title">${dish.name}</h3>
                <p class="pot-native">${dish.nativeName || ''}</p>
                <p class="pot-price tabular-nums">₦${dish.price.toLocaleString()}</p>
              </div>
            </div>

            <p class="pot-desc">${dish.description}</p>
            ${dish.recommendedSwallow ? `<p class="pot-swallow-note"><strong>Best paired with:</strong> ${dish.recommendedSwallow}</p>` : ''}
          </div>

          <div class="pot-actions">
            <button class="btn-pot-detail" onclick="window.CalabarApp.openDishModal('${dish.id}')">View Pot Ingredients</button>
            <button class="btn-pot-order" onclick="window.CalabarApp.quickAddDish('${dish.id}')">
              <span>Order Portion</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // Render Menu Section
  function renderMenu() {
    const container = document.getElementById('dishes-grid');
    if (!container) return;

    const filtered = MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.nativeName && item.nativeName.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background-color: #F4EFE6; border-radius: 12px; border: 1px dashed #D5CDC0;">
          <p style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 600;">No dishes found matching "${escapeHtml(searchQuery)}"</p>
          <p style="font-size: 0.875rem; color: #6C6255; margin-top: 0.5rem;">Try searching for Afang, White soup, 404 pepper soup, or pounded yam.</p>
          <button onclick="window.CalabarApp.resetMenuFilter()" style="margin-top: 1rem; padding: 0.5rem 1rem; background-color: var(--accent-primary); color: #fff; font-size: 0.75rem; font-weight: 600; border-radius: 8px;">Reset Search & Filter</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((dish) => {
      return `
        <article class="dish-card">
          <div>
            <div class="dish-card-image-box">
              <img src="${dish.image}" alt="${dish.name}" class="dish-card-img" loading="lazy">
              ${dish.isChefSpecial ? `<span class="dish-special-tag">Chef's Native Signature</span>` : ''}
              <span class="dish-spice-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E87A38" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                ${dish.spiceLevel}
              </span>
            </div>

            <div class="dish-card-content">
              <div class="dish-title-row">
                <h3 class="dish-title">${dish.name}</h3>
                <span class="dish-price tabular-nums">₦${dish.price.toLocaleString()}</span>
              </div>

              ${dish.nativeName ? `<p class="dish-native-name">${dish.nativeName}</p>` : ''}
              <p class="dish-description">${dish.description}</p>

              <div class="dish-ingredients-preview">
                <strong>Contains: </strong>
                <span>${dish.ingredients.slice(0, 4).join(' · ')}${dish.ingredients.length > 4 ? ' · +more' : ''}</span>
              </div>
            </div>
          </div>

          <div class="dish-card-footer">
            <button class="btn-dish-detail" onclick="window.CalabarApp.openDishModal('${dish.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>Dish Details</span>
            </button>
            <button id="add-btn-${dish.id}" class="btn-dish-add" onclick="window.CalabarApp.quickAddDish('${dish.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              <span>Add to Order</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // Update Cart UI & Counters
  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counterEl = document.getElementById('cart-counter-badge');
    if (counterEl) {
      if (totalCount > 0) {
        counterEl.textContent = totalCount;
        counterEl.style.display = 'flex';
      } else {
        counterEl.style.display = 'none';
      }
    }

    renderCartDrawer();
  }

  // Render Slide-Over Cart Drawer
  function renderCartDrawer() {
    const bodyEl = document.getElementById('drawer-body-content');
    const footerEl = document.getElementById('drawer-footer-content');
    if (!bodyEl || !footerEl) return;

    if (lastCompletedOrder) {
      bodyEl.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
          <div style="width: 4rem; height: 4rem; background-color: rgba(34, 103, 59, 0.1); color: #22673B; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;">Order Received!</h3>
          <p style="font-size: 0.875rem; color: #5C5348; margin-bottom: 1.5rem;">Our kitchen at 41 & 42 Ikwerre Road is preparing your meal.</p>
          
          <div style="background-color: #FFFFFF; border-radius: 12px; border: 1px solid #DFD7CB; padding: 1rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.875rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: #6B6155;">Order Reference</span>
              <span style="font-family: monospace; font-weight: bold; color: var(--accent-primary);">${lastCompletedOrder.orderId}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: #6B6155;">Total Amount</span>
              <span style="font-weight: bold;" class="tabular-nums">₦${lastCompletedOrder.total.toLocaleString()}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #6B6155;">Delivery Method</span>
              <span style="text-transform: capitalize; font-weight: 500;">${lastCompletedOrder.deliveryType}</span>
            </div>
            <p style="font-size: 0.75rem; color: #7A7064; border-top: 1px solid #ECE6DB; padding-top: 0.5rem; margin-top: 0.5rem;">
              Payment can be settled via Cash on Delivery or Direct Bank Transfer upon food arrival.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button onclick="window.CalabarApp.dispatchWhatsAppFromCompleted()" style="width: 100%; padding: 0.875rem; background-color: var(--green-badge); color: #fff; font-weight: 600; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.875rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>Track / Confirm via WhatsApp</span>
            </button>
            <button onclick="window.CalabarApp.resetCompletedOrder()" style="width: 100%; padding: 0.625rem; border: 1px solid #DFD7CB; color: #4A4136; font-size: 0.75rem; font-weight: 500; border-radius: 8px;">
              Done
            </button>
          </div>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    if (cart.length === 0) {
      bodyEl.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem;">
          <div style="width: 4rem; height: 4rem; background-color: var(--bg-alt); color: #9A9083; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.125rem; font-weight: 600; margin-bottom: 0.25rem;">Your order bag is empty</h3>
          <p style="font-size: 0.75rem; color: #6C6357; max-width: 18rem; margin: 0 auto 1.5rem;">
            Explore our freshly simmered Afang soup, authentic White soup, or spicy 404 pepper soup and add portions to your bag.
          </p>
          <button onclick="window.CalabarApp.closeCart(); window.location.hash = '#menu';" style="padding: 0.625rem 1.25rem; background-color: var(--accent-primary); color: #fff; font-size: 0.75rem; font-weight: 600; border-radius: 8px;">
            Browse Menu Dishes
          </button>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    // Render items list & checkout inputs
    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const fee = deliveryType === 'delivery' ? (RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.fee || 0) : 0;
    const total = subtotal + fee;

    bodyEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #7A7064; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-subtle); margin-bottom: 1rem;">
        <span>Selected Items (${cart.length})</span>
        <button onclick="window.CalabarApp.clearCart()" style="color: #b91c1c; font-size: 11px;">Clear All</button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
        ${cart.map((item) => {
          const dish = MENU_ITEMS.find((d) => d.id === item.dishId);
          if (!dish) return '';
          return `
            <div class="cart-item-card">
              <div style="min-width: 0; flex: 1;">
                <h4 style="font-size: 0.875rem; font-weight: 600; color: var(--text-main);" class="truncate">${dish.name}</h4>
                ${item.swallow ? `<p style="font-size: 0.75rem; color: #7C3F10;" class="truncate">+ ${item.swallow}</p>` : ''}
                <p style="font-size: 0.75rem; font-weight: 500; color: var(--text-main); margin-top: 2px;" class="tabular-nums">₦${(item.unitPrice * item.quantity).toLocaleString()}</p>
              </div>

              <div style="display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0;">
                <div class="cart-stepper">
                  <button onclick="window.CalabarApp.updateCartQty('${item.id}', -1)" aria-label="Decrease">&minus;</button>
                  <span class="cart-stepper-qty tabular-nums">${item.quantity}</span>
                  <button onclick="window.CalabarApp.updateCartQty('${item.id}', 1)" aria-label="Increase">&plus;</button>
                </div>
                <button onclick="window.CalabarApp.removeCartItem('${item.id}')" style="color: #9A9083; padding: 4px;" aria-label="Remove item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Fulfillment Preference Toggle -->
      <div style="margin-bottom: 1.25rem;">
        <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #3A322A; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          Fulfillment Preference
        </label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; background-color: var(--bg-alt); padding: 4px; border-radius: 8px;">
          <button type="button" onclick="window.CalabarApp.setDeliveryType('delivery')" style="padding: 0.5rem; font-size: 0.75rem; font-weight: 500; border-radius: 6px; display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s; ${deliveryType === 'delivery' ? 'background: #fff; color: #1E1B18; box-shadow: var(--shadow-sm);' : 'color: #5C5348;'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <span>Dispatch Delivery</span>
          </button>
          <button type="button" onclick="window.CalabarApp.setDeliveryType('pickup')" style="padding: 0.5rem; font-size: 0.75rem; font-weight: 500; border-radius: 6px; display: flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s; ${deliveryType === 'pickup' ? 'background: #fff; color: #1E1B18; box-shadow: var(--shadow-sm);' : 'color: #5C5348;'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>
            <span>Self Pickup (Free)</span>
          </button>
        </div>
      </div>

      <!-- Delivery / Contact Form -->
      <form id="drawer-checkout-form" onsubmit="window.CalabarApp.handleOrderSubmit(event)" style="display: flex; flex-direction: column; gap: 0.875rem;">
        <div>
          <label style="display: block; font-size: 0.75rem; font-weight: 500; color: #4A4136; margin-bottom: 4px;">Your Full Name *</label>
          <input type="text" id="order-cust-name" required placeholder="e.g. Kenneth Briggs" style="width: 100%; padding: 0.5rem 0.75rem; background-color: #fff; border: 1px solid #D5CDC0; border-radius: 8px; font-size: 0.75rem; color: #1E1B18; outline: none;">
        </div>

        <div>
          <label style="display: block; font-size: 0.75rem; font-weight: 500; color: #4A4136; margin-bottom: 4px;">Phone Number (for dispatch call) *</label>
          <input type="tel" id="order-cust-phone" required placeholder="e.g. 09016607242" style="width: 100%; padding: 0.5rem 0.75rem; background-color: #fff; border: 1px solid #D5CDC0; border-radius: 8px; font-size: 0.75rem; color: #1E1B18; outline: none;">
        </div>

        ${deliveryType === 'delivery' ? `
          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 500; color: #4A4136; margin-bottom: 4px;">Port Harcourt Area / Zone *</label>
            <select id="order-zone-select" onchange="window.CalabarApp.setZone(this.value)" style="width: 100%; padding: 0.5rem 0.75rem; background-color: #fff; border: 1px solid #D5CDC0; border-radius: 8px; font-size: 0.75rem; color: #1E1B18; outline: none;">
              ${RESTAURANT_PROFILE.deliveryZones.map((z, idx) => `
                <option value="${idx}" ${idx === selectedZoneIndex ? 'selected' : ''}>
                  ${z.zone} ${z.fee > 0 ? `(+₦${z.fee.toLocaleString()})` : '(Free)'}
                </option>
              `).join('')}
            </select>
          </div>

          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 500; color: #4A4136; margin-bottom: 4px;">Delivery Street Address & Landmark *</label>
            <textarea id="order-cust-address" required rows="2" placeholder="e.g. Flat 4, 18 Tombia Street, New GRA, near Market Square" style="width: 100%; padding: 0.5rem 0.75rem; background-color: #fff; border: 1px solid #D5CDC0; border-radius: 8px; font-size: 0.75rem; color: #1E1B18; outline: none;"></textarea>
          </div>
        ` : `
          <div style="padding: 0.75rem; background-color: var(--bg-alt); border-radius: 8px; font-size: 0.75rem; color: #5A5044;">
            <p style="font-weight: 600; color: #1E1B18; margin-bottom: 2px;">Pickup Location:</p>
            <p>Calabar Kitchen, 41 & 42 Ikwerre Road, Port Harcourt.</p>
            <p style="font-size: 11px; color: #7A7064; margin-top: 4px;">Ready within 25–30 minutes after order placement.</p>
          </div>
        `}

        <div>
          <label style="display: block; font-size: 0.75rem; font-weight: 500; color: #4A4136; margin-bottom: 4px;">Preparation Notes (Optional)</label>
          <input type="text" id="order-cust-notes" placeholder="e.g. Extra hot pepper in the 404, or pack swallow separately." style="width: 100%; padding: 0.5rem 0.75rem; background-color: #fff; border: 1px solid #D5CDC0; border-radius: 8px; font-size: 0.75rem; color: #1E1B18; outline: none;">
        </div>
      </form>
    `;

    footerEl.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.375rem; font-size: 0.75rem; color: #6B6155; margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between;">
          <span>Food Items Subtotal</span>
          <span style="font-weight: 500; color: var(--text-main);" class="tabular-nums">₦${subtotal.toLocaleString()}</span>
        </div>
        ${deliveryType === 'delivery' ? `
          <div style="display: flex; justify-content: space-between;">
            <span>Dispatch Delivery Fee</span>
            <span style="font-weight: 500; color: var(--text-main);" class="tabular-nums">₦${fee.toLocaleString()}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; font-size: 0.875rem; font-weight: bold; color: var(--text-main); border-top: 1px solid #ECE6DB; padding-top: 0.5rem; margin-top: 0.25rem;">
          <span>Total Amount</span>
          <span style="color: var(--accent-primary);" class="tabular-nums">₦${total.toLocaleString()}</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <button type="submit" form="drawer-checkout-form" style="width: 100%; padding: 0.875rem; background-color: var(--accent-primary); color: #fff; font-weight: 500; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; box-shadow: var(--shadow-sm); cursor: pointer;">
          <span>Confirm Order (Pay on Delivery/Transfer)</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <button type="button" onclick="window.CalabarApp.dispatchWhatsAppDirect()" style="width: 100%; padding: 0.625rem; background-color: var(--green-badge); color: #fff; font-weight: 600; border-radius: 8px; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; gap: 0.375rem; cursor: pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>Order Directly via WhatsApp</span>
        </button>
      </div>
    `;
  }

  // 4. MODAL CONTROLS

  function openDishModal(dishId) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish) return;

    activeModalDish = dish;
    selectedModalSwallow = 'Pounded Yam';

    const modalOverlay = document.getElementById('dish-modal-overlay');
    const content = document.getElementById('dish-modal-content');
    if (!modalOverlay || !content) return;

    const isSoup = dish.category === 'soups';
    const swallowOptions = ['Pounded Yam', 'Yellow Garri (Eba)', 'Semovita', 'Calabar Fufu (Akpu)', 'No Swallow'];

    content.innerHTML = `
      <div style="position: relative; height: 14rem; background-color: var(--bg-alt); flex-shrink: 0;">
        <img src="${dish.image}" alt="${dish.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); display: flex; align-items: flex-end; padding: 1.5rem;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #E8C4A2; font-weight: 600;">
              ${dish.nativeName || 'Calabar Native Specialty'}
            </span>
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; color: #fff; margin-top: 2px;">
              ${dish.name}
            </h3>
          </div>
        </div>
      </div>

      <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #F0EBE2;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 0.75rem; padding: 2px 8px; border-radius: 6px; background-color: var(--bg-pill); color: var(--accent-primary); font-weight: 500; border: 1px solid #F2DECE; display: flex; align-items: center; gap: 4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              ${dish.spiceLevel} Spice
            </span>
            ${dish.potStatus ? `<span style="font-size: 0.75rem; color: var(--green-badge); font-weight: 500;">${dish.potStatus}</span>` : ''}
          </div>
          <span style="font-family: var(--font-display); font-size: 1.5rem; font-weight: bold; color: var(--text-main);" class="tabular-nums">
            ₦${dish.price.toLocaleString()}
          </span>
        </div>

        <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">${dish.description}</p>

        <div>
          <h4 style="font-size: 0.75rem; font-weight: 600; color: #3A322A; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
            Authentic Ingredients
          </h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${dish.ingredients.map((ing) => `
              <span style="font-size: 0.75rem; padding: 4px 10px; background-color: var(--bg-canvas); color: var(--text-muted); border: 1px solid var(--border-subtle); border-radius: 6px; font-weight: 500;">
                ${ing}
              </span>
            `).join('')}
          </div>
        </div>

        ${isSoup ? `
          <div>
            <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #3A322A; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
              Choose Traditional Swallow Accompaniment
            </label>
            <div id="modal-swallow-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
              ${swallowOptions.map((opt) => `
                <button type="button" onclick="window.CalabarApp.selectModalSwallow('${opt}')" class="modal-swallow-opt" data-opt="${opt}" style="padding: 0.5rem; font-size: 0.75rem; font-weight: 500; border-radius: 8px; border: 1px solid ${opt === selectedModalSwallow ? 'var(--accent-primary)' : 'var(--border-card)'}; background-color: ${opt === selectedModalSwallow ? 'var(--bg-pill)' : 'var(--bg-canvas)'}; color: ${opt === selectedModalSwallow ? 'var(--accent-primary)' : 'var(--text-muted)'}; cursor: pointer; text-align: center;">
                  ${opt}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div style="padding-top: 0.75rem; border-top: 1px solid #F0EBE2;">
          <button id="modal-add-btn" onclick="window.CalabarApp.addFromModal()" style="width: 100%; padding: 0.75rem; font-size: 0.875rem; font-weight: 600; border-radius: 8px; background-color: var(--accent-primary); color: #fff; display: flex; align-items: center; justify-content: center; gap: 0.5rem; box-shadow: var(--shadow-sm); cursor: pointer;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Add to Order — ₦${dish.price.toLocaleString()}</span>
          </button>
        </div>
      </div>
    `;

    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDishModal() {
    const modalOverlay = document.getElementById('dish-modal-overlay');
    if (modalOverlay) modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    activeModalDish = null;
  }

  function selectModalSwallow(opt) {
    selectedModalSwallow = opt;
    const buttons = document.querySelectorAll('.modal-swallow-opt');
    buttons.forEach((btn) => {
      const match = btn.getAttribute('data-opt') === opt;
      btn.style.borderColor = match ? 'var(--accent-primary)' : 'var(--border-card)';
      btn.style.backgroundColor = match ? 'var(--bg-pill)' : 'var(--bg-canvas)';
      btn.style.color = match ? 'var(--accent-primary)' : 'var(--text-muted)';
      btn.style.fontWeight = match ? '600' : '500';
    });
  }

  function addFromModal() {
    if (!activeModalDish) return;
    const swallow = (activeModalDish.category === 'soups' && selectedModalSwallow !== 'No Swallow') ? selectedModalSwallow : undefined;
    addToCart(activeModalDish.id, swallow);

    const btn = document.getElementById('modal-add-btn');
    if (btn) {
      btn.style.backgroundColor = 'var(--green-badge)';
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Added to Bag!</span>
      `;
    }

    setTimeout(() => {
      closeDishModal();
    }, 700);
  }

  // Legal Modal
  function openLegalModal(type) {
    const overlay = document.getElementById('legal-modal-overlay');
    const titleEl = document.getElementById('legal-modal-title');
    const bodyEl = document.getElementById('legal-modal-body');
    if (!overlay || !titleEl || !bodyEl) return;

    if (type === 'privacy') {
      titleEl.textContent = 'Privacy Policy';
      bodyEl.innerHTML = `
        <p>At <strong>${RESTAURANT_PROFILE.name}</strong> (located at ${RESTAURANT_PROFILE.address}), we take the privacy of our diners and patrons seriously.</p>
        <h4 style="font-size: 0.875rem; font-weight: 600; color: #1E1B18; margin-top: 0.75rem;">1. Information We Collect</h4>
        <p>We collect your contact name, phone number, delivery address in Port Harcourt, and dietary preferences when you place an order, make a table reservation, or send an enquiry.</p>
        <h4 style="font-size: 0.875rem; font-weight: 600; color: #1E1B18; margin-top: 0.75rem;">2. How Your Information is Used</h4>
        <p>Your phone number is used exclusively by our dispatch riders and kitchen staff to confirm order delivery status or table reservations. We do not sell, rent, or distribute your personal details to third parties.</p>
        <h4 style="font-size: 0.875rem; font-weight: 600; color: #1E1B18; margin-top: 0.75rem;">3. Direct Communications</h4>
        <p>If you choose to contact us via WhatsApp or phone at ${RESTAURANT_PROFILE.phoneFormatted}, messages are handled strictly for customer service and meal fulfillment.</p>
      `;
    } else {
      titleEl.textContent = 'Terms of Service';
      bodyEl.innerHTML = `
        <p>Welcome to <strong>${RESTAURANT_PROFILE.name}</strong>. By making a reservation or placing an order through this website, you agree to these operational terms.</p>
        <h4 style="font-size: 0.875rem; font-weight: 600; color: #1E1B18; margin-top: 0.75rem;">1. Fresh Daily Preparations</h4>
        <p>Because our native Cross River soups (Afang, White soup, Edikang Ikong) and pepper soups are prepared daily using authentic wild herbs and fresh ingredients, all orders are subject to fresh pot availability.</p>
        <h4 style="font-size: 0.875rem; font-weight: 600; color: #1E1B18; margin-top: 0.75rem;">2. Delivery and Self-Pickup</h4>
        <p>Dispatch delivery is provided throughout Port Harcourt (GRA, D-Line, Trans-Amadi, Mile 1/2/3, Choba, Peter Odili). Dispatch fees reflect distance and road logistics. Self-pickup is always complimentary at 41 & 42 Ikwerre Road.</p>
        <h4 style="font-size: 0.875rem; font-weight: 600; color: #1E1B18; margin-top: 0.75rem;">3. Payments</h4>
        <p>Payment for orders may be settled upon delivery or pickup via Cash on Delivery or verified Direct Bank Transfer.</p>
      `;
    }

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLegalModal() {
    const overlay = document.getElementById('legal-modal-overlay');
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // 5. CART OPERATIONS

  function addToCart(dishId, swallow) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish) return;

    let extraPrice = 0;
    if (swallow) {
      if (swallow.includes('Pounded Yam')) extraPrice = 1000;
      else if (swallow.includes('Garri') || swallow.includes('Eba')) extraPrice = 700;
      else if (swallow.includes('Semovita')) extraPrice = 800;
      else if (swallow.includes('Fufu') || swallow.includes('Akpu')) extraPrice = 700;
    }

    const key = `${dish.id}-${swallow || 'none'}`;
    const existing = cart.find((i) => i.id === key);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: key,
        dishId: dish.id,
        swallow: swallow,
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
      btn.style.backgroundColor = 'var(--green-badge)';
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Added</span>
      `;
      setTimeout(() => {
        btn.style.backgroundColor = '';
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

  function openCart() {
    const overlay = document.getElementById('drawer-overlay');
    if (overlay) overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }

  function closeCart() {
    const overlay = document.getElementById('drawer-overlay');
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function setDeliveryType(type) {
    deliveryType = type;
    renderCartDrawer();
  }

  function setZone(idx) {
    selectedZoneIndex = parseInt(idx, 10);
    renderCartDrawer();
  }

  function resetCompletedOrder() {
    lastCompletedOrder = null;
    closeCart();
  }

  // Handle Order Checkout
  function handleOrderSubmit(e) {
    e.preventDefault();
    if (cart.length === 0) return;

    const nameInput = document.getElementById('order-cust-name');
    const phoneInput = document.getElementById('order-cust-phone');
    const addressInput = document.getElementById('order-cust-address');
    const notesInput = document.getElementById('order-cust-notes');

    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const fee = deliveryType === 'delivery' ? (RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.fee || 0) : 0;
    const total = subtotal + fee;

    const orderId = `CK-ORD-${Math.floor(10000 + Math.random() * 90000)}`;

    lastCompletedOrder = {
      orderId,
      total,
      deliveryType,
      customerName: nameInput ? nameInput.value : '',
      customerPhone: phoneInput ? phoneInput.value : '',
      deliveryAddress: addressInput ? addressInput.value : '',
      zoneName: RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.zone || '',
      notes: notesInput ? notesInput.value : '',
      items: [...cart],
    };

    cart = [];
    saveCart();
  }

  function dispatchWhatsAppFromCompleted() {
    if (!lastCompletedOrder) return;
    const itemsSummary = lastCompletedOrder.items.map((i) => {
      const dish = MENU_ITEMS.find((d) => d.id === i.dishId);
      return `• ${dish ? dish.name : 'Dish'} ${i.swallow ? `(with ${i.swallow})` : ''} x${i.quantity} — ₦${(i.unitPrice * i.quantity).toLocaleString()}`;
    }).join('\n');

    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I just placed an order on your website!\n\n` +
      `Order Ref: ${lastCompletedOrder.orderId}\n` +
      `Customer Name: ${lastCompletedOrder.customerName || 'Customer'}\n` +
      `Phone: ${lastCompletedOrder.customerPhone || 'Not provided'}\n` +
      `Fulfillment: ${lastCompletedOrder.deliveryType === 'delivery' ? 'Dispatch Delivery' : 'Self Pickup at 41 Ikwerre Road'}\n` +
      (lastCompletedOrder.deliveryType === 'delivery' ? `Destination: ${lastCompletedOrder.deliveryAddress} (${lastCompletedOrder.zoneName})\n` : '') +
      (lastCompletedOrder.notes ? `Special Notes: ${lastCompletedOrder.notes}\n` : '') +
      `\nItems:\n${itemsSummary}\n\n` +
      `TOTAL AMOUNT: ₦${lastCompletedOrder.total.toLocaleString()}\n\n` +
      `Please confirm receipt and dispatch timing.`
    );

    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank');
  }

  function dispatchWhatsAppDirect() {
    if (cart.length === 0) return;
    const nameInput = document.getElementById('order-cust-name');
    const phoneInput = document.getElementById('order-cust-phone');
    const addressInput = document.getElementById('order-cust-address');
    const notesInput = document.getElementById('order-cust-notes');

    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const fee = deliveryType === 'delivery' ? (RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.fee || 0) : 0;
    const total = subtotal + fee;

    const itemsSummary = cart.map((i) => {
      const dish = MENU_ITEMS.find((d) => d.id === i.dishId);
      return `• ${dish ? dish.name : 'Dish'} ${i.swallow ? `(with ${i.swallow})` : ''} x${i.quantity} — ₦${(i.unitPrice * i.quantity).toLocaleString()}`;
    }).join('\n');

    const orderId = `CK-ORD-${Math.floor(10000 + Math.random() * 90000)}`;

    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I want to place an order via WhatsApp!\n\n` +
      `Order Ref: ${orderId}\n` +
      `Customer Name: ${nameInput && nameInput.value ? nameInput.value : 'Customer'}\n` +
      `Phone: ${phoneInput && phoneInput.value ? phoneInput.value : 'Not provided'}\n` +
      `Fulfillment: ${deliveryType === 'delivery' ? 'Dispatch Delivery' : 'Self Pickup at 41 Ikwerre Road'}\n` +
      (deliveryType === 'delivery' && addressInput && addressInput.value ? `Destination: ${addressInput.value} (${RESTAURANT_PROFILE.deliveryZones[selectedZoneIndex]?.zone})\n` : '') +
      (notesInput && notesInput.value ? `Notes: ${notesInput.value}\n` : '') +
      `\nItems Ordered:\n${itemsSummary}\n\n` +
      `Food Subtotal: ₦${subtotal.toLocaleString()}\n` +
      (deliveryType === 'delivery' ? `Delivery Fee: ₦${fee.toLocaleString()}\n` : '') +
      `TOTAL AMOUNT: ₦${total.toLocaleString()}\n\n` +
      `Please confirm preparation.`
    );

    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank');
  }

  // 6. FORM HANDLERS (RESERVATION & CONTACT)

  let selectedResZone = 'Main Dining Room';

  function selectResZone(zone) {
    selectedResZone = zone;
    const buttons = document.querySelectorAll('.zone-selector-btn');
    buttons.forEach((btn) => {
      const match = btn.getAttribute('data-zone') === zone;
      if (match) {
        btn.classList.add('is-selected');
      } else {
        btn.classList.remove('is-selected');
      }
    });
  }

  let lastReservationCode = '';
  let lastReservationData = null;

  function handleReservationSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('#res-guest-name').value;
    const phone = form.querySelector('#res-phone').value;
    const date = form.querySelector('#res-date').value;
    const time = form.querySelector('#res-time').value;
    const guests = form.querySelector('#res-guests').value;
    const notes = form.querySelector('#res-notes').value;

    const code = `CK-${Math.floor(1000 + Math.random() * 9000)}`;
    lastReservationCode = code;
    lastReservationData = { name, phone, date, time, guests, zone: selectedResZone, notes };

    const container = document.getElementById('reservation-card-container');
    if (!container) return;

    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 0;">
        <div style="width: 3.5rem; height: 3.5rem; background-color: rgba(34, 103, 59, 0.1); color: #22673B; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;">Table Reserved Successfully!</h3>
        <p style="font-size: 0.875rem; color: #5C5348; margin-bottom: 1.5rem;">We look forward to hosting you at Calabar Kitchen, 41 & 42 Ikwerre Road, Port Harcourt.</p>
        
        <div style="max-width: 24rem; margin: 0 auto 1.5rem; background-color: var(--bg-canvas); border-radius: 12px; border: 1px solid var(--border-card); padding: 1.25rem; text-align: left; font-size: 0.875rem;">
          <div style="display: flex; justify-content: space-between; padding-bottom: 0.5rem; border-bottom: 1px solid #ECE6DB;">
            <span style="color: #6B6155;">Confirmation Code</span>
            <span style="font-family: monospace; font-weight: bold; color: var(--accent-primary);">${code}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #ECE6DB;">
            <span style="color: #6B6155;">Guest Name</span>
            <span style="font-weight: 500;">${name}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #ECE6DB;">
            <span style="color: #6B6155;">Date & Time</span>
            <span style="font-weight: 500;">${date} at ${time}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #ECE6DB;">
            <span style="color: #6B6155;">Party Size</span>
            <span style="font-weight: 500;">${guests} Guests</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 0.5rem;">
            <span style="color: #6B6155;">Seating Area</span>
            <span style="font-weight: 500;">${selectedResZone}</span>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
          <button onclick="window.CalabarApp.confirmReservationWhatsApp()" style="padding: 0.75rem 1.25rem; background-color: var(--green-badge); color: #fff; font-size: 0.875rem; font-weight: 500; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>Send to Kitchen WhatsApp</span>
          </button>
          <button onclick="window.location.reload()" style="padding: 0.75rem 1.25rem; border: 1px solid var(--border-card); color: #4A4136; font-size: 0.875rem; font-weight: 500; border-radius: 8px;">
            Book Another Table
          </button>
        </div>
      </div>
    `;
  }

  function confirmReservationWhatsApp() {
    if (!lastReservationData) return;
    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I just made a reservation on your website!\n\n` +
      `Confirmation Code: ${lastReservationCode}\n` +
      `Name: ${lastReservationData.name}\n` +
      `Date: ${lastReservationData.date}\n` +
      `Time: ${lastReservationData.time}\n` +
      `Guests: ${lastReservationData.guests}\n` +
      `Zone: ${lastReservationData.zone}\n` +
      (lastReservationData.notes ? `Special Request: ${lastReservationData.notes}\n` : '') +
      `Please confirm my table.`
    );
    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank');
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('#contact-name').value;
    const phone = form.querySelector('#contact-phone').value;

    const card = document.getElementById('contact-form-container');
    if (!card) return;

    card.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <div style="width: 3.5rem; height: 3.5rem; background-color: rgba(34, 103, 59, 0.1); color: #22673B; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;">Enquiry Sent Successfully!</h3>
        <p style="font-size: 0.875rem; color: #5C5348; max-width: 24rem; margin: 0 auto 1.5rem;">
          Thank you, ${escapeHtml(name)}. Our kitchen supervisor will review your request and reply to ${escapeHtml(phone)} promptly.
        </p>
        <button onclick="window.location.reload()" style="padding: 0.625rem 1.25rem; background-color: var(--accent-primary); color: #fff; font-size: 0.75rem; font-weight: 600; border-radius: 8px;">
          Send Another Message
        </button>
      </div>
    `;
  }

  // 7. NAVIGATION & FILTERS

  function filterCategory(catId) {
    activeCategory = catId;
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach((btn) => {
      const match = btn.getAttribute('data-cat') === catId;
      if (match) btn.classList.add('is-active');
      else btn.classList.remove('is-active');
    });
    renderMenu();
  }

  function resetMenuFilter() {
    activeCategory = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) searchInput.value = '';
    filterCategory('all');
  }

  function toggleMobileMenu(forceClose) {
    const sheet = document.getElementById('mobile-nav-sheet');
    if (!sheet) return;

    if (forceClose) {
      sheet.classList.remove('is-open');
    } else {
      sheet.classList.toggle('is-open');
    }
  }

  // Helper escape
  function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // 8. INITIALIZATION ON DOM READY

  document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year Automation (Requirement #130)
    const copyrightYearEl = document.getElementById('copyright-year');
    if (copyrightYearEl) {
      copyrightYearEl.textContent = new Date().getFullYear();
    }

    // Set today's date in reservation form
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    // Initial renders
    renderDailyPots();
    renderMenu();
    updateCartUI();

    // Search bar listener
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderMenu();
      });
    }
  });

  // Export to global namespace for inline onclick handlers
  window.CalabarApp = {
    openDishModal,
    closeDishModal,
    selectModalSwallow,
    addFromModal,
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
    confirmReservationWhatsApp,
    handleContactSubmit,
    filterCategory,
    resetMenuFilter,
    toggleMobileMenu,
  };
})();
