function btnCalculateOnAction() {
    const body = document.body;

    const arg1 = body.querySelector('#arg1');
    const arg2 = body.querySelector('#arg2');

    if (arg1.value.trim() == '' || arg2.value.trim() == '') {
        alert('Whitespace is not allowed!');
        return;
    }

    const number1 = arg1.value;
    const number2 = arg2.value;

    switch (document.querySelector('select').selectedIndex) {
        case 0: {
            alert(number1 + number2);
            break;
        }
        case 1: {
            alert(number1 - number2);
            break;
        }
        case 2: {
            alert(number1 * number2);
            break;
        }
        case 3: {
            if (number2 == 0) {
                alert('Division by zero!');
                return;
            }

            alert(number1 / number2);
            break;
        }
        default: {
            alert('Invalid operator!');
        }
    }
}