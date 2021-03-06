import { Component } from '@angular/core';
import { PostsService } from './posts.service';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[PostsService],
})
export class userComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies : boolean;
  posts:Post[];

constructor(private postsService: PostsService){
  this.name = 'Kamalnath Krishnamoorthy';
  this.email = 'sk.kamalnath@gmail.com';
  this.address = {
	street: '193B Kamarajar salai',
	city: 'Madurai',
	state: 'TN'
  }
  this.hobbies = ['Music', 'Movies', 'Sports'];
  this.showHobbies = false;

  this.postsService.getPosts().subscribe(posts => {
	this.posts = posts;
});
  }
 
  toggleHobbies(){
	if(this.showHobbies == true){
	this.showHobbies = false;
  }
	else{
	this.showHobbies = true;
  }
}

  addHobby(hobby){
	this.hobbies.push(hobby);
	}

  deleteHobby(i){
	this.hobbies.splice(i, 1);
}

}

interface address{
	street:string;
	city:string;
	state:string;
}

interface Post{
	id:number;
	title:string;
	body:string;
}