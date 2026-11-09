/* =====================================
   AURELIA - INTERACTIVE FOOD MENU
   FINAL - REAL FILE NAMES FIXED!
   idly sambhar / hyderabad biryani / rasamalai / crispy corn .jpeg
===================================== */

const dishImages = {
  "Masala Dosa": "images/masala%20dosa.jpeg",
  "Ghee Roast": "images/ghee%20roast.jpeg",
  "Mysore Masala Dosa": "images/mysore%20masala%20dosa.jpeg",
  "Idli Sambar": "images/idli%20sambhar.jpeg",
  "Pongal": "images/pongal.jpeg",
  "Appam": "images/appam.jpeg",
  "Chettinad Chicken": "images/chettinad%20chicken.jpeg",
  "Chicken 65": "images/chicken%2065.jpeg",
  "Fish Curry": "images/fish%20curry.jpeg",
  "Mutton Biryani": "images/mutton%20biryani.jpeg",
  "Paneer Butter Masala": "images/paneer%20butter%20masala.jpeg",
  "Butter Naan": "images/butter%20naan.jpeg",
  "Dal Makhani": "images/dal%20makhani.jpeg",
  "Chole Bhature": "images/chole%20bhature.jpeg",
  "Palak Paneer": "images/palak%20paneer.jpeg",
  "Chicken Tikka": "images/chicken%20tikka.jpeg",
  "Butter Chicken": "images/butter%20chicken.jpeg",
  "Hyderabadi Biryani": "images/hyderabad%20biryani.jpeg",
  "Tandoori Chicken": "images/tandoori%20chicken.jpeg",
  "Margherita Pizza": "images/margherita%20pizza.jpeg",
  "Alfredo Pasta": "images/alfredo%20pasta.jpeg",
  "Lasagna": "images/lasagna.jpeg",
  "Garlic Bread": "images/garlic%20bread.jpeg",
  "Pesto Pasta": "images/pesto%20pasta.jpeg",
  "Veg Fried Rice": "images/veg%20fried%20rice.jpeg",
  "Schezwan Noodles": "images/schezwan%20noodles.jpeg",
  "Chilli Paneer": "images/chilli%20paneer.jpeg",
  "Manchurian": "images/manchurian.jpeg",
  "Dragon Chicken": "images/dragon%20chicken.jpeg",
  "Tacos": "images/tacos.jpeg",
  "Nachos": "images/nachos.jpeg",
  "Quesadillas": "images/quesadillas.jpeg",
  "Burritos": "images/burritos.jpeg",
  "Mexican Rice Bowl": "images/mexican%20rice%20bowl.jpeg",
  "Grilled Sandwich": "images/grilled%20sandwich.jpeg",
  "Veg Steak": "images/veg%20steak.jpeg",
  "Mushroom Pasta": "images/mushroom%20pasta.jpeg",
  "Chicken Steak": "images/chicken%20steak.jpeg",
  "Chicken Sizzler": "images/chicken%20sizzler.jpeg",
  "Paneer Tikka": "images/paneer%20tikka.jpeg",
  "Crispy Corn": "images/crispy%20corn%20.jpeg",
  "Veg Spring Rolls": "images/veg%20spring%20rolls.jpeg",
  "Mushroom 65": "images/mushroom%2065.jpeg",
  "Cheese Balls": "images/cheese%20balls.jpeg",
  "Peri Peri Fries": "images/peri%20peri%20fries.jpeg",
  "Baby Corn Manchurian": "images/baby%20corn%20manchurian.jpeg",
  "Chicken Lollipop": "images/chicken%20lollipop.jpeg",
  "Fish Fingers": "images/fish%20fingers.jpeg",
  "Prawn Fry": "images/prawn%20fry.jpeg",
  "Chicken Wings": "images/chicken%20wings.jpeg",
  "Pepper Chicken": "images/pepper%20chicken.jpeg",
  "Chicken Popcorn": "images/chicken%20popcorn.jpeg",
  "French Fries": "images/french%20fries.jpeg",
  "Cheese Sandwich": "images/cheese%20sandwich.jpeg",
  "Club Sandwich": "images/club%20sandwich.jpeg",
  "Veg Burger": "images/veg%20burger.jpeg",
  "Momos": "images/momos.jpeg",
  "Garlic Toast": "images/garlic%20toast.jpeg",
  "Potato Wedges": "images/potato%20wedges.jpeg",
  "Chicken Burger": "images/chicken%20burger.jpeg",
  "Watermelon Juice": "images/watermelon%20juice.jpeg",
  "Mango Juice": "images/mango%20juice.jpeg",
  "Orange Juice": "images/orange%20juice.jpeg",
  "Pineapple Juice": "images/pineapple%20juice.jpeg",
  "Pomegranate Juice": "images/pomegranate%20juice.jpeg",
  "Mosambi Juice": "images/mosambi%20juice.jpeg",
  "Fresh Lime Soda": "images/fresh%20lime%20soda.jpeg",
  "Mixed Fruit Juice": "images/mixed%20fruit%20juice.jpeg",
  "Cold Coffee": "images/cold%20coffee.jpeg",
  "Chocolate Milkshake": "images/chocolate%20milkshake.jpeg",
  "Strawberry Milkshake": "images/strawberry%20milkshake.jpeg",
  "Oreo Milkshake": "images/oreo%20milkshake.jpeg",
  "Vanilla Milkshake": "images/vanilla%20milkshake.jpeg",
  "Mango Smoothie": "images/mango%20smoothie.jpeg",
  "Virgin Mojito": "images/virgin%20mojito.jpeg",
  "Iced Tea": "images/iced%20tea.jpeg",
  "KitKat Milkshake": "images/kitkat%20milkshake.jpeg",
  "Chocolate Brownie": "images/chocolate%20brownie.jpeg",
  "Chocolate Lava Cake": "images/chocolate%20lava%20cake.jpeg",
  "Gulab Jamun": "images/gulab%20jamun.jpeg",
  "Rasmalai": "images/rasamalai.jpeg",
  "Vanilla Ice Cream": "images/vanilla%20ice%20cream.jpeg",
  "Chocolate Ice Cream": "images/chocolate%20ice%20cream.jpeg",
  "Strawberry Ice Cream": "images/strawberry%20ice%20cream.jpeg",
  "Butterscotch Ice Cream": "images/butterscotch%20ice%20cream.jpeg",
  "Mango Sundae": "images/mango%20sundae.jpeg",
  "Brownie with Ice Cream": "images/brownie%20with%20ice%20cream.jpeg",
  "Kulfi": "images/kulfi.jpeg",
  "KitKat Ice Cream": "images/kitkat%20ice%20cream.jpeg"
};

