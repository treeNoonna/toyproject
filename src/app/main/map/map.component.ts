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
    this.userRegion = new FormGroup({
      searchText : new FormControl('')
    });

  }

  get searchText() { return this.userRegion.controls['searchText']; }

  submit(e:any){
    console.log(this.searchText.value,'hihi');
    console.log('sdsdsds')
  }

  ngAfterViewInit() {
  //this.renderMap(this.mapEl.nativeElement,[37.50802, 127.062835],3);

/*   private renderMap(mapContainer: HTMLElement,coordinate: [ number, number ],level: number) {
    const options = {
      // center: new kakao.maps.LatLng(coordinate), (X)
      center: new kakao.maps.LatLng(coordinate[0], coordinate[1]), //(O)
      level: level
  }
    const map = new kakao.maps.Map(mapContainer, options);
 */

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

// 키워드로 장소를 검색합니다
 /* ps.keywordSearch('판교 맛집', placesSearchCB);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data:any, status:any, pagination:any) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);
            console.log('sdadsadasd',data);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    }
} */

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
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
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

/* http = inject(HttpClient);
apiUrl = 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json';
apiKey = '917ba5a504be63ba16c79f2debfbd4a3';
kakaoUrl = '/api/v2/maps/sdk.js?appkey=f5095ed08ddb5fcad87acd3fabea0dc5&libraries=services,clusterer'
kakao! : any;

ngOnInit(): void {


this.get(127.1086228,37.4012191).subscribe((res)=> console.log('hi kakao', res));

this.getRequest(this.kakaoUrl).subscribe((res)=> {
  console.log('get',res);
  this.kakao = res;
});


get(x: number, y: number): Observable<any> {
  const url = `${this.apiUrl}?x=${x}&y=${y}`;
  const headers = { Authorization: `KakaoAK ${this.apiKey}` };
  return this.http.get(url, { headers });
}

*/

}
