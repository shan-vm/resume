//JSON Object................
var json_obj = {
  "name": "Shan Muhammed",
  "address":"Masaken Mesaimeer, Doha, Qatar",
  "email":"mail.shanvm@gmail.com",
  "mobile":"+974 30074621",
  "DOB":"1986/07/25",
  "language":"English, Arabic",
  "facebook":"https://www.facebook.com/i.shanvm",
  "linkedin":"https://www.linkedin.com/in/shan-muhammed-41319314",
  "jobtitle":"Application Developer",
  "metadesc":"Resume of Shan Muhammed. Application Developer, System Analyst and Programmer",
  "skills": [
    { "name": "infor EAM consultancy", "percentage": "85" },
    { "name": "MEAN stack", "percentage": "60" },
    { "name": "angular", "percentage": "70" },
    { "name": "node", "percentage": "75" },
    { "name": "Bootstrap", "percentage": "80" },
    { "name": "TypeScript", "percentage": "70" },
    { "name": "PHP", "percentage": "80" },
    { "name": "C#.Net", "percentage": "80" },
    { "name": "HTML", "percentage": "75" },
    { "name": "CSS", "percentage": "75" },
    { "name": "javascript", "percentage": "80" },
    { "name": "jQuery", "percentage": "80" },
    { "name": "Docker", "percentage": "80" },
    { "name": "git", "percentage": "70" },
    { "name": "MongoDB/Mongoose", "percentage": "70" },
    { "name": "ionic", "percentage": "70" },
    { "name": "firebase", "percentage": "80" },
    { "name": "MS SQL", "percentage": "80" },
    { "name": "MySQL", "percentage": "80" },
    { "name": "Heroku", "percentage": "70" },
    { "name": "devops", "percentage": "70" },
    { "name": "Yardi", "percentage": "70" },
  ],
  "interests": [
    { "name": "blockchain", "percentage": "50" },
    { "name": "etherium", "percentage": "50" },
    { "name": "machine learning", "percentage": "50" },
    { "name": "Augmented Reality", "percentage": "50" },
    { "name": "odoo", "percentage": "50" },
    { "name": "jenkin", "percentage": "50" },
    { "name": "selenium", "percentage": "50" },
    { "name": "Industry 4.0", "percentage": "50" },
    { "name": "Amazon web service", "percentage": "50" },
    { "name": "google cloud platform", "percentage": "50" },
    { "name": "azure", "percentage": "50" },
  ],
  "experience": [
    { "company": "Waseef", "from": "DEC 2013", "to": "Present", "title": "Application Developer", "description": "Waseef, is one of the largest fully integrated Asset, Property and Facility Management services companies in Qatar, which offers a “one stop shop” and full service solution to its clients​. Some of my tasks are:<ul><li>infor EAM Support</li><li>Yardi Voyager Support</li><li>Application Architecture</li><li>Web/Desktop/Mobile App development</li><li>Create REST API for the Apps</li><li>Create Successor within the group.</li><li>Gather feedback from end users</li><li>Ensure the app under development covers all the requirements and meet company standards</li><li>Arrange third-party meeting in case of resource required from outside.</li></ul>" },
    { "company": "Graff360", "from": "JAN 2011", "to": "DEC 2013", "title": "Senior System & Programmer Analyst", "description": "Graff360 is concept and creative solutions providing company. Graff360 focus on Application Development, Creative Advertising, Publications, Media and Print home​. Some of my tasks are:<ul><li>Development, Troubleshooting and Maintenance of Web and Desktop applications in .NET</li><li>Development, Troubleshooting and Maintenance of Web applications in PHP platform</li><li>Database and Application architectural design</li><li>Bug fixing</li><li>Project Documentation</li><li>Train end users for custom developed application</li></ul>" },
    { "company": "Tuner Labs", "from": "APR 2008", "to": "DEC 2010", "title": "System & Programmer Analyst", "description": "TunerLabs is a web development and IT outsourcing company. TunerLabs give Web solutions, Designing, Branding and Technical Support Services.​ Some of my tasks were:<ul><li>Development of Web and Desktop applications in .NET or PHP</li><li>Basic application testing</li></ul>" }
  ],
  "education": [
    { "degree": "Bachelor\'s Degree", "from": "2004", "to": "2008", "major": "Bachelor of Computer Science & Engineering", "university": "Mahathma Gandhi University", "description": "Bachelor" },
    { "degree": "Higher Secondary", "from": "2002", "to": "2004", "major": "Computer Science & Electronics", "university": "Institute of Human Resource & Development", "description": "Bachelor" }
  ],
  "reference": [
    { "name": "Ahmed Razek", "title": "IT Manager", "image": "images/person-default.png", "description": "Description" },
    //{ "name": "Syed Imthiyas", "title": "IT Manager", "image": "images/person-default.png", "description": "Description" }
  ]
}
//JSON Object End................