/* UNIVERSAL IMAGE FIX */
function handleImageError(img, dishName) {
  if (!img.dataset.triedList) img.dataset.triedList = "0";
  let tried = Number(img.dataset.triedList);
  let base = dishImages[dishName] || img.src;
  let baseWithoutExt = base.replace(".jpeg", "").replace(".jpg", "").replace(".png", "");
  let fallbacks = [
    base,
    baseWithoutExt + "%20.jpeg",
    baseWithoutExt + ".jpeg",
    baseWithoutExt + ".jpg",
    baseWithoutExt + "%20.jpg"
  ];
  if (tried < fallbacks.length) {
    img.dataset.triedList = tried + 1;
    if (img.src === fallbacks[tried]) {
      img.dataset.triedList = tried + 1;
      if (tried + 1 >= fallbacks.length) {
        img.onerror = null;
        img.src = "images/masala%20dosa.jpeg";
        return;
      }
    }
    img.src = fallbacks[tried];
    return;
  }
  img.onerror = null;
  img.src = "images/masala%20dosa.jpeg";
}

const foodItems = [];

function addDishes(category, cuisine, type, items) {
    items.forEach((item, index) => {
        const [name, price, spice = "Mild", description = "", popular = false, chef = false] = item;
        foodItems.push({
            id: foodItems.length + 1,
            name, category, cuisine, type, price, spice,
            description: description || `Freshly prepared ${name} made with carefully selected ingredients.`,
            image: dishImages[name] || "images/masala%20dosa.jpeg",
            popular, chef,
            available: true,
            ingredients: "Please ask our restaurant team for the complete ingredient list.",
            allergens: "Allergen information has not yet been verified. Please contact our restaurant team before ordering.",
            portion: "1 serving",
            preparation: 15 + (index % 4) * 5,
            collections: [],
            special: false
        });
    });
}

