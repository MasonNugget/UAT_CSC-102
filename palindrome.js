function strings()//Mason Nugent
{
    var string1 = document.getElementById("iniStr").value;
    var string2 = document.getElementById("sndStr").value;
    alert(string1);
    alert(string2);

    var str3 = string1 + string2;
    

   var rev = str3;
   var splitString = str3.split("");//This command splits the string
   alert(splitString);
   var reverseArray = splitString.reverse();//This command reverses the string
   alert(rev);
   var joinArray = reverseArray.join("");//This command joins the string
   alert(joinArray);

   if (joinArray == str3)//If the string is spelt the same forwards and backwards, the alerts below will pop up
    {
        alert("This is a palindrome.")
        alert("Please enter another string.")
    }

    if (joinArray != str3)//If the string is not spelt the same forwards and backwards, the alerts below will pop up
    {
        alert("This is not a palindrome.")
        alert("Please enter another string.")
    }

}