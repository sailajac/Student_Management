
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Details';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Sailaja",
		course_name : "HTML5",
		email : "schekuri9@gmail.com",
		address : "Hyderabad",
		department : "Science"
	},
	{
		id : 2,
		first_name : "Srinidhi",
		course_name : "CSS3",
		email : "schekuri9@gmail.com",
		address : "Miyapur",
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Sravani",
		course_name : "JAVASCRIPT",
		email : "schekuri9@gmail.com",
		address : "KPHB",
		department : "Science"
	},
	{
		id : 4,
		first_name : "Sumalatha",
		course_name : "JQuery",
		email : "schekuri9@gmail.com",
		address : "BHEL",
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Swapna",
		course_name : "Angular",
		email : "schekuri9@gmail.com",
		address : "Filmnagar",
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}


