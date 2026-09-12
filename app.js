const places = [
  { id: 1, name: 'Block 32', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 2, name: 'Block 34 Kiosks', type: 'food', label: 'Quick Bites', desc: 'High-density engineering block with an active outdoor courtyard and kiosks serving maggi, patties, and tea.', meta: 'Lively', distance: '—', keywords: ['eat', 'food', 'snack', 'coffee', 'tea', 'hangout'] },
  { id: 3, name: 'Block 36', type: 'academic', label: 'Agriculture & Sciences', desc: 'Academic block for sciences with nearby outdoor seating and gathering spaces.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'science', 'work'] },
  { id: 4, name: 'Block 38', type: 'academic', label: 'Academic & Project Space', desc: 'Multi-department academic block with seminar rooms and collaborative project workspaces.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'work', 'project', 'focus'] },
  { id: 5, name: 'Block 37 - Central Library', type: 'study', label: 'Silent Study', desc: 'Multi-storey silent study environment with dedicated reading halls and digital labs.', meta: 'Very quiet', distance: '—', keywords: ['study', 'peace', 'quiet', 'focus', 'read', 'books', 'work'] },
  { id: 6, name: 'UniMall (Block 15)', type: 'food', label: 'Shopping & Dining', desc: 'Central shopping and dining complex housing Domino\'s, food courts, and restaurants serving veg and non-veg meals.', meta: 'Lively', distance: '—', keywords: ['eat', 'food', 'meal', 'pizza', 'burger', 'hungry', 'lunch'] },
  { id: 7, name: 'MB Food Square', type: 'food', label: 'Dining', desc: 'Dedicated food stalls near the hostels famous for chicken roll, biryani, and late-night non-veg meals.', meta: 'Lively', distance: '—', keywords: ['eat', 'food', 'chicken', 'non-veg', 'dinner', 'hungry', 'roll', 'biryani'] },
  { id: 8, name: 'Baldev Raj Mittal Unipolis', type: 'social', label: 'Events & Social Hub', desc: 'Massive covered mega-event structure and social crossroads connecting Blocks 30-38.', meta: 'Lively', distance: '—', keywords: ['friend', 'hang', 'social', 'meet', 'group', 'events'] },
  { id: 9, name: 'Shanti Devi Mittal Auditorium', type: 'event', label: 'Auditorium & Events', desc: 'Large indoor ceremonial auditorium for guest lectures, orientations, and cultural fests.', meta: 'Moderate noise', distance: '—', keywords: ['events', 'lecture', 'fest'] },
  { id: 10, name: 'Indoor Sports Complex', type: 'sports', label: 'Sports & Fitness', desc: 'Olympic-grade multi-purpose indoor athletic arena with courts and fitness center.', meta: 'Lively', distance: '—', keywords: ['sports', 'gym', 'play', 'fitness', 'workout', 'active'] },
  { id: 11, name: 'Main Gate (Gate 1-A)', type: 'transit', label: 'Campus Entrance', desc: 'Primary security checkpoint, bus drop-off point, and visitor reception off the highway.', meta: 'Open 24 Hours', distance: '—', keywords: ['gate', 'bus', 'travel', 'entry', 'outside'] },
  { id: 12, name: 'Campus Gardens', type: 'outdoor', label: 'Parks & Nature', desc: 'Lush greens perfect for winter afternoons and outdoor walks.', meta: 'Peaceful', distance: '—', keywords: ['outside', 'outdoor', 'air', 'walk', 'nature', 'park'] },
  { id: 13, name: 'Block 33', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 14, name: 'Block 34', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 15, name: 'Block 35', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 16, name: 'Block 27', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 17, name: 'Block 28', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 18, name: 'Block 29', type: 'academic', label: 'Computing & Engineering', desc: 'Primary academic hub for computing and engineering with high-capacity computer labs.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'cse', 'labs', 'computers'] },
  { id: 19, name: 'Block 14 - Mittal School Of Business', type: 'academic', label: 'Commerce', desc: 'Primary academic hub for Commerce students.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'BBA', 'MBA', 'B. com', 'M. com'] },
  { id: 20, name: 'Block 19', type: 'academic', label: 'School Of Law', desc: 'Primary academic hub for Law students.', meta: 'Moderate noise', distance: '—', keywords: ['study', 'classes', 'LLB', 'LLM'] },
  { id: 21, name: 'Lovely Bake Studio', type: 'bakery', label: 'Bakery', desc: 'An Innovative Bakery.', meta: 'Moderate noise', distance: '—', keywords: ['Cakes', 'Ladoo', 'Rusk', 'Kaju katli', 'Cookies', 'Namkeen', 'Sweets', 'Green Tea', 'Mocktails', 'Gifting items', 'Biscuits'] },
  { id: 22, name: 'Lovely Sweets', type: 'bakery', label: 'Bakery', desc: 'Sweet Shop.', meta: 'Moderate noise', distance: '—', keywords: ['Cakes', 'Ladoo', 'Rusk', 'Kaju katli', 'Cookies', 'Namkeen', 'Sweets', 'Green Tea', 'Cold Coffee', 'Mocktails', 'Gifting items', 'Biscuits', 'Pinni', 'Barfi', 'Rolls', 'Samosa', 'Kachauri', 'Chaat', 'Panjeeri', 'Gulaab Jamun', 'Rewari', 'Rasgulla', 'Soan Papdi', 'Milk Cake'] },
  { id: 23, name: 'Basant Ice Cream', type: 'Ice Cream Parlour', label: 'Ice Cream Kiosk', desc: 'Refreshments Kiosk.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Mocktails', 'Patties', 'Cold Drinks', 'Ice Cream', 'Kulfi'] },
  { id: 24, name: 'Nand Juice', type: 'Ice Cream Parlour', label: 'Ice Cream Kiosk', desc: 'Refreshments Kiosk.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Juice', 'Shake', 'Fruits', 'Fruit Salad'] },
  { id: 25, name: 'Amul', type: 'Ice Cream Parlour', label: 'Ice Cream Kiosk', desc: 'Refreshments Kiosk.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Milkshake', 'Shake', 'Milk', 'Ice Cream', 'Chocolates', 'Kulfi', 'Curd', 'Lassi'] },
  { id: 26, name: 'Le Broc', type: 'Tuck Shop', label: 'Retail Shop', desc: 'Shop for daily necessities.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Blanket', 'Shake', 'Coffee', 'Maggi', 'Noodles', 'Cup Noodles', 'Wafers', 'Chips', 'Kurkure', 'Chocolate', 'Protein Bar', 'Cold Drinks', 'Soap', 'Detergent', 'Toothpaste', 'Toothbrush', 'Deodorant', 'Perfume', 'Talcum Powder', 'Chocolate Syrup', 'Biscuits', 'Cookies', 'Dry Fruits', 'Almonds', 'Cashew', 'Umbrella', 'Notebook', 'Pen', 'Curd', 'Lassi'] },
  { id: 27, name: 'Globibo', type: 'Tuck Shop', label: 'Retail Shop', desc: 'Shop for daily necessities.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Blanket', 'Shake', 'Coffee', 'Maggi', 'Noodles', 'Cup Noodles', 'Wafers', 'Chips', 'Kurkure', 'Chocolate', 'Protein Bar', 'Cold Drinks', 'Soap', 'Detergent', 'Toothpaste', 'Toothbrush', 'Deodorant', 'Perfume', 'Talcum Powder', 'Chocolate Syrup', 'Biscuits', 'Cookies', 'Dry Fruits', 'Almonds', 'Cashew', 'Umbrella', 'Notebook', 'Pen', 'Curd', 'Lassi'] },
  { id: 28, name: 'Domino\'s Pizza', type: 'Food', label: '', desc: 'Pizza.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Juice', 'Shake', 'Coffee', 'Breadstick', 'Garlic Break', 'Cupcake', 'Choco lava cake'] },
  { id: 29, name: 'Chicago Delights', type: 'Tuck Shop', label: 'Retail Shop', desc: 'Shop for daily necessities.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Juice', 'Shake', 'Coffee', 'Breadstick', 'Garlic Break', 'Cupcake', 'Choco lava cake'] },
  { id: 30, name: 'Kitaabi Karwaan', type: 'Book Shop', label: 'Book Shop', desc: 'Shop for Books.', meta: 'Moderate noise', distance: '—', keywords: ['Books', 'Book'] },
  { id: 31, name: 'ACER', type: 'Electronics', label: 'Retail Shop', desc: 'Shop for Laptop and its accessories.', meta: 'Moderate noise', distance: '—', keywords: ['Laptop', 'Keyboard', 'Mouse', 'Laptop Screen Guard', 'Cleaning Kit', 'Aux Cable', 'Headphone', 'Earbuds', 'Earphones', 'HDMI Cable'] },
  { id: 32, name: 'HP', type: 'Electronics', label: 'Retail Shop', desc: 'Shop for Laptop and its accessories.', meta: 'Moderate noise', distance: '—', keywords: ['Laptop', 'Keyboard', 'Mouse', 'Laptop Screen Guard', 'Cleaning Kit', 'Aux Cable', 'Headphone', 'Earbuds', 'Earphones', 'HDMI Cable'] },
  { id: 33, name: 'DELL', type: 'Electronics', label: 'Retail Shop', desc: 'Shop for Laptop and its accessories.', meta: 'Moderate noise', distance: '—', keywords: ['Laptop', 'Keyboard', 'Mouse', 'Laptop Screen Guard', 'Cleaning Kit', 'Aux Cable', 'Headphone', 'Earbuds', 'Earphones', 'HDMI Cable'] },
  { id: 34, name: 'LENOVO', type: 'Electronics', label: 'Retail Shop', desc: 'Shop for Laptop and its accessories.', meta: 'Moderate noise', distance: '—', keywords: ['Laptop', 'Keyboard', 'Mouse', 'Laptop Screen Guard', 'Cleaning Kit', 'Aux Cable', 'Headphone', 'Earbuds', 'Earphones', 'HDMI Cable'] },
  { id: 35, name: 'Phone World', type: 'Electronics', label: 'Retail Shop', desc: 'Shop for Mobile and its accessories.', meta: 'Moderate noise', distance: '—', keywords: ['Mobile phone', 'Phone', 'Keyboard', 'Mouse', 'Laptop Screen Guard', 'Cleaning Kit', 'Aux Cable', 'Headphone', 'Earbuds', 'Earphones', 'HDMI Cable'] },
  { id: 36, name: 'Screens', type: 'Electronics', label: 'Retail Shop', desc: 'Shop for Mobile and its accessories.', meta: 'Moderate noise', distance: '—', keywords: ['Mobile phone', 'Phone', 'Keyboard', 'Mouse', 'Laptop Screen Guard', 'Smart Watch', 'Key Chains', 'Cleaning Kit', 'Aux Cable', 'Headphone', 'Earbuds', 'Earphones', 'HDMI Cable'] },
  { id: 37, name: 'Cafe Coffee Day', type: 'Cafe', label: 'Coffee Shop', desc: 'Refreshments.', meta: 'Moderate noise', distance: '—', keywords: ['Shakes', 'Milkshake', 'Shake', 'Coffee', 'Chocolate Fudge', 'Chocolate Shake', 'Cold Coffee', 'Almond Fudge', 'Tiramisu'] },
  { id: 38, name: 'Cafe Coffee Day', type: 'Cafe', label: 'Coffee Shop', desc: 'Refreshments.', meta: 'Moderate noise', distance: '—', keywords: ['eat', 'food', 'chicken', 'non-veg', 'dinner', 'hungry', 'roll', 'biryani', 'spring roll', 'Chicken Soup'] },
];
const typeNames = { study: 'Study', food: 'Food & drinks', social: 'Social', outdoor: 'Outdoors' };
const placeGrid = document.querySelector('#placeGrid');
const searchInput = document.querySelector('#searchInput');
const resultCount = document.querySelector('#resultCount');
const resultsTitle = document.querySelector('#resultsTitle');
const toast = document.querySelector('#toast');
const modalBackdrop = document.querySelector('#modalBackdrop');
const modalTitle = document.querySelector('#modalTitle');
const modalBody = document.querySelector('#modalBody');
let activeFilter = 'all';
let saved = new Set(JSON.parse(localStorage.getItem('lpu-saved') || '[]'));
let userRatings = JSON.parse(localStorage.getItem('lpu-ratings-genuine') || '{}');
let recentSearches = JSON.parse(localStorage.getItem('lpu-recent') || '[]');
let toastTimer;