/* A. INDIAN */
addDishes("Indian","South Indian","Veg",[
        ["Masala Dosa", 120, "Medium", "Crispy dosa filled with spiced potato masala.", true, true],
        ["Ghee Roast", 140, "Medium", "Golden crispy dosa roasted with ghee.", true],
        ["Mysore Masala Dosa", 150, "Medium", "Crispy dosa with Mysore-style chutney and potato filling."],
        ["Idli Sambar", 80, "Mild", "Soft steamed idlis served with sambar."],
        ["Pongal", 100, "Mild", "Traditional South Indian rice and lentil pongal."],
        ["Appam", 110, "Mild", "Soft-centred appam with crispy edges."]
    ]
);
addDishes("Indian","South Indian","Non-Veg",[
        ["Chettinad Chicken", 280, "Hot", "Chicken prepared with a Chettinad-style spice blend.", false, true],
        ["Chicken 65", 220, "Hot", "Crispy, spiced chicken bites.", true],
        ["Fish Curry", 260, "Medium", "Fish cooked in a flavourful curry."],
        ["Mutton Biryani", 350, "Hot", "Aromatic rice preparation with mutton.", true, true]
    ]
);
addDishes("Indian","North Indian","Veg",[
        ["Paneer Butter Masala", 240, "Mild", "Paneer in a creamy tomato-based gravy.", true, true],
        ["Butter Naan", 60, "Mild", "Soft naan finished with butter."],
        ["Dal Makhani", 210, "Mild", "Slow-cooked black lentils in a rich gravy."],
        ["Chole Bhature", 180, "Medium", "Spiced chickpeas served with bhature.", true],
        ["Palak Paneer", 230, "Mild", "Paneer cubes in spinach gravy."]
    ]
);
addDishes("Indian","North Indian","Non-Veg",[
        ["Chicken Tikka", 280, "Medium", "Marinated chicken pieces prepared in a tandoor.", true],
        ["Butter Chicken", 320, "Mild", "Chicken in a creamy tomato-based gravy.", true, true],
        ["Hyderabadi Biryani", 300, "Hot", "Fragrant rice prepared in Hyderabadi style.", true, true],
        ["Tandoori Chicken", 340, "Medium", "Chicken marinated with a traditional spice blend."]
    ]
);

