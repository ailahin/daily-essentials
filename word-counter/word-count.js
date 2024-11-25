

function wordCounts(sentence){
    let words=0

    for (let character of sentence){

        if (character===" "){

            words= words+1
        }

        

        }

    words= words+1
    
    return words

}
// const  mysentence= 'this is My name';
// console.log(wordCounts(mysentence))

function countWords(){
    const sentenceInput= document.getElementById('sentence').value;
    const wordCount= wordCounts(sentenceInput)
    document.getElementById('count').textContent= wordCount;
}