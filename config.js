/* =========================================================================
   config.js — the ONLY file you need to edit for settings. Save/commit it next to index.html.
   ========================================================================= */
window.SITE_OVERRIDES = {

  // 1) LIVE comments & likes for everyone: paste your Firebase web config here (see SETUP.md).
  //    Leave as null = demo mode (saved only on each visitor's own device).
  //    Example: firebase: { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." },
  firebase: { apiKey: "…", authDomain: "…", projectId: "…", appId: "…" },

  // 2) CHECKOUT: one hosted payment link per product id (ids are the keys in "products" below).
  //    "default" is used for any product without its own link.
  checkoutLinks: {
    // "vintage-90s-bootleg-rap-tee": "https://your-payment-link.example/abc",
    // default: "https://your-shop.example"
  },
  checkoutEndpoint: null,   // advanced: serverless endpoint that returns {url} (see SETUP.md)

  currency: "$",

  // 3) PRODUCTS & PRICES (the prices below are placeholders - set your real ones)
  products: {
    "vintage-90s-bootleg-rap-tee": {
        "name": "Vintage 90s Bootleg Rap Tee",
        "price": 35
    },
    "high-fashion-editorial-cover-tee": {
        "name": "High-Fashion Editorial Cover Tee",
        "price": 35
    },
    "baroque-gold-filigree-crown-tee": {
        "name": "Baroque Gold Filigree Crown Tee",
        "price": 35
    },
    "at-her-feet-oversized-hoodie": {
        "name": "At Her Feet Oversized Hoodie",
        "price": 65
    },
    "acrylic-desk-display-block": {
        "name": "Acrylic Desk Display Block",
        "price": 30
    },
    "workspace-desk-set": {
        "name": "Workspace Desk Set",
        "price": 45
    }
},

  // 4) DAILY COMMAND: one is shown per day, in order, changing at each visitor's local midnight.
  dailyCommands: [
    "Kneel first. Spend second. Speak last.",
    "Your wallet has one job today: pleasing Me.",
    "Check the tribute walls. Then check your balance. Then fix the difference.",
    "Good boys send before they’re asked.",
    "Silence is obedience. Payment is devotion.",
    "Today you will be generous. Don’t make Me say it twice.",
    "Clear your schedule. Clear your cart. Clear your debt to Me.",
    "Prove your loyalty before lunch.",
    "Less thinking. More sending.",
    "Be grateful. Be quick. Be Mine.",
    "A kneeling man never checks his balance.",
    "Today’s lesson: affection is earned in tribute.",
    "Make Me smile and I may notice you.",
    "Wallet open. Mind closed. Eyes down."
],

  // Optional: set text here to pin one command instead of the daily rotation (use "" to turn off).
  pinnedCommand: ""
};
