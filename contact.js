document.addEventListener('DOMContentLoaded', function() {
    const cartoonMan = document.getElementById('cartoon-man');
    const contactInfo = document.getElementById('contact-info');
    const faqSection = document.getElementById('faq');
    const faqItems = document.querySelectorAll('.faq-item .question');

    setTimeout(() => {
        cartoonMan.querySelector('.speech-bubble').textContent = "hello";
        setTimeout(() => {
            cartoonMan.style.display = 'none'; // Man disappears
            contactInfo.style.display = 'block'; // Contact info appears
            faqSection.style.display = 'block'; // FAQ section appears
        }, 2000);
    }, 2000); // 3s for man to run in

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });
});