import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

declare var kakao: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  map: any;

  ngOnInit(): void {
    setTimeout(() => {
      const options = {
        center: new kakao.maps.LatLng(36.370546, 127.345966),
        level: 3
      };

      this.map = new kakao.maps.Map(document.getElementById('map'), options);
    }, 300);

let places = new kakao.maps.services.Places();

let callback = function(status :any , result :any, pagination :any) {
	if (status === kakao.maps.services.Status.OK) {
		alert("검색된 음식점의 갯수는 " +  result.places.length + "개 입니다.");
	}
};

  places.categorySearch('FD6', callback, {
	  location: new kakao.maps.LatLng(33.450701, 126.570667)
  });
  }
}
