const quote = document.getElementById('qu');
const btn = document.getElementById('button');
const auth = document.getElementById('auth');
const loader = document.getElementById('loader');
async function fetchQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return [data.content,data.author];

}

btn.addEventListener('click',async () => {
    loader.style.display = 'block';
    const randomQuote = await fetchQuote();
    loader.style.display = 'none';
    quote.innerText = randomQuote[0];
    auth.innerText = `- ${randomQuote[1]}`;
})

window.addEventListener('load',async()=>{
    loader.style.display = 'block';
    const randomQuote = await fetchQuote();
    loader.style.display = 'none';
    quote.innerText = randomQuote[0];
    auth.innerText = `- ${randomQuote[1]}`;
})

