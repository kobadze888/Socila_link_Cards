
const containerCards = document.querySelector('.container_cards');
let activeBtn = null;
const cardHTML = `
  <div class="social_link_card">
      <img src="./assets/images/avatar-jessica.jpeg" alt="Jesica">
      <h2>Jessica Randall</h2>
      <h3>London, United Kingdom</h3>
      <span>"Front-end developer and avid reader."</span>
      <button class="social_link_btn">GitHub</button>
      <button class="social_link_btn">Frontend Mentor</button>
      <button class="social_link_btn">LinkedIn</button>
      <button class="social_link_btn">Twitter</button>
      <button class="social_link_btn">Instagram</button>
    </div>
     `;

for (let i = 0; i <= 10; i++) {

    containerCards.innerHTML += cardHTML;

}


containerCards.addEventListener('click', (event) => {

    if (event.target.classList.contains('social_link_btn')) {

        if (activeBtn) {
            activeBtn.style.color = '';
            activeBtn.style.background = '';
        }

        event.target.style.color = 'red';
        event.target.style.background = 'white';

        activeBtn = event.target;

    }




})
