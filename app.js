// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
var num1;
var num2;
var operatorindex = 1;
var expression;
var result;
var output;

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    output = "All commands should be performed without space \n\n" +
  "commands----->\n" +
  "=num1+num2 \n" +
  "=num1-num2 \n" +
  "=num1*num2 \n" +
  "=num1/num2 \n" +
  "=num1%num2 \n\n" +
  "=num1^num2 \n" +
  "=root(num) \n\n" +
  "=sin(num) \n" +
  "=cos(num) \n" +
  "=tan(num) \n" +
  "=cosec(num) \n" +
  "=sec(num) \n" +
  "=cot(num) \n\n" +
  "=log(num) \n" +
  "=ln(num) \n" +
  "=round(num) \n" +
      "=random() \n";
    
    expression = message.body.toString();
    if (message.body.toString().substring(0, 1) == '=') {

      if (expression.substring(1, 5) == "root") {
        num1 = expression.substring(5, expression.length);
        if (num1 >= 0) {
          result = Math.sqrt(parseFloat(num1));
          output = result + "";
        }
        else {
          result = Math.sqrt(Math.abs(parseFloat(num1)));
          output = result + "i";
        }
      }
      else if (expression.substring(1, 6) == "root(") {
        num1 = expression.substring(6, expression.length-1);
        if (num1 >= 0) {
          result = Math.sqrt(parseFloat(num1));
          output = result + "";
        }
        else {
          result = Math.sqrt(Math.abs(parseFloat(num1)));
          output = result + "i";
        }
      }
      else if (expression.substring(1, 4) == "sin") {
        num1 = expression.substring(4, expression.length);
        result = Math.sin(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 5) == "sin(") {
        num1 = expression.substring(5, expression.length-1);
        result = Math.sin(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 4) == 'cos') {
        num1 = expression.substring(4, expression.length);
        result = Math.cos(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 5) == "cos(") {
        num1 = expression.substring(5, expression.length-1);
        result = Math.cos(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 4) == 'tan') {
        num1 = expression.substring(4, expression.length);
        if (num1 % 90 != 0)
        result = Math.tan(parseFloat(num1) * Math.PI / 180);
        else result = 1 / 0;
        
        output = result + "";
      }
      else if (expression.substring(1, 5) == 'tan(') {
        num1 = expression.substring(5, expression.length-1);
        if (num1 % 90 != 0)
        result = Math.tan(parseFloat(num1) * Math.PI / 180);
        else result = 1 / 0;
        
        output = result + "";
      }
      else if (expression.substring(1, 6) == 'cosec') {
        num1 = expression.substring(4, expression.length);
        result = 1 / Math.sin(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 7) == 'cosec(') {
        num1 = expression.substring(7, expression.length-1);
        result = 1 / Math.sin(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 4) == 'sec') {
        num1 = expression.substring(4, expression.length);
        result = 1 / Math.cos(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 5) == 'sec(') {
        num1 = expression.substring(5, expression.length-1);
        result = 1 / Math.cos(parseFloat(num1) * Math.PI / 180);
        output = result + "";
      }
      else if (expression.substring(1, 4) == 'cot') {
        num1 = expression.substring(4, expression.length);
        if (num1 != 0)
        result = 1 / Math.tan(parseFloat(num1) * Math.PI / 180);
        else result = 1 / 0;
        
        output = result + "";
      }
      else if (expression.substring(1, 5) == 'cot(') {
        num1 = expression.substring(5, expression.length-1);
        if (num1 != 0)
        result = 1 / Math.tan(parseFloat(num1) * Math.PI / 180);
        else result = 1 / 0;
        
        output = result + "";
      }
      else if (expression.substring(1, 4) == 'log') {
        num1 = expression.substring(4, expression.length);
        result = Math.log10(num1);
        output = result + "";
      }
      else if (expression.substring(1, 5) == 'log(') {
        num1 = expression.substring(5, expression.length-1);
        result = Math.log10(num1);
        output = result + "";
      }
      else if (expression.substring(1, 3) == 'ln') {
        num1 = expression.substring(3, expression.length);
        result = Math.log(num1);
        output = result + "";
      }
      else if (expression.substring(1, 4) == 'ln(') {
        num1 = expression.substring(4, expression.length-1);
        result = Math.log(num1);
        output = result + "";
      }
      else if (expression.substring(1, 6) == 'round') {
        num1 = expression.substring(6, expression.length);
        result = Math.round(num1);
        output = result + "";
      }
      else if (expression.substring(1, 7) == 'round(') {
        num1 = expression.substring(7, expression.length-1);
        result = Math.round(num1);
        output = result + "";
      }
      else if (expression.substring(1, 7) == 'random') {
        result = Math.random();
        output = result + "";
      }
      else if (expression.substring(1, 8) == 'random(') {
        result = Math.random();
        output = result + "";
      }
      else
        for (var i = 0; i < expression.length; i++) {
          if (expression[i] == "+") {
            operatorindex = i;
            num1 = expression.substring(1, operatorindex);
            num2 = expression.substring(operatorindex + 1, expression.length);
            result = parseFloat(num1) + parseFloat(num2);
            output = result + "";
          }
          else if (expression[i] == "-") {
            operatorindex = i;
            num1 = expression.substring(1, operatorindex);
            num2 = expression.substring(operatorindex + 1, expression.length);
            result = parseFloat(num1) - parseFloat(num2);
            output = result + "";
          }
          else if (expression[i] == "*") {
            operatorindex = i;
            num1 = expression.substring(1, operatorindex);
            num2 = expression.substring(operatorindex + 1, expression.length);
            result = parseFloat(num1) * parseFloat(num2);
            output = result + "";
          }
          else if (expression[i] == "/") {
            operatorindex = i;
            num1 = expression.substring(1, operatorindex);
            num2 = expression.substring(operatorindex + 1, expression.length);
            if (parseFloat(num2) != 0) {
              result = parseFloat(num1) / parseFloat(num2);
              output = result + "";
            }
            else output = "(-_-)/";
          }
          else if (expression[i] == "%") {
            operatorindex = i;
            num1 = expression.substring(1, operatorindex);
            num2 = expression.substring(operatorindex + 1, expression.length);
            result = parseFloat(num1) % parseFloat(num2);
            output = result + "";
          }
          else if (expression[i] == "^") {
            operatorindex = i;
            num1 = expression.substring(1, operatorindex);
            num2 = expression.substring(operatorindex + 1, expression.length);
            result = Math.pow(parseFloat(num1), parseFloat(num2));
            output = result + "";
          }
        }


      client
        .reply(message.from, output, message.id.toString())
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}