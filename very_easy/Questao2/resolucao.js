function repeatChunk(number,word="chunk"){
    if(number==1){
      return word
    }else{
       return word+ '-' + repeatChunk(number-1)
    }
  }