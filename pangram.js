function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return 0;
      }
    }
    return 1;
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog"));