function ratingFor(place) { return place.rating; }
function personalRatingFor(place) {
  const rating = userRatings[place.id];
  return typeof rating === 'number' ? { value: rating, review: '' } : rating;
}

function renderPlaces(items = places) {
  resultCount.textContent = `${items.length} ${items.length === 1 ? 'place' : 'places'}`;
  placeGrid.innerHTML = items.length ? items.map(place => `
    <article class="place-card">
      <div class="place-visual visual-${place.type}"><span class="visual-label">${place.label}</span><button class="save-place ${saved.has(place.id) ? 'saved' : ''}" data-save="${place.id}" aria-label="${saved.has(place.id) ? 'Remove' : 'Save'} ${place.name}">${saved.has(place.id) ? '♥' : '♡'}</button></div>
      <div class="place-heading"><h3>${place.name}</h3>${personalRatingFor(place) ? `<span class="rating-value">★ ${personalRatingFor(place).value}.0</span>` : '<span class="rating-empty">No rating yet</span>'}</div><p class="place-desc">${place.desc}</p>
      <div class="rating-summary"><span>${personalRatingFor(place) ? 'Your submitted rating' : 'No ratings submitted yet'}</span>${personalRatingFor(place) ? `<b>Your rating: ${personalRatingFor(place).value}/5</b>` : ''}</div>
      <button type="button" class="rate-place-button" data-open-rating="${place.id}">${personalRatingFor(place) ? 'Edit your rating' : 'Rate this place'} <span>★</span></button>
      <div class="place-footer"><span>${place.meta}</span><span class="distance">↗ ${place.distance}</span></div>
    </article>`).join('') : '<div class="empty-state">No places match that filter yet. Try asking Copilot in your own words.</div>';
}

