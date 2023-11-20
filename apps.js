document.write('Q1:')
document.write('<br>')
document.write("Result")
document.write("<br>")
var a=10
document.write("The value of a is :10")
document.write("<br>")
document.write("--------------")
document.write("<br>")
document.write("<br>")
var a=10
var b=++a
document.write("The value of ++a is",":",b)
document.write("<br>")
document.write(" Now the value of a is",":",b)
document.write("<br>")
document.write("<br>")
var a=11
var b=a++
document.write("The value of a++ is",":",b)
document.write("<br>")
var a=11
var b=a++
document.write("Now the value of a is",":",a)
document.write("<br>")
document.write("<br>")
var a=12
var b=--a
document.write("The value of --a is",":",b)
document.write("<br>")
document.write("Now the value of a is",":",b)
document.write("<br>")
document.write("<br>")

var a=11
var b=a--
document.write("The value of a-- is",":",b)
document.write("<br>")
document.write("The value of a-- is",":",a)
document.write("<br>")
document.write("<br>")

document.write('Q2:')
document.write('<br>')

var a = 2, b = 1;
document.write("2. a is: 02")
document.write("<br>")
document.write("b is: 01")
document.write("<br>")
var result = --a - --b + ++b + b--;
document.write("result is",":",result)
document.write("<br>")
document.write("<br>")

document.write('Q3:')
document.write('<br>')

var a=prompt("Enter your name")
if(a==="Irshad"){
    alert("السلام علیکم و رحمۃاللّٰہ")
    document.write('السلام علیکم و رحمۃاللّٰہ')
}
else{
    alert("السلام علیکم و رحمۃاللّٰہ")
    document.write("السلام علیکم و رحمۃاللّٰہ")
    
}
document.write('<br>')
document.write('<br>')

document.write('Q5:')
document.write('<br>')

var table = prompt ('Enter Table Number')
if (table >= 1) {
    document.write('Table of ' + table)
    document.write('<br>')
    document.write(table + 'x' + 1 + '=' + table*1)
    document.write('<br>')
    document.write(table + 'x' + 2 + '=' + table*2)
    document.write('<br>')
    document.write(table + 'x' + 3 + '=' + table*3)
    document.write('<br>')
    document.write(table + 'x' + 4 + '=' + table*4)
    document.write('<br>')
    document.write(table + 'x' + 5 + '=' + table*5)
    document.write('<br>')
    document.write(table + 'x' + 6 + '=' + table*6)
    document.write('<br>')
    document.write(table + 'x' + 7 + '=' + table*7)
    document.write('<br>')
    document.write(table + 'x' + 8 + '=' + table*8)
    document.write('<br>')
    document.write(table + 'x' + 9 + '=' + table*9)
    document.write('<br>')
    document.write(table + 'x' + 10 + '=' + table*10)
}
else {
    document.write('Table of ' + 5)
    document.write('<br>')
    document.write(5 + 'x' + 1 + '=' + 5*1)
    document.write('<br>')
    document.write(5 + 'x' + 2 + '=' + 5*2)
    document.write('<br>')
    document.write(5 + 'x' + 3 + '=' + 5*3)
    document.write('<br>')
    document.write(5 + 'x' + 4 + '=' + 5*4)
    document.write('<br>')
    document.write(5 + 'x' + 5 + '=' + 5*5)
    document.write('<br>')
    document.write(5 + 'x' + 6 + '=' + 5*6)
    document.write('<br>')
    document.write(5 + 'x' + 7 + '=' + 5*7)
    document.write('<br>')
    document.write(5 + 'x' + 8 + '=' + 5*8)
    document.write('<br>')
    document.write(5 + 'x' + 9 + '=' + 5*9)
    document.write('<br>')
    document.write(5 + 'x' + 10 + '=' + 5*10)
}
document.write('<br>')
document.write('<br>')



document.write('Q6')
document.write('<br>')
var subject1 = prompt ('Enter One Subject Name') , subject2 = prompt ('Enter Two Subject Name') , subject3 = prompt ('Enter Three Subject Name')
var totalMarks = 100 
var totalObtained1 = 70
var totalObtained2 = 80
var totalObtained3 = 90
var total = totalObtained1 + totalObtained2 + totalObtained3
document.write("<b>Subject</b>", "<b>Total marks</b>    " , "<b>Total Obtained</b>  ", "<b>Percentage</b>")
document.write('<br>')
document.write('<b>subject1</b>:', totalMarks ,"  ",totalObtained1 ," ",(totalObtained1/totalMarks) * 100, "%")
document.write('<br>') 
document.write('<b>subject2</b>:',totalMarks,"  ", totalObtained2," ", (totalObtained2/totalMarks) * 100,"%")
document.write('<br>')
document.write('<b>subject3</b>:', totalMarks ,"  ",totalObtained3,"  ",(totalObtained3/totalMarks) * 100, "%")
document.write('<br>')
document.write("<b>Total</b> :",100 * 3 ,"  ", total," ", (total/300)*100,"%")