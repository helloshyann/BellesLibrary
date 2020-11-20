document.getElementById("Alicebtn").addEventListener("click", function () {

    const book1 = `Alice was beginning to get very tired of sitting by her sister on the
bank, and of having nothing to do: once or twice she had peeped into the
book her sister was reading, but it had no pictures or conversations in
it, and what is the use of a book, thought Alice without pictures or conversations?`;

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

    const book3 = `This book is largely concerned with Hobbits, and from its pages a reader may discover much of their character and a little of their history. Further information will also be found in the selection from the Red Book of Westmarch that has already been published, under the title of The Hobbit. That story was derived from the earlier chapters of the Red Book, composed by Bilbo himself, the first Hobbit to become famous in the world at large, and called by him There and Back Again, since they told of his journey into the East and his return: an adventure which later involved all the Hobbits in the great events of that Age that are here related. 
Many, however, may wish to know more about this remarkable people from the outset, while some may not possess the earlier book. For such readers a few notes on the more important points are here collected from Hobbit-lore, and the first adventure is briefly recalled. Hobbits are an unobtrusive but very ancient people, more numerous formerly than they are today; for they love peace and quiet and good tilled earth: a well-ordered and well-farmed countryside was their favourite haunt. They do not and did not understand or like machines more complicated than a forge-bellows, a water-mill, or a hand-loom, though they were skilful with tools. Even in ancient days they were, as a rule, shy of 'the Big Folk', as they call us, and now they avoid us with dismay and are becoming hard to find. They are quick of hearing and sharp-eyed, and though they are inclined to be fat and do not hurry unnecessarily, they are nonetheless nimble and deft in their movements. They possessed from the first the art of disappearing swiftly and silently, when large folk whom they do not wish to meet come blundering by; and this an they have developed until to Men it may seem magical. But Hobbits have never, in fact, studied magic of any kind, and their elusiveness is due solely to a professional skill that heredity and practice, and a close friendship with the earth, have rendered inimitable by bigger and clumsier races.`;

    let search3 = longestWord(book3);

    document.getElementById("bookoutput").innerHTML = search3;

})



function longestWord(text) {
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