function showToast(message) { clearTimeout(toastTimer); toast.textContent = message; toast.classList.add('show'); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }

// FIXED: real keyword-based search against name, desc, label, type, and each
// place's keywords array — instead of a hardcoded 4-bucket matcher that only
// ever recognized "study/food/social/outdoor" queries and fell back to
// showing every place for anything else (e.g. "gym", "bakery", "law", "bus").
function searchPlaces(query) {
  const text = query.toLowerCase().trim();
  let filtered = places;

  if (text) {
    filtered = places.filter(place =>
      place.name.toLowerCase().includes(text) ||
      place.desc.toLowerCase().includes(text) ||
      place.label.toLowerCase().includes(text) ||
      place.type.toLowerCase().includes(text) ||
      place.keywords.some(keyword =>
        keyword.toLowerCase().includes(text) || text.includes(keyword.toLowerCase())
      )
    );
  }

  if (query.trim()) {
    recentSearches = [query.trim(), ...recentSearches.filter(item => item !== query.trim())].slice(0, 5);
    localStorage.setItem('lpu-recent', JSON.stringify(recentSearches));
  }

  resultsTitle.textContent = query.trim() ? 'Here’s what I found for you' : 'Places that feel right';
  renderPlaces(activeFilter === 'all' ? filtered : filtered.filter(place => place.type === activeFilter));
  document.querySelector('#results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelector('#searchForm').addEventListener('submit', event => { event.preventDefault(); searchPlaces(searchInput.value); });
document.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => { searchInput.value = button.dataset.prompt; searchPlaces(button.dataset.prompt); }));
document.querySelector('#filterToggle').addEventListener('click', () => { const row = document.querySelector('#filterRow'); row.hidden = !row.hidden; });
document.querySelector('#filterRow').addEventListener('click', event => { if (!event.target.matches('.filter-chip')) return; activeFilter = event.target.dataset.filter; document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('active', chip === event.target)); searchPlaces(searchInput.value); });
placeGrid.addEventListener('click', event => {
  const saveButton = event.target.closest('[data-save]');
  const ratingButton = event.target.closest('[data-open-rating]');
  if (saveButton) {
    const id = Number(saveButton.dataset.save);
    saved.has(id) ? saved.delete(id) : saved.add(id);
    localStorage.setItem('lpu-saved', JSON.stringify([...saved]));
    document.querySelector('#savedCount').textContent = saved.size;
    renderPlaces(currentItems());
    showToast(saved.has(id) ? 'Saved to your places' : 'Removed from saved places');
  }
  if (ratingButton) openRatingModal(Number(ratingButton.dataset.openRating));
});

