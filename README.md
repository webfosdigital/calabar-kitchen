# Calabar Kitchen — Authentic Cross River Native Delicacies

An authentic Nigerian restaurant website celebrating Cross River native culinary heritage: Afang soup, White soup (Afia Efere), Edikang Ikong, native pepper soups, and traditional swallows at **41 & 42 Ikwerre Road, Port Harcourt, Rivers State, Nigeria**.

---

## 🚀 Static Architecture (Vanilla HTML5, CSS3 & JavaScript)

This project has been converted from a framework-dependent React/Vite architecture into pure, standard **HTML5, CSS3, and ES6+ Vanilla JavaScript**.

- **Zero Build Step Required**: Open `index.html` directly in any web browser or host on static hosting.
- **100% Relative Asset Paths**: All stylesheets, scripts, and high-resolution food photography assets use `./` relative paths, making it fully compatible with **GitHub Pages** (both user and project sites).
- **Zero Third-Party Runtime JS Frameworks**: All DOM updates, interactive modals, slide-over order drawer, Port Harcourt delivery zone fee calculator, table reservations, and WhatsApp ordering integrations run natively.

---

## 📁 Project Structure

```text
calabar-kitchen/
│
├── index.html                  # Semantic HTML5 entry point
│
├── css/
│   └── style.css               # Production CSS3 stylesheet (variables, responsive grids, modals, drawer)
│
├── js/
│   └── script.js               # ES6+ Vanilla JS engine (menu catalog, cart, reservation, WhatsApp dispatch)
│
├── assets/
│   └── images/                 # High-resolution culinary & architectural photography
│       ├── hero_calabar_kitchen_1794102728383.jpg
│       ├── dish_afang_soup_1794102728482.jpg
│       ├── dish_white_soup_1794102729231.jpg
│       ├── dish_pepper_soup_1794102730377.jpg
│       └── restaurant_ambiance_1794102730506.jpg
│
├── backup_react_project/       # Preserved copy of original React & TypeScript source files
└── README.md                   # Project documentation & GitHub Pages deployment guide
```

---

## 🌐 How to Deploy to GitHub Pages

1. **Push files to your GitHub repository**:
   ```bash
   git add .
   git commit -m "Convert Calabar Kitchen to Vanilla HTML, CSS and JavaScript"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/webfosdigital/calabar-kitchen`
   - Navigate to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Select `main` (or your default branch) and `/ (root)`.
     - Click **Save**.

3. **Visit Your Live Website**:
   - Within 1–2 minutes, GitHub Pages will deploy your site at:
     `https://webfosdigital.github.io/calabar-kitchen/`
   - Everything will load immediately without any build steps or npm installations.

---

## 🍽️ Key Features Preserved

- **Live Daily Pot Availability Tracker**: Real-time status indicators ("Ready to Serve", "Simmering Fresh", "Limited Portions Left").
- **Interactive Menu Catalog**: Search filtering and category tabs (`Complete Menu`, `Native Soups`, `Pepper Soups`, `Swallows`, `Rice`, `Drinks`).
- **Dish Detail Modal**: High-res imagery, authentic Cross River botanical ingredients, and traditional swallow selector (Pounded Yam, Garri/Eba, Semovita, Fufu).
- **Slide-Over Cart & Checkout Drawer**: Itemized order summary, quantity steppers, fulfillment toggle (Dispatch Delivery vs. Self Pickup), automatic Port Harcourt delivery zone calculation, and instant WhatsApp order pre-formatting.
- **Table Reservation System**: Guest count, time slot, date, and seating section (Main Dining, Cultural Terrace, VIP Lounge) with instant confirmation code generation (`CK-RES-...`) and WhatsApp sync.
- **Location & Contact**: Directions for 41 & 42 Ikwerre Road, Port Harcourt, direct click-to-call (`tel:09016607242`), email, and enquiry form.
- **Dynamic Copyright Year Automation**: Automatically computes and updates `new Date().getFullYear()` every year.
