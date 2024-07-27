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
          "test 1",
          "test 2",
        ]
      }, {
        from: "2021", to: "2024",
        name: "Sam Sirvan System",
        achievements: [

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
