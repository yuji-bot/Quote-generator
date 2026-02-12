const api_url="https://api.quotable.io/random";
const quote=document.querySelector("blockquote");
const author=document.querySelector("span");
const button=document.querySelector("#getq")
const tweet=document.querySelector("#tweet");
console.log(quote.innerHTML);

async function getquote(url){
    const responce=await fetch(url);
    var data =await responce.json();
    console.log(data);
    quote.innerText=data.content;
    author.innerText=data.author;
}
button.addEventListener("click",()=>{
    getquote(api_url);
})
tweet.addEventListener("click", () => {
    const text=quote.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank");
});
