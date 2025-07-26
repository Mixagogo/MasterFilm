const positions = { Series: 0, Films: 0 };
const slideAmount = 170; // ширина контейнера + gap приблизно

function slideCarousel(category, direction) {
  const carousel = document.getElementById(`carousel-${category}`);
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  positions[category] += direction * slideAmount;
  if (positions[category] < 0) positions[category] = 0;
  if (positions[category] > maxScroll) positions[category] = maxScroll;
  carousel.style.transform = `translateX(-${positions[category]}px)`;
}