/* B. INTERNATIONAL */
addDishes("International","Italian","Veg",[
        ["Margherita Pizza", 250, "Mild", "Classic pizza with tomato sauce and cheese.", true],
        ["Alfredo Pasta", 260, "Mild", "Pasta in a creamy Alfredo-style sauce.", true],
        ["Lasagna", 320, "Mild", "Layered pasta baked with sauce and cheese.", false, true],
        ["Garlic Bread", 120, "Mild", "Toasted bread with garlic flavour."],
        ["Pesto Pasta", 280, "Mild", "Pasta tossed in a pesto-style sauce."]
    ]
);
addDishes("International","Chinese","Veg",[
        ["Veg Fried Rice", 180, "Mild", "Rice stir-fried with vegetables."],
        ["Schezwan Noodles", 190, "Hot", "Noodles tossed in a spicy Schezwan-style sauce.", true],
        ["Chilli Paneer", 220, "Hot", "Paneer tossed in a spicy sauce.", true],
        ["Manchurian", 180, "Medium", "Vegetable dumplings in a Manchurian-style sauce."]
    ]
);
addDishes("International","Chinese","Non-Veg",[
        ["Dragon Chicken", 280, "Hot", "Chicken tossed in a spicy sauce."],
    ]
);
addDishes("International","Mexican","Veg",[
        ["Tacos", 180, "Medium", "Tortillas filled with a savoury vegetable filling."],
        ["Nachos", 160, "Mild", "Crispy nachos served with toppings.", true],
        ["Quesadillas", 220, "Mild", "Grilled tortillas with a savoury filling."],
        ["Burritos", 240, "Medium", "Wrapped tortillas with rice and fillings."],
        ["Mexican Rice Bowl", 210, "Medium", "Rice bowl with Mexican-style toppings."]
    ]
);
addDishes("International","Continental","Veg",[
        ["Grilled Sandwich", 140, "Mild", "Grilled sandwich with vegetable filling."],
        ["Veg Steak", 260, "Mild", "Vegetarian steak-style main course."],
        ["Mushroom Pasta", 250, "Mild", "Pasta prepared with mushrooms."]
    ]
);
addDishes("International","Continental","Non-Veg",[
        ["Chicken Steak", 350, "Mild", "Grilled chicken steak with accompaniments.", true, true],
        ["Chicken Sizzler", 380, "Medium", "Chicken served on a sizzling platter."]
    ]
);

/* C. STARTERS */
addDishes("Starters","Starters","Veg",[
        ["Paneer Tikka", 220, "Medium", "Marinated paneer grilled with spices.", true],
        ["Crispy Corn", 150, "Medium", "Crispy corn tossed with seasoning."],
        ["Veg Spring Rolls", 140, "Mild", "Crispy rolls with vegetable filling."],
        ["Mushroom 65", 190, "Hot", "Spiced crispy mushroom bites."],
        ["Cheese Balls", 170, "Mild", "Crispy cheese-filled bites."],
        ["Peri Peri Fries", 130, "Hot", "French fries with peri peri seasoning."],
        ["Baby Corn Manchurian", 180, "Medium", "Baby corn in Manchurian-style sauce."]
    ]
);
addDishes("Starters","Starters","Non-Veg",[
        ["Chicken Lollipop", 240, "Hot", "Chicken starter with a spicy coating.", true],
        ["Chicken Tikka", 260, "Medium", "Grilled marinated chicken pieces."],
        ["Fish Fingers", 230, "Mild", "Crispy fish strips."],
        ["Prawn Fry", 280, "Hot", "Prawns prepared with seasoning."],
        ["Chicken Wings", 260, "Hot", "Chicken wings with a flavourful coating."],
        ["Pepper Chicken", 250, "Hot", "Chicken cooked with pepper seasoning."],
        ["Chicken Popcorn", 190, "Medium", "Bite-sized crispy chicken."]
    ]
);

/* D. SNACKS */
addDishes("Snacks","Snacks","Veg",[
        ["French Fries", 100],
        ["Cheese Sandwich", 130],
        ["Club Sandwich", 170],
        ["Veg Burger", 150],
        ["Momos", 140],
        ["Garlic Toast", 110],
        ["Nachos", 150],
        ["Potato Wedges", 120]
    ]
);
addDishes("Snacks","Snacks","Non-Veg",[
        ["Chicken Burger", 190]
    ]
);

/* E. JUICES */
addDishes("Juices","Fresh Juices","Veg",[
        ["Watermelon Juice", 90],
        ["Mango Juice", 110],
        ["Orange Juice", 100],
        ["Pineapple Juice", 100],
        ["Pomegranate Juice", 140],
        ["Mosambi Juice", 100],
        ["Fresh Lime Soda", 80],
        ["Mixed Fruit Juice", 130]
    ]
);

/* F. BEVERAGES */
addDishes("Beverages","Beverages","Veg",[
        ["Cold Coffee", 130],
        ["Chocolate Milkshake", 150],
        ["Strawberry Milkshake", 150],
        ["Oreo Milkshake", 170],
        ["Vanilla Milkshake", 130],
        ["Mango Smoothie", 160],
        ["Virgin Mojito", 120],
        ["Iced Tea", 100],
        ["KitKat Milkshake", 179, "Mild", "Thick chocolate shake blended with KitKat, topped with whipped cream and chocolate drizzle.", true]
    ]
);

