$a = '';
$b = '';
$sign = '';
$finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = $('p', $('.calc-screen'));

$(document).ready(function () {



   $('.btn').on('click', function (event) {
      if ($(this).hasClass('ac')) {
         $a = '';
         $b = '';
         $sign = '';
         $finish = false;
         out.text('0');
         return;
      };
      out.text('')
      $key = event.target.textContent;

     if (digit.includes($key)) {
        if ($b === '' && $sign === '') {
            $a+=$key;
            out.text($a)
        }
        else if ($a!=='' && $b!=='' && $finish) {
           $b = $key;
           $finish = false;
           out.text($b)
        }
        else {
           $b+=$key
           out.text($b);
        }
     }

     if (action.includes($key)) {
        $sign = $key;
        out.text($sign);
        return;
     }

     if ($key === '=') {
        switch ($sign) {
            case '+':
               $a = (+$a) + (+$b);
               break;
            case '-':
               $a = $a - $b;
               break;
            case 'X':
               $a = $a * $b;
               break;
            case '/':
               if ($b === '0') {
                  out.text('Ошибка');
                  $a='';
                  $b='';
                  $sign='';
                  return;
               }
               $a = $a / $b;
               break;
        }

        $finish = true;
        out.text($a)
     }
   })
})