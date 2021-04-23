function check(checkString){
  if(checkString == null || checkString == "" || checkString.trim() == null || checkString.trim() == ""){
    return true;
  }else{
    return false;
  }
}

module.exports = {
  formCheck: check
}