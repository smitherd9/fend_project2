var bio = {
    name: 'Daniel Smither',
    role: 'Web Developer',
    contacts: [{
        mobile: '804 746 1464',
        email: 'smitherd9@gmail.com',
        github: 'smitherd9',
        twitter: '@DanielSmither2',
        location: 'Richmond, Virginia, New York, New York'

    }],
    welcomeMessage: 'A New Definition of Quality',

    skills: ['HTML wizard', 'CSS guru', 'Javascript Pro', 'Your Personal Silver Lining'],
    biopic: 'images/image2.jpg',



// Bio Display Section



 display : function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#name').append(formattedMessage);
    $('#header').prepend(formattedImage);


for (var contact in bio.contacts) {
  if (contact.hasOwnProperty(contact)) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedTwitter);
  	}
	}


// Skills Display Section

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $('#skills').append(formattedSkill);

	}

   }

};


var work = {
    jobs: [{
            employer: 'EOStudy.com',
            title: 'Online English Teacher',
            location: 'New York City',
            dates: '2014 to Present',
            description: 'Teaching English to Arabic-speaking students using the WizIQ online classroom'
        }, {
        	employer: 'Napoleon Taxi',
            title: 'Taxi Driver',
            location: 'Richmond, Virginia',
            dates: 'March 2011 to August 2012',
            description: 'Picking up customers at various locations and taking them where they want to go'
        }

    ],

// Work Display Section

display : function() {
    for (var job in work.jobs) {
      if (work.jobs.hasOwnProperty(job)) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $('.work-entry:last').append(
            formattedEmployerTitle, formattedDates, formattedDescription, formattedLocation);
    }
  }
}

};



var education = {
    schools: [{
        name: 'Virginia Commonwealth University',
        location: 'Richmond, Virginia',
        degree: 'B.A.',
        majors: ['Music, Religious Studies'],
        dates: '2006 - 2011',
        url: 'http://www.vcu.edu'
    }],
    onlineCourses: [{
        title: 'Front End Web Developer Nanodegree',
        school: ': Udacity',
        date: 'Jan 2016 to Present',
        url: 'http://www.udacity.com'
    }],


// Education Display Section

display : function() {
    for (var school in education.schools) {
      if (education.schools.hasOwnProperty(school)) {
        $('#education').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $('.education-entry:last').append(
            formattedName + formattedDegree, formattedLocation, formattedDates, formattedMajors);
    }
   }


    for (var course in education.onlineCourses) {
      if (education.onlineCourses.hasOwnProperty(course)) {
        $('#education').append(HTMLonlineClasses); {

        $('#education').append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedDateOnline = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $('.education-entry:last').append(
            formattedTitle + formattedSchool, formattedDateOnline, formattedURL);
      }
    }

  }
}

};




var projects = {
    projects: [{
            title: 'Beyond the Doors of Perception',
            dates: 'Jan 2016',
            description: 'We can pool information about experiences, but never the experiences themselves.',
            images: ['images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg']
        },

        {
            title: 'Disquiet',
            dates: 'Feb 2016',
            description: "I'd woken up early, and I took a long time getting ready to exist.",
            images: ['images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg']
        }
    ],

// Projects Display Section

display : function() {
    for (var item in projects.projects) {
      if (projects.projects.hasOwnProperty(item)) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
        $('.project-entry:last').append(
            formattedTitle, formattedDates, formattedDescription);
    }
    }

    for (var image in projects.projects[item].images) {
    // If I add:
    // if (projects.projects.hasOwnProperty(image)) {}  here, only the first two images display.  Not quite sure why that is.

    // TODO Figure out how to add above code and have all 3 images display
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);
        $('.project-entry').append(
            formattedImage);

   }
  }
};





// Click Logging

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);




projects.display();
work.display();
education.display();
bio.display();