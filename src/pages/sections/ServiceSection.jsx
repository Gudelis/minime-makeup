import "./styles/serviceSection.css";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { useState, useEffect } from "react";
import daily from "../../assets/services/daily.jpg";
import evening from "../../assets/services/evening.jpg";
import bride from "../../assets/services/bride.jpg";
import photo from "../../assets/services/photo.jpg";

export const ServiceSection = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [typeText, setTypeText] = useState(null);
  const detailedServiceText = document.getElementById("getDetailsButton");

  const handleClick = (makeupName) => {
    setSelectedType(makeupName);
  };

  const handleHide = () => {
    setTypeText(null);
    setSelectedType(null);
  };

  useEffect(() => {
    switch (selectedType) {
      case "Dieninis makiažas":
        setTypeText(
          "Lengvas ir subtilus - žodžiai geriausiai apibūdinantys šį variantą. Užsisakius šį makiažą iš studijos išeisite lengvai pamaskuota oda, neutraliais atspalviais ir švelniai paryškintomis akimis ir lūpomis. Užsisakant dieninį makiažą nereikėtų tikėtis sudėtingų ir spalvotų akių vokų šešėlių padengimo technikų ar ryškių raudonų lūpų. Dažnai tai yra greičiausiai atliekamas įvaizdis, o kartu ir pigiausias pasirinkimas iš sąrašo. Tinkamas einant į svarbų susitikimą, verslo pietus ar kitą oficialų, bet dieną vykstantį renginį. Svarbiausias dieninio makiažo tikslas - suteikti skaistumo ir gaivos, pagyvinti akių žvilgsnį neapkraunant odos."
        );
        break;
      case "Vakarinis/proginis makiažas":
        setTypeText(
          "Vakarinis ir proginis makiažas reikalauja skirti daugiau laiko jam atlikti. Užsisakius šią makiažo paslaugą ir pasitarus su vizažistu, studiją paliksite jau su ryškesniu įvaizdžiu. Atliekant šį makiažą dažniausiai išryškinamos akis arba lūpos, atliekamas ryškesnis veido modeliavimas, tam, kad gerai matytųsi pritemdytame apšvietime. Proginis makiažas nebūtinai turi būti labai ryškus, vizažistas visada atsižvelgs į Jūsų poreikius, tačiau jis atliekamas ir užfiksuojamas taip, kad atlaikytų ilgesnį laiko tarpą. Atliekant proginį makiažą akių vokų šešėlių ar lūpdažio spalvos yra derinamos ne tik prie kliento odos bei akių spalvos, o ir prie būsimos aprangos. Šis makiažas puikiai tinka einant kaip svečiui į vestuves, gimtadienį, išleistuves ar kitą ilgiau trunkančią šventę, norint jos metu atrodyti nepriekaištingai tiek gyvai, tiek nuotraukose."
        );
        break;
      case "Vestuvinis makiažas":
        setTypeText(
          "Dėl šio makiažo užsakymo progos klausimai nebekyla. Tai ypatingo kruopštumo ir dėmesio reikalaujantis makiažo tipas, dažnai trunkantis ilgiau - apie pusantros valandos. Juk taip svarbu yra, kad nuotaka šią svarbią dieną jaustųsi puikiai. Prieš atliekant vestuvinį makiažą visada išsiaiškinami jaunosios lūkesčiai. Vestuvinis makiažas gali būti ir labai subtilus bei lengvas, ir ryškesnis. Čia viskas priklauso nuo jaunosios norų. Prieš vestuvinį makiažą siūloma atlikti bandomąjį, kurio metu vizažistas taip pat pabendrauja su kliente ir aptaria įvairius niuansus. Atlikus bandomąjį makiažą vizažistas jau turės sąrašą priemonių ir atspalvių, kuriuos naudos iškilmingosios dienos rytą, taip darbas galės vykti sklandžiai ir efektyviai."
        );
        break;
      case "Foto makiažas/grimas":
        setTypeText(
          "Šis makiažo tipas mažiausiai apibrėžtas atlikimo technikų bei ryškumo aspektu. Foto makiažas atliekamas taip, kad puikiai atrodytų prie ryškaus apšvietimo ir foto objektyvo blyksčių. Šis makiažas visiškai individualiai parenkamas ir pritaikomas pagal fotosesijos temą, aprangą, galimas pasitarimas ne tik su modeliu, bet ir su fotografu bei stilistu. Grimas dažniausiai pasirenkamas einant į teminį vakarėlį, kurio tematika reikalauja gan stipriai pakeisti kliento veido bruožus makiažo pagalba, pavyzdžiui, kraupaus ir efektingo įvaizdžio kūrimas Helovyno vakarėliui."
        );
        break;
      default:
        setTypeText(null);
        break;
    }

    detailedServiceText &&
      detailedServiceText.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [selectedType]);

  return (
    <section className="services-section" id="paslaugos">
      <h2>Paslaugos</h2>
      <div className="service-card-wrapper">
        <ServiceCard
          makeupName="Dieninis makiažas"
          onClick={handleClick}
          photo={daily}
        />
        <ServiceCard
          makeupName="Vakarinis/proginis makiažas"
          onClick={handleClick}
          photo={evening}
        />
        <ServiceCard
          makeupName="Vestuvinis makiažas"
          onClick={handleClick}
          photo={bride}
        />
        <ServiceCard
          makeupName="Foto makiažas/grimas"
          onClick={handleClick}
          photo={photo}
        />
      </div>
      {typeText && (
        <div className="service-text-wrapper">
          <div className="service-text" id="serviceText">
            <h3>{selectedType}</h3>
            <p>{typeText}</p>
          </div>
          <button onClick={handleHide}>Paslėpti aprašymą</button>
        </div>
      )}
    </section>
  );
};
