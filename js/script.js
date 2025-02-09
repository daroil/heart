// const colors = ['#c71585', '#f8e2d4', '#e2bd6b', '#ffd500', '#000000'];
// const colors = ['#FF9F00', '#00824B', '#f26378', '#ffd500', '#000000'];
const colors = ['#676ae3', '#e066e1', '#e3e36b', '#66dd64', '#f26378'];
let index = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}, 1000);

const messages = [
    "Ты моя сладкая булочка!",
    "Ты со всем справишься!",
    "Нет ничего невозможного!",
    "Я тебя люблю!",
    "Никогда не сдавайся!",
    "А ниче тот факт, что ты самая лучшая?!",
    "Сейчас бы простого человеческого замедведиться...",
    "Не, ну она точно крыса, вот ты реально права! 100%",
    "Работать это конечно хорошо, но вкусняшки сами себя не скушают",
    "Кто бы что ни говорил, но они все равно не правы, если не согласны с тобой",
    "Разьеб",
    "Я вчера думал, что сильнее уже не влюблюсь, а потом наступило сегодня...",
    "Ты можешь очень долго тут сидеть, но вряд ли ты сможешь прочитать их все",
    "Если бы изобрели танец, который может свести с ума 100% человек, его бы назвали VLADA DANCE",
    "Смотреть можно бесконечно на 4 вещи. Как течет вода, как горит огонь, как переизбирают Лукашенко и на Владу",
    "Я долго долго думал, и принял решение сделать coming out... Скорее всего я Владасексуалист",
    "Писатели пишут рассказы, поэты стихи, а я пишу, что люблю тебя. Это мое искусство",
    "Потехе час, а Владе все остальное время",
    "Семь раз отмерь, один раз поцелуй Владу",
    "Без труда полюбишь Владу",
    "Терпение и труд Владу тоже любят",
    "Как аукнется, так во Владу и влюбится",
    "Дело Владу тоже любит",
    "Что посеешь, то пожнешь и с Владой сьешь",
    "Яблоко от яблони Влада тоже скушает (Если вкусное и спелое, иначе - Данила доест)",
    "Век живи - век учись Владу любить",
    "Волков бояться можно, Владу не любить нельзя",
    "Кто не рискует, тот не предлагает Владе встречаться и умирает в одиночестве и грусти",
    "Смелость города берет и дарит их Владе",
    "На войне как на войне, а Владу любить все равно надо",
    "Не попробуешь, не узнаешь, и что ты потом Владе расскажешь?",
    "На Владин каравай рот не раззевай",
    "Не все то золото, что блестит, пока оно не у Влады в лапках",
    "Не рой яму другому, все равно тебя Влада закопает",
    "Тише едешь, больше Владу послушаешь",
    "Копейка рубль бережет Владе на вкусняшки",
    "Не все коту масленица, Владе тоже хочется блинчиков",
    "Дареному коню в зубы не смотрят, а тебе Влада посмотрит. Ты не конь, так что не выпендривайся и 'ААААА'",
];

const heartContainer = document.getElementById('container');
const heartSize = document.querySelector('.heart').getBoundingClientRect().width;
let maxHearts = calculateMaxHearts();
const text = document.getElementById('text');

function show(element)
{
    // if (element.classList.contains('hidden'))
    //     element.classList.remove('hidden')
    element.style.opacity = 1;
}

function hide(element)
{
    // if(!element.classList.contains('hidden'))
    //     element.classList.add('hidden')
    element.style.opacity = 0;
}

function displayMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    text.textContent = randomMessage;
    show(text);
}

function handleClick() {
    hide(text);
    const shouldShowMessage = Math.random() < 0.2;

    if (shouldShowMessage || heartContainer.children.length > maxHearts) {
        heartContainer.innerHTML = ''; // Clear all hearts
        displayMessage();
    } else {
        addHeart();
    }
}

function calculateMaxHearts() {
    const containerWidth = window.innerWidth * 0.7; // 90% of viewport width
    const containerHeight = window.innerHeight * 0.3; // Assume 30% of viewport height for hearts

    const heartsPerRow = Math.floor(containerWidth / heartSize);
    console.log(heartsPerRow)
    const heartsPerColumn = Math.floor(containerHeight / heartSize);
    console.log(heartsPerColumn)

    return heartsPerRow * heartsPerColumn; // Max hearts that fit in available space
}


function addHeart()
{
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heartContainer.append(heart);
}

document.addEventListener("click", handleClick);