function currentItems() {
  const query = searchInput.value.toLowerCase().trim();
  const matching = query ? places.filter(place =>
    place.name.toLowerCase().includes(query) ||
    place.desc.toLowerCase().includes(query) ||
    place.label.toLowerCase().includes(query) ||
    place.type.toLowerCase().includes(query) ||
    place.keywords.some(keyword => keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase()))
  ) : places;
  return activeFilter === 'all' ? matching : matching.filter(place => place.type === activeFilter);
}

function openModal(title, body, overline = 'LPU COPILOT') { modalTitle.textContent = title; modalBody.innerHTML = body; document.querySelector('#modalOverline').textContent = overline; modalBackdrop.hidden = false; }
function closeModal() { modalBackdrop.hidden = true; }
function openRatingModal(id) {
  const place = places.find(item => item.id === id);
  const existing = personalRatingFor(place);
  openModal(`Rate ${place.name}`, `<p class="modal-copy">Your rating helps other LPU students choose with confidence. Community scores are kept separate from your personal rating.</p><form class="rating-form" id="ratingForm"><div class="modal-stars" role="group" aria-label="Choose a rating">${[1, 2, 3, 4, 5].map(value => `<button type="button" class="modal-star ${existing && value <= existing.value ? 'selected' : ''}" data-modal-rating="${value}" aria-label="${value} out of 5">★</button>`).join('')}</div><p class="rating-prompt" id="ratingPrompt">${existing ? `${existing.value} out of 5 selected` : 'Select 1 to 5 stars'}</p><label class="review-label" for="ratingReview">Add a short note <span>optional</span></label><textarea id="ratingReview" maxlength="180" placeholder="What should another student know?">${existing ? existing.review || '' : ''}</textarea><input type="hidden" id="selectedRating" value="${existing ? existing.value : ''}" /><button class="modal-action" type="submit">Submit rating</button></form>`, 'STUDENT RATING');
  modalBody.querySelectorAll('[data-modal-rating]').forEach(button => button.addEventListener('click', () => { const value = Number(button.dataset.modalRating); modalBody.querySelector('#selectedRating').value = value; modalBody.querySelector('#ratingPrompt').textContent = `${value} out of 5 selected`; modalBody.querySelectorAll('.modal-star').forEach(star => star.classList.toggle('selected', Number(star.dataset.modalRating) <= value)); }));
  modalBody.querySelector('#ratingForm').addEventListener('submit', event => { event.preventDefault(); const value = Number(modalBody.querySelector('#selectedRating').value); if (!value) { modalBody.querySelector('#ratingPrompt').textContent = 'Choose a star rating before submitting'; return; } userRatings[id] = { value, review: modalBody.querySelector('#ratingReview').value.trim() }; localStorage.setItem('lpu-ratings-genuine', JSON.stringify(userRatings)); closeModal(); renderPlaces(currentItems()); showToast('Your rating was saved on this device'); });
}
function showSaved() { openModal('Saved places', saved.size ? places.filter(place => saved.has(place.id)).map(place => `<button class="modal-list-item" data-jump="${place.id}"><strong>${place.name}</strong><span>${place.label}</span></button>`).join('') : '<p class="modal-copy">Save a place from its heart button and it will appear here.</p>', 'YOUR SHORTLIST'); }
function showRecent() { openModal('Recent searches', recentSearches.length ? recentSearches.map(query => `<button class="modal-list-item" data-query="${query}"><strong>${query}</strong><span>Search again</span></button>`).join('') : '<p class="modal-copy">Your latest searches will appear here.</p>', 'SEARCH HISTORY'); }

