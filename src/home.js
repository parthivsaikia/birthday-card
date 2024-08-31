import './style.css';
import cardCover from './images/cardcover.jpg';
import cardInside from './images/cardinside.jpg';
import asl from './images/asl.jpg';
import littleLuffy from './images/littleluffy.jpg';
import luffyAndChopper from './images/luffyandchopper.jpg';
import luffyAndGarp from './images/luffyandgarp.jpg';
import luffyAndNami from './images/luffyandnami.jpg';
import luffyAndShanks from './images/luffyandshanks.jpg';
import luffyAndUsopp from './images/luffyandusopp.jpg';
import luffyAndZoro from './images/luffyandzoro.jpg';
import luffyEating from './images/luffyeating.jpg';
import strawhats from './images/strawhats.jpg';
import strawhatsPirates from './images/strawhatspirates.jpg';
import zoro from './images/zoro.jpg';
import nami from './images/nami.jpg';
import usopp from './images/usopp.jpg';
import robin from './images/robin.jpg';
import chopper from './images/chopper.jpg';
import franky from './images/franky.jpg';
import brook from './images/brook.jpg';
import sanji from './images/sanji.jpg';
import jinbe from './images/Jinbe.jpg';
import tictactoe from './images/tictactoe.jpg';
import { loadGamePage } from './game-welcome';

export function makeElement(elementName, className) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
}
function birthDayCard() {
    const birthDayCardContainer = makeElement('div', 'birthday-card-container');
    const birthdayHeading = makeElement('h1', 'birthday-heading');
    birthdayHeading.textContent = "Happy Birthday Luffy";
    const birthDayCard = makeElement('div', 'birthday-card');
    const insideCard = makeElement('div', 'inside');
    const outsideCard = makeElement('div', 'outside');
    const front = makeElement('div', 'front');
    const back = makeElement('div', 'back');
    outsideCard.append(front, back);
    const birthDayImgDiv = makeElement('div', 'birthday-img-div');
    const birthDayImg = new Image();
    birthDayImg.src = cardCover;
    birthDayImgDiv.append(birthDayImg);
    const balloonsImgDiv = makeElement('div', 'balloons-img-div');
    const balloonsImg = new Image();
    balloonsImg.src = cardInside;
    balloonsImgDiv.append(balloonsImg);
    back.append(balloonsImgDiv);
    const birthDayWishHeading = makeElement('p', 'birthday-wish-heading');
    birthDayWishHeading.textContent = "Happy Birthday Luffy";
    front.append(birthDayWishHeading, birthDayImgDiv);
    const birthDaywishPara = makeElement('p', 'birthday-para');
    birthDaywishPara.textContent = "Wishing you lots of joy, laughter and unforgettable moments as you celebrate another birthday! The future Pirate King";
    insideCard.append(birthDaywishPara);
    birthDayCard.append(outsideCard, insideCard);
    birthDayCardContainer.append(birthDayCard);
    return birthDayCardContainer;
}

function photos() {
    const photosDiv = makeElement('div', 'photos-div');
    const photosHeading = makeElement('h1', 'photos-heading');
    photosHeading.textContent = "Your cherishable memories!";
    const photoCarouselFrame = makeElement('div', 'photo-carousel-frame');
    const photoCarouselStrip = makeElement('div', 'photo-carousel-strip');
    const nextBtn = makeElement('button', 'next');
    nextBtn.textContent = ">";
    const previousBtn = makeElement('button', 'previous');
    previousBtn.textContent = "<";
    const btnDiv = makeElement('div', 'btn-div');
    btnDiv.append(previousBtn, nextBtn);
    photoCarouselFrame.append(photoCarouselStrip, btnDiv);
    photosDiv.append(photosHeading, photoCarouselFrame);

    const images = [asl, littleLuffy, luffyAndChopper, luffyAndGarp, luffyAndNami, luffyAndShanks, luffyAndUsopp, luffyAndZoro, luffyEating, strawhats, strawhatsPirates];
    
    // Duplicate images
    const duplicatedImages = [images[images.length - 1], ...images, images[0]];

    function appendPhotos(imgSrc) {
        const photoDiv = makeElement('div', 'photo-div');
        const carouselImg = new Image();
        carouselImg.src = imgSrc;
        photoDiv.append(carouselImg);
        photoCarouselStrip.append(photoDiv);
    }

    for (let img of duplicatedImages) {
        appendPhotos(img);
    }

    let currentIndex = 1; // Start from the first image in the middle to show correct images initially
    const totalImages = images.length;

    function updateCarouselPosition() {
        const offset = -currentIndex * 300; // Adjust 300 to match photo width
        photoCarouselStrip.style.transform = `translateX(${offset}px)`;
        
        // Reset to the correct position to create an infinite effect
        if (currentIndex === totalImages + 1) {
            photoCarouselStrip.style.transition = 'none'; // Disable transition
            currentIndex = 1; // Move back to the first image
            photoCarouselStrip.style.transform = `translateX(${-currentIndex * 300}px)`;
        } else if (currentIndex === 0) {
            photoCarouselStrip.style.transition = 'none'; // Disable transition
            currentIndex = totalImages; // Move to the last image
            photoCarouselStrip.style.transform = `translateX(${-currentIndex * 300}px)`;
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < duplicatedImages.length - 1) {
            currentIndex++;
            photoCarouselStrip.style.transition = 'transform 0.5s ease'; // Enable transition
            updateCarouselPosition();
        }
    });

    previousBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            photoCarouselStrip.style.transition = 'transform 0.5s ease'; // Enable transition
            updateCarouselPosition();
        }
    });

    return photosDiv;
}

