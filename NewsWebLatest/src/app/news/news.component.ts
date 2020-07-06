import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  world_news_title_array: string[];
  world_news_content_array: string[];
  world_news_date_array: string[];
  world_news_image_array: string[];
  world_news_link_array: string[];

  Sports_news_title_array: string[];
  Sports_news_content_array: string[];
  Sports_news_date_array: string[];
  Sports_news_image_array: string[];
  Sports_news_link_array: string[];

  Arts_news_title_array: string[];
  Arts_news_content_array: string[];
  Arts_news_date_array: string[];
  Arts_news_image_array: string[];
  Arts_news_link_array: string[];

  COVID_19_news_title_array: string[];
  COVID_19_news_content_array: string[];
  COVID_19_news_date_array: string[];
  COVID_19_news_image_array: string[];
  COVID_19_news_link_array: string[];

  defualt_image: string[];
  head: string;

  world_link_0:string;
  world_link_1:string;
  world_link_2:string;

  sports_link_0:string;
  sports_link_1:string;
  sports_link_2:string;

  arts_link_0:string;
  arts_link_1:string;
  arts_link_2:string;

  covid_link_0:string;
  covid_link_1:string;
  covid_link_2:string;

  constructor() {
    this.world_news_title_array = ["World-news-1","World-news-2","World-news-3"];
    this.world_news_content_array = ["World-news-1-content","World-news-2-content","World-news-3-content"];
    this.world_news_date_array = ["World-news-1-date","World-news-2-date","World-news-3-date"];
    this.world_news_image_array = ["World-news-1-image","World-news-2-image","World-news-3-image"];
    this.world_news_link_array = ["World-news-1-link","World-news-2-link","World-news-3-link"];

    this.Sports_news_title_array = ["Sports-news-1","Sports-news-2","Sports-news-3"];
    this.Sports_news_content_array = ["Sports-news-1-content","Sports-news-2-content","Sports-news-3-content"];
    this.Sports_news_date_array = ["Sports-news-1-date","Sports-news-2-date","Sports-news-3-date"];
    this.Sports_news_image_array = ["Sports-news-1-image","Sports-news-2-image","Sports-news-3-image"];
    this.Sports_news_link_array = ["Sports-news-1-link","Sports-news-2-link","Sports-news-3-link"];

    this.Arts_news_title_array = ["Arts-news-1","Arts-news-2","Arts-news-3"];
    this.Arts_news_content_array = ["Arts-news-1-content","Arts-news-2-content","Arts-news-3-content"];
    this.Arts_news_date_array = ["Arts-news-1-date","Arts-news-2-date","Arts-news-3-date"];
    this.Arts_news_image_array = ["Arts-news-1-image","Arts-news-2-image","Arts-news-3-image"];
    this.Arts_news_link_array = ["Arts-news-1-link","Arts-news-2-link","Arts-news-3-link"];

    this.COVID_19_news_title_array = ["COVID-19-news-1","COVID-19-news-2","COVID-19-news-3"];
    this.COVID_19_news_content_array = ["COVID-19-news-1-content","COVID-19-news-2-content","COVID-19-news-3-content"];
    this.COVID_19_news_date_array = ["COVID-19-news-1-date","COVID-19-news-2-date","COVID-19-news-3-date"];
    this.COVID_19_news_image_array = ["COVID-19-news-1-image","COVID-19-news-2-image","COVID-19-news-3-image"];
    this.COVID_19_news_link_array = ["COVID-19-news-1-link","COVID-19-news-2-link","COVID-19-news-3-link"];

    this.defualt_image = ["https://cdnph.upi.com/svc/sv/upi/2661584894502/2020/1/d38f940315cbbe0c7483eb41611a429e/NY-reports-117-coronavirus-deaths-as-governors-call-for-federal-help.jpg",
    "https://media2.s-nbcnews.com/j/newscms/2020_11/3270616/200315-dulles-airport-coronavirus-cs-300p_4c66e49baf5d7621ad1e1a2f9db290ce.fit-2000w.jpg",
    "https://media1.s-nbcnews.com/j/newscms/2020_12/3275716/200318-times-square-coronavirus-ac-1123p_3c9f7f1cd678da2b3614ce488d2cc14a.fit-2000w.jpg"];

    this.head = 'https://static01.nyt.com/';
  }


  ngOnInit() {
    try{
    let req1 = new XMLHttpRequest();
    req1.open("GET",'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req1.send();
    let data_world = JSON.parse(req1.responseText);

    let req2 = new XMLHttpRequest();
    req2.open("GET",'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req2.send();
    let data_sports = JSON.parse(req2.responseText);

    let req3 = new XMLHttpRequest();
    req3.open("GET",'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req3.send();
    let data_arts = JSON.parse(req3.responseText);

    let req4 = new XMLHttpRequest();
    req4.open("GET",'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&sort=newest&api-key=R9BhjbbsANIBeNl4D3APslBtDBbfKDYt',false);
    req4.send();
    let data_covid_19 = JSON.parse(req4.responseText);
    
    let world_links:string[];
    world_links = ['1','2','3'];
    let sports_links:string[];
    sports_links = ['1','2','3'];
    let arts_links:string[];
    arts_links = ['1','2','3'];
    let covid_19_links:string[];
    covid_19_links = ['1','2','3'];

    for(let i =0; i<this.world_news_title_array.length;i++){
      let world_news_title = document.getElementById(this.world_news_title_array[i]);
      world_news_title.innerHTML = data_world.results[i].title;
      let world_news_content = document.getElementById(this.world_news_content_array[i]);
      world_news_content.innerHTML = data_world.results[i].abstract;
      let world_news_date = document.getElementById(this.world_news_date_array[i]);
      world_news_date.innerHTML = data_world.results[i].updated_date.substring(0,10);
      let world_news_image = this.world_news_image_array[i];
      document.images.namedItem(world_news_image).src = data_world.results[i].multimedia[0].url;
      world_links[i] = data_world.results[i].url;
      // let world_news_link = this.world_news_link_array[i];
      // document.getElementById(world_news_link).href = data_world.results[i].url;


      let Sports_news_title = document.getElementById(this.Sports_news_title_array[i]);
      Sports_news_title.innerHTML = data_sports.results[i].title;
      let Sports_news_content = document.getElementById(this.Sports_news_content_array[i]);
      Sports_news_content.innerHTML = data_sports.results[i].abstract;
      let Sports_news_date = document.getElementById(this.Sports_news_date_array[i]);
      Sports_news_date.innerHTML = data_sports.results[i].updated_date.substring(0,10);
      let Sports_news_image = this.Sports_news_image_array[i];
      document.images.namedItem(Sports_news_image).src = data_sports.results[i].multimedia[0].url;
      // let Sports_news_link = this.Sports_news_link_array[i];
      // let link2 = document.getElementById(Sports_news_link);
      // link2 = data.results[i].url;
      sports_links[i] = data_sports.results[i].url;

      let Arts_news_title = document.getElementById(this.Arts_news_title_array[i]);
      Arts_news_title.innerHTML = data_arts.results[i].title;
      let Arts_news_content = document.getElementById(this.Arts_news_content_array[i]);
      Arts_news_content.innerHTML = data_arts.results[i].abstract;
      let Arts_news_date = document.getElementById(this.Arts_news_date_array[i]);
      Arts_news_date.innerHTML = data_arts.results[i].updated_date.substring(0,10);
      let Arts_news_image = this.Arts_news_image_array[i];
      document.images.namedItem(Arts_news_image).src = data_arts.results[i].multimedia[0].url;
      // let Arts_news_link = this.Arts_news_link_array[i];
      // let link3 = document.getElementById(Arts_news_link);
      // link3 = data.results[i].url;
      arts_links[i] = data_arts.results[i].url;

      let COVID_19_news_title = document.getElementById(this.COVID_19_news_title_array[i]);
      COVID_19_news_title.innerHTML = data_covid_19.response.docs[i].headline.main;
      let COVID_19_news_content = document.getElementById(this.COVID_19_news_content_array[i]);
      COVID_19_news_content.innerHTML = data_covid_19.response.docs[i].abstract;
      let COVID_19_news_date = document.getElementById(this.COVID_19_news_date_array[i]);
      COVID_19_news_date.innerHTML = data_covid_19.response.docs[i].pub_date.substring(0,10);
      let COVID_19_news_image = this.COVID_19_news_image_array[i];
      if(data_covid_19.response.docs[i].multimedia[0] == undefined || data_covid_19.response.docs[i].multimedia == undefined){
          document.images.namedItem(COVID_19_news_image).src = this.defualt_image[i];
      }
      else{
          let url_back = data_covid_19.response.docs[i].multimedia[0].url;
          let url_full = this.head.concat(url_back);
          document.images.namedItem(COVID_19_news_image).src = url_full;
      }
      // let COVID_19_news_link = this.COVID_19_news_link_array[i];
      // let link4 = document.getElementById(COVID_19_news_link);
      // link4 = data.results[i].url;
      covid_19_links[i] = data_covid_19.response.docs[i].web_url;
    }
    this.world_link_0 = world_links[0];
    this.world_link_1 = world_links[1];
    this.world_link_2 = world_links[2];

    this.sports_link_0 = sports_links[0];
    this.sports_link_1 = sports_links[1];
    this.sports_link_2 = sports_links[2];

    this.arts_link_0 = arts_links[0];
    this.arts_link_1 = arts_links[1];
    this.arts_link_2 = arts_links[2];

    this.covid_link_0 = covid_19_links[0];
    this.covid_link_1 = covid_19_links[1];
    this.covid_link_2 = covid_19_links[2];


  }catch(error){
    console.log("error: ",error);
    }
  }

  activeTab = 'World';

  World(activeTab){
    this.activeTab = activeTab;
  }

  Sports (activeTab){
    this.activeTab = activeTab;
  }

  Arts(activeTab){
    this.activeTab = activeTab;
  }

  COVID19 (activeTab){
    this.activeTab = activeTab;
  }

}
