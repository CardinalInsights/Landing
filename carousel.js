// References: Add { text, source } objects.
const references = [
  {
    text: "“Dan undertook a difficult and sensitive research project, and delivered truly outstanding results. He completely exceeded our expectations and as a result we looked to increase our funding to access even more of his high-quality work.”",
    source: "Russell Bagnall, Home Office"
  },
  {
    text: "“Dan’s research is meticulous and detail orientated, Dan has the unique ability to inform both operational tactics and strategic policy decision through his work. I use his research regularly to complement the ways in which we approach online investigations, and am convinced his insights have had a significant impact in fight against online child sexual exploitation. The work he has done is probably the best insight I get into companies and that includes the face to face meeting I have with them. This work is invaluable.”",
    source: "Andy Etherington, NCA / NCMEC"
  },
  {
    text: "“Dan brought deep subject expertise, a strong network of relevant contacts, and a sustained awareness of emerging research and developments in this evolving area. He has a remarkable ability to distil complex topics into clear, actionable focus areas, and to relay this content in an accessible and understandable way for the intended audience. He was very easy to work with being consistently responsive, organised, and dependable. His proactive and pragmatic approach was instrumental in delivering both tangible and valuable work aligned with the project's goals”",
    source: "Annie Estlin, Science Research Manager, NPCC"
  },
  {
    text: "“I had the privilege of working with Dan for several years at ACE. Throughout this time, he was a consummate professional. Of particular note were his excellent analytical skills and written outputs. Having been in a position to review analysis and written work from dozens of people and organisations, I always looked forward to reading his work and can honestly say his outputs were tremendous and near peerless. This is no flippant comment - someone that can research, digest and understand a topic, then write clearly, simply and compelling to answer both general and specific questions is rare. Dan is a master of this art. Furthermore, Dan understands the bigger picture and brings enthusiasm to driving new ideas forward, both internally and engaging with clients to drive business development. I do not hesitate to recommend him and would look forward to working with him again”",
    source: "Graedon Crouch, MOD Futures Lab (ex ACE)"
  },
  {
    text: "“I just wanted to say that this is yet another example of your work simply being better than the rest of the system. Admittedly, maybe we were fortunate with the timing, but these insights have been invaluable. [We now] have better HUMINT for CSA than law enforcement, by quite some way. The UK has been able to speak to foreign partners with real authority… and as a result, our ability to effectively work has massively increased. We would be in a significantly weaker position if it weren't for this work”",
    source: "Russell Bagnall, Home Office"
  },
  {
    text: "“I'm amazed at the quality of the deliverable and how much you were able to advance the knowledge base within just 20 days.”",
    source: "Sam Brooks, Head of F&I, ACE"
  }
];

let currentIdx = 0;
let carouselInterval = null;

function updateCarousel() {
  const ref = references[currentIdx];
  document.getElementById('carousel-content').innerHTML =
    `<span class="reference-text">${ref.text}</span><span class="reference-source">${ref.source}</span>`;
}

function showNextReference() {
  currentIdx = (currentIdx + 1) % references.length;
  updateCarousel();
}

function showPrevReference() {
  currentIdx = (currentIdx - 1 + references.length) % references.length;
  updateCarousel();
}

function resetInterval() {
  if (carouselInterval) clearInterval(carouselInterval);
  carouselInterval = setInterval(showNextReference, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  updateCarousel();

  document.getElementById('prev-btn').addEventListener('click', function() {
    showPrevReference();
    resetInterval();
  });

  document.getElementById('next-btn').addEventListener('click', function() {
    showNextReference();
    resetInterval();
  });

  carouselInterval = setInterval(showNextReference, 5000);
});