/* G. DESSERTS */
addDishes("Desserts","Desserts","Veg",[
        ["Chocolate Brownie", 140],
        ["Chocolate Lava Cake", 180, "Mild", "Warm chocolate dessert with a soft centre.", true],
        ["Gulab Jamun", 100],
        ["Rasmalai", 130],
        ["Vanilla Ice Cream", 90],
        ["Chocolate Ice Cream", 100],
        ["Strawberry Ice Cream", 100],
        ["Butterscotch Ice Cream", 110],
        ["Mango Sundae", 160],
        ["Brownie with Ice Cream", 210, "Mild", "Brownie served with an ice cream scoop.", true, true],
        ["Kulfi", 100],
        ["KitKat Ice Cream", 149, "Mild", "Creamy chocolate ice cream topped with crushed KitKat and chocolate sauce.", true]
    ]
);

/* RANDOM 1 DISH UNAVAILABLE EVERY REFRESH! */
const availableCandidates = foodItems.filter(item => item.name !== "Hyderabadi Biryani");
const randomIndex = Math.floor(Math.random() * availableCandidates.length);
const randomUnavailableDish = availableCandidates[randomIndex];
if (randomUnavailableDish) {
    randomUnavailableDish.available = false;
    console.log("Today Unavailable:", randomUnavailableDish.name);
}

/* COLLECTIONS */
function assignCollection(names, collection) {
    names.forEach(name => {
        const dish = foodItems.find(item => item.name === name);
        if (dish) { dish.collections.push(collection); }
    });
}
assignCollection(["Butter Chicken", "Mutton Biryani", "Chicken Steak"], "chef");
assignCollection(["Masala Dosa", "Chicken 65", "Margherita Pizza", "KitKat Milkshake", "KitKat Ice Cream"], "favourite");
assignCollection(["Idli Sambar", "French Fries", "Fresh Lime Soda"], "budget");
assignCollection(["Mutton Biryani", "Margherita Pizza"], "family");
assignCollection(["Chicken Lollipop", "Chocolate Lava Cake"], "weekend");
assignCollection(["Mango Juice", "Mango Smoothie"], "seasonal");
assignCollection(["Gulab Jamun", "Rasmalai"], "festival");

const todaysSpecial = foodItems.find(item => item.name === "Hyderabadi Biryani");
if (todaysSpecial) { todaysSpecial.special = true; }

/* MENU DISPLAY */
const foodGrid = document.getElementById("foodGrid");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cuisineFilter = document.getElementById("cuisineFilter");
const dietFilter = document.getElementById("dietFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");

let quickFilter = "all";
let activeCollection = null;
let cart = [];
let favourites = new Set();

const categoryOrder = ["Indian","International","Starters","Snacks","Juices","Beverages","Desserts"];
const categoryNames = {
    Indian: "A. Indian Cuisine",
    International: "B. International Cuisine",
    Starters: "C. Starters",
    Snacks: "D. Snacks",
    Juices: "E. Fresh Juices",
    Beverages: "F. Milkshakes & Beverages",
    Desserts: "G. Desserts & Ice Cream"
};

