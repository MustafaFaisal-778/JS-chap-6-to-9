// var a=10
// document.write("<h1>Result</h1>")
// document.write("<p>The value of a is: "+a+"</p>")
// document.write("<p>--------------------------</p>")

// document.write("<p>The value of ++a is: "+ ++a +"</p>")
// document.write("<p>Now the value of a is :"+a+"</p>")

// document.write("<p>The value of a++ is: "+ a++ +"</p>")
// document.write("<p>Now the value of a is :"+a+"</p>")

// document.write("<p>The value of --a is: "+ --a +"</p>")
// document.write("<p>Now the value of a is :"+a+"</p>")

// document.write("<p>The value of a-- is: "+ a-- +"</p>")
// document.write("<p>Now the value of a is :"+a+"</p>")

//Question#2    
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<p>a is :"+a+"</p>")
// document.write("<p>b is :"+b+"</p>")

// document.write("<p>Result is :"+result+"</p>")


//Question#3

// var name=prompt("Enter name")
// document.write("<h1>Hello "+name+"</h1>")



//Question#4
// var num1=5
// var num1= +prompt("Entr a number",5)
// document.write("<p>"+num1+" x 1 = "+num1+"</p>")
// var num=num1*2
// document.write("<p>"+num1+" x 2 = "+num+"</p>")
// var num=num1*3
// document.write("<p>"+num1+" x 3 = "+num+"</p>")
// var num=num1*4
// document.write("<p>"+num1+" x 4 = "+num+"</p>")
// var num=num1*5
// document.write("<p>"+num1+" x 5 = "+num+"</p>")
// var num=num1*6
// document.write("<p>"+num1+" x 6 = "+num+"</p>")
// var num=num1*7
// document.write("<p>"+num1+" x 7 = "+num+"</p>")
// var num=num1*8
// document.write("<p>"+num1+" x 8 = "+num+"</p>")
// var num=num1*9
// document.write("<p>"+num1+" x 9 = "+num+"</p>")
// var num=num1*10
// document.write("<p>"+num1+" x 10 = "+num+"</p>")

//Question#6
var subject1 = prompt("Enter subject 1")
var subject2 = prompt("Enter subject 2")
var subject3 = prompt("Enter subject 3")

var totalMarks = 100

var obtainMarks1 = +prompt("Enter Marks of 1st subject")
var obtainMarks2 = +prompt("Enter Marks of 2nd subject")
var obtainMarks3 = +prompt("Enter Marks of 3rd subject")

var percentage1 = (obtainMarks1 * 100) / totalMarks
var percentage2 = (obtainMarks2 * 100) / totalMarks
var percentage3 = (obtainMarks3 * 100) / totalMarks
document.write("<table>")
document.write("<tr> <th> Subject </th> <th> TotalMarks </th> <th> ObtainMarks </th> <th> Percentage </th> </tr>");
document.write("<tr> <td> " +subject1+" </td> <td>  "+totalMarks+" </td> <td> "+obtainMarks1+" </td> <td>"+percentage1+" % </td> <td>")
document.write("<tr> <td> " +subject2+" </td> <td>  "+totalMarks+" </td> <td> "+obtainMarks2+" </td> <td>"+percentage2+" % </td> <td>")
document.write("<tr> <td> " +subject3+" </td> <td>  "+totalMarks+" </td> <td> "+obtainMarks3+" </td> <td>"+percentage3+" % </td> <td>")

document.write("</table>")



