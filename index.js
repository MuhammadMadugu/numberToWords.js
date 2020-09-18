
         function unit(num) {
         	// body...

         	num = parseInt(num);

         	switch(num){
              case 1:
                real_num = "One";
                break;
               case 2:
                real_num = "Two";
                break;
               case 3:
                real_num = "Three";
                break;
                case 4:
                real_num = "Four";
                break;
                case 5:
                real_num = "Five";
                break;
                case 6:
                real_num = "Six";
                break;
                case 7:
                real_num = "Seven";
                break;
                case 8:
                real_num = "Eight";
                break;
                case 9:
                real_num = "Nine";
                break;


         	}

         	return real_num;
         }



         function tens(num){
       
            num =  parseInt(num);

                       
              
             if(num == 10){

             	real_num = "Ten" ;

             }else if(num == 11){
                real_num = "Eleven" ;
                
             }else if(num == 12 ){
                 real_num = "Twelve" ;
             	
             }else if(num == 13 ){
                real_num = "Thirteen" ;
             	
             }else if(num == 14){
                real_num = "Fourteen" ;
             	
             }else if(num == 15){
               real_num = "Fifteen" ;
             	
             }else if(num == 16){
               real_num = "Sixteen" ;
             	
             }else if(num == 17){
                 real_num = "Seventeen" ;
             	
             }else if(num == 18){
                real_num = "Eighteen" ;
             	
             }else if(num == 19 ){
               real_num = "Ninteen" ;
             	
             }else if(num == 20){
                real_num = "Twenty" ;
             	
             }else if(num == 30){
                real_num = "Thirty" ;
             	
             }else if(num == 40){
                real_num = "Forty" ;
             	
             }else if(num == 50){
               real_num = "Fifty" ;
             	
             }else if(num == 60){
               real_num = "Sixty" ;
             	
             }else if(num == 70){
               real_num = "Seventy" ;
             	
             }else if(num == 80){
               real_num = "Eighty" ;
             	
             }else if(num == 90 ){
               real_num = "Ninety" ;
             	
             }else{

             	// get the number and convert to string

             	num = num+"";
             

             	if( 1 == num.length)
             		real_num =  unit(num.charAt(0));
              else{

              	first_num = num.charAt(0)+"0";
             	   second_num = num.charAt(1);

             	  real_num = tens(parseInt(first_num)) +" "+ unit(parseInt(second_num));


              }
             	


             }

            return real_num;

         }


         function hundreds(num) {
           num = num+"";
           // alert(num);

           // return;
           if(num.charAt(1) == '0' && num.charAt(2) == '0'){

           	return unit(parseInt(num.charAt(0))) + " hundred";

           }else if(num.charAt(0) == "0" && num.charAt(1) != "0")
             return tens(num.substring(1));
            else if(num.charAt(0) == "0" && num.charAt(1) == "0")
              return " "+unit(num.charAt(2)+"");

     return unit(parseInt(num.charAt(0))) + " hundred and "+ tens(parseInt(num.charAt(1)+num.charAt(2)))



}


  function thousands(num) {
      // body...
       num = removeLeadingZeros(num);

      var len = num.length;
      if(len == 1){
         return unit(num);
      }else if(len == 2){
            return tens(num);
      }else if(len == 3){

         return hundreds(num);

       }else if(len == 4){

        if(isZeros(num,1))
            return unit(num.charAt(0)) + " thousand";
         else
            return unit(num.charAt(0)) + " thousand " + hundreds(num.substring(1));




      }else if(len == 5){

         if(isZeros(num,2))
            return tens(num.substring(0,2)) + " thousand";
         else
            return tens(num.substring(0,2))+ " thousand " + hundreds(num.substring(2));


      }else if(len == 6){
        if(isZeros(num,3))
            return hundreds(num.substring(0,3)) + " thousand";
         else
            return hundreds(num.substring(0,3))+ " thousand " + hundreds(num.substring(3));
        
      }

        }

    function millions(num) {
        // body...

        var len = num.length;

        if(len === 7){
           if(isZeros(num,1))
              return unit(num.charAt(0)) + " million";
            else
               return unit(num.charAt(0)) + " million " + thousands(num.substring(1));


        }else if(len == 8){
            if(isZeros(num,2))
               return tens(num.substring(0,2)) + " million";
            else
                return tens(num.substring(0,2))+ " million " + thousands(num.substring(2));  


        }else if(len == 9){
             if(isZeros(num,3))
            return hundreds(num.substring(0,3)) + " million";
         else
            return hundreds(num.substring(0,3))+ " million " + thousands(num.substring(3));
        }

          
    }    


  function isZeros(num,j) {
       for(i = j; i<num.length;i++){
          if(num.charAt(i) != 0)
            return false;
            
           

       }

       return true;

      
  }


  
function removeLeadingZeros(num) {
  // body...

  if(num.charAt(0) != '0')
      return num;
   else
      return removeLeadingZeros(num.substring(1));

}
  
  function toWords(num) {
      // body...
   num = num+'';
      num = num.replace(",","");
      num = removeLeadingZeros(num);
        //  if(isNaN(num)){
        // word.innerHTML = "Enter valid number"
        // return;
        //  }
      if(num.length == 0){
           inWord = "Zero"
      }else if(num.length == 1){

        inWord = unit(num);
      }else if(num.length == 2){
          
          inWord = tens(num);
          
      }else if(num.length == 3){
        
          inWord = hundreds(num);

      }else if(num.length > 3 && num.length < 7){

         inWord = thousands(num);
      }else if(num.length > 6 && num.length < 10){

         inWord = millions(num);
      }else{
        inWord = "Not yet";
      }

      // do some

      inWord = (inWord == "Zero") ? '' : inWord+' Naira Only' 

      $('#amount_in_words').html(inWord);

  }
