// References: Add { text, source } objects.
const references = [
  {
    text: "“Cardinal Insights helped us unlock new market opportunities with their sharp analytics and strategic advice.”",
    source: "Head of Strategy, TechCorp"
  },
  {
    text: "“Professional, responsive, and genuinely invested in our success. Highly recommended!”",
    source: "COO, FinNova"
  },
  {
    text: "“Their expertise in data-driven decision making transformed our business.”",
    source: "CEO, MarketPilot"
  },
  {
    text: "“We value their clear communication and fast turnaround on complex projects.”",
    source: "Director, RetailX"
  },
  {
    text: "“The Cardinal Insights team provided actionable insights that improved our bottom line.”",
    source: "CFO, BioGen"
  },
  {
    text: "“A trustworthy partner for any business looking to make smarter decisions.”",
    source: "Founder, StartSmart"
  }
];

let currentIdx = 0;

function updateCarousel() {
  const ref = references[currentIdx];
  document.getElementById('carousel-content').innerHTML =
    `<span class="reference-text">${ref.text}</span><span class="reference-source">${ref.source}</span>`;
}

document.addEventListener('DOMContentLoaded', function() {
  updateCarousel();

  document.getElementById('prev-btn').addEventListener('click', function() {
    currentIdx = (currentIdx - 1 + references.length) % references.length;
    updateCarousel();
  });
  document.getElementById('next-btn').addEventListener('click', function() {
    currentIdx = (currentIdx + 1) % references.length;
    updateCarousel();
  });
});