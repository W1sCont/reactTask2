import { CityHeader } from "./components/CityHeader";
import { CityGallery } from "./components/CityGallery";
import type { ICity } from "./types";

const cityData: ICity = {
    name: "Стрий",
    country: "Україна",
    foundedYear: 1385,
    description: [
      {
        title: "Основні відомості:",
        paragraphs: [
          "Розташування: На лівому березі річки Стрий, приблизно за 65–70 км на південь від Львова, поблизу Карпатських гір.",
          "Площа: 16,95 км²",
          "Населення: Станом на 2025 рік населення міста становить близько 71 тисячі осіб",
          "Перша письмова згадка: 1385 рік",
          "Магдебурзьке право: 1431 рік"
        ]
      },
      {
        title: "Історичні факти:",
        paragraphs: [
          "14 березня 1990 року Стрий став першим містом в Україні, де офіційно підняли національний синьо-жовтий прапор над міською радою.",
          "Місто має багату історію польського, австро-угорського та українського періодів, тут формувалися підрозділи Українських січових стрільців.",
          "Перші згадки та Магдебурзьке право: Перша письмова згадка про Стрий датується 1385 роком. У 1431 році польський король Владислав II Ягайло надав місту Магдебурзьке право.",
          "Історичні періоди: Протягом століть місто належало Польщі, потім — Австрійській імперії (з 1772 року), ЗУНР (з 1918 року), знову Польщі (1919–1939), а також пережило радянську та німецькі окупації."
        ]
      },
      {
        title: "Економіка та транспорт:",
        paragraphs: [
          "Важливий залізничний та автомобільний транспортний вузол західної України.",
          "Розвинута промисловість (вагоноремонтний завод, підприємства машинобудування, виробництво кабельних мереж компанії Leoni тощо).",
          "Промисловість: Стрий є потужним промисловим вузлом. Тут працюють Стрийський вагоноремонтний завод, підприємство з виробництва автомобільних кабельних мереж Leoni, газопромислове управління та інші компанії."
        ]
      }
    ],
    photos: [
      {
        id: 1,
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Coat_of_arms_Stryi.svg/960px-Coat_of_arms_Stryi.svg.png?utm_source=uk.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        caption: "Герб міста Стрий"
      },
      {
        id:2,
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B8_%D0%B2_%D0%A1%D1%82%D1%80%D0%B8%D1%8E.jpg/1280px-%D0%9C%D1%96%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B8_%D0%B2_%D0%A1%D1%82%D1%80%D0%B8%D1%8E.jpg?utm_source=uk.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        caption: "Міський будинок культури в Стрию"
      },
      {
        id: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/4/49/%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D1%83%D1%81%D0%BF%D1%96%D0%BD%D0%BD%D1%8F_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%96.jpg?utm_source=uk.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        caption: "Успенська церква"
      },
      {
        id: 4,
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/%D0%A1%D1%82%D1%80%D1%8B%D0%B9._%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D1%85%D1%80%D0%B0%D0%BC.jpg/1280px-%D0%A1%D1%82%D1%80%D1%8B%D0%B9._%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D1%85%D1%80%D0%B0%D0%BC.jpg?utm_source=uk.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        caption: "Храм Святих Апостолів Петра і Павла в Стрию"
      },
      {
        id: 5,
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Monument_to_T._Shevchenko%2C_I._Franko_and_L._Ukrainka_in_Stryi.4.jpg/960px-Monument_to_T._Shevchenko%2C_I._Franko_and_L._Ukrainka_in_Stryi.4.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        caption: "Меморіально-скульптурний комплекс «Будителі» (Т.Шевченко, І.Франко, Леся Українка)"
      },
      {
        id: 6,
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/%D0%A1%D1%82%D1%80%D0%B8%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BB%D1%96%D0%B9%D0%B5%D0%B9_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%90._%D0%9A%D0%BE%D1%80%D1%87%D0%B0%D0%BA%D0%B0.jpg/1280px-%D0%A1%D1%82%D1%80%D0%B8%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BB%D1%96%D0%B9%D0%B5%D0%B9_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%90._%D0%9A%D0%BE%D1%80%D1%87%D0%B0%D0%BA%D0%B0.jpg?utm_source=uk.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        caption: "Стрий - місто магнолій"
      },
      {
        id: 7,
        url: "https://travel.creature.biz.ua/images/lviv/stryj/stryj-01.jpg",
        caption: "Вокзал"
      }
    ]
}

export default function App() {
    const coatOfArms = cityData.photos.find(p => p.caption.toLowerCase().includes("герб"));
    const galleryPhotos = cityData.photos.filter(p => p.id !== coatOfArms?.id);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <CityHeader 
                        name={cityData.name}
                        country={cityData.country}
                        foundedYear={cityData.foundedYear}
                        description={cityData.description}
                        photos={cityData.photos}
                    />
                    <CityGallery photos={galleryPhotos} />
                </div>
            </div>
        </div>
    );
}