$(document).ready(function () {

  //display Name.......
  //$('title').html(json_obj.name+"|"+json_obj.jobtitle);
  document.title = "Resume of "+json_obj.name+"|"+json_obj.jobtitle;
  //$("meta[property='og\\:title']").attr("content", result.title);
  $("meta[name='description']").attr("content", json_obj.metadesc);

  $('.navbar-brand').html(json_obj.name);
  $('#applicant').html(json_obj.name);
  $('#footer_name').html(json_obj.name);

  $('#address').html(json_obj.address);
  $('#email').html(json_obj.email);
  $('#mobile').html(json_obj.mobile);
  $('#language').html(json_obj.language);
  $('#age').html(getAge(json_obj.DOB));

  $('#footer_address').html(json_obj.address);
  $('#footer_email').html(json_obj.email);
  $('#footer_mobile').html(json_obj.mobile);

  $('#facebook').attr("href", json_obj.facebook);
  $('#linkedin').attr("href", json_obj.linkedin);
  $('#footer_facebook').attr("href", json_obj.facebook);
  $('#footer_linkedin').attr("href", json_obj.linkedin);
  //display Name.......

  //display skill data..........
  var div = '<div class="row">';
  for (i = 0; i < json_obj.skills.length; i++) {
    div += '<div  class="col-md-4">';
    div += '<div class="progress-container progress-primary">';
    div += '<span class="progress-badge">' + json_obj.skills[i].name + '</span>';
    div += '<div class="progress">';
    div += '<div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ' + json_obj.skills[i].percentage + '%;"></div>';
    div += '<span class="progress-value">' + json_obj.skills[i].percentage + '%</span>';
    div += '</div>';
    div += '</div>';
    div += '</div>';

  }
  div += '</div>';
  $('#list_skill').html(div);
  //display skill data..........


  //display interests data..........
  var div = '<div class="row">';
  for (i = 0; i < json_obj.interests.length; i++) {
    div += '<div  class="col-md-3">';
    div += '<div class="progress-container progress-primary">';
    div += '<span class="progress-badge">' + json_obj.interests[i].name + '</span>';
    div += '<div class="progress">';
    div += '<div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ' + json_obj.interests[i].percentage + '%;"></div>';
    div += '<span class="progress-value">' + json_obj.interests[i].percentage + '%</span>';
    div += '</div>';
    div += '</div>';
    div += '</div>';

  }
  div += '</div>';
  $('#list_interests').html(div);
  //display interests data..........

  //display experience data..........
  div = '';
  for (i = 0; i < json_obj.experience.length; i++) {
    div += '<div class="card">';
    div += '<div class="row">';
    div += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
    div += '<div class="card-body cc-experience-header">';
    div += '<p>' + json_obj.experience[i].from + ' - ' + json_obj.experience[i].to + '</p>';
    div += '<div class="h5">' + json_obj.experience[i].company + '</div>';
    div += '</div>';
    div += '</div>';
    div += '<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">';
    div += '<div class="card-body">';
    div += '<div class="h5">' + json_obj.experience[i].title + '</div>';
    div += '<p>' + json_obj.experience[i].description + '</p>';
    div += '</div>';
    div += '</div>';
    div += '</div>';
    div += '</div>';
  }
  $('#list_experience').html(div);
  //display experience data..........



  //display education data..........
  div = '';
  for (i = 0; i < json_obj.education.length; i++) {
    div += '<div class="card">';
    div += '<div class="row">';
    div += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
    div += '<div class="card-body cc-education-header">';
    div += '<p>' + json_obj.education[i].from + ' - ' + json_obj.education[i].to + '</p>';
    div += '<div class="h5">' + json_obj.education[i].degree + '</div>';
    div += '</div>';
    div += '</div>';
    div += '<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">';
    div += '<div class="card-body">';
    div += '<div class="h5">' + json_obj.education[i].major + '</div>';
    div += '<p class="category">' + json_obj.education[i].university + '</p>';
    //div += '<p>' + json_obj.education[i].description + '</p>';
    div += '</div>';
    div += '</div>';
    div += '</div>';
    div += '</div>';
  }
  $('#list_education').html(div);
  //display education data..........


  //display reference reference..........
  div = '';
  indicator = '';// <li class="active" data-target="#cc-Indicators" data-slide-to="0"></li>
  for (i = 0; i < json_obj.reference.length; i++) {
    if (i == 0) {
      indicator += '<li class="active" data-target="#cc-Indicators" data-slide-to="0"></li>';
      div += '<div class="carousel-item active">';
    } else {
      indicator += '<li data-target="#cc-Indicators" data-slide-to="' + i + '"></li>';
      div += '<div class="carousel-item">';
    }
    div += '<div class="row">';
    div += '<div class="col-lg-2 col-md-3 cc-reference-header">';
    div += '<img src="' + json_obj.reference[i].image + '" alt="Image" />';
    div += '<div class="h5 pt-2">' + json_obj.reference[i].name + '</div>';
    div += '<p class="category">' + json_obj.reference[i].title + '</p>';
    div += '</div>';
    div += '<div class="col-lg-10 col-md-9">';
    //div += '<p>' + json_obj.reference[i].description + '</p>';
    div += '</div>';
    div += '</div>';
    div += '</div>';

  }
  $('#list_reference').html(div);
  $('#list_reference_indicator').html(indicator);


  //display reference data..........


});

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
