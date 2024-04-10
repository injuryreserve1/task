const headerHTML = `
    <div class="header__logo">
        <img src="./../assets/icons/botanique.png" alt="logo" />
    </div>
    <nav class="header__nav" id="nav">
        <ul class="header__pages">
            <li class="header__page ">
                <a href="main">ГЛАВНАЯ</a>
            </li>
            <li class="header__page">
                <a href="analytics">АНАЛИТИКА</a>
            </li>
        </ul>
    </nav>
    <div class="header__user">
        <img src="./../assets/icons/avatar.png" alt="avatar" />
    </div>
    `;
const header = document.createElement('header');
header.classList.add('header');
header.innerHTML = headerHTML;

document.body.insertAdjacentElement('afterbegin', header);

const url = document.URL;
const li = header.querySelectorAll('li');
// console.log(li);
if (url.endsWith('main')) {
    li[0].classList.add('active');
} else {
    li[1].classList.add('active');
}
