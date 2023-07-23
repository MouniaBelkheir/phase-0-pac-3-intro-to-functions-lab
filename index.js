function shout(string) {
            return string.toUpperCase();
}
            console.log(shout("hello"))

function whisper(string) {
         return string.toLowerCase();
}
         console.log(whisper("HELLO"))

function logShout(string) {
     console.log(string.toUpperCase());
}
     logShout("oh hello there");

function logWhisper(string) {
        console.log(string.toLowerCase())
}
        logWhisper("oh hey mom")
    

function sayHiToHeadphonedRoommate(string) {
    if (string===string.toLowerCase()){
        return "I can't hear you!"
    }
    else if (string===string.toUpperCase()){
        return "YES INDEED!"
    }
    if (string==="Let's have dinner together!"){
        return "I would love to!"
    }
       }