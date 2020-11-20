document.getElementById("Alicebtn").addEventListener("click", function () {

    const book1 = `Alice was beginning to get very tired of sitting by her sister on the
bank, and of having nothing to do: once or twice she had peeped into
the book her sister was reading, but it had no pictures or
conversations in it, &ldquoand what is the use of a book,&rdquo; thought Alice
&ldquowithout pictures or conversations?&rdquo; 

So she was considering in her own mind (as well as she could, for the
hot day made her feel very sleepy and stupid), whether the pleasure of
making a daisy-chain would be worth the trouble of getting up and
picking the daisies, when suddenly a White Rabbit with pink eyes ran
close by her.`;

    let search1 = longestWord(book1);

    document.getElementById("bookoutput").innerHTML = search1;

})

document.getElementById("Harrybtn").addEventListener("click", function () {

    const book2 = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. 
Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere. `;

    let search2 = longestWord(book2);

    document.getElementById("bookoutput").innerHTML = search2;

})

document.getElementById("Hobbitbtn").addEventListener("click", function () {

    const book3 = `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton. 

Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty years, ever since his remarkable disappearance and unexpected return. The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure. And if that was not enough for fame, there was also his prolonged vigour to marvel at. Time wore on, but it seemed to have little effect on Mr. Baggins. At ninety he was much the same as at fifty. At ninety-nine they began to call him well-preserved; but unchanged would have been nearer the mark. There were some that shook their heads and thought this was too much of a good thing; it seemed unfair that anyone should possess (apparently) perpetual youth as well as (reputedly) inexhaustible wealth. 

&ldquoIt will have to be paid for,&rdquo; they said. &ldquoIt isn’t natural, and trouble will come of it!&rdquo;`;

    let search3 = longestWord(book3);

    document.getElementById("bookoutput").innerHTML = search3;

})

function longestWord(text) {
    confetti.start(1000);
    let bookSplit = text.split(' ')
    let maxCharacters = 0
    let wordoutput = ''

    for (let i = 0; i < bookSplit.length; i++) {
        if (bookSplit[i].length > maxCharacters) {
            maxCharacters = bookSplit[i].length
            wordoutput = bookSplit[i]
        }
    }

    return wordoutput;
}

