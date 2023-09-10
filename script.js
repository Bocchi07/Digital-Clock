let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let year = document.querySelector('.js-century-day');
let day = document.querySelector('.js-day-today');

myTime();

function myTime(){
	setInterval(()=>{
		let currentTime = new Date();
		let dayOfWeek = currentTime.getDay();
		let dayNum = '';

		hours.innerHTML = (currentTime.getHours() < 10 ? "0" : '') + currentTime.getHours();
		minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : '') + currentTime.getMinutes();
		seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0" : '') +currentTime.getSeconds();
		year.innerHTML = `${currentTime.getFullYear()} - ${currentTime.getMonth() < 10?"0": ''}${currentTime.getMonth()} - ${currentTime.getDate()<10?"0": ''}${currentTime.getDate()}`;

		
		switch (dayOfWeek){
			case 0:
			dayNum = 'Sunday';
			break;
			case 1:
			dayNum = 'Monday';
			break;
			case 2:
			dayNum = 'Tuesday';
			break;
			case 3:
			dayNum = 'Wednesday';
			break;
			case 4:
			dayNum = 'Thursday';
			break;
			case 5:
			dayNum = 'Friday';
			break;
			case 6:
			dayNum = 'Saturday';
			break;
		}

		day.innerHTML = dayNum;

	}, 1000)
}
