export default function capitalise(input) {
    // convert all to lower case
    let lower = input.toLowerCase();
    // grab first letter of word/sentence
    let first = lower.charAt(0);
    // uppercase first letter
    let upper = first.toUpperCase();
    // take the initial string and save all but first letter
    let remainer = lower.slice(1, );
    // add pieces together
    let capResult = upper + remainer;
    return capResult
}