function birthdayMsg() {
    const birthdayMsgDiv = makeElement('div', 'birthday-msg-div');
    const birthdayMsgHeading = makeElement('h1', 'birthday-msg-heading');
    birthdayMsgHeading.textContent = "Messages from loved ones"
    const wishesDiv = makeElement('div', 'wishes-div');
    birthdayMsgDiv.append(birthdayMsgHeading, wishesDiv);
    function makeCard(name, msg, imgSrc) {
        const msgCard = makeElement('div', 'msg-card');
        const msgPara = makeElement('p', 'msg');
        msgPara.textContent = msg;
        const nameAndImgDiv = makeElement('div', 'name-and-img');
        const namePara = makeElement('p', 'name');
        namePara.textContent = name;
        const image = new Image();
        image.src = imgSrc;
        nameAndImgDiv.append(namePara, image);
        msgCard.append(msgPara, nameAndImgDiv);
        wishesDiv.append(msgCard);
    }
    makeCard('Zoro', "Oi, Luffy. Another year, huh? Don’t get too cocky just because you’re a year older. Keep training, so I don’t have to keep saving your ass. But, seriously… keep leading us to the One Piece, Captain. I’ll be your sword until the end.", zoro);
    makeCard('Nami', "Happy Birthday, Luffy! I hope you’re ready to keep paying me back with interest for all the times I saved your life! But in all seriousness, thank you for always protecting your crew and believing in our dreams. Let’s make it to the end of the Grand Line together!", nami);
    makeCard('Usopp', "Luffy! Happy Birthday, Captain! Did you know I once single-handedly took down a Sea King on my birthday? True story! But today’s all about you, and I couldn’t ask for a better captain. Let’s keep chasing the ultimate adventure together!", usopp);
    makeCard('Sanji', "Luffy! Happy Birthday, you meat-loving idiot! To celebrate, I’ve prepared a feast fit for a king… the future Pirate King, that is! Now, sit down and eat before Nami-swan and Robin-chwan finish it all!", sanji);
    makeCard('Robin', "Happy Birthday, Captain. Your spirit has kept us going through every storm. Here’s to many more discoveries and mysteries unraveled with you at the helm. The ancient texts tell of great leaders, but none like you, Luffy.", robin);
    makeCard('Franky', "Luffy, bro! SUPER Happy Birthday! You’re the wildest, most epic captain a shipwright could ever ask for! Let’s keep building our dreams, one SUPER adventure at a time! I’ll make sure the Sunny is always ready to take us anywhere you want to go!", franky);
    makeCard('Chopper', "Hey, Luffy! Happy birthday to the world’s greatest straw hat. Keep dreaming big and eating meat. Don’t forget your Rumble Balls! 🦌🍖", chopper);
    makeCard('Brook', "Yohohoho! Happy Birthday, Captain Luffy! It’s not every day you see a captain as lively as you—especially when you’re around a skeleton like me! I wrote a new song for you—Bink’s Sake with a Luffy twist! Let’s keep playing to the rhythm of adventure!", brook);
    // makeCard('Jinbe', "Luffy, my young friend, happy birthday! You've come a long way since those days on Drum Island. Your courage and determination inspire us all. Always remember to stay true to yourself and your nakama. The sea is vast, and there's still much to explore. Keep sailing towards your dreams!", jinbe);
    return birthdayMsgDiv;
}

function gameSection() {
    const gameSectionDiv = makeElement('div', 'game-section-div');
    const gameSectionPara = makeElement('p', 'game-section-para');
    gameSectionPara.textContent = "Celebrate kaizokuo ni birthday by playing tic-tac-toe";
    const gameSectionImgDiv = makeElement('div', 'game-section-img-div');
    const gameSectionImg = new Image();
    gameSectionImg.src = tictactoe;
    gameSectionImgDiv.append(gameSectionImg);
    const goToGameBtn = makeElement('button', 'go-to-game-btn');
    goToGameBtn.textContent = "Play Now";
    goToGameBtn.addEventListener('click', loadGamePage);
    const gameParaBtnDiv = makeElement('div', 'para-and-btn');
    gameParaBtnDiv.append(gameSectionPara, goToGameBtn);
    gameSectionDiv.append(gameParaBtnDiv, gameSectionImgDiv);

    return gameSectionDiv;
}

export function loadHomePage() {
    const content = document.querySelector('.content');
    content.append(birthDayCard(), photos(), gameSection(), birthdayMsg());
}