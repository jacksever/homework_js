function task1(age) {
    if (age > 0 && age <= 2) {
        console.log('Младенец');
        return;
    }
    if (age >= 3 && age <= 13) {
        console.log('Ребёнок');
        return;
    }
    if (age >= 14 && age <= 19) {
        console.log('Подросток');
        return;
    }
    if (age >= 20 && age <= 65) {
        console.log('Взрослый');
        return;
    }
    else {
        console.log('Пожилой');
        return;
    }
}

function task2(number, count) {
    if (count < 0) {
        console.log('Не может быть меньше 0!');
        return;
    }

    if (count > 15)
        count = 15;
    
    console.log(Number.parseFloat(number.toFixed(count)));
}

function task3(number) {
    let result = null;

    if (number % 10 == 0)
        result = 10;
    else if (number % 7 == 0)
        result = 7;
    else if (number % 3 == 0) {
            if (number % 6 == 0)
                result = 6;
            else
                result = 3;
        }
    else if (number % 2 == 0)
        result = 2;

    console.log(result != null ? `Число делится на ${result}` : 'Не делится');
}

function task4(number, type, day) {
    let student_group = [8.45, 9.80, 10.46];
    let corporative_group = [10.90, 15.60, 16];
    let regular_group = [15, 20, 22.50];

    let result = null;
    switch(type) {
        case 'Students':
            switch(day) {
                case 'Friday':
                    result = number * student_group[0];
                    break;
                case 'Saturday':
                    result = number * student_group[1];
                    break;
                case 'Sunday':
                    result = number * student_group[2];
                    break;
            }
            if (number >= 30)
                result = result - (result / 100) * 15;
            break;
        case 'Corporative':
            switch(day) {
                case 'Friday':
                    if (number >= 100)
                        result = (number - 10) * corporative_group[0];
                    else
                        result = number * corporative_group[0];
                    break;
                case 'Saturday':
                    if (number >= 100)
                        result = (number - 10) * corporative_group[1];
                    else
                        result = number * corporative_group[1];
                    break;
                case 'Sunday':
                    if (number >= 100)
                        result = (number - 10) * corporative_group[2];
                    else
                        result = number * corporative_group[2];
                    break;
            }
            break;
         case 'Regular':
            switch(day) {
                 case 'Friday':
                    result = number * regular_group[0];
                    break;
                case 'Saturday':
                    result = number * regular_group[1];
                break;
                case 'Sunday':
                    result = number * regular_group[2];
                    break;
            }
            if (number >= 10 && number <= 20)
                result = result - (result / 100) * 5;
            break;
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}

function task5(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        console.log('yes');
    else
        console.log('no');
}