function createFoodCard(food) {
    const card = document.createElement("article");
    card.className = "food-card";
    card.innerHTML = `
        <div class="food-image-wrap">
            <img src="${food.image}" alt="${food.name}" class="food-image" loading="lazy" onerror="handleImageError(this, '${food.name}')">
            <span class="food-badge">${food.type}</span>
            ${food.popular ? `<span class="food-badge bestseller">Bestseller</span>` : ""}
            ${!food.available ? `<span class="food-badge unavailable">Unavailable</span>` : ""}
            <button class="favourite-button ${favourites.has(food.id) ? "favourited" : ""}" data-favourite="${food.id}" aria-label="Add ${food.name} to favourites"><i class="fas fa-heart"></i></button>
        </div>
        <div class="food-info">
            <h3>${food.name}</h3>
            <p class="food-description">${food.description}</p>
            <div class="food-meta">
                <span class="${food.type === "Veg" ? "veg-label" : "nonveg-label"}">${food.type}</span>
                <span>🌶 ${food.spice}</span>
                <span>${food.preparation} min</span>
            </div>
            <div class="food-price-row">
                <span class="food-price">₹${food.price}</span>
                <button class="add-cart-button" data-cart="${food.id}" ${!food.available ? "disabled" : ""}>${food.available ? "Add to Cart +" : "Unavailable"}</button>
            </div>
            <button class="details-button" data-details="${food.id}">View Ingredients & Details</button>
        </div>
    `;
    return card;
}

function renderMenu(items) {
    foodGrid.innerHTML = "";
    if (items.length === 0) { noResults.hidden = false; return; }
    noResults.hidden = true;
    categoryOrder.forEach(category => {
        const categoryItems = items.filter(food => food.category === category);
        if (categoryItems.length === 0) return;
        const heading = document.createElement("h2");
        heading.className = "food-category-title";
        heading.textContent = categoryNames[category];
        heading.id = category.toLowerCase();
        foodGrid.appendChild(heading);
        categoryItems.forEach(food => { foodGrid.appendChild(createFoodCard(food)); });
    });
}

function filterMenu() {
    let result = [...foodItems];
    const search = searchInput.value.toLowerCase().trim();
    if (search) { result = result.filter(food => food.name.toLowerCase().includes(search)); }
    if (categoryFilter.value !== "all") { result = result.filter(food => food.category === categoryFilter.value); }
    if (cuisineFilter.value !== "all") { result = result.filter(food => food.cuisine === cuisineFilter.value); }
    if (dietFilter.value !== "all") { result = result.filter(food => food.type === dietFilter.value); }
    if (priceFilter.value !== "all") {
        const [min, max] = priceFilter.value.split("-").map(Number);
        result = result.filter(food => food.price >= min && food.price <= max);
    }
    if (quickFilter === "popular") { result = result.filter(food => food.popular); }
    if (quickFilter === "chef") { result = result.filter(food => food.chef); }
    if (quickFilter === "available") { result = result.filter(food => food.available); }
    if (quickFilter === "unavailable") { result = result.filter(food => !food.available); }
    if (activeCollection) { result = result.filter(food => food.collections.includes(activeCollection)); }
    if (sortFilter.value === "low") { result.sort((a, b) => a.price - b.price); }
    if (sortFilter.value === "high") { result.sort((a, b) => b.price - a.price); }
    renderMenu(result);
}

[searchInput,categoryFilter,cuisineFilter,dietFilter,priceFilter,sortFilter].forEach(element => {
    element.addEventListener(element === searchInput ? "input" : "change", () => { activeCollection = null; filterMenu(); });
});

document.querySelectorAll(".quick-filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".quick-filter").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        quickFilter = button.dataset.filter;
        activeCollection = null;
        filterMenu();
    });
});

document.querySelectorAll(".collection-card").forEach(button => {
    button.addEventListener("click", () => {
        activeCollection = button.dataset.collection;
        quickFilter = "all";
        document.querySelectorAll(".quick-filter").forEach(btn => btn.classList.remove("active"));
        document.querySelector('[data-filter="all"]').classList.add("active");
        filterMenu();
        document.getElementById("foodMenu").scrollIntoView({ behavior: "smooth" });
    });
});

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartCount.textContent = totalQuantity;
    cartTotal.textContent = "₹" + totalPrice;
    if (cart.length === 0) { cartItems.textContent = "Your cart is empty."; return; }
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item"><div><strong>${item.name}</strong><p>₹${item.price} × ${item.quantity}</p></div><button data-remove="${item.id}">Remove</button></div>
    `).join("");
}

function addToCart(id) {
    const food = foodItems.find(item => item.id === id);
    if (!food || !food.available) return;
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity++; } else { cart.push({ ...food, quantity: 1 }); }
    updateCart();
}

document.getElementById("cartButton").addEventListener("click", () => { cartSidebar.classList.add("open"); cartOverlay.classList.add("show"); });
function closeCart() { cartSidebar.classList.remove("open"); cartOverlay.classList.remove("show"); }
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.getElementById("cartItems").addEventListener("click", event => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    const id = Number(button.dataset.remove);
    cart = cart.filter(item => item.id !== id);
    updateCart();
});

foodGrid.addEventListener("click", event => {
    const favouriteButton = event.target.closest("[data-favourite]");
    const cartButton = event.target.closest("[data-cart]");
    const detailsButton = event.target.closest("[data-details]");
    if (favouriteButton) {
        const id = Number(favouriteButton.dataset.favourite);
        if (favourites.has(id)) { favourites.delete(id); } else { favourites.add(id); }
        filterMenu();
    }
    if (cartButton && !cartButton.disabled) {
        const id = Number(cartButton.dataset.cart);
        addToCart(id);
        cartButton.textContent = "Added ✓";
        setTimeout(() => { if (cartButton.isConnected) { cartButton.textContent = "Add to Cart +"; } }, 900);
    }
    if (detailsButton) {
        const id = Number(detailsButton.dataset.details);
        showFoodDetails(id);
    }
});

const foodModal = document.getElementById("foodModal");
const foodModalContent = document.getElementById("foodModalContent");

function showFoodDetails(id) {
    const food = foodItems.find(item => item.id === id);
    if (!food) return;
    foodModalContent.innerHTML = `
        <h2>${food.name}</h2>
        <p><strong>Category:</strong> ${food.category}</p>
        <p><strong>Cuisine:</strong> ${food.cuisine}</p>
        <p><strong>Food Type:</strong> ${food.type}</p>
        <p><strong>Price:</strong> ₹${food.price}</p>
        <p><strong>Spice Level:</strong> ${food.spice}</p>
        <p><strong>Portion:</strong> ${food.portion}</p>
        <p><strong>Preparation Time:</strong> ${food.preparation} minutes</p>
        <p><strong>Availability:</strong> ${food.available ? "Available" : "Unavailable"}</p>
        <p><strong>Ingredients:</strong> ${food.ingredients}</p>
        <p><strong>Allergen Information:</strong> ${food.allergens}</p>
    `;
    foodModal.classList.add("show");
}

document.getElementById("closeFoodModal").addEventListener("click", () => { foodModal.classList.remove("show"); });
foodModal.addEventListener("click", event => { if (event.target === foodModal) { foodModal.classList.remove("show"); } });

function displayTodaySpecial() {
    const container = document.getElementById("todaySpecialCard");
    if (!todaysSpecial) return;
    container.innerHTML = `
        <img src="${todaysSpecial.image}" alt="${todaysSpecial.name}" style="width:100%;height:220px;object-fit:cover;" onerror="this.onerror=null; this.src='images/masala%20dosa.jpeg';">
        <div style="padding:20px;">
            <span class="eyebrow">CHEF'S PICK</span>
            <h3>${todaysSpecial.name}</h3>
            <p>${todaysSpecial.description}</p>
            <strong>₹${todaysSpecial.price}</strong><br>
            <button class="gold-button" id="specialOrderButton">Add to Cart</button>
        </div>
    `;
    document.getElementById("specialOrderButton").addEventListener("click", () => {
        addToCart(todaysSpecial.id);
        cartSidebar.classList.add("open");
        cartOverlay.classList.add("show");
    });
}

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-menu");
    const icon = document.querySelector("#themeToggle i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

document.getElementById("checkoutButton").addEventListener("click", () => {
    if (cart.length === 0) { alert("Your cart is empty!"); return; }
    alert("Your demo cart is ready! Online ordering and payment will be added in a later stage.");
});

renderMenu(foodItems);
displayTodaySpecial();
updateCart();