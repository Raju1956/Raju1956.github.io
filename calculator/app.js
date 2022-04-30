const $lis = document.querySelectorAll("ul li")
solutionDone =  0

$lis.forEach((node) => {
    node.addEventListener('mousedown', function(event) {
       const value = node.innerText.trim()
       const $result = document.querySelector(".result")
       const resultText = $result.innerText.trim()
       if (solutionDone == 1) {
           console.log('fl' + solutionDone);
           solutionDone = 0;
           if ((value >= "0") && (value <= "9"))
               {
               $result.innerText = " "};   
           console.log(value+" =Button "+ $result.innerText + "fl" +solutionDone);          
        }   
   
   

       if(resultText == '0' || resultText == 'undefined' || resultText == 'Infinity') {
        $result.innerText = ''
       }

       if(value == '=') {
          let solution = eval(resultText)
          $result.innerText = solution
          solutionDone = 1
         return true
       }

     if(value.toLowerCase() == 'c') {
           $result.innerText = ''
           return true
     }
   
     $result.append(value)
   })
})