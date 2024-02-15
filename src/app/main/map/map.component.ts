import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgFor } from '@angular/common';
import { DinerListComponent } from './diner-list/diner-list.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

declare var kakao: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ NzLayoutModule, DinerListComponent, HttpClientModule, NzButtonModule, NzInputModule,NzFormModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})


export class MapComponent implements AfterViewInit, OnInit{

  @ViewChild('map') mapEl! : ElementRef;

  userRegion! : FormGroup;
  http = inject(HttpClient);
  response! : any;

  ngOnInit(): void {
  }


  ngAfterViewInit() {

var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer : HTMLElement = this.mapEl.nativeElement, // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨

    };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();
console.log('services', ps);


this.getRequest().subscribe((res)=> {
  this.response = res.documents;
  console.log('request response :', res.documents);
  var bounds = new kakao.maps.LatLngBounds();

  for (var i=0; i<res.documents.length; i++) {
      displayMarker(res.documents[i]);
      bounds.extend(new kakao.maps.LatLng(res.documents[i].y, res.documents[i].x));
  }
  map.setBounds(bounds);
});

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place:any) {

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseover', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;"> hihi' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
  }
}

getRequest() :  Observable<any> {
  const apiUrl = 'https://dapi.kakao.com/v2/local/search/keyword.json?query=맛집&category_group_code=FD6&y=37.514322572335935&x=127.06283102249932&radius=10000'; //검색용
  const apiKey = '917ba5a504be63ba16c79f2debfbd4a3'; // auth

  const headers = { Authorization: `KakaoAK ${apiKey}` };
  return this.http.get(apiUrl,{ headers });
}

}
