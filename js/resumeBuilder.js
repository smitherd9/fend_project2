/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
		"name": "Daniel Smither",
		"role": "Web Developer",
		"welcomeMessage": "A New Definition of Quality",
		"bioPic" : "images/image2.jpg",
		"contacts": [{
			"mobileNum": "804 746 1464",
			"email": "smitherd9@gmail.com",
			"github": "smitherd9",
			"twitter": "@DanielSmither2",
			"location": "Richmond, Virginia, New York, New York"

		}],

		"skills": ["HTML wizard", "CSS guru", "Javascript Pro", "Your Personal Silver Lining"]

		}

// Bio Display Section

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
 	$("#header").prepend(formattedName);
 	$("#name").append(formattedMessage);
 	$("#header").prepend(formattedImage);

	}


	if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);

		}



for (contact in bio.contacts) {
	var formattedMobileNum = HTMLmobile.replace("%data%",bio.contacts[contact].mobileNum);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
	$("#footerContacts").append(formattedMobileNum);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);

}







var work = {
	"jobs": [{
			"title": "Online English Teacher",
			"location": "New York City",
			"employer": "EOStudy.com",
			"dates": "2014 to Present",
			"description": "Teaching English to Arabic-speaking students using the WizIQ online classroom"
		}, {
			"title": "Taxi Driver",
			"location": "Richmond, Virginia",
			"employer": "Napoleon Taxi",
			"dates": "March 2011 to August 2012",
			"description": "Picking up customers at various locations and taking them where they want to go"
		}

	]

}

// Work Display Section

work.display = function(){
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(
		formattedEmployerTitle,formattedDates,formattedDescription,formattedLocation);
		}
	}




var education = {
	"schools": [{
		"name": "Virginia Commonwealth University",
		"location": "Richmond, Virginia",
		"degree": "B.A.",
		"majors": ["Music, Religious Studies"],
		"dates": "2006 - 2011",
		"url": "http://www.vcu.edu"
		}
	],
	"onlineCourses": [{
			"title": "Front End Web Developer Nanodegree",
			"school": ": Udacity",
			"dates": "Jan 2016 to Present",
			"url": "http://www.udacity.com"
		}
	]
}


// Education Display Section

education.display = function(){
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

	$(".education-entry:last").append(
		formattedName + formattedDegree, formattedLocation, formattedDates, formattedMajors);
		}


	for (course in education.onlineCourses)
	$("#education").append(HTMLonlineClasses); {

	$("#education").append(HTMLschoolStart);
	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	$(".education-entry:last").append(
		formattedTitle + formattedSchool, formattedDates, formattedURL);
		}

	}






var projects = {
	"project": [{
			"title": "Beyond the Doors of Perception",
			"dates": "Jan 2016",
			"description": "We can pool information about experiences, but never the experiences themselves.",
			"images": ["images/image4.jpg","images/image5.jpg","images/image6.jpg"]
		},

		{
			"title": "Disquiet",
			"dates": "Feb 2016",
			"description": "I'd woken up early, and I took a long time getting ready to exist.",
			"images": ["images/image4.jpg","images/image5.jpg","images/image6.jpg"]
		}]
}


// Projects Display Section

projects.display = function(){
	for (item in projects.project) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
	$(".project-entry:last").append(
		formattedTitle,formattedDates,formattedDescription);
		}

		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
			$(".project-entry").append(
		formattedImage);
		}
	}


// Click Logging

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);





projects.display();
work.display();
education.display();
bio.display();



