
function Test(){
  return {
    abc: function(param){
      console.log(param);
    }
  };
}

const test = new Test();
test.abc();