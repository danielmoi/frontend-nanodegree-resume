//"use strict";
// ***** BIO

var data = "%data%";

var bio = {
  "name": "Daniel",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0404199161",
    "email": "daniel@listretto.com",
    "github": "https://github.com/dm4000",
    "twitter": "https://twitter.com/DM1199",
    "location": "London"
  },
  "welcomeMessage": "Hello there!",
  "skills": ["Flying", "Typing", "HTML", "CSS", "Graphic Design", "JS"],
  "bioPic": "images/fry.jpg"
};

bio.display = function () {
  var name = "Daniel Moi";
  var formattedName = HTMLheaderName.replace(data, bio.name);
  $("#top").append(formattedName);

  var role = "Web Developer";
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  $("#top").append(formattedRole);

  var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);
  
  var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGitHub);

  var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
  $("#topContacts, #footerContacts").append(formattedTwitter);


  var formattedBioPic = HTMLbioPic.replace(data, bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) { 
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace(data, bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace(data, bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace(data, bio.skills[2]);
    $("#skills").append(formattedSkill);
    
    formattedSkill = HTMLskills.replace(data, bio.skills[3]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace(data, bio.skills[4]);
    $("#skills").append(formattedSkill);
    
    formattedSkill = HTMLskills.replace(data, bio.skills[5]);
    $("#skills").append(formattedSkill);

  }

};

bio.display();


// *** PROJECTS

var projects = {
  "projects": [
    {
      "title": "Project 365",
      "dates": "2014-215",
      "description": "One artwork a day for 365 days",
      "images": ["http://placehold.it/200x200", "http://placehold.it/200x200"]
    },
    {
      "title": "Listretto",
      "dates": "2014-2015",
      "description": "Top 5 app",
      "images": ["http://placehold.it/200x200", "http://placehold.it/200x200"]
    }
  ]
};

projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
          
      }
    }
  }
};

projects.display();

// ***** WORK

var work = {
  "jobs": [
    {
      "employer": "Listretto",
      "title": "Designer",
      "location": "New York",
      "dates": "2014-2015",
      "description": "Graphic Designer and Web Developer. Roof party normcore next level flexitarian. Williamsburg shabby chic before they sold out ugh tote bag, wayfarers asymmetrical banh mi Pinterest hashtag keffiyeh hoodie dreamcatcher Truffaut. Letterpress chambray distillery Pinterest fixie, selfies sustainable wayfarers retro flexitarian slow-carb. Vegan master cleanse kogi skateboard organic health goth."
    },
    {
      "employer": "NSW Health",
      "title": "Doctor",
      "location": "Toronto",
      "dates": "2007-2015",
      "description": "Anaesthesia. Roof party normcore next level flexitarian. Williamsburg shabby chic before they sold out ugh tote bag, wayfarers asymmetrical banh mi Pinterest hashtag keffiyeh hoodie dreamcatcher Truffaut. Letterpress chambray distillery Pinterest fixie, selfies sustainable wayfarers retro flexitarian slow-carb. Vegan master cleanse kogi skateboard organic health goth."
    }
  ]
};


work.display = function () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    // :last is a jQuery selector = it selects the last element = similar to :last-child selector in CSS;
    //without :last, we would select every object with the class .work-entry
    //  console.log(job); // this would output 0 1 = the 2 index numbers of job


    var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    // this is .work-entry, and not date-text

    var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

work.display();

// ***** EDUCATION

var education = {
  "schools": [
    {
      "name": "UNSW",
      "location": "Sydney",
      "degree": "Bachelors",
      "majors": "Medicine",
      "dates": "2006",
      "url": " "
      },
    {
      "name": "University of Sydney",
      "location": "Sydney",
      "degree": "Masters",
      "majors": "Public Health",
      "dates": "2013",
      "url": " "
      },
    {
      "name": "Martin College",
      "location": "Queensland",
      "degree": "Cert IV",
      "majors": "Graphic Design",
      "dates": "2015",
      "url": " "
      }
    ],
  "onlineCourse": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "date": "2015",
      "url": "http://udacity.com"
      }
    ]

};

education.display = function () {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace(data, education.schools[school].name);

    var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
    
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
  
    var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    
    var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);
  }


  
    $(".education-entry:last").append(HTMLonlineClasses);
  
  for (course in education.onlineCourse) {
    
    var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourse[course].title);
    
    var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourse[course].school);
    
    var formattedTitleSchool = formattedTitle + formattedSchool;
    
    $(".education-entry:last").append(formattedTitleSchool);
    
    var formattedDate = HTMLonlineDates.replace(data, education.onlineCourse[course].date);
    $(".education-entry:last").append(formattedDate);
    
    var formattedURL = HTMLonlineURL.replace(data, education.onlineCourse[course].url);
    $(".education-entry:last").append(formattedURL);
  } 
  
}

education.display();


// ***** MAP

$("#mapDiv").append(googleMap);