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
      "login": "samanazadi1996",
      "id": 60857846,
      "node_id": "MDQ6VXNlcjYwODU3ODQ2",
      "avatar_url": "https://avatars.githubusercontent.com/u/60857846?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/samanazadi1996",
      "html_url": "https://github.com/samanazadi1996",
      "followers_url": "https://api.github.com/users/samanazadi1996/followers",
      "following_url": "https://api.github.com/users/samanazadi1996/following{/other_user}",
      "gists_url": "https://api.github.com/users/samanazadi1996/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/samanazadi1996/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/samanazadi1996/subscriptions",
      "organizations_url": "https://api.github.com/users/samanazadi1996/orgs",
      "repos_url": "https://api.github.com/users/samanazadi1996/repos",
      "events_url": "https://api.github.com/users/samanazadi1996/events{/privacy}",
      "received_events_url": "https://api.github.com/users/samanazadi1996/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Saman Azadi",
      "company": "Freelancer",
      "blog": "www.coffeete.ir",
      "location": "Iran - Tehran",
      "email": null,
      "hireable": null,
      "bio": ".Net Developer",
      "twitter_username": "Saman_Azadi_",
      "public_repos": 25,
      "public_gists": 0,
      "followers": 42,
      "following": 29,
      "created_at": "2020-02-09T21:26:30Z",
      "updated_at": "2024-07-22T12:11:33Z"
    }

  ngOnInit(): void {
    // this.loadData();
  }
  loadData() {
    this.httpClient.request('GET', this.userUrl, { responseType: 'json' }).subscribe(
      (data: any) => {
        // Fill profile with the API response
        this.profile.avatar_url = data.avatar_url,
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
