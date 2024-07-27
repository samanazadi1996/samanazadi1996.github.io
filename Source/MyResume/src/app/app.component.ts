import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService, private httpClient: HttpClient) { }

  title = 'My Resume';
  userUrl = "https://api.github.com/users/samanazadi1996";
  profile =
    {
      avatar_url: "https://avatars.githubusercontent.com/u/60857846?v=4",
      name: "Saman Azadi",
      blog: "www.coffeete.ir",
      location: "Iran - Tehran",
      email: "samanazadi1996@gmail.com",
      bio: ".Net Developer",
      twitter_username: "Saman_Azadi_",
      phoneNumber: "+98 91000000000",
      Desc: "I am a software engineer specializing in software development and design, with a passion for teamwork and experience in collaborative projects. I am eager to learn and apply cutting-edge technologies, continuously studying and improving my skills in the software field. I am dedicated and able to quickly adapt to the needs and challenges of leading companies in the industry. My goal is to provide creative solutions and contribute effectively to successful projects.",
      skills: [
        { name: "c#", progress: "100" },
        { name: "html", progress: "80" },
        { name: "css", progress: "100" },
        { name: "js", progress: "100" },
      ]
      ,
      workExperiences: [{
        from: "2019", to: "2021",
        name: "NikRastin Parsa",
        achievements: [
          "Development of Bycheck software (Bycheck.ir)",
          "Development and implementation of in-house applications using ASP.NET MVC and ASP.NET Core frameworks.",
          "Decomposing monolithic projects into independent microservices to improve scalability and maintainability.",
          "Containerizing microservices using Docker to ensure execution environment consistency throughout development and production stages.",
          "Implementing and configuring ELK for centralized, high-performance log storage and search.",
        ]
      }, {
        from: "2021", to: "2024",
        name: "Sam Sirvan System",
        achievements: [
          "Design and development of a comprehensive tax management system for taxpayers.",
          "Design and implementation of a tax switch to enhance communication and coordination between different tax systems.",
          "Development of an online store software with all necessary features for managing sales and products.",
          "Writing and executing unit tests, functional tests, and load tests to ensure software quality.",
          "Containerizing projects using Docker to improve scalability and better manage development and production environments.",
          "Setting up and implementing CI/CD systems to automate development, testing, and software release processes.",
          
          
        ]
      }

      ],
      Educations: null
    }

  ngOnInit(): void {
    // this.loadData();
  }
  loadData() {
    this.httpClient.request('GET', this.userUrl, { responseType: 'json' }).subscribe(
      (data: any) => {
        // Fill profile with the API response
        this.profile.avatar_url = data.avatar_url;
        this.profile.name = data.name;
        this.profile.location = data.location;
        this.profile.email = data.email;
        this.profile.bio = data.bio;
        this.profile.twitter_username = data.twitter_username;

        console.log('Data received:', this.profile);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }
}
