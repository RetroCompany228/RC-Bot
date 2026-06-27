// script.js (Часть 1/2)

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user || {};

const pages = {
    home: document.getElementById("homePage"),
    profile: document.getElementById("profilePage"),
    mentors: document.getElementById("mentorsPage")
};

function openPage(page){

    Object.values(pages).forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}

document
.getElementById("openProfile")
.onclick=()=>{

    openPage(pages.profile);

};

document
.getElementById("openMentors")
.onclick=()=>{

    openPage(pages.mentors);

};

document
.getElementById("backFromProfile")
.onclick=()=>{

    openPage(pages.home);

};

document
.getElementById("backFromMentors")
.onclick=()=>{

    openPage(pages.home);

};

document.getElementById("firstName").textContent =
user.first_name || "Неизвестно";

document.getElementById("fullName").textContent =
(user.first_name || "") +
" " +
(user.last_name || "");

document.getElementById("username").textContent =
user.username
? "@"+user.username
: "Отсутствует";

document.getElementById("telegramId").textContent =
user.id || "Неизвестно";

document.getElementById("premium").textContent =
user.is_premium
? "Да"
: "Нет";

document.getElementById("language").textContent =
user.language_code || "ru";

document.getElementById("loginDate").textContent =
new Date().toLocaleString();

// script.js (Часть 2/2)

if(user.photo_url){

    document
    .getElementById("avatar")
    .src = user.photo_url;

}else{

    document
    .getElementById("avatar")
    .src =
    "https://placehold.co/300x300";

}

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.93)"
            },

            {
                transform:"scale(1.03)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:220

        });

    });

});

tg.MainButton.hide();

tg.BackButton.hide();

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        tg.openTelegramLink(
            link.href
        );

    });

});

console.log(
"Retro Company Mini App Loaded"
);
