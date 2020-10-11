//JSON Object................
var json_obj = {
  "name": "Shan Muhammed",
  "address":"Masaken Mesaimeer, Doha, Qatar",
  "email":"mail.shanvm@gmail.com",
  "mobile":"+974 30074621",
  "DOB":"1986/07/25",
  "language":"English, Arabic",
  "facebook":"https://www.facebook.com/i.shanvm",
  "linkedin":"https://www.linkedin.com/in/shanvm",
  "jobtitle":"Application Developer,EAM Consultant",
  "metadesc":"Resume of Shan Muhammed. Infor EAM(CAFM) Techno Consultant, Application Developer, System Analyst and Programmer",
  "skills": [
    { "skill": "infor", "name": " EAM", "percentage": "85", "image": "https://www.infor.com/img/logo-infor.png" },
    { "skill": "MEAN Stack", "name": "EAN stack", "percentage": "60", "image": "https://www.linnovate.net/sites/all/themes/linnovate/images/mean-picture.png" },
    { "skill": "Angular", "name": "ngular", "percentage": "70", "image": "https://angular.io/assets/images/logos/angular/angular.svg" },
    { "skill": "node", "name": "node", "percentage": "75", "image": "https://nodejs.org/static/images/logo.svg" },
    { "skill": "Bootstrap", "name": "ootstrap", "percentage": "80", "image": "data:image/png;base64,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" },
    { "skill": "TypeScript", "name": "TypeScript", "percentage": "70" , "image": "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"},
    { "skill": "PHP", "name": "", "percentage": "80", "image": "https://www.php.net//images/logos/new-php-logo.svg" },
    { "skill": "C#.Net", "name": ".Net", "percentage": "80" , "image": "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"},
    { "skill": "HTML", "name": "HTML", "percentage": "75", "image": "https://www.w3.org/html/logo/img/mark-word-icon.png" },
    { "skill": "CSS", "name": "CSS", "image": "data:image/png;base64,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", "percentage": "75" },
    { "skill": "javascript", "name": "javascript", "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAjVBMVEX33x4AAAD/5x/cyhubjRMVGQP64R795B//6R/n1B0XGAP65B//6yD/7SA9OgjezRzu2R1eWQxybA+ZjxNOSgoJCwFvaA5rZA6elBS/sRiQhxLIuRkSEwOmmhXRwRoqKQY2NQd6cg+3qRdmXQ0dHQSDeRElIQQuLgavohZEQQmKfxF/exBWUgsiJgVjYQ1/VlL+AAADuElEQVRoge2ZaXeiMBSGCelkEZXNDdCo2Fpr7fz/nzehLiSQRClxzpk5eb810Pt4s9wleJ6Tk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OT0/8tVEvzAvbJt7DmhR6itSIFmUSwzGe73S7JSxYRq3wEv5aDi8CL33yKw7cPUGuTsADbhA9q2004CeegqQkjFuG/dHBE8ha60jawNfd6OApOSjYA48gSXQ8PPjRsANaeHboW7m+1bABOwVPhODOwAcib58Iq3Hs3wgGzceI0cH9lZoPYhusaeDARSYNkcVgk4lwsLKB1cASnAmlOic/je5ReByahlSXXwKXtFl8DOjmPLle2oowG/iLA4Q1Fyuq3UGvxVQ0n23pwIrztJyAb2ktsavhQSChiQEE0spjUdJ4nas89XcFhE+5/1oPT0H4BY4TjhbDhktFfhhcCHBxHT/JdE2TCgUifhBa3+F241ygkplvo29zmZngrsUznDFnH61JqtAdNnUqblasJ7h9acJ7dUmSvdDXAvWGsoPOdH1nEGwrItZIOUnsR1lA607GaPs7sZHNj04CjiZoOjv6TS+fqWaBuWapkY4VugvPsBjWdw9pK02KG836tVK/82AL7HpyvvFcqlz6xcOTuwit8EU/b9KL/xD8A5y8N4bEF3/RP8w/Bq7UPWj0M6+36g3AuTFZLCX7sHekeh/NkEyUifNO7T+4C51FnK9L7srvBOV0sr2DfRTdeCLV/C04FeNF90ZF0kYegsIsWIs2P5r9bgUTqILPOcBLGqWATMcHaqraGg6p0PzTpUk3dFY69lHsqZAW1KyjIvkP6EjbsY/G0d5t2hNm3zXk9vaOZYO0aNvxwdxnZUxlAxDTTqY+qz+nqOp2ICsYARWe3hVg6YMIWQURso0CHcy79Z0pwdcdNgo1g7NKPRnIW+aQjfL4RH3pv4oMOl3GISgXh5sAgLORK5e08H9JxqhSXLKQUZlt5eNFhyVvV6GDZGLguuaJufd3vW1mVdljyO3eKAHxcjUnHT6tk+Dib77eZ2Vp5m0Zy7wqQa9rFce6Qp2kDzpoIxcFIV7bWOnQs3hF9NXgi1aPymVIo71zC4fBLy27c5PpFcztKSn/QtGibkA1rWsNU3SlWWv6sYULBYqCwliiaP+Rnmo5hRn/arBHa2kwnpv5chkmhOCCfsMcFDfJHRX6b/fftIdJfNiEyzPL4tvrLOC9GfZtEjIMggoxB6gX4zkdKjDHxKGQFoxHhf/QjX2T6eqp5+Wk3kU5OTv+A/gBJEDBDJNCvmQAAAABJRU5ErkJggg==", "percentage": "80" },
    { "skill": "jQuery", "name": "jQuery", "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAMAAACcnc3UAAAAY1BMVEX///8AAAD4+PjCwsL8/Pzb29v19fW0tLR9fX3y8vLV1dXm5ubp6elGRkaFhYWqqqoxMTHLy8s6Ojq8vLyOjo4sLCxjY2NpaWlxcXFOTk4SEhKXl5clJSVZWVmioqJTU1MZGRmlpQrPAAADUElEQVRoge2WaY/jIAyGyR1C7qM52+n//5WDbQK01c6sRt2RVvLzoU0csLH9QiIEwzAMwzAMwzAMwzAMwzAM805k1Oy3Qf5ixO4jIK7JO92GXzyrA8fw0wDDOI515MdLv/A1Bz4/zDSBuVt83hZKV695GRUOWZbpDu4Y6jKOOV3oR3KIhg4HRfoKHcnoNo676XgSnXSmfnFl1xuCadE/2fISs6BRuMADR6sDrvUKM2gtugKD/k/zjaqw3cB8cWWZqC4jXFNeu15jccUA5XPMRo+qYrF4BQVToHsCNnTeUeLl5IJAy/xeLHb9lFZU659sCiH39VlFVz1sFgpG137qmRCr/sPaQt13IXovxipojk1UlzuEAT0182hw8Qp73EZSxJ1LNykKfdf4uilIuaWu8R0mobwicYOiNqosoGlHjKWvskajFZGFRvjkRGGFI0pDXYKtn52Yy1ojsTXTaRtoLoTu0XDXVyH+4sQIYoYYAntXwv5IsANQHurGDg+2oKAlJEnqSgv+7zJtbSM0oNw2xdzRVsIYdLlBRgMEa6n06DIFZdUh+MitWxRfHbTKhorPLVSjNpXTm0kr9yQUYfDdb5+eExoxG01ccxIjoafAfpJtcHTGFFr/PWonOaWIHaYb3Gs4YcQFrQ8xb1h6047MGDd7kugkRvSlpT53MgzlsJ4aktSkxM8TanqkQt1PCV2xiDCkrwx9gZKqvVW6Zppa4dwSN3HVB72VLfZd0aTK2FZyhhKCztOJkMKvv7tzb5m0i3Lv6c0Wusv7tl2ih0fgWOLRU+sa6CoYxeOOKUwWEwqJ2kvErbe78PyxzRRmoVffoE3mHzKfBekFSjpNEx5vH5Wkgs3LYvLG23XJgaUT0knINLR4iADCq5RnSM4FQn671xFLH8b+sZNRVy0d+mz9OrdPr3rU+WiNzVl5ZdfXPcXMzdFgUI9H3VFiOc/DUkCdL+IJ2lzzrUuKrHaPIycMuXsnOL207XcDFVG6l3pPXTnfxg+yd3SH8zdaK9Tkw3VayhQAJb04oAEKKf/2iymrKGLtGvvwNvk3xGWReCtc6Iug+POEt2M0scbfD30b5pD8zTTpO6/tvh/4Rkr9In35OmIYhmEYhmEYhmEYhmGY/5RP1AwiJWvyH6IAAAAASUVORK5CYII=", "percentage": "80" },
    { "skill": "Docker", "name": "Docker", "image": "data:image/png;base64,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", "percentage": "80" },
    { "skill": "git", "name": "git", "image": "data:image/png;base64,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", "percentage": "70" },
    { "skill": "MongoDB", "name": "", "image": "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg", "percentage": "70" },
    { "skill": "ionic", "name": "", "image": "data:image/png;base64,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", "percentage": "70" },
    { "skill": "Flutter", "name": "", "image": "https://flutter.dev/assets/flutter-lockup-1caf6476beed76adec3c477586da54de6b552b2f42108ec5bc68dc63bae2df75.png", "percentage": "85" },
    { "skill": "firebase", "name": "Firebase", "image": "https://img.icons8.com/color/48/000000/firebase.png", "percentage": "80" },
    { "skill": "MS SQL", "name": "MS SQL", "percentage": "80" , "image": "https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png"},
    { "skill": "MySQL", "name": "", "percentage": "80", "image": "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
    { "skill": "Heroku", "name": "", "percentage": "70", "image": "https://brand.heroku.com/static/media/heroku-logotype-horizontal.81c49462.svg" },
    { "skill": "devops", "name": "", "percentage": "70", "image": "data:image/png;base64,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" },
    { "skill": "Yardi", "name": " ", "percentage": "70" , "image": "https://www.yardi.com/wp-content/themes/cmw-standard-v2-theme/images/logos/Yardi-gradient-2.svg"},
  ],
  "interests": [
    { "name": "blockchain", "image": "", "percentage": "50" },
    { "name": "etherium", "image": "", "percentage": "50" },
    { "name": "machine learning", "image": "", "percentage": "50" },
    { "name": "Augmented Reality", "image": "", "percentage": "50" },
    { "name": "odoo", "image": "", "percentage": "50" },
    { "name": "jenkin", "image": "", "percentage": "50" },
    { "name": "selenium", "image": "", "percentage": "50" },
    { "name": "Industry 4.0", "image": "", "percentage": "50" },
    { "name": "Amazon web service", "image": "", "percentage": "50" },
    { "name": "google cloud platform", "image": "", "percentage": "50" },
    { "name": "azure", "image": "", "percentage": "50" },
  ],
  "experience": [
    { "company": "Waseef", "from": "DEC 2013", "to": "Present", "title": "Infor EAM(CAFM) Techno Consultant,Application Developer", "description": "Waseef, is one of the largest fully integrated Asset, Property and Facility Management services companies in Qatar, which offers a “one stop shop” and full service solution to its clients​. Some of my tasks are:<ul><li>infor EAM Support</li><li>Yardi Voyager Support</li><li>Application Architecture</li><li>Web/Desktop/Mobile App development</li><li>Create REST API for the Apps</li><li>Create Successor within the group.</li><li>Gather feedback from end users</li><li>Ensure the app under development covers all the requirements and meet company standards</li><li>Arrange third-party meeting in case of resource required from outside.</li></ul>" },
    { "company": "Graff360", "from": "JAN 2011", "to": "DEC 2013", "title": "Senior System & Programmer Analyst", "description": "Graff360 is concept and creative solutions providing company. Graff360 focus on Application Development, Creative Advertising, Publications, Media and Print home​. Some of my tasks are:<ul><li>Development, Troubleshooting and Maintenance of Web and Desktop applications in .NET</li><li>Development, Troubleshooting and Maintenance of Web applications in PHP platform</li><li>Database and Application architectural design</li><li>Bug fixing</li><li>Project Documentation</li><li>Train end users for custom developed application</li></ul>" },
    { "company": "Tuner Labs", "from": "APR 2008", "to": "DEC 2010", "title": "System & Programmer Analyst", "description": "TunerLabs is a web development and IT outsourcing company. TunerLabs give Web solutions, Designing, Branding and Technical Support Services.​ Some of my tasks were:<ul><li>Development of Web and Desktop applications in .NET or PHP</li><li>Basic application testing</li></ul>" }
  ],
  "education": [
    { "degree": "Bachelor\'s Degree", "from": "2004", "to": "2008", "major": "Bachelor of Computer Science & Engineering", "university": "Mahathma Gandhi University", "description": "Bachelor" },
    { "degree": "Higher Secondary", "from": "2002", "to": "2004", "major": "Computer Science & Electronics", "university": "Institute of Human Resource & Development", "description": "Bachelor" }
  ],
  "reference": [
    { "name": "Ahmed Razek", "title": "IT Manager", "image": "images/person-default.png", "description": "Description" },
    { "name": "Syed Imthiyas", "title": "IT Manager", "image": "images/person-default.png", "description": "Description" },
    { "name": "Shyam Achuthan", "title": "IT Manager", "image": "images/person-default.png", "description": "Description" }
  ],
  "projects": [
    { "name": "Setup CAFM system", "description": "Set Up CAFM system for a company with 26+ properties to manage", "activities": "<ul><li>Creation of Organizations/Properties</li><li>Creation of Users<ul><li>Identify previleges and create corresponsing user groups</li><li>Allocate organizations to users</li></ul></li><li>Identify Locations and hierarchy and upload</li><li>Identify and upload Classes, Suppliers, Manufacturers</li><li>Identify Assets,sub assets,parent location,parent position and upload</li><li>Identify Parts/Materials and Upload</li><li>Set up Activities, Tasks and Checklists for Work Orders</li><li>Set up Preventive Maintance Schedules</li><li>Create Workflows for Work Orders,Pick Ticket, Requisitions, Request for Quotations, Purchase Orders, PO Receipts(Goods Receipts), Supplier Returns and Invoices and many more...</li><li>Create FLEX business Rules for Screens and Workflow controls</li><li>Develop Custom Reports in IBM cognos as per user requirements. Some are<ul><li>User Authority Matrix</li><li>Custom Work Order,PR,PO</li><li>Scheduled Emails for Pending PR</li></ul></li></ul>"},
    { "name": "Custom Budget for Infor", "description": "Develop Custom Budget for CAFM since the standard sysem budget concept is different", "activities": "<ul><li>Identify Stakeholders</li><li>Identify scope & Gather requirments</li><li>Develop basic architecture</li><li>Create <ul><li>Custom Entities like Cost Center,GL Codes</li><li>Custom Tables</li><li>Custom User Defined Screens</li><li>Custom Tabs</li></ul></li></ul>"},
    { "name" : "API for integration", "description":"Develop Single API to comminicate with All platforms and real time integration","activities": "<ul><li>Identtify Business models to be integrated</li><li>Identify Data/Columns to be exposed using the api</li><li>Identtify correct tools and technology</li><li>Decide and implement proper authorization for all data activities</li></ul>"}
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
    
    div += '<img src="' + json_obj.skills[i].image + '" height="25px"></img>';
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


//display projects data..........
div = '';
for (i = 0; i < json_obj.projects.length; i++) {
  div += '<div class="card">';
  div += '<div class="row">';
  div += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
  div += '<div class="card-body cc-projects-header">';
  //div += '<p>' + json_obj.projects[i].from + ' - ' + json_obj.projects[i].to + '</p>';
  div += '<div class="h5">' + json_obj.projects[i].name + '</div>';
  div += '</div>';
  div += '</div>';
  div += '<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">';
  div += '<div class="card-body">';
  //div += '<div class="h5">' + json_obj.projects[i].major + '</div>';
  div += '<p class="category">' + json_obj.projects[i].description + '</p>';
  div += '<p>' + json_obj.projects[i].activities + '</p>';
  div += '</div>';
  div += '</div>';
  div += '</div>';
  div += '</div>';
}
$('#list_projects').html(div);
//display projects data..........



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
    div += '<span class="h5 pt-2">' + json_obj.reference[i].name + '</span></br>';
    div += '<span class="category">' + json_obj.reference[i].title + '</span>';
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
