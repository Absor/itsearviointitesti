describe('ClaimgroupCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        var saTest = {
            maxChosenPerGroup: 3,
            claimgroups: [
                [
                    {"text": "Koen tekeväni mielekästä työtä, kun kirjoitan."},
                    {"text": "Ajanhallintani on tehokasta ja suoriudun tehtävistä hyvinkin lyhyessä ajassa."},
                    {"text": "Oman alan kirjoitustyyli on hyvin hallussa."},
                    {"text": "Jäsentelen tekstini yleensä hyvin, mutta muiden palaute on tarpeellista."},
                    {"text": "Osaan hyvin oman alani viittauskäytännöt."},
                    {"text": "Suurin osa pilkuistani ja yhdyssanoistani on oikein."}
                ],
                [
                    {"text": "En luota itseeni kirjoittajana."},
                    {"text": "Asiatyylisen tekstin kirjoittaminen on vaikeaa, koska tykkään kirjoittaa vapaasti ja elävästi."},
                    {"text": "Kopioinnin ja oman tekstin raja tuntuu vaikealta hahmottaa."},
                    {"text": "Aikamuotojen käyttö aiheuttaa joskus epäselvyyttä, kun kirjoitan tieteellistä tekstiä."},
                    {"text": "Minun on vaikea päättää asioiden käsittelyjärjestys."},
                    {"text": "Kireät aikataulut ahdistavat ja haittaavat kirjoittamista."}
                ],
                [
                    {"text": "Oikeinkirjoitusasiat ovat hallussa."},
                    {"text": "Kirjoittamista helpottavat oman tiedeyhteisön kirjoituksen rakenteen vakiintuneet käytänteet."},
                    {"text": "Loppujen lopuksi löydän motivaation suorittaa pidemmätkin kirjoitukset loppuun."},
                    {"text": "Olen lähdekriittinen ja löydän helposti tekstien ydinajatukset."},
                    {"text": "Osaan kirjoittaa johdonmukaista tekstiä, jossa on selvä rakenne ja punainen lanka."},
                    {"text": "Osaan hyödyntää saamaani palautetta ja sen avulla usein saankin tekstini muokattua paremmaksi."}
                ],
                [
                    {"text": "Olen hidas lukija ja minun on vaikea keskittyä tieteellisten tekstien lukemiseen."},
                    {"text": "Minun on joskus vaikeaa asettaa omia tavoitteitani kirjoittamiselle."},
                    {"text": "Minulla ei ole hyvää tekniikkaa tekstin kieliasun viimeistelemiseen/tarkistamiseen."},
                    {"text": "Tekstieni sidosteisuudessa ja yhtenäisyydessä on parannettavaa."},
                    {"text": "Aloittaminen ahdistaa, ja sitä tulee usein lykättyä."},
                    {"text": "Oman alan käytänteet eivät ole vielä kovin tuttuja."}
                ],
                [
                    {"text": "Minulle on hyötyä tekstin suunnitteluvaiheesta, ja työstän tekstiä useissa vaiheissa."},
                    {"text": "Tarkistan oikeinkirjoitusasioita netistä ja kielioppaista."},
                    {"text": "Itsenäinen työskentely on minulle luontaista ja kirjoittaminen on näin ainakin perusluonteeltaan helppoa ja mielenkiintoista."},
                    {"text": "Otsikoinnin ja jäsentelyn hallitsen hyvin."},
                    {"text": "Pyrin ottamaan lukijan huomioon kirjoittaessani erilaisia tekstejä."},
                    {"text": "Lähdetekstin ydinajatusten löytäminen on helppoa, etenkin kun tietää, kuinka oman alan artikkelit rakentuvat."}
                ],
                [
                    {"text": "Minulla on ongelmia saada repaleisista ajatuksistani ymmärrettäviä ja yhtenäisiä lauseita."},
                    {"text": "Minun on vaikea suunnitella ajankäyttöäni, koska en aina hahmota, kuinka kauan mihinkin menee."},
                    {"text": "Osaan viitata hyvin lähteisiin, mutta joskus minun on vaikea yhdistää eri lähteiden tietoja tai vertailla niitä keskenään."},
                    {"text": "Minun on vaikea karsia täytesanoja ja epämääräisiä ei-tieteellisiä ilmaisuja teksteistäni."},
                    {"text": "Kirjoittamiseen keskittyminen on usein hankalaa."},
                    {"text": "Joskus minulla on hankaluuksia pitää yhdenmukainen tyyli omassa tekstissäni."}
                ],
                [
                    {"text": "Rakentava palaute motivoi minua kirjoittamaan."},
                    {"text": "Pyrin ottamaan tekstilajin huomioon etenkin sanavalinnoissa ja siinä, kuinka paljon tuon esille omia mielipiteitäni."},
                    {"text": "Teksteissäni kappaleet ovat yhtenäisiä ja sidosteisia."},
                    {"text": "Käytän aina aikaa myös tekstieni viimeistelyyn."},
                    {"text": "Alkuun pääsemisen jälkeen kirjoittaminen tuntuu sujuvalta, jopa mielekkäältä."},
                    {"text": "Osaan esittää asiat omin sanoin, plagioimatta."}
                ],
                [
                    {"text": "Suhtaudun omaan tekstiini liiankin kriittisesti, mikä toisinaan ahdistaa ja vaikeuttaa kirjoittamista."},
                    {"text": "Oikeinkirjoituksessa minulla on hankaluuksia, varsinkin pilkutuksessa ja yhdyssanoissa."},
                    {"text": "Olen huono yhdistämään kokonaisuuksia, kun kirjoitan."},
                    {"text": "Viimeistely voi jäädä ajan- tai kiinnostuksenpuutteen takia tekemättä."},
                    {"text": "Lähdekriittisyyttä löytyy, mutta ydinajatusten löytäminen on hankalaa."},
                    {"text": "Tieteellinen kirjoittaminen tuntuu vielä aika hankalalta."}
                ],
                [
                    {"text": "Osaan olla kriittinen lukiessani tieteellistä tekstiä."},
                    {"text": "Jos ymmärrän asian, minun on helppo kirjoittaa siitä niin, että muutkin ymmärtävät."},
                    {"text": "Haluan, että tekstini on aina viimeistelty myös oikeinkirjoituksen osalta."},
                    {"text": "Hyvästä ja sujuvasta kirjoituksesta tulee voittajafiilis!"},
                    {"text": "Pyrin jäsentämään tekstini heti aluksi, mutta olen myös valmis muuttamaan asioiden esitysjärjestystä, jos alkuperäinen jäsennykseni ei toimi."},
                    {"text": "Tekstin tuottaminen on minulle helppoa ja saan tekstit halutessani nopeasti valmiiksi."}
                ],
                [
                    {"text": "Tiedän, että tieto rakentuu samalla kun tekstiä muokataan ja kirjoitetaan uudelleen, mutta minun on silti vaikea hyväksyä tekstin pitkäjänteistä työstämistä."},
                    {"text": "Kirjoittaminen on ahdistavaa alusta loppuun."},
                    {"text": "Aiheen rajaaminen tuntuu usein vaikealta."},
                    {"text": "Luen paljon englanniksi ja se näkyy suomenkielisissä teksteissäni lauserakenteissa ja sanastossa."},
                    {"text": "Pidän vapaasta kirjoittamisesta enemmän kuin oman alan tekstien laatimisesta."},
                    {"text": "Tekstin tieteellisyyden arvioinnissa olen vielä epävarma."}
                ],
                [
                    {"text": "Tekstin parantamisen kannalta on keskeistä kirjoittaa, saada palautetta ja sitten taas kirjoittaa."},
                    {"text": "Osaan kirjoittaa erilaisia oman alan tekstilajeja."},
                    {"text": "Minusta on helppoa kirjoittaa toisten tekstien pohjalta."},
                    {"text": "Jäsentelen tekstini isot kokonaisuudet heti aluksi, minkä jälkeen voin keskittyä jokaiseen kohtaan erikseen vaivatta."},
                    {"text": "Tekstieni lauseet ja virkkeet ovat selkeitä ja ymmärrettäviä."},
                    {"text": "Kirjoittaessa sosiaalinen tuki on avuksi."}
                ],
                [
                    {"text": "Täydellisyyteen pyrkiminen vaikeuttaa kirjoittamista, joten yleensä en kirjoita tosissani."},
                    {"text": "Virkkeeni ovat usein liian pitkiä."},
                    {"text": "Olen huono kirjoittamaan loogisessa järjestyksessä."},
                    {"text": "Tieteellisten artikkelien referoiminen on vaikeaa, koska en läheskään aina ymmärrä lukemaani."},
                    {"text": "Saatan alkaa kirjoittaa tehokkaasti, mutta sitten jätän tekstini lojumaan, kunnes minulle tulee liian kiire tehdä se loppuun."},
                    {"text": "Lukijan huomiointi on haastavaa, sillä en voi tietää, mitkä asiat ovat lukijalla jo ennestään tiedossa."}
                ]
            ]
        };
        scope.saTest = saTest;
        ctrl = $controller('ClaimgroupCtrl', {$scope: scope});
    }));

    it('should ...', inject(function () {

        expect(1).toEqual(1);

    }));

});