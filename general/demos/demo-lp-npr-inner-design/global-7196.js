(function() {
  const init = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      question.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
        
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          otherAnswer.classList.add('hidden');
        });
        
        if (!isOpen) {
          answer.classList.remove('hidden');
        }
      });
    });
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
