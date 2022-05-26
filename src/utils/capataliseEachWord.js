export default function capitaliseEachWord(input) {
    // split into an array of words
    const words = input.split(" ");

    // loop over array and capitalise each word
    for (let i = 0; i < words.length; i++) {
        // capitalise each letter of each word + add capitalised letter back to word
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    // recreate string
    return words.join(" ")
}