document.querySelector('#savedCount').textContent = saved.size;
document.querySelector('.nav-item[href="#saved"]').addEventListener('click', event => { event.preventDefault(); showSaved(); });
document.querySelector('.nav-item[href="#recent"]').addEventListener('click', event => { event.preventDefault(); showRecent(); });
document.querySelector('#helpButton').addEventListener('click', () => openModal('Need a hand?', '<p class="modal-copy">Describe what you need in the search box, or choose a quick prompt. Ratings and saved places stay on this device.</p><button class="modal-action" id="helpSearch">Try a search</button>', 'SUPPORT')); 
document.querySelector('#notificationsButton').addEventListener('click', () => openModal('You are up to date', '<p class="modal-copy">Campus is open now. Your saved places and ratings are ready for your next visit.</p>', 'NOTIFICATIONS'));
document.querySelector('.more-button').addEventListener('click', () => openModal('Your profile', '<div class="profile-summary"><span class="avatar">AS</span><strong>Arjun Sharma</strong><small>Student · LPU</small></div><button class="modal-action" id="clearData">Clear saved places & ratings</button>', 'PROFILE'));
document.querySelector('#modalClose').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', event => { if (event.target === modalBackdrop) closeModal(); });
modalBody.addEventListener('click', event => {
  const queryButton = event.target.closest('[data-query]');
  if (queryButton) { searchInput.value = queryButton.dataset.query; closeModal(); searchPlaces(searchInput.value); }
  const clearButton = event.target.closest('#clearData');
  if (clearButton) { saved.clear(); userRatings = {}; localStorage.removeItem('lpu-saved'); localStorage.removeItem('lpu-ratings-genuine'); document.querySelector('#savedCount').textContent = '0'; closeModal(); renderPlaces(currentItems()); showToast('Your local data was cleared'); }
  const helpSearch = event.target.closest('#helpSearch');
  if (helpSearch) { closeModal(); searchInput.focus(); }
});
renderPlaces();