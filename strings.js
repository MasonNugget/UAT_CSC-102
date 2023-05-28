function strings()
{
    var string1 = document.getElementById("iniStr").value
    var string2 = document.getElementById("sndStr").value
    alert(string1);
    alert(string2);

    var str3 = string1 + string2;//this variable combines strings 1 and 2 to create string 3
    

   var rev = str3;
   var splitString = str3.split("");//this variable splits string 3 apart
   var reverseArray = splitString.reverse();//after splitting, this variable reverses string 3
   alert(rev);
   var joinArray = reverseArray.join("");//after reversing, this variable then joins string 3 back together
   alert(joinArray);


   if (joinArray == str3)//after the actions above are performed, if the word is spelt the same forwards and backwards, you will get the following 2 prompts below
   {
    alert("This is a Palindrome")
    alert("Please enter another word")
   }
   if (joinArray !== str3)//after the actions above are performed, if the word is NOT spelt the same forwards and backwards, you will get the following 2 prompts below
   {
    alert("This is not a plaindrome")
    alert("Please enter another word")
   }
}


