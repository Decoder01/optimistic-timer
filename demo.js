const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let x;
let rangeVal = Number($('#customRange').val());
document.getElementById('datePicker').valueAsDate = new Date();
document.getElementById("timePicker").value = "23:59:59";

var countDownDate = new Date("Jun 28, 2019 23:59:59").getTime();
// var countDownDate = new Date(2021, 1, 5, 15, 37, 25).getTime();

$('#submit').on('click', function () {
    let datePicker = new Date($('#datePicker').val());
    let timePicker = $('#timePicker').val();

    let endDate = new Date(`${monthNames[datePicker.getMonth()]} ${datePicker.getDate() + 1}, ${datePicker.getFullYear()} ${timePicker}`);
    countDownDate = endDate;
    console.log(datePicker, timePicker);
    console.log(endDate);

    stopTimer();
    startTimerFor(rangeVal);
    $('.displayTime').css('display', 'block');
});

$('#customRange').on('input', function () {
    stopTimer();
    $('.displayTime').css('display', 'block');
    rangeVal = Number($('#customRange').val());
    startTimerFor(rangeVal);
});

function startTimerFor(num) {
    x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate.getTime() - now;
        // console.log(countDownDate, now, distance);

        //Storing all values
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let maxMin = (hours * 60) + minutes;

        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let maxSeconds = (maxMin * 60) + seconds;

        let milliseconds = Math.floor((distance % 1000));
        let maxMilli = (maxSeconds * 1000) + milliseconds;

        // let microseconds = maxMilli * 1000;

        switch (num) {
            case 1:
                $('.displayTime').text(`${hours} hours left`);
                break;
            case 2:
                $('.displayTime').text(`${maxMin} minutes left`);
                break;
            case 3:
                $('.displayTime').text(`${maxSeconds} seconds left`);
                break;
            case 4:
                $('.displayTime').text(`${maxMilli} milliseconds left`);
                break;
            case 5:
                $('.displayTime').text(`${maxMilli}000 microseconds left`);
                break;
            case 6:
                $('.displayTime').text(`${maxMilli}000000 nanoseconds left`);
                break;
            case 7:
                $('.displayTime').text(`${maxMilli}000000000 picoseconds left`);
                break;
            
            default:
                break;
        }

    }, 1);
}

function stopTimer() {
    clearInterval(x);
}