angular.module('satest').factory('Test',function($q) {
    var fakeTest1 = {
        id: "0",
        title: "Tieteellisen kirjoittamisen itsearviointitesti",
        maxChosenPerGroup: 3,
        showInterpretationThreshold: 2,
        descriptionPageText: "Tämän testin avulla voit arvioida osaamistasi suomenkielisen tieteellisen tekstin kirjoittajana. Testissä on väitteitä seuraavilta kirjoittamisen osa-alueilta:\n\n* Kirjoittaminen mentaalisena toimintana\n* Akateemiset käytänteet ja tekstilajien hallinta\n* Lukeminen ja lähteiden käyttö\n* Kirjoittaminen prosessina\n* Tekstin rakenne ja tyyli\n* Kielelliset seikat\n\nItsearviointitestin tekeminen vie aikaa noin 10 minuuttia. Lopuksi saat valitsemiesi väitteiden pohjalta arvion kirjoittamisesi vahvuuksista ja kehittämiskohteista. Koosteen voit tulostaa tai lähettää omaan sähköpostiisi. Vastauksiasi ei tallenneta.\n\nValitse joka kohdasta 0–3 väitettä, jotka **eniten** kuvaavat omaa tieteellisen tekstin kirjoittamistasi.",
        testPagesText: "Valitse 0–3 väitettä.",
        interpretationPageText: "#Itsearviointitestin tulokset\n\nTällä sivulla näkyy, mitä kirjoittamisen osa-alueita painotat valinnoissasi. Tulokset näyttävät ensin vahvuutesi kirjoittajana ja sen jälkeen näet alueet, joissa tarvitset harjoitusta. Lue tuloksesi ja niistä annetut tulkinnat huolellisesti ja hyödynnä niitä tarpeen mukaan.",
        interpretations: [
            {
                category: "Kirjoittaminen mentaalisena toimintana (esim. ilon tai ahdistuksen aiheet, tuen vaikutus, itsenäisyys, vastuu omasta oppimisesta)",
                type: "strength",
                text: "Vastauksissasi korostuu kirjoittamisen palkitsevuus. Myönteinen asenne kirjoittamiseen helpottaakin työskentelyä monella tavalla: aloittaminen helpottuu, tekstiä syntyy helposti eri tarkoituksiin ja kirjoitusprossista voi nauttia. Itsevarmuus kirjoittajana auttaa myös uusissa tilanteissa, sillä vaativiinkin kirjoitustehtäviin voi suhtautua luottavaisesti. Tutkimusten mukaan sosiaalinen tuki auttaa kirjoitusprosessissa, ja sen vuoksi kirjoittamisesta kannattaakin tehdä yhteisöllistä. Hienoa, jos olet oivaltanut myös tämän kirjoittamisen ulottuvuuden ja mahdollisuuden kehittyä kirjoittajana koko ajan monipuolisemmaksi ja paremmaksi.",
                color: "red",
                claims: [
                    {"text": "Koen tekeväni mielekästä työtä, kun kirjoitan.", "claimgroupId": 0},
                    {"text": "Loppujen lopuksi löydän motivaation suorittaa pidemmätkin kirjoitukset loppuun.", "claimgroupId": 2},
                    {"text": "Itsenäinen työskentely on minulle luontaista ja kirjoittaminen on näin ainakin perusluonteeltaan helppoa ja mielenkiintoista.", "claimgroupId": 4},
                    {"text": "Rakentava palaute motivoi minua kirjoittamaan. ", "claimgroupId": 6},
                    {"text": "Hyvästä ja sujuvasta kirjoituksesta tulee voittajafiilis!", "claimgroupId": 8},
                    {"text": "Kirjoittaessa sosiaalinen tuki on avuksi.", "claimgroupId": 10}
                ]
            },{
                category: "Kirjoittaminen mentaalisena toimintana (esim. ilon tai ahdistuksen aiheet, tuen vaikutus, itsenäisyys, vastuu omasta oppimisesta)",
                type: "weakness",
                text: "Kirjoittaminen on vaativaa kognitiivista toimintaa ja edellyttää myös sosiaalisten ja kielellisten käytänteiden hallitsemista. Ei siis ole mikään ihme, että kirjoittaminen aiheuttaa monelle kirjoittajalle ahdistuksen ja pelon tunteita. Kannattaa pysähtyä miettimään, mitä on näiden ahdistavien tunteiden takana, ja etsiä keinoja, joilla kirjoittaminen muuttuisi helpommaksi ja mukavammaksi.  Laske kirjoittamisen rimaa, etsi sosiaalista tukea ja kannustusta, kokeile vapaan kirjoittamisen tekniikoita ja kirjoita aiheista, jotka kiinnostavat sinua todella. Hyviä vinkkejä kirjoittamisen esteiden voittamiseen löytyy myös kirjoittamisoppaista, ks. esim. Svinhufvud, Kokonaisvaltainen kirjoittaminen.",
                color: "purple",
                claims: [
                    {"text": "En luota itseeni kirjoittajana.", "claimgroupId": 1},
                    {"text": "Minun on joskus vaikeaa asettaa omia tavoitteitani kirjoittamiselle.", "claimgroupId": 3},
                    {"text": "Kirjoittamiseen keskittyminen on usein hankalaa. ", "claimgroupId": 5},
                    {"text": "Suhtaudun omaan tekstiini liiankin kriittisesti, mikä toisinaan ahdistaa ja vaikeuttaa kirjoittamista.", "claimgroupId": 7},
                    {"text": "Kirjoittaminen on ahdistavaa alusta loppuun.", "claimgroupId": 9},
                    {"text": "Täydellisyyteen pyrkiminen vaikeuttaa kirjoittamista, joten yleensä en kirjoita tosissani.", "claimgroupId": 11}
                ]
            },{
                category: "Akateemiset käytänteet ja tekstilajien hallinta (esim. vakiintuneet käytänteet, oma teksti osana tiedeyhteisöä ja ammattialaa, lukijan huomiointi)",
                type: "strength",
                text: "Vastaustesi perusteella olet jo hyvin perillä oman alasi käytänteistä ja tieteellisten tekstilajien ominaispiirteistä. Kirjoittaminen voidaan ymmärtää sosiaalisena toimintana, joka tapahtuu sosiaalisessa kontekstissa, jollaista edustaa esimerkiksi oma ala ja oma oppiaine. Oletkin arvattavasti jo harjoitellut tieteellistä kirjoittamista – taidon oppiminen nimittäin vaatii oman alan monesti hiljaisten käytänteiden omaksumista, mikä ei tapahdu aivan yhtäkkiä. Niinpä jos teet eri alojen opintoja, voi olla, että joudut samalla opettelemaan kokonaan uusia tekstilajeja ja uusia käytänteitä.",
                color: "blue",
                claims: [
                    {"text": "Oman alan kirjoitustyyli on hyvin hallussa.", "claimgroupId": 0},
                    {"text": "Kirjoittamista helpottavat oman tiedeyhteisön kirjoituksen rakenteen vakiintuneet käytänteet.", "claimgroupId": 2},
                    {"text": "Pyrin ottamaan lukijan huomioon kirjoittaessani erilaisia tekstejä.", "claimgroupId": 4},
                    {"text": "Pyrin ottamaan tekstilajin huomioon etenkin sanavalinnoissa ja siinä, kuinka paljon tuon esille omia mielipiteitäni.", "claimgroupId": 6},
                    {"text": "Jos ymmärrän asian, minun on helppo kirjoittaa siitä niin, että muutkin ymmärtävät.", "claimgroupId": 8},
                    {"text": "Osaan kirjoittaa erilaisia oman alan tekstilajeja.", "claimgroupId": 10}
                ]
            },{
                category: "Akateemiset käytänteet ja tekstilajien hallinta (esim. vakiintuneet käytänteet, oma teksti osana tiedeyhteisöä ja ammattialaa, lukijan huomiointi)",
                type: "weakness",
                text: "Akateemiseen asiantuntijuuteen kuuluu paljon käytänteitä ja tapoja, joista monet oppii vain olemalla osa yhteisöä ja tekemällä asiaankuuluvia tehtäviä, kuten kirjoittamalla oman alan tieteellistä tekstiä. Vastaustesi perusteella et ole vielä kovin varma oman alasi kirjoittaja, ja se johtuu varmasti siitä, että olet vielä uusi alalla. Kirjoittamista voi oppia havainnoimalla, millaisia tekstejä ja millaista sanomisen tapaa alalla suositaan. Kannattaa lukea paljon ja ajatuksella oman alan tekstejä ja lukea huolellisesti myös annetut ohjeet, kuten ohjeet tutkielman rakenteesta ja viittaamisesta. Ennen kaikkea kannattaa olla aktiivinen, sillä asiantuntijaksi kasvaminen on sosiaalista. Älä tee pelkästään kirjatenttejä vaan mene sellaisille kursseille, joilla kirjoitetaan. Anna tekstiäsi luettavaksi opiskelijakollegoille ja oman alasi osaajille.",
                color: "black",
                claims: [
                    {"text": "Asiatyylisen tekstin kirjoittaminen on vaikeaa, koska tykkään kirjoittaa vapaasti ja elävästi.", "claimgroupId": 1},
                    {"text": "Oman alan käytänteet eivät ole vielä kovin tuttuja.", "claimgroupId": 3},
                    {"text": "Joskus minulla on hankaluuksia pitää yhdenmukainen tyyli omassa tekstissäni.", "claimgroupId": 5},
                    {"text": "Tieteellinen kirjoittaminen tuntuu vielä aika hankalalta.", "claimgroupId": 7},
                    {"text": "Pidän vapaasta kirjoittamisesta enemmän kuin oman alan tekstien laatimisesta.", "claimgroupId": 9},
                    {"text": "Lukijan huomiointi on haastavaa, sillä en voi tietää, mitkä asiat ovat lukijalla jo ennestään tiedossa.", "claimgroupId": 11}
                ]
            },{
                category: "Lukeminen ja lähteiden käyttö (esim. lähdekriittisyys ja tieteellisyyden arviointi, ydinajatusten löytäminen, viittaustekniikka, plagiointi)",
                type: "strength",
                text: "Vastauksissasi korostuu lähteidenkäytön hallinta. Sovitat käyttämäsi lähteet osaksi omaa tekstiäsi ja osaat hyödyntää niitä tuottaessasi uutta tietoa. Tieteellisen kirjoittamisen ydintä onkin toisten kirjoittamien tekstien lukeminen, tiedon kriittinen arviointi ja analysointi sekä tekstien ydinajatusten löytäminen. Lisäksi on tärkeää hallita oman alan lähdeviittaustekniikka ja noudattaa sitä. Yhteiset pelisäännöt viittauksissa edistävät tieteellisen tiedon rakentumisen läpinäkyvyyttä ja ohjaavat lukijat käyttämiesi lähteiden äärelle. Lukiessasi ja kirjoittaessasi olet osa tiedeyhteisöä!",
                color: "brown",
                claims: [
                    {"text": "Osaan hyvin oman alani viittauskäytännöt.", "claimgroupId": 0},
                    {"text": "Olen lähdekriittinen ja löydän helposti tekstien ydinajatukset.", "claimgroupId": 2},
                    {"text": "Lähdetekstin ydinajatusten löytäminen on helppoa, etenkin kun tietää, kuinka oman alan artikkelit rakentuvat. ", "claimgroupId": 4},
                    {"text": "Osaan esittää asiat omin sanoin, plagioimatta.", "claimgroupId": 6},
                    {"text": "Osaan olla kriittinen lukiessani tieteellistä tekstiä.", "claimgroupId": 8},
                    {"text": "Minusta on helppoa kirjoittaa toisten tekstien pohjalta.", "claimgroupId": 10}
                ]
            },{
                category: "Lukeminen ja lähteiden käyttö (esim. lähdekriittisyys ja tieteellisyyden arviointi, ydinajatusten löytäminen, viittaustekniikka, plagiointi)",
                type: "weakness",
                text: "Vastauksissasi korostuu lähteidenkäytön harjoittelemisen tarve. Tieteellinen teksti pohjaa aiempiin tutkimuksiin ja keskustelee niiden kanssa, mutta eri aloilla on erilaisia argumentointitapoja. Oman alan tieteellisten artikkelien lukeminen tutustuttaa myös niihin. Kun lukee tekstejä, on hyödyllistä miettiä, miten käsitellyt asiat liittyvät toisiinsa, mitkä ovat oman tekstin kannalta olennaisia asioita ja miten onnistuneesti tekstissä argumentoidaan. Jos oman kirjoittamisen kannalta olennaisen tiedon löytäminen tuntuu vaikealta, lähteiden tulkinnassa kannattaa hyödyntää esimerkiksi erilaisia visuaalisia apukeinoja kuten miellekarttaa. Tieteellisiä artikkeleita voi myös mahdollisuuksien mukaan lukea ja analysoida yhdessä muiden kanssa.  Lukutaitoa ja lähteiden käytön sujuvuutta voi aina kehittää! Tutustu esim. Kielijelppi-sivuston lukemista ja referointia käsitteleviin artikkeleihin: www.kielijelppi.fi",
                color: "orange",
                claims: [
                    {"text": "Kopioinnin ja oman tekstin raja tuntuu vaikealta hahmottaa.", "claimgroupId": 1},
                    {"text": "Olen hidas lukija ja minun on vaikea keskittyä tieteellisten tekstien lukemiseen.", "claimgroupId": 3},
                    {"text": "Osaan viitata hyvin lähteisiin, mutta joskus minun on vaikea yhdistää eri lähteiden tietoja tai vertailla niitä keskenään.", "claimgroupId": 5},
                    {"text": "Lähdekriittisyyttä löytyy, mutta ydinajatusten löytäminen on hankalaa.", "claimgroupId": 7},
                    {"text": "Tekstien tieteellisyyden arvioinnissa olen vielä epävarma.", "claimgroupId": 9},
                    {"text": "Tieteellisten artikkelien referoiminen on vaikeaa, koska en läheskään aina ymmärrä lukemaani.", "claimgroupId": 11}
                ]
            },{
                category: "Kirjoittaminen prosessina (esim. aloittaminen, tekstin tuottaminen, ajanhallinta, viimeistely)",
                type: "strength",
                text: "Olet selvästi ymmärtänyt tieteellisen kirjoittamisen prosessimaisen luonteen, vaikka et välttämättä aina voisikaan käyttää haluamaasi aikaa kirjoittamisen jokaiseen vaiheeseen. Olet omaksunut tavan työstää tekstiäsi useammassa vaiheessa ja pystyt soveltamaan kirjoittamisprosessin eri vaiheita tarpeen mukaan. Pitkää tekstiä ei voikaan tehdä valmiiksi yhdeltä istumalta. Tiedostat myös palautteen tärkeyden ja osaat tarvittaessa hyödyntää sitä. Palautetta kannattaa oman ohjaajan lisäksi pyytää myös opiskelukaverilta.",
                color: "green",
                claims: [
                    {"text": "Ajanhallintani on tehokasta ja suoriudun tehtävistä hyvinkin lyhyessä ajassa.", "claimgroupId": 0},
                    {"text": "Osaan hyödyntää saamaani palautetta ja sen avulla usein saankin tekstini muokattua paremmaksi.", "claimgroupId": 2},
                    {"text": "Minulle on hyötyä tekstin suunnitteluvaiheesta, ja työstän tekstiä useissa vaiheissa.", "claimgroupId": 4},
                    {"text": "Alkuun pääsemisen jälkeen kirjoittaminen tuntuu sujuvalta, jopa mielekkäältä.", "claimgroupId": 6},
                    {"text": "Tekstin tuottaminen on minulle helppoa ja saan tekstit halutessani nopeasti valmiiksi.", "claimgroupId": 8},
                    {"text": "Tekstin parantamisen kannalta on keskeistä kirjoittaa, saada palautetta ja sitten taas kirjoittaa.", "claimgroupId": 10}
                ]
            },{
                category: "Kirjoittaminen prosessina (esim. aloittaminen, tekstin tuottaminen, ajanhallinta, viimeistely)",
                type: "weakness",
                text: "Vastauksissasi korostuvat kirjoittamisprosessin hallinnan ongelmat. Ajankäyttöä, kirjoittamislukkojen avaamista ja erilaisia työtapoja voi kuitenkin harjoitella monin tavoin: aluksi kannattaa tehdä työsuunnitelma ja pitää siitä kiinni.  Pitkä teksti rakentuu vaihe vaiheelta; sitä muokataan, hiotaan ja kirjoitetaan joitakin kohtia uudelleen. Suuren tekstikokonaisuuden kirjoittaminen kannattaakin jakaa pienempiin osiin. Älä epäröi pyytää palautetta myös keskeneräisestä tekstistä! Kirjoitusprosessiin saat apua esim. Svinhufvudin kirjasta Gradutakuu tai Kielijelppi-sivustolta: http://www.kielijelppi.fi/kirjoitusviestinta.",
                color: "pink",
                claims: [
                    {"text": "Kireät aikataulut ahdistavat ja haittaavat kirjoittamista.", "claimgroupId": 1},
                    {"text": "Aloittaminen ahdistaa, ja sitä tulee usein lykättyä.", "claimgroupId": 3},
                    {"text": "Minun on vaikea suunnitella ajankäyttöäni, koska en aina hahmota, kuinka kauan mihinkin menee.", "claimgroupId": 5},
                    {"text": "Viimeistely voi jäädä ajan- tai kiinnostuksenpuutteen takia tekemättä. ", "claimgroupId": 7},
                    {"text": "Tiedän, että tieto rakentuu samalla kun tekstiä muokataan ja kirjoitetaan uudelleen, mutta minun on silti vaikea hyväksyä tekstin pitkäjänteistä työstämistä.", "claimgroupId": 9},
                    {"text": "Saatan alkaa kirjoittaa tehokkaasti, mutta sitten jätän tekstini lojumaan, kunnes minulle tulee liian kiire tehdä se loppuun.", "claimgroupId": 11}
                ]
            },{
                category: "Tekstin rakenne ja tyyli (esim. jäsentely, yhtenäisyys ja sidosteisuus, otsikointi, vivahteiden taju ja tyylinmukaisuus, retoriikka)",
                type: "strength",
                text: "Vastauksiesi perusteella hahmotat hyvin sen, miten teksti rakentuu.  Tiedät, miten ajatukset saa tekstissä lukijalle ymmärrettävään muotoon ja myös, miten pystyt johdattamaan lukijaa tekstisi läpi. Teksti koostuu lauseista, mutta lauseiden suhde toisiinsa ja kokonaisuuteen on myös osoitettava – sekä loogisesti, esimerkiksi argumentoimalla, että tekstuaalisesti. Kirjoittaminen tulee kuitenkin sitä luontevammaksi, mitä enemmän ja mitä erilaisempia tekstejä kirjoitat. Yhdenlaisen tekstin rakenne ja keinot eivät välttämättä sovellukaan toisenlaiseen tekstiin, vaan kirjoittamisen tapaa täytyy muuttaa tilanteen mukaan. Ehkä voisitkin kehittää osaamistasi kokeilemalla erilaisten tekstien kirjoittamista.",
                color: "gray",
                claims: [
                    {"text": "Jäsentelen tekstini yleensä hyvin, mutta muiden palaute on tarpeellista.", "claimgroupId": 0},
                    {"text": "Osaan kirjoittaa johdonmukaista tekstiä, jossa on selvä rakenne ja punainen lanka.", "claimgroupId": 2},
                    {"text": "Otsikoinnin ja jäsentelyn hallitsen hyvin.", "claimgroupId": 4},
                    {"text": "Teksteissäni kappaleet ovat yhtenäisiä ja sidosteisia.", "claimgroupId": 6},
                    {"text": "Pyrin jäsentämään tekstini heti aluksi, mutta olen myös valmis muuttamaan asioiden esitysjärjestystä, jos alkuperäinen jäsennykseni ei toimi.", "claimgroupId": 8},
                    {"text": "Jäsentelen tekstini isot kokonaisuudet heti aluksi, minkä jälkeen voin keskittyä jokaiseen kohtaan erikseen vaivatta.", "claimgroupId": 10}
                ]
            },{
                category: "Tekstin rakenne ja tyyli (esim. jäsentely, yhtenäisyys ja sidosteisuus, otsikointi, vivahteiden taju ja tyylinmukaisuus, retoriikka)",
                type: "weakness",
                text: "Helppolukuisen ja yhtenäisen tekstin kirjoittaminen on haastava tehtävä, koska kirjoittaessaan joutuu pitämään mielessä paitsi sen, mitä itse tietää, myös sen, mitä lukija tietää tai ei tiedä. Monet tekstin rakenteen ongelmat juontavatkin juurensa siitä, että kirjoittaja ei muista kertoa lukijalle, mitä on tekemässä, ja tekstiä vaivaa sidoskeinojen ja metatekstin eli tekstistä kertovan tekstin puute. Vastaustesi perusteella et ole vielä täysin selvillä siitä, miten omista ajatuksista koostetaan yhtenäinen ja helposti seurattava teksti. Tekstin rakentamisen taito kehittyy kuitenkin vähitellen, ja kun kirjoittaa, oppii varmemmaksi kirjoittajaksi. Tekstin rakenteeseen kannattaa perehtyä myös tietoisesti opettelemalla esimerkiksi jäsennyksen suunnittelemista, kappaleiden rakentamista ja metatekstin käyttö. Vinkkejä kannattaa katsoa alkuun vaikkapa Kirjoittajan ABC-kortista: http://webcgi.oulu.fi/oykk/abc/tekstinhuolto/tekstin_rakenne/tekstin_kappaleet/",
                color: "lightblue",
                claims: [
                    {"text": "Minun on vaikea päättää asioiden käsittelyjärjestys.", "claimgroupId": 1},
                    {"text": "Tekstieni sidosteisuudessa ja yhtenäisyydessä on parannettavaa.", "claimgroupId": 3},
                    {"text": "Minulla on ongelmia saada repaleisista ajatuksistani ymmärrettäviä ja yhtenäisiä lauseita.", "claimgroupId": 5},
                    {"text": "Olen huono yhdistämään kokonaisuuksia, kun kirjoitan.", "claimgroupId": 7},
                    {"text": "Aiheen rajaaminen tuntuu usein vaikealta.", "claimgroupId": 9},
                    {"text": "Olen huono kirjoittamaan loogisessa järjestyksessä.", "claimgroupId": 11}
                ]
            },{
                category: "Kielelliset seikat (esim. oikeinkirjoitus, aikamuodot)",
                type: "strength",
                text: "Vastauksissasi näkyy, että pidät tekstin hyvää kieliasua tärkeänä ja tunnet hallitsevasi oikeinkirjoitusasiat.  Tekstien huolelliseen viimeistelyyn kannattaakin panostaa, sillä myös lukijat arvostavat selkeää kieltä ja kirjoitetun kielen normien hallintaa.  Kirjoittajan asiantuntemukseen kuuluu myös se, että osaa käyttää hakuteoksia ja kielioppaita oman kirjoittamisen tukena. Hienoa, jos hyödynnät tätäkin mahdollisuutta jo riittävästi.",
                color: "lightgreen",
                claims: [
                    {"text": "Suurin osa pilkuistani ja yhdyssanoistani on oikein.", "claimgroupId": 0},
                    {"text": "Oikeinkirjoitusasiat ovat hallussa.", "claimgroupId": 2},
                    {"text": "Tarkistan oikeinkirjoitusasioita netistä ja kielioppaista.", "claimgroupId": 4},
                    {"text": "Käytän aina aikaa myös tekstieni viimeistelyyn.", "claimgroupId": 6},
                    {"text": "Haluan, että tekstini on aina viimeistelty myös oikeinkirjoituksen osalta.", "claimgroupId": 8},
                    {"text": "Tekstieni lauseet ja virkkeet ovat selkeitä ja ymmärrettäviä.", "claimgroupId": 10}
                ]
            },{
                category: "Kielelliset seikat (esim. oikeinkirjoitus, aikamuodot)",
                type: "weakness",
                text: "Vastauksissasi näkyy, että koet oikeinkirjoitusasiat ja tekstin viimeistelyn hankalaksi. Onneksi oikeinkirjoitusasioita voi varsin hyvin opiskella myös itsenäisesti, ja tekstin viimeistelyssä voi hyödyntää kielioppaita. Oma teksti kannattaa myös jättää kirjoittamisen jälkeen hetkeksi lepäämään, koska tauon jälkeen lauserakenteiden mahdolliset epäselvyydet havaitsee helpommin ja muokkaus sujuu paremmin. Tekstit kannattaa myös aina lukea huolellisesti viimeisen kerran läpi, ennen kuin luovuttaa ne eteenpäin. Tutustu esim. Kirjoittajan ABC-korttiin, jonka Kielenhuolto-osio on tarkoitettu pulmallisten kieliasioiden itseopiskeluun ja harjoitteluun: http://webcgi.oulu.fi/oykk/abc/kielenhuolto/ .",
                color: "cyan",
                claims: [
                    {"text": "Aikamuotojen käyttö aiheuttaa joskus epäselvyyttä, kun kirjoitan tieteellistä tekstiä.", "claimgroupId": 1},
                    {"text": "Minulla ei ole hyvää tekniikkaa tekstin kieliasun viimeistelemiseen/tarkistamiseen.", "claimgroupId": 3},
                    {"text": "Minun on vaikea karsia täytesanoja ja epämääräisiä ei-tieteellisiä ilmaisuja teksteistäni.", "claimgroupId": 5},
                    {"text": "Oikeinkirjoituksessa minulla on hankaluuksia, varsinkin pilkutuksessa ja yhdyssanoissa.", "claimgroupId": 7},
                    {"text": "Luen paljon englanniksi ja se näkyy suomenkielisissä teksteissäni lauserakenteissa ja sanastossa.", "claimgroupId": 9},
                    {"text": "Virkkeeni ovat usein liian pitkiä.", "claimgroupId": 11}
                ]
            }
        ]
    };

    var fakeTest2 = _.clone(fakeTest1, true);
    fakeTest2.id = "1";
    var fakeTests = [fakeTest1, fakeTest2];

	var Test = {
        findAll: function() {
            var deferred = $q.defer();
            deferred.resolve(fakeTests);
            return deferred.promise;
        },
        findOne: function(id) {
            var deferred = $q.defer();
            deferred.resolve(_.find(fakeTests, function(test) {
                return test.id === id;
            }));
            return deferred.promise;
        }
    };

	return Test;
});