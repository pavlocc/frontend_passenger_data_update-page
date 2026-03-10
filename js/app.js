const TRANSLATIONS = {
  "en": {
    "pageTitle": "EES Passenger Data Update",
    "importantBadge": "Important",
    "title": "Update passenger data for EES check",
    "intro": "From 10 April 2026 all passengers of non EU-citizens entering European Union for a short stay are required to provide their travel document data and other personal data via transport operator that is used to enter EU. Please complete your details in the form below in order to comply with the data submission requirements. Please be informed that providing accurate and full data is mandatory. Not providing your data or providing false data may result in ticket cancellation and not being allowed to enter European Union.",
    "stepPassengerData": "Passenger data update",
    "stepSubmitted": "Submitted",
    "warningTitle": "Please check the form.",
    "warningText": "Some required fields are missing or contain invalid values. Highlighted fields need your attention.",
    "successTitle": "Data submitted successfully.",
    "successText": "Your passenger data has been recorded. Further editing is disabled.",
    "formTitle": "Passenger details",
    "formSubtitle": "Please review and complete all required information below.",
    "requiredBadge": "Required for EES",
    "firstName": "First name",
    "surname": "Surname",
    "birthDate": "Birth date",
    "citizenship": "Citizenship",
    "documentType": "Travel document type",
    "documentNumber": "Travel document number",
    "issuingCountry": "Travel document issued by country",
    "documentExpiry": "Travel document end of validity",
    "permitType": "Permit type",
    "permitHint": "Leave empty if not applicable.",
    "nameHint": "Use Latin letters A-Z only. Hyphen (-), apostrophe (') and spaces are allowed. Cyrillic, diacritics and other symbols are not accepted.",
        "documentHint": "Use uppercase Latin letters A-Z and digits 0-9 only. No spaces or special symbols are allowed.",
        "mandatoryLegend": "Mandatory fields",
    "submit": "Submit",
    "tripData": "Trip data",
    "departureDateTime": "Departure date and time",
    "route": "Route",
    "ticketNumber": "Ticket number",
    "statusTitle": "Submission status",
    "statusPending": "Waiting for complete passenger data",
    "statusSubmitted": "Passenger data submitted",
    "statusInfo1": "Fill in all required fields.",
    "statusInfo2": "Check that document details are accurate.",
    "statusInfo3": "After successful submission, editing will be disabled.",
    "placeholderSelect": "Select",
    "placeholderFirstName": "Enter first name",
    "placeholderSurname": "Enter surname",
    "placeholderDocumentNumber": "Enter document number",
    "validationRequired": "This field is required.",
    "validationName": "Use Latin letters A-Z only. Hyphen (-), apostrophe (') and spaces are allowed. Cyrillic, diacritics and other symbols are not accepted.",
    "validationDateFormat": "Use format YYYY-MM-DD.",
    "validationCalendarDate": "Enter a real calendar date.",
    "validationBirthYearRange": "Birth year must be between 1916 and the current year.",
    "validationBirthFuture": "Birth date cannot be in the future.",
    "validationBirthDate": "Enter a valid date in YYYY-MM-DD format. The year must be between 1916 and the current year, and the date must not be in the future.",
    "validationDocumentNumber": "Use 3 to 20 uppercase Latin letters or digits, without spaces or special characters.",
    "validationExpiryPast": "The document validity date cannot be earlier than today.",
    "validationExpiryYearMax": "The document validity year cannot be later than 3000.",
    "validationExpiry": "Enter a valid date in YYYY-MM-DD format. The document validity date cannot be earlier than today or later than year 3000.",
    "documentTypes": {
      "": "Select",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Russian travel passport",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Seaman's passport",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Diplomatic passport",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Alien's passport",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Passport of all other countries"
    },
    "permitTypes": {
      "": "Select",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Single / double entry visa",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Multiple entry visa",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "EU / Schengen citizen",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Residence card"
    }
  },
  "et": {
    "pageTitle": "EES reisijaandmete uuendamine",
    "importantBadge": "Oluline",
    "title": "Uuenda reisijaandmeid EES kontrolli jaoks",
    "intro": "Alates 10. aprillist 2026 peavad kõik mitte-EL kodanikud, kes sisenevad Euroopa Liitu lühiajaliseks viibimiseks, esitama oma reisidokumendi andmed ja muud isikuandmed transpordioperaatori kaudu, mida kasutatakse ELi sisenemiseks. Palun täitke allolev vorm, et täita andmete esitamise nõuded. Täpsete ja täielike andmete esitamine on kohustuslik. Andmete esitamata jätmine või valeandmete esitamine võib kaasa tuua pileti tühistamise ja Euroopa Liitu sisenemise keelamise.",
    "stepPassengerData": "Reisijaandmete uuendamine",
    "stepSubmitted": "Esitatud",
    "warningTitle": "Palun kontrollige vormi.",
    "warningText": "Mõned kohustuslikud väljad puuduvad või sisaldavad vigaseid andmeid. Esiletõstetud väljad vajavad tähelepanu.",
    "successTitle": "Andmed on edukalt esitatud.",
    "successText": "Teie reisijaandmed on salvestatud. Edasine muutmine on keelatud.",
    "formTitle": "Reisija andmed",
    "formSubtitle": "Palun kontrollige ja täitke kõik allolevad kohustuslikud väljad.",
    "requiredBadge": "EES jaoks vajalik",
    "firstName": "Eesnimi",
    "surname": "Perekonnanimi",
    "birthDate": "Sünniaeg",
    "citizenship": "Kodakondsus",
    "documentType": "Reisidokumendi tüüp",
    "documentNumber": "Reisidokumendi number",
    "issuingCountry": "Reisidokumendi väljastanud riik",
    "documentExpiry": "Reisidokumendi kehtivuse lõpp",
    "permitType": "Loa tüüp",
    "permitHint": "Jätke tühjaks, kui ei kohaldu.",
    "nameHint": "Kasutage ainult ladina tähti A-Z. Sidekriips (-), ülakoma (') ja tühikud on lubatud. Kirillitsa, diakriitikud ja muud sümbolid ei ole lubatud.",
        "documentHint": "Kasutage ainult suuri ladina tähti A-Z ja numbreid 0-9. Tühikud ja erisümbolid ei ole lubatud.",
    "expiryHint": "Kui dokumendil puudub kehtivuse lõpp, saab backend hiljem kasutada näidiskuupäeva.",
    "mandatoryLegend": "Kohustuslikud väljad",
    "submit": "Esita",
    "tripData": "Reisiandmed",
    "departureDateTime": "Väljumise kuupäev ja kellaaeg",
    "route": "Marsruut",
    "ticketNumber": "Pileti number",
    "statusTitle": "Esitamise olek",
    "statusPending": "Ootab täielikke reisijaandmeid",
    "statusSubmitted": "Reisijaandmed esitatud",
    "statusInfo1": "Täitke kõik kohustuslikud väljad.",
    "statusInfo2": "Kontrollige, et dokumendi andmed oleksid õiged.",
    "statusInfo3": "Pärast edukat esitamist ei saa andmeid enam muuta.",
    "placeholderSelect": "Vali",
    "placeholderFirstName": "Sisesta eesnimi",
    "placeholderSurname": "Sisesta perekonnanimi",
    "placeholderDocumentNumber": "Sisesta dokumendi number",
    "validationRequired": "See väli on kohustuslik.",
    "validationName": "Kasutage ainult ladina tähti A-Z. Sidekriips (-), ülakoma (') ja tühikud on lubatud. Kirillitsa, diakriitikud ja muud sümbolid ei ole lubatud.",
    "validationDateFormat": "Kasutage vormingut YYYY-MM-DD.",
    "validationCalendarDate": "Sisestage olemasolev kalendrikuupäev.",
    "validationBirthYearRange": "Sünniaasta peab olema vahemikus 1916 kuni käesolev aasta.",
    "validationBirthFuture": "Sünnikuupäev ei tohi olla tulevikus.",
    "validationBirthDate": "Sisestage korrektne kuupäev vormingus YYYY-MM-DD. Aasta peab olema vahemikus 1916 kuni käesoleva aastani ning kuupäev ei tohi olla tulevikus.",
    "validationDocumentNumber": "Kasutage 3 kuni 20 suurt ladina tähte või numbrit ilma tühikute ja erimärkideta.",
    "validationExpiryPast": "Dokumendi kehtivuse kuupäev ei tohi olla varasem kui tänane kuupäev.",
    "validationExpiryYearMax": "Dokumendi kehtivuse aasta ei tohi olla hilisem kui 3000.",
    "validationExpiry": "Sisestage korrektne kuupäev vormingus YYYY-MM-DD. Dokumendi kehtivuse kuupäev ei tohi olla varasem kui tänane kuupäev ega hilisem kui aasta 3000.",
    "documentTypes": {
      "": "Vali",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Venemaa reisipass",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Meremehe pass",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Diplomaatiline pass",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Välismaalase pass",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Kõigi teiste riikide pass"
    },
    "permitTypes": {
      "": "Vali",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Ühe- või kahekordne viisa",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Mitmekordse sisenemise viisa",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "EL või Schengeni viisaruumi kodanik",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Elamisluba"
    }
  },
  "ru": {
    "pageTitle": "Обновление данных пассажира для EES",
    "importantBadge": "Важно",
    "title": "Обновите данные пассажира для проверки EES",
    "intro": "С 10 апреля 2026 года все пассажиры, не являющиеся гражданами ЕС и въезжающие в Европейский Союз для краткосрочного пребывания, обязаны предоставить данные своего проездного документа и другие персональные данные через перевозчика, используемого для въезда в ЕС. Пожалуйста, заполните форму ниже, чтобы выполнить требования по предоставлению данных. Обратите внимание, что предоставление точных и полных данных является обязательным. Непредоставление данных или предоставление ложных данных может привести к аннулированию билета и отказу во въезде в Европейский Союз.",
    "stepPassengerData": "Обновление данных пассажира",
    "stepSubmitted": "Отправлено",
    "warningTitle": "Пожалуйста, проверьте форму.",
    "warningText": "Некоторые обязательные поля не заполнены или содержат неверные данные. Поля с подсветкой требуют внимания.",
    "successTitle": "Данные успешно отправлены.",
    "successText": "Данные пассажира сохранены. Дальнейшее редактирование недоступно.",
    "formTitle": "Данные пассажира",
    "formSubtitle": "Пожалуйста, проверьте и заполните все обязательные поля ниже.",
    "requiredBadge": "Требуется для EES",
    "firstName": "Имя",
    "surname": "Фамилия",
    "birthDate": "Дата рождения",
    "citizenship": "Гражданство",
    "documentType": "Тип проездного документа",
    "documentNumber": "Номер проездного документа",
    "issuingCountry": "Страна выдачи документа",
    "documentExpiry": "Срок действия документа",
    "permitType": "Тип разрешения",
    "permitHint": "Оставьте пустым, если не применяется.",
    "nameHint": "Используйте только латинские буквы A-Z. Допускаются дефис (-), апостроф (') и пробелы. Кириллица, диакритика и другие символы не допускаются.",
        "documentHint": "Используйте только заглавные латинские буквы A-Z и цифры 0-9. Пробелы и спецсимволы не допускаются.",
        "mandatoryLegend": "Обязательные поля",
    "submit": "Отправить",
    "tripData": "Данные поездки",
    "departureDateTime": "Дата и время отправления",
    "route": "Маршрут",
    "ticketNumber": "Номер билета",
    "statusTitle": "Статус отправки",
    "statusPending": "Ожидаются полные данные пассажира",
    "statusSubmitted": "Данные пассажира отправлены",
    "statusInfo1": "Заполните все обязательные поля.",
    "statusInfo2": "Проверьте правильность данных документа.",
    "statusInfo3": "После успешной отправки редактирование будет недоступно.",
    "placeholderSelect": "Выберите",
    "placeholderFirstName": "Введите имя",
    "placeholderSurname": "Введите фамилию",
    "placeholderDocumentNumber": "Введите номер документа",
    "validationRequired": "Это поле обязательно.",
    "validationName": "Используйте только латинские буквы A-Z. Допускаются дефис (-), апостроф (') и пробелы. Кириллица, диакритика и другие символы не допускаются.",
    "validationDateFormat": "Используйте формат YYYY-MM-DD.",
    "validationCalendarDate": "Введите реальную календарную дату.",
    "validationBirthYearRange": "Год рождения должен быть в диапазоне от 1916 до текущего года.",
    "validationBirthFuture": "Дата рождения не может быть в будущем.",
    "validationBirthDate": "Введите корректную дату в формате YYYY-MM-DD. Год рождения должен быть от 1916 до текущего года, а дата не может быть в будущем.",
    "validationDocumentNumber": "Используйте от 3 до 20 заглавных латинских букв или цифр без пробелов и спецсимволов.",
    "validationExpiryPast": "Срок действия документа не может быть меньше текущей даты.",
    "validationExpiryYearMax": "Год срока действия документа не может быть больше 3000.",
    "validationExpiry": "Введите корректную дату в формате YYYY-MM-DD. Срок действия документа не может быть меньше текущей даты и больше 3000 года.",
    "documentTypes": {
      "": "Выберите",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Российский заграничный паспорт",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Паспорт моряка",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Дипломатический паспорт",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Паспорт лица без гражданства",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Паспорт всех других стран"
    },
    "permitTypes": {
      "": "Выберите",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Однократная / двукратная виза",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Многократная виза",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "Гражданин ЕС / Шенгенской зоны",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Вид на жительство"
    }
  },
  "lv": {
    "pageTitle": "EES pasažiera datu atjaunināšana",
    "importantBadge": "Svarīgi",
    "title": "Atjauniniet pasažiera datus EES pārbaudei",
    "intro": "No 2026. gada 10. aprīļa visiem pasažieriem, kuri nav ES pilsoņi un ieceļo Eiropas Savienībā īstermiņa uzturēšanās nolūkā, ir jāiesniedz sava ceļošanas dokumenta dati un citi personas dati ar pārvadātāja starpniecību, kuru izmanto ieceļošanai ES. Lūdzu, aizpildiet zemāk esošo veidlapu, lai izpildītu datu iesniegšanas prasības. Lūdzu, ņemiet vērā, ka precīzu un pilnīgu datu sniegšana ir obligāta. Datu nesniegšana vai nepatiesu datu sniegšana var izraisīt biļetes anulēšanu un atteikumu ieceļot Eiropas Savienībā.",
    "stepPassengerData": "Pasažiera datu atjaunināšana",
    "stepSubmitted": "Iesniegts",
    "warningTitle": "Lūdzu, pārbaudiet veidlapu.",
    "warningText": "Daži obligātie lauki nav aizpildīti vai satur nederīgas vērtības. Izceltajiem laukiem nepieciešama uzmanība.",
    "successTitle": "Dati veiksmīgi iesniegti.",
    "successText": "Jūsu pasažiera dati ir saglabāti. Turpmāka rediģēšana ir atspējota.",
    "formTitle": "Pasažiera dati",
    "formSubtitle": "Lūdzu, pārskatiet un aizpildiet visus zemāk norādītos obligātos laukus.",
    "requiredBadge": "Nepieciešams EES",
    "firstName": "Vārds",
    "surname": "Uzvārds",
    "birthDate": "Dzimšanas datums",
    "citizenship": "Pilsonība",
    "documentType": "Ceļošanas dokumenta veids",
    "documentNumber": "Ceļošanas dokumenta numurs",
    "issuingCountry": "Valsts, kas izdevusi dokumentu",
    "documentExpiry": "Dokumenta derīguma termiņa beigas",
    "permitType": "Atļaujas veids",
    "permitHint": "Atstājiet tukšu, ja nav piemērojams.",
    "nameHint": "Izmantojiet tikai latīņu burtus A-Z. Atļauts defiss (-), apostrofs (') un atstarpes. Kirilica, diakritiskās zīmes un citi simboli nav atļauti.",
        "documentHint": "Izmantojiet tikai lielos latīņu burtus A-Z un ciparus 0-9. Atstarpes un speciālās zīmes nav atļautas.",
    "birthDateHint": "Formāts: YYYY-MM-DD. Gadam jābūt no 1916 līdz pašreizējam gadam.",
    "documentExpiryHint": "Formāts: YYYY-MM-DD. Datums nedrīkst būt agrāks par šodienu vai vēlāks par 3000. gadu.",
        "mandatoryLegend": "Obligātie lauki",
    "submit": "Iesniegt",
    "tripData": "Ceļojuma dati",
    "departureDateTime": "Izbraukšanas datums un laiks",
    "route": "Maršruts",
    "ticketNumber": "Biļetes numurs",
    "statusTitle": "Iesniegšanas statuss",
    "statusPending": "Gaida pilnus pasažiera datus",
    "statusSubmitted": "Pasažiera dati iesniegti",
    "statusInfo1": "Aizpildiet visus obligātos laukus.",
    "statusInfo2": "Pārbaudiet, vai dokumenta dati ir pareizi.",
    "statusInfo3": "Pēc veiksmīgas iesniegšanas rediģēšana tiks atspējota.",
    "placeholderSelect": "Izvēlieties",
    "placeholderFirstName": "Ievadiet vārdu",
    "placeholderSurname": "Ievadiet uzvārdu",
    "placeholderDocumentNumber": "Ievadiet dokumenta numuru",
    "validationRequired": "Šis lauks ir obligāts.",
    "validationName": "Izmantojiet tikai latīņu burtus A-Z. Atļauts defiss (-), apostrofs (') un atstarpes. Kirilica, diakritiskās zīmes un citi simboli nav atļauti.",
    "validationDateFormat": "Izmantojiet formātu YYYY-MM-DD.",
    "validationCalendarDate": "Ievadiet reālu kalendāra datumu.",
    "validationBirthYearRange": "Dzimšanas gadam jābūt no 1916 līdz pašreizējam gadam.",
    "validationBirthFuture": "Dzimšanas datums nedrīkst būt nākotnē.",
    "validationBirthDate": "Ievadiet derīgu datumu formātā YYYY-MM-DD. Dzimšanas gadam jābūt no 1916 līdz pašreizējam gadam, un datums nedrīkst būt nākotnē.",
    "validationDocumentNumber": "Izmantojiet 3 līdz 20 lielos latīņu burtus vai ciparus bez atstarpēm un speciālajām zīmēm.",
    "validationExpiryPast": "Dokumenta derīguma termiņš nedrīkst būt agrāks par šodienu.",
    "validationExpiryYearMax": "Dokumenta derīguma gada vērtība nedrīkst būt lielāka par 3000.",
    "validationExpiry": "Ievadiet derīgu datumu formātā YYYY-MM-DD. Dokumenta derīguma termiņš nedrīkst būt agrāks par šodienu vai vēlāks par 3000. gadu.",
    "documentTypes": {
      "": "Izvēlieties",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Krievijas ceļošanas pase",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Jūrnieka pase",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Diplomātiskā pase",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Bezvalstnieka pase",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Visu citu valstu pase"
    },
    "permitTypes": {
      "": "Izvēlieties",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Vienreizējā / divreizējā ieceļošanas vīza",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Daudzkārtējā ieceļošanas vīza",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "ES / Šengenas zonas pilsonis",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Uzturēšanās atļauja"
    }
  },
  "lt": {
    "pageTitle": "EES keleivio duomenų atnaujinimas",
    "importantBadge": "Svarbu",
    "title": "Atnaujinkite keleivio duomenis EES patikrai",
    "intro": "Nuo 2026 m. balandžio 10 d. visi keleiviai, kurie nėra ES piliečiai ir atvyksta į Europos Sąjungą trumpalaikiam buvimui, privalo pateikti savo kelionės dokumento duomenis ir kitus asmens duomenis per vežėją, naudojamą atvykimui į ES. Prašome užpildyti toliau pateiktą formą, kad įvykdytumėte duomenų pateikimo reikalavimus. Atkreipiame dėmesį, kad tikslių ir išsamių duomenų pateikimas yra privalomas. Nepateikus duomenų arba pateikus neteisingus duomenis, bilietas gali būti panaikintas ir jums gali būti neleista atvykti į Europos Sąjungą.",
    "stepPassengerData": "Keleivio duomenų atnaujinimas",
    "stepSubmitted": "Pateikta",
    "warningTitle": "Patikrinkite formą.",
    "warningText": "Kai kurie privalomi laukai neužpildyti arba juose yra neteisingų reikšmių. Paryškintiems laukams reikia dėmesio.",
    "successTitle": "Duomenys sėkmingai pateikti.",
    "successText": "Jūsų keleivio duomenys išsaugoti. Tolimesnis redagavimas išjungtas.",
    "formTitle": "Keleivio duomenys",
    "formSubtitle": "Peržiūrėkite ir užpildykite visus toliau nurodytus privalomus laukus.",
    "requiredBadge": "Reikalinga EES",
    "firstName": "Vardas",
    "surname": "Pavardė",
    "birthDate": "Gimimo data",
    "citizenship": "Pilietybė",
    "documentType": "Kelionės dokumento tipas",
    "documentNumber": "Kelionės dokumento numeris",
    "issuingCountry": "Dokumentą išdavusi šalis",
    "documentExpiry": "Dokumento galiojimo pabaiga",
    "permitType": "Leidimo tipas",
    "permitHint": "Palikite tuščią, jei netaikoma.",
    "nameHint": "Naudokite tik lotyniškas raides A-Z. Leidžiamas brūkšnelis (-), apostrofas (') ir tarpai. Kirilica, diakritiniai ženklai ir kiti simboliai neleidžiami.",
        "documentHint": "Naudokite tik didžiąsias lotyniškas raides A-Z ir skaitmenis 0-9. Tarpai ir specialieji simboliai neleidžiami.",
    "birthDateHint": "Formatas: YYYY-MM-DD. Metai turi būti nuo 1916 iki einamųjų metų.",
    "documentExpiryHint": "Formatas: YYYY-MM-DD. Data negali būti ankstesnė nei šiandien ir vėlesnė nei 3000 metai.",
        "mandatoryLegend": "Privalomi laukai",
    "submit": "Pateikti",
    "tripData": "Kelionės duomenys",
    "departureDateTime": "Išvykimo data ir laikas",
    "route": "Maršrutas",
    "ticketNumber": "Bilieto numeris",
    "statusTitle": "Pateikimo būsena",
    "statusPending": "Laukiama pilnų keleivio duomenų",
    "statusSubmitted": "Keleivio duomenys pateikti",
    "statusInfo1": "Užpildykite visus privalomus laukus.",
    "statusInfo2": "Patikrinkite, ar dokumento duomenys teisingi.",
    "statusInfo3": "Sėkmingai pateikus redagavimas bus išjungtas.",
    "placeholderSelect": "Pasirinkite",
    "placeholderFirstName": "Įveskite vardą",
    "placeholderSurname": "Įveskite pavardę",
    "placeholderDocumentNumber": "Įveskite dokumento numerį",
    "validationRequired": "Šis laukas privalomas.",
    "validationName": "Naudokite tik lotyniškas raides A-Z. Leidžiamas brūkšnelis (-), apostrofas (') ir tarpai. Kirilica, diakritiniai ženklai ir kiti simboliai neleidžiami.",
    "validationDateFormat": "Naudokite formatą YYYY-MM-DD.",
    "validationCalendarDate": "Įveskite realią kalendorinę datą.",
    "validationBirthYearRange": "Gimimo metai turi būti nuo 1916 iki einamųjų metų.",
    "validationBirthFuture": "Gimimo data negali būti ateityje.",
    "validationBirthDate": "Įveskite teisingą datą formatu YYYY-MM-DD. Gimimo metai turi būti nuo 1916 iki einamųjų metų, o data negali būti ateityje.",
    "validationDocumentNumber": "Naudokite nuo 3 iki 20 didžiųjų lotyniškų raidžių arba skaitmenų be tarpų ir specialiųjų simbolių.",
    "validationExpiryPast": "Dokumento galiojimo data negali būti ankstesnė nei šiandien.",
    "validationExpiryYearMax": "Dokumento galiojimo metų reikšmė negali būti didesnė nei 3000.",
    "validationExpiry": "Įveskite teisingą datą formatu YYYY-MM-DD. Dokumento galiojimo data negali būti ankstesnė nei šiandien ir vėlesnė nei 3000 metai.",
    "documentTypes": {
      "": "Pasirinkite",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Rusijos kelionės pasas",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Jūrininko pasas",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Diplomatinis pasas",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Pilietybės neturinčio asmens pasas",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Visų kitų šalių pasas"
    },
    "permitTypes": {
      "": "Pasirinkite",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Vienkartinė / dukartinė viza",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Daugkartinė viza",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "ES / Šengeno erdvės pilietis",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Leidimas gyventi"
    }
  },
  "pl": {
    "pageTitle": "Aktualizacja danych pasażera EES",
    "importantBadge": "Ważne",
    "title": "Zaktualizuj dane pasażera do kontroli EES",
    "intro": "Od 10 kwietnia 2026 r. wszyscy pasażerowie niebędący obywatelami UE, wjeżdżający do Unii Europejskiej na krótki pobyt, muszą przekazać dane dokumentu podróży i inne dane osobowe za pośrednictwem przewoźnika wykorzystywanego do wjazdu do UE. Prosimy o uzupełnienie poniższego formularza, aby spełnić wymagania dotyczące przekazywania danych. Przekazanie dokładnych i kompletnych danych jest obowiązkowe. Nieprzekazanie danych lub podanie nieprawdziwych danych może skutkować anulowaniem biletu i odmową wjazdu do Unii Europejskiej.",
    "stepPassengerData": "Aktualizacja danych pasażera",
    "stepSubmitted": "Wysłano",
    "warningTitle": "Sprawdź formularz.",
    "warningText": "Niektóre pola obowiązkowe są puste lub zawierają nieprawidłowe wartości. Podświetlone pola wymagają uwagi.",
    "successTitle": "Dane zostały pomyślnie wysłane.",
    "successText": "Dane pasażera zostały zapisane. Dalsza edycja jest zablokowana.",
    "formTitle": "Dane pasażera",
    "formSubtitle": "Sprawdź i uzupełnij wszystkie wymagane informacje poniżej.",
    "requiredBadge": "Wymagane dla EES",
    "firstName": "Imię",
    "surname": "Nazwisko",
    "birthDate": "Data urodzenia",
    "citizenship": "Obywatelstwo",
    "documentType": "Typ dokumentu podróży",
    "documentNumber": "Numer dokumentu podróży",
    "issuingCountry": "Kraj wydania dokumentu",
    "documentExpiry": "Data ważności dokumentu",
    "permitType": "Rodzaj pozwolenia",
    "permitHint": "Pozostaw puste, jeśli nie dotyczy.",
    "nameHint": "Używaj tylko liter łacińskich A-Z. Dozwolone są myślnik (-), apostrof (') i spacje. Cyrylica, znaki diakrytyczne i inne symbole są niedozwolone.",
        "documentHint": "Używaj tylko wielkich liter łacińskich A-Z i cyfr 0-9. Spacje i znaki specjalne są niedozwolone.",
    "birthDateHint": "Format: YYYY-MM-DD. Rok musi mieścić się między 1916 a bieżącym rokiem.",
    "documentExpiryHint": "Format: YYYY-MM-DD. Data nie może być wcześniejsza niż dziś ani późniejsza niż rok 3000.",
    "expiryHint": "Jeśli dokument nie ma daty ważności, backend może później użyć daty zastępczej.",
    "mandatoryLegend": "Pola obowiązkowe",
    "submit": "Wyślij",
    "tripData": "Dane podróży",
    "departureDateTime": "Data i godzina odjazdu",
    "route": "Trasa",
    "ticketNumber": "Numer biletu",
    "statusTitle": "Status wysłania",
    "statusPending": "Oczekiwanie na komplet danych pasażera",
    "statusSubmitted": "Dane pasażera wysłane",
    "statusInfo1": "Uzupełnij wszystkie pola obowiązkowe.",
    "statusInfo2": "Sprawdź poprawność danych dokumentu.",
    "statusInfo3": "Po pomyślnym wysłaniu edycja zostanie zablokowana.",
    "placeholderSelect": "Wybierz",
    "placeholderFirstName": "Wpisz imię",
    "placeholderSurname": "Wpisz nazwisko",
    "placeholderDocumentNumber": "Wpisz numer dokumentu",
    "validationRequired": "To pole jest wymagane.",
    "validationName": "Używaj tylko liter łacińskich A-Z. Dozwolone są myślnik (-), apostrof (') i spacje. Cyrylica, znaki diakrytyczne i inne symbole są niedozwolone.",
    "validationDateFormat": "Użyj formatu YYYY-MM-DD.",
    "validationCalendarDate": "Wprowadź prawidłową datę kalendarzową.",
    "validationBirthYearRange": "Rok urodzenia musi mieścić się między 1916 a bieżącym rokiem.",
    "validationBirthFuture": "Data urodzenia nie może być z przyszłości.",
    "validationBirthDate": "Wprowadź prawidłową datę w formacie YYYY-MM-DD. Rok urodzenia musi mieścić się między 1916 a bieżącym rokiem, a data nie może być z przyszłości.",
    "validationDocumentNumber": "Używaj od 3 do 20 wielkich liter łacińskich lub cyfr, bez spacji i znaków specjalnych.",
    "validationExpiryPast": "Data ważności dokumentu nie może być wcześniejsza niż dziś.",
    "validationExpiryYearMax": "Rok ważności dokumentu nie może być późniejszy niż 3000.",
    "validationExpiry": "Wprowadź prawidłową datę w formacie YYYY-MM-DD. Data ważności dokumentu nie może być wcześniejsza niż dziś ani późniejsza niż rok 3000.",
    "documentTypes": {
      "": "Wybierz",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Rosyjski paszport zagraniczny",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Paszport marynarza",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Paszport dyplomatyczny",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Dokument podróży dla bezpaństwowca",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Paszport wszystkich pozostałych krajów"
    },
    "permitTypes": {
      "": "Wybierz",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Wiza jednokrotnego / dwukrotnego wjazdu",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Wiza wielokrotnego wjazdu",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "Obywatel UE / strefy Schengen",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Karta pobytu"
    }
  }
,  "fi": {
    "pageTitle": "EES-matkustajatietojen päivitys",
    "importantBadge": "Tärkeää",
    "title": "Päivitä matkustajatiedot EES-tarkistusta varten",
    "intro": "10. huhtikuuta 2026 alkaen kaikkien Euroopan unioniin lyhytaikaista oleskelua varten saapuvien muiden kuin EU-kansalaisten on toimitettava matkustusasiakirjansa tiedot ja muut henkilötiedot EU:hun saapumiseen käytettävän kuljetusoperaattorin kautta. Täytä alla oleva lomake tietojen toimittamisvaatimusten täyttämiseksi. Huomioithan, että oikeiden ja täydellisten tietojen antaminen on pakollista. Tietojen antamatta jättäminen tai virheellisten tietojen antaminen voi johtaa lipun peruuttamiseen ja siihen, ettei Euroopan unioniin pääsyä sallita.",
    "stepPassengerData": "Matkustajatietojen päivitys",
    "stepSubmitted": "Lähetetty",
    "warningTitle": "Tarkista lomake.",
    "warningText": "Jotkin pakolliset kentät puuttuvat tai sisältävät virheellisiä arvoja. Korostetut kentät vaativat huomiotasi.",
    "successTitle": "Tiedot lähetetty onnistuneesti.",
    "successText": "Matkustajatietosi on tallennettu. Muokkaus on poistettu käytöstä.",
    "formTitle": "Matkustajan tiedot",
    "formSubtitle": "Tarkista ja täydennä kaikki alla olevat pakolliset tiedot.",
    "requiredBadge": "Vaaditaan EES:ää varten",
    "firstName": "Etunimi",
    "surname": "Sukunimi",
    "birthDate": "Syntymäaika",
    "citizenship": "Kansalaisuus",
    "documentType": "Matkustusasiakirjan tyyppi",
    "documentNumber": "Matkustusasiakirjan numero",
    "issuingCountry": "Matkustusasiakirjan myöntänyt maa",
    "documentExpiry": "Matkustusasiakirjan voimassaolon päättymispäivä",
    "permitType": "Luvan tyyppi",
    "permitHint": "Jätä tyhjäksi, jos ei sovellu.",
    "nameHint": "Käytä vain latinalaisia kirjaimia A-Z. Yhdysmerkki (-), heittomerkki (') ja välilyönnit ovat sallittuja. Kyrilliset kirjaimet, diakriittiset merkit ja muut symbolit eivät ole sallittuja.",
    "documentHint": "Käytä vain isoja latinalaisia kirjaimia A-Z ja numeroita 0-9. Välilyönnit ja erikoismerkit eivät ole sallittuja.",
    "mandatoryLegend": "Pakolliset kentät",
    "submit": "Lähetä",
    "tripData": "Matkan tiedot",
    "departureDateTime": "Lähtöpäivä ja -aika",
    "route": "Reitti",
    "ticketNumber": "Lipun numero",
    "statusTitle": "Lähetyksen tila",
    "statusPending": "Odottaa täydellisiä matkustajatietoja",
    "statusSubmitted": "Matkustajatiedot lähetetty",
    "statusInfo1": "Täytä kaikki pakolliset kentät.",
    "statusInfo2": "Tarkista, että asiakirjan tiedot ovat oikein.",
    "statusInfo3": "Onnistuneen lähetyksen jälkeen muokkaus poistetaan käytöstä.",
    "placeholderSelect": "Valitse",
    "placeholderFirstName": "Syötä etunimi",
    "placeholderSurname": "Syötä sukunimi",
    "placeholderDocumentNumber": "Syötä asiakirjan numero",
    "validationRequired": "Tämä kenttä on pakollinen.",
    "validationName": "Käytä vain latinalaisia kirjaimia A-Z. Yhdysmerkki (-), heittomerkki (') ja välilyönnit ovat sallittuja. Kyrilliset kirjaimet, diakriittiset merkit ja muut symbolit eivät ole sallittuja.",
    "validationDateFormat": "Käytä muotoa YYYY-MM-DD.",
    "validationCalendarDate": "Syötä oikea kalenteripäivä.",
    "validationBirthYearRange": "Syntymävuoden on oltava vuosien 1916 ja kuluvan vuoden välillä.",
    "validationBirthFuture": "Syntymäaika ei voi olla tulevaisuudessa.",
    "validationBirthDate": "Syötä oikea päivämäärä muodossa YYYY-MM-DD. Syntymävuoden on oltava vuosien 1916 ja kuluvan vuoden välillä, eikä päivämäärä voi olla tulevaisuudessa.",
    "validationDocumentNumber": "Käytä 3–20 isoa latinalaista kirjainta tai numeroa ilman välilyöntejä tai erikoismerkkejä.",
    "validationExpiryPast": "Asiakirjan voimassaolon päättymispäivä ei voi olla aikaisempi kuin tänään.",
    "validationExpiryYearMax": "Asiakirjan voimassaolon päättymisvuosi ei voi olla myöhempi kuin 3000.",
    "validationExpiry": "Syötä oikea päivämäärä muodossa YYYY-MM-DD. Asiakirjan voimassaolon päättymispäivä ei voi olla aikaisempi kuin tänään eikä myöhempi kuin vuosi 3000.",
    "documentTypes": {
      "": "Valitse",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Venäjän matkustuspassi",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Merimiespassi",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Diplomaattipassi",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Muukalaispassi",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Kaikkien muiden maiden passi"
    },
    "permitTypes": {
      "": "Valitse",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Kerta- / kaksikertaviisumi",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Monikertaviisumi",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "EU- / Schengen-alueen kansalainen",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Oleskelulupakortti"
    }
  },
  "uk": {
    "pageTitle": "Оновлення даних пасажира для EES",
    "importantBadge": "Важливо",
    "title": "Оновіть дані пасажира для перевірки EES",
    "intro": "З 10 квітня 2026 року всі пасажири, які не є громадянами ЄС і в’їжджають до Європейського Союзу для короткострокового перебування, зобов’язані надати дані свого проїзного документа та інші персональні дані через перевізника, що використовується для в’їзду до ЄС. Будь ласка, заповніть форму нижче, щоб виконати вимоги щодо подання даних. Зверніть увагу, що надання точних і повних даних є обов’язковим. Ненадання даних або надання неправдивих даних може призвести до анулювання квитка та відмови у в’їзді до Європейського Союзу.",
    "stepPassengerData": "Оновлення даних пасажира",
    "stepSubmitted": "Надіслано",
    "warningTitle": "Будь ласка, перевірте форму.",
    "warningText": "Деякі обов’язкові поля не заповнені або містять некоректні значення. Поля з підсвічуванням потребують вашої уваги.",
    "successTitle": "Дані успішно надіслано.",
    "successText": "Дані пасажира збережено. Подальше редагування недоступне.",
    "formTitle": "Дані пасажира",
    "formSubtitle": "Будь ласка, перевірте та заповніть усі обов’язкові поля нижче.",
    "requiredBadge": "Потрібно для EES",
    "firstName": "Ім’я",
    "surname": "Прізвище",
    "birthDate": "Дата народження",
    "citizenship": "Громадянство",
    "documentType": "Тип проїзного документа",
    "documentNumber": "Номер проїзного документа",
    "issuingCountry": "Країна видачі документа",
    "documentExpiry": "Строк дії документа",
    "permitType": "Тип дозволу",
    "permitHint": "Залиште порожнім, якщо не застосовується.",
    "nameHint": "Використовуйте лише латинські літери A-Z. Дозволені дефіс (-), апостроф (') та пробіли. Кирилиця, діакритичні знаки та інші символи не допускаються.",
    "documentHint": "Використовуйте лише великі латинські літери A-Z та цифри 0-9. Пробіли й спеціальні символи не допускаються.",
    "mandatoryLegend": "Обов’язкові поля",
    "submit": "Надіслати",
    "tripData": "Дані поїздки",
    "departureDateTime": "Дата та час відправлення",
    "route": "Маршрут",
    "ticketNumber": "Номер квитка",
    "statusTitle": "Статус надсилання",
    "statusPending": "Очікуються повні дані пасажира",
    "statusSubmitted": "Дані пасажира надіслано",
    "statusInfo1": "Заповніть усі обов’язкові поля.",
    "statusInfo2": "Перевірте правильність даних документа.",
    "statusInfo3": "Після успішного надсилання редагування буде недоступне.",
    "placeholderSelect": "Оберіть",
    "placeholderFirstName": "Введіть ім’я",
    "placeholderSurname": "Введіть прізвище",
    "placeholderDocumentNumber": "Введіть номер документа",
    "validationRequired": "Це поле є обов’язковим.",
    "validationName": "Використовуйте лише латинські літери A-Z. Дозволені дефіс (-), апостроф (') та пробіли. Кирилиця, діакритичні знаки та інші символи не допускаються.",
    "validationDateFormat": "Використовуйте формат YYYY-MM-DD.",
    "validationCalendarDate": "Введіть реальну календарну дату.",
    "validationBirthYearRange": "Рік народження має бути в межах від 1916 до поточного року.",
    "validationBirthFuture": "Дата народження не може бути в майбутньому.",
    "validationBirthDate": "Введіть коректну дату у форматі YYYY-MM-DD. Рік народження має бути в межах від 1916 до поточного року, а дата не може бути в майбутньому.",
    "validationDocumentNumber": "Використовуйте від 3 до 20 великих латинських літер або цифр без пробілів і спеціальних символів.",
    "validationExpiryPast": "Строк дії документа не може бути меншим за поточну дату.",
    "validationExpiryYearMax": "Рік закінчення строку дії документа не може бути більшим за 3000.",
    "validationExpiry": "Введіть коректну дату у форматі YYYY-MM-DD. Строк дії документа не може бути меншим за поточну дату та більшим за 3000 рік.",
    "documentTypes": {
      "": "Оберіть",
      "DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT": "Російський закордонний паспорт",
      "DOCUMENT_TYPE.SAILOR_PASSPORT": "Паспорт моряка",
      "DOCUMENT_TYPE.DIPLOMATIC_PASSPORT": "Дипломатичний паспорт",
      "DOCUMENT_TYPE.GRAY_PASSPORT": "Паспорт особи без громадянства",
      "DOCUMENT_TYPE.FOREIGN_PASSPORT": "Паспорт усіх інших країн"
    },
    "permitTypes": {
      "": "Оберіть",
      "ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA": "Одноразова / дворазова віза",
      "ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA": "Багаторазова віза",
      "ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN": "Громадянин ЄС / Шенгенської зони",
      "ENTRY_PERMIT_TYPE.RESIDENCE_CARD": "Посвідка на проживання"
    }
  }
};

const COUNTRY_DATA = [{"alpha2": "AD", "alpha3": "AND"}, {"alpha2": "AE", "alpha3": "ARE"}, {"alpha2": "AF", "alpha3": "AFG"}, {"alpha2": "AG", "alpha3": "ATG"}, {"alpha2": "AI", "alpha3": "AIA"}, {"alpha2": "AL", "alpha3": "ALB"}, {"alpha2": "AM", "alpha3": "ARM"}, {"alpha2": "AO", "alpha3": "AGO"}, {"alpha2": "AQ", "alpha3": "ATA"}, {"alpha2": "AR", "alpha3": "ARG"}, {"alpha2": "AS", "alpha3": "ASM"}, {"alpha2": "AT", "alpha3": "AUT"}, {"alpha2": "AU", "alpha3": "AUS"}, {"alpha2": "AW", "alpha3": "ABW"}, {"alpha2": "AX", "alpha3": "ALA"}, {"alpha2": "AZ", "alpha3": "AZE"}, {"alpha2": "BA", "alpha3": "BIH"}, {"alpha2": "BB", "alpha3": "BRB"}, {"alpha2": "BD", "alpha3": "BGD"}, {"alpha2": "BE", "alpha3": "BEL"}, {"alpha2": "BF", "alpha3": "BFA"}, {"alpha2": "BG", "alpha3": "BGR"}, {"alpha2": "BH", "alpha3": "BHR"}, {"alpha2": "BI", "alpha3": "BDI"}, {"alpha2": "BJ", "alpha3": "BEN"}, {"alpha2": "BL", "alpha3": "BLM"}, {"alpha2": "BM", "alpha3": "BMU"}, {"alpha2": "BN", "alpha3": "BRN"}, {"alpha2": "BO", "alpha3": "BOL"}, {"alpha2": "BQ", "alpha3": "BES"}, {"alpha2": "BR", "alpha3": "BRA"}, {"alpha2": "BS", "alpha3": "BHS"}, {"alpha2": "BT", "alpha3": "BTN"}, {"alpha2": "BV", "alpha3": "BVT"}, {"alpha2": "BW", "alpha3": "BWA"}, {"alpha2": "BY", "alpha3": "BLR"}, {"alpha2": "BZ", "alpha3": "BLZ"}, {"alpha2": "CA", "alpha3": "CAN"}, {"alpha2": "CC", "alpha3": "CCK"}, {"alpha2": "CD", "alpha3": "COD"}, {"alpha2": "CF", "alpha3": "CAF"}, {"alpha2": "CG", "alpha3": "COG"}, {"alpha2": "CH", "alpha3": "CHE"}, {"alpha2": "CI", "alpha3": "CIV"}, {"alpha2": "CK", "alpha3": "COK"}, {"alpha2": "CL", "alpha3": "CHL"}, {"alpha2": "CM", "alpha3": "CMR"}, {"alpha2": "CN", "alpha3": "CHN"}, {"alpha2": "CO", "alpha3": "COL"}, {"alpha2": "CR", "alpha3": "CRI"}, {"alpha2": "CU", "alpha3": "CUB"}, {"alpha2": "CV", "alpha3": "CPV"}, {"alpha2": "CW", "alpha3": "CUW"}, {"alpha2": "CX", "alpha3": "CXR"}, {"alpha2": "CY", "alpha3": "CYP"}, {"alpha2": "CZ", "alpha3": "CZE"}, {"alpha2": "DE", "alpha3": "DEU"}, {"alpha2": "DJ", "alpha3": "DJI"}, {"alpha2": "DK", "alpha3": "DNK"}, {"alpha2": "DM", "alpha3": "DMA"}, {"alpha2": "DO", "alpha3": "DOM"}, {"alpha2": "DZ", "alpha3": "DZA"}, {"alpha2": "EC", "alpha3": "ECU"}, {"alpha2": "EE", "alpha3": "EST"}, {"alpha2": "EG", "alpha3": "EGY"}, {"alpha2": "EH", "alpha3": "ESH"}, {"alpha2": "ER", "alpha3": "ERI"}, {"alpha2": "ES", "alpha3": "ESP"}, {"alpha2": "ET", "alpha3": "ETH"}, {"alpha2": "FI", "alpha3": "FIN"}, {"alpha2": "FJ", "alpha3": "FJI"}, {"alpha2": "FK", "alpha3": "FLK"}, {"alpha2": "FM", "alpha3": "FSM"}, {"alpha2": "FO", "alpha3": "FRO"}, {"alpha2": "FR", "alpha3": "FRA"}, {"alpha2": "GA", "alpha3": "GAB"}, {"alpha2": "GB", "alpha3": "GBR"}, {"alpha2": "GD", "alpha3": "GRD"}, {"alpha2": "GE", "alpha3": "GEO"}, {"alpha2": "GF", "alpha3": "GUF"}, {"alpha2": "GG", "alpha3": "GGY"}, {"alpha2": "GH", "alpha3": "GHA"}, {"alpha2": "GI", "alpha3": "GIB"}, {"alpha2": "GL", "alpha3": "GRL"}, {"alpha2": "GM", "alpha3": "GMB"}, {"alpha2": "GN", "alpha3": "GIN"}, {"alpha2": "GP", "alpha3": "GLP"}, {"alpha2": "GQ", "alpha3": "GNQ"}, {"alpha2": "GR", "alpha3": "GRC"}, {"alpha2": "GS", "alpha3": "SGS"}, {"alpha2": "GT", "alpha3": "GTM"}, {"alpha2": "GU", "alpha3": "GUM"}, {"alpha2": "GW", "alpha3": "GNB"}, {"alpha2": "GY", "alpha3": "GUY"}, {"alpha2": "HK", "alpha3": "HKG"}, {"alpha2": "HM", "alpha3": "HMD"}, {"alpha2": "HN", "alpha3": "HND"}, {"alpha2": "HR", "alpha3": "HRV"}, {"alpha2": "HT", "alpha3": "HTI"}, {"alpha2": "HU", "alpha3": "HUN"}, {"alpha2": "ID", "alpha3": "IDN"}, {"alpha2": "IE", "alpha3": "IRL"}, {"alpha2": "IL", "alpha3": "ISR"}, {"alpha2": "IM", "alpha3": "IMN"}, {"alpha2": "IN", "alpha3": "IND"}, {"alpha2": "IO", "alpha3": "IOT"}, {"alpha2": "IQ", "alpha3": "IRQ"}, {"alpha2": "IR", "alpha3": "IRN"}, {"alpha2": "IS", "alpha3": "ISL"}, {"alpha2": "IT", "alpha3": "ITA"}, {"alpha2": "JE", "alpha3": "JEY"}, {"alpha2": "JM", "alpha3": "JAM"}, {"alpha2": "JO", "alpha3": "JOR"}, {"alpha2": "JP", "alpha3": "JPN"}, {"alpha2": "KE", "alpha3": "KEN"}, {"alpha2": "KG", "alpha3": "KGZ"}, {"alpha2": "KH", "alpha3": "KHM"}, {"alpha2": "KI", "alpha3": "KIR"}, {"alpha2": "KM", "alpha3": "COM"}, {"alpha2": "KN", "alpha3": "KNA"}, {"alpha2": "KP", "alpha3": "PRK"}, {"alpha2": "KR", "alpha3": "KOR"}, {"alpha2": "KW", "alpha3": "KWT"}, {"alpha2": "KY", "alpha3": "CYM"}, {"alpha2": "KZ", "alpha3": "KAZ"}, {"alpha2": "LA", "alpha3": "LAO"}, {"alpha2": "LB", "alpha3": "LBN"}, {"alpha2": "LC", "alpha3": "LCA"}, {"alpha2": "LI", "alpha3": "LIE"}, {"alpha2": "LK", "alpha3": "LKA"}, {"alpha2": "LR", "alpha3": "LBR"}, {"alpha2": "LS", "alpha3": "LSO"}, {"alpha2": "LT", "alpha3": "LTU"}, {"alpha2": "LU", "alpha3": "LUX"}, {"alpha2": "LV", "alpha3": "LVA"}, {"alpha2": "LY", "alpha3": "LBY"}, {"alpha2": "MA", "alpha3": "MAR"}, {"alpha2": "MC", "alpha3": "MCO"}, {"alpha2": "MD", "alpha3": "MDA"}, {"alpha2": "ME", "alpha3": "MNE"}, {"alpha2": "MF", "alpha3": "MAF"}, {"alpha2": "MG", "alpha3": "MDG"}, {"alpha2": "MH", "alpha3": "MHL"}, {"alpha2": "MK", "alpha3": "MKD"}, {"alpha2": "ML", "alpha3": "MLI"}, {"alpha2": "MM", "alpha3": "MMR"}, {"alpha2": "MN", "alpha3": "MNG"}, {"alpha2": "MO", "alpha3": "MAC"}, {"alpha2": "MP", "alpha3": "MNP"}, {"alpha2": "MQ", "alpha3": "MTQ"}, {"alpha2": "MR", "alpha3": "MRT"}, {"alpha2": "MS", "alpha3": "MSR"}, {"alpha2": "MT", "alpha3": "MLT"}, {"alpha2": "MU", "alpha3": "MUS"}, {"alpha2": "MV", "alpha3": "MDV"}, {"alpha2": "MW", "alpha3": "MWI"}, {"alpha2": "MX", "alpha3": "MEX"}, {"alpha2": "MY", "alpha3": "MYS"}, {"alpha2": "MZ", "alpha3": "MOZ"}, {"alpha2": "NA", "alpha3": "NAM"}, {"alpha2": "NC", "alpha3": "NCL"}, {"alpha2": "NE", "alpha3": "NER"}, {"alpha2": "NF", "alpha3": "NFK"}, {"alpha2": "NG", "alpha3": "NGA"}, {"alpha2": "NI", "alpha3": "NIC"}, {"alpha2": "NL", "alpha3": "NLD"}, {"alpha2": "NO", "alpha3": "NOR"}, {"alpha2": "NP", "alpha3": "NPL"}, {"alpha2": "NR", "alpha3": "NRU"}, {"alpha2": "NU", "alpha3": "NIU"}, {"alpha2": "NZ", "alpha3": "NZL"}, {"alpha2": "OM", "alpha3": "OMN"}, {"alpha2": "PA", "alpha3": "PAN"}, {"alpha2": "PE", "alpha3": "PER"}, {"alpha2": "PF", "alpha3": "PYF"}, {"alpha2": "PG", "alpha3": "PNG"}, {"alpha2": "PH", "alpha3": "PHL"}, {"alpha2": "PK", "alpha3": "PAK"}, {"alpha2": "PL", "alpha3": "POL"}, {"alpha2": "PM", "alpha3": "SPM"}, {"alpha2": "PN", "alpha3": "PCN"}, {"alpha2": "PR", "alpha3": "PRI"}, {"alpha2": "PS", "alpha3": "PSE"}, {"alpha2": "PT", "alpha3": "PRT"}, {"alpha2": "PW", "alpha3": "PLW"}, {"alpha2": "PY", "alpha3": "PRY"}, {"alpha2": "QA", "alpha3": "QAT"}, {"alpha2": "RE", "alpha3": "REU"}, {"alpha2": "RO", "alpha3": "ROU"}, {"alpha2": "RS", "alpha3": "SRB"}, {"alpha2": "RU", "alpha3": "RUS"}, {"alpha2": "RW", "alpha3": "RWA"}, {"alpha2": "SA", "alpha3": "SAU"}, {"alpha2": "SB", "alpha3": "SLB"}, {"alpha2": "SC", "alpha3": "SYC"}, {"alpha2": "SD", "alpha3": "SDN"}, {"alpha2": "SE", "alpha3": "SWE"}, {"alpha2": "SG", "alpha3": "SGP"}, {"alpha2": "SH", "alpha3": "SHN"}, {"alpha2": "SI", "alpha3": "SVN"}, {"alpha2": "SJ", "alpha3": "SJM"}, {"alpha2": "SK", "alpha3": "SVK"}, {"alpha2": "SL", "alpha3": "SLE"}, {"alpha2": "SM", "alpha3": "SMR"}, {"alpha2": "SN", "alpha3": "SEN"}, {"alpha2": "SO", "alpha3": "SOM"}, {"alpha2": "SR", "alpha3": "SUR"}, {"alpha2": "SS", "alpha3": "SSD"}, {"alpha2": "ST", "alpha3": "STP"}, {"alpha2": "SV", "alpha3": "SLV"}, {"alpha2": "SX", "alpha3": "SXM"}, {"alpha2": "SY", "alpha3": "SYR"}, {"alpha2": "SZ", "alpha3": "SWZ"}, {"alpha2": "TC", "alpha3": "TCA"}, {"alpha2": "TD", "alpha3": "TCD"}, {"alpha2": "TF", "alpha3": "ATF"}, {"alpha2": "TG", "alpha3": "TGO"}, {"alpha2": "TH", "alpha3": "THA"}, {"alpha2": "TJ", "alpha3": "TJK"}, {"alpha2": "TK", "alpha3": "TKL"}, {"alpha2": "TL", "alpha3": "TLS"}, {"alpha2": "TM", "alpha3": "TKM"}, {"alpha2": "TN", "alpha3": "TUN"}, {"alpha2": "TO", "alpha3": "TON"}, {"alpha2": "TR", "alpha3": "TUR"}, {"alpha2": "TT", "alpha3": "TTO"}, {"alpha2": "TV", "alpha3": "TUV"}, {"alpha2": "TW", "alpha3": "TWN"}, {"alpha2": "TZ", "alpha3": "TZA"}, {"alpha2": "UA", "alpha3": "UKR"}, {"alpha2": "UG", "alpha3": "UGA"}, {"alpha2": "UM", "alpha3": "UMI"}, {"alpha2": "US", "alpha3": "USA"}, {"alpha2": "UY", "alpha3": "URY"}, {"alpha2": "UZ", "alpha3": "UZB"}, {"alpha2": "VA", "alpha3": "VAT"}, {"alpha2": "VC", "alpha3": "VCT"}, {"alpha2": "VE", "alpha3": "VEN"}, {"alpha2": "VG", "alpha3": "VGB"}, {"alpha2": "VI", "alpha3": "VIR"}, {"alpha2": "VN", "alpha3": "VNM"}, {"alpha2": "VU", "alpha3": "VUT"}, {"alpha2": "WF", "alpha3": "WLF"}, {"alpha2": "WS", "alpha3": "WSM"}, {"alpha2": "YE", "alpha3": "YEM"}, {"alpha2": "YT", "alpha3": "MYT"}, {"alpha2": "ZA", "alpha3": "ZAF"}, {"alpha2": "ZM", "alpha3": "ZMB"}, {"alpha2": "ZW", "alpha3": "ZWE"}];

const MOCK_DATA = {
  trip: {
    departureDateTime: '2026-04-16T10:30:00+03:00',
    displayTimeZone: 'Europe/Tallinn',
    departureStopName: 'St. Petersburg Coach Station',
    destinationStopName: 'Tallinn Coach Station',
    ticketNumber: '260305321711'
  },
  passenger: {
    firstName: 'ALEKSANDR',
    surname: 'PETROV',
    birthDate: '1980-06-01',
    citizenship: 'RUS',
    documentType: 'DOCUMENT_TYPE.FOREIGN_PASSPORT',
    documentNumber: 'FP4708520',
    issuingCountry: 'RUS',
    documentExpiry: '2030-06-01',
    permitType: ''
  }
};

const DOCUMENT_TYPE_CODES = ['', 'DOCUMENT_TYPE.RUSSIAN_TRAVEL_PASSPORT', 'DOCUMENT_TYPE.FOREIGN_PASSPORT', 'DOCUMENT_TYPE.GRAY_PASSPORT', 'DOCUMENT_TYPE.SAILOR_PASSPORT', 'DOCUMENT_TYPE.DIPLOMATIC_PASSPORT'];
const PERMIT_TYPE_CODES = ['', 'ENTRY_PERMIT_TYPE.SINGLE_ENTRY_VISA', 'ENTRY_PERMIT_TYPE.MULTIPLE_ENTRY_VISA', 'ENTRY_PERMIT_TYPE.EU_SCHENGEN_CITIZEN', 'ENTRY_PERMIT_TYPE.RESIDENCE_CARD'];
const REQUIRED_FIELDS = ['firstName', 'surname', 'birthDate', 'citizenship', 'documentType', 'documentNumber', 'issuingCountry', 'documentExpiry'];
const localeMap = { en: 'en-GB', et: 'et-EE', ru: 'ru-RU', lv: 'lv-LV', lt: 'lt-LT', pl: 'pl-PL', fi: 'fi-FI', uk: 'uk-UA' };


const form = document.getElementById('passengerForm');
const submitBtn = document.getElementById('submitBtn');
const langSelect = document.getElementById('langSelect');
const introText = document.getElementById('introText');
const successNotice = document.getElementById('successNotice');
const formWarning = document.getElementById('formWarning');
const statusText = document.getElementById('statusText');
const statusDot = document.getElementById('statusDot');
const stepUpdate = document.getElementById('stepUpdate');
const stepSubmitted = document.getElementById('stepSubmitted');

let currentLang = getInitialLanguage();
let submitted = false;
let attemptedSubmit = false;

init();

function init() {
  currentLang = currentLang in TRANSLATIONS ? currentLang : 'en';
  langSelect.value = currentLang;
  applyTranslations();
  populateSelects();
  prefillForm();
  renderTripData();
  bindEvents();
  updateProgress();
  updateSubmitButtonState();
  validateForm();
}

function bindEvents() {
  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUrlLanguage(currentLang);
    const existingValues = getFormValues();
    applyTranslations();
    populateSelects();
    restoreFormValues(existingValues);
    renderTripData();
    validateForm();
  });

  form.querySelectorAll('input, select').forEach((field) => {
    field.addEventListener('input', () => {
      normalizeField(field, false);
      validateField(field, false);
      validateForm();
    });
    field.addEventListener('blur', () => {
      normalizeField(field, true);
      validateField(field, true);
      validateForm();
    });
    field.addEventListener('change', () => {
      normalizeField(field, true);
      validateField(field, true);
      validateForm();
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    attemptedSubmit = true;
    const valid = validateForm(true);
    if (!valid) {
      formWarning.classList.remove('hidden');
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    formWarning.classList.add('hidden');
    submitted = true;
    successNotice.classList.remove('hidden');
    disableForm();
    statusText.textContent = t('statusSubmitted');
    statusDot.classList.remove('status-pending');
    statusDot.classList.add('status-success');
    updateProgress();
    successNotice.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') || 'en';
}

function updateUrlLanguage(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? key;
}

function applyTranslations() {
  document.title = t('pageTitle');
  introText.textContent = t('intro');
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.getElementById('firstName').placeholder = 'JOHN';
  document.getElementById('surname').placeholder = 'SMITH';
  document.getElementById('documentNumber').placeholder = t('placeholderDocumentNumber');
  document.getElementById('birthDate').placeholder = 'YYYY-MM-DD';
  document.getElementById('documentExpiry').placeholder = 'YYYY-MM-DD';
}

function updateProgress() {
  stepUpdate.classList.toggle('is-active', !submitted);
  stepUpdate.classList.toggle('is-complete', submitted);
  stepSubmitted.classList.toggle('is-active', submitted);
}

function populateSelects() {
  populateCountrySelect(document.getElementById('citizenship'));
  populateCountrySelect(document.getElementById('issuingCountry'));
  populateMappedSelect(document.getElementById('documentType'), DOCUMENT_TYPE_CODES, 'documentTypes');
  populateMappedSelect(document.getElementById('permitType'), PERMIT_TYPE_CODES, 'permitTypes');
}

function getDisplayNames() {
  try {
    return new Intl.DisplayNames([localeMap[currentLang] || 'en-GB'], { type: 'region' });
  } catch (e) {
    return new Intl.DisplayNames(['en-GB'], { type: 'region' });
  }
}

function populateCountrySelect(select) {
  const currentValue = select.value;
  const displayNames = getDisplayNames();
  select.innerHTML = '';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = t('placeholderSelect');
  select.appendChild(placeholder);

  const options = COUNTRY_DATA
    .map((country) => {
      const label = displayNames.of(country.alpha2) || country.alpha3;
      return { ...country, label };
    })
    .sort((a, b) => a.label.localeCompare(b.label, localeMap[currentLang] || 'en-GB'));

  options.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.alpha3;
    option.textContent = `${country.label} (${country.alpha3})`;
    select.appendChild(option);
  });

  select.value = currentValue;
}

function populateMappedSelect(select, codes, dictionaryKey) {
  const currentValue = select.value;
  select.innerHTML = '';

  codes.forEach((code) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = TRANSLATIONS[currentLang][dictionaryKey][code] || code;
    select.appendChild(option);
  });

  select.value = currentValue;
}



function prefillForm() {
  Object.entries(MOCK_DATA.passenger).forEach(([key, value]) => {
    const field = document.getElementById(key);
    if (field) {
      field.value = value;
      normalizeField(field);
    }
  });
}

function restoreFormValues(values) {
  Object.entries(values).forEach(([key, value]) => {
    const field = document.getElementById(key);
    if (field) field.value = value;
  });
}

function getFormValues() {
  const data = {};
  form.querySelectorAll('input, select').forEach((field) => {
    data[field.id] = field.value;
  });
  return data;
}

function renderTripData() {
  const { trip } = MOCK_DATA;
  const date = new Date(trip.departureDateTime);
  const dateFormatter = new Intl.DateTimeFormat(localeMap[currentLang] || 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: trip.displayTimeZone || 'Europe/Tallinn'
  });
  const timeFormatter = new Intl.DateTimeFormat(localeMap[currentLang] || 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    hourCycle: 'h23',
    timeZone: trip.displayTimeZone || 'Europe/Tallinn'
  });

  document.getElementById('tripDateTime').textContent = `${dateFormatter.format(date)} ${timeFormatter.format(date)}`;
  document.getElementById('tripRoute').textContent = `${trip.departureStopName} - ${trip.destinationStopName}`;
  document.getElementById('tripTicketNumber').textContent = trip.ticketNumber;
}

function normalizeField(field, finalize = false) {
  if (field.id === 'firstName' || field.id === 'surname') {
    field.value = normalizeToUpperLatinName(field.value, finalize);
  }
  if (field.id === 'documentNumber') {
    field.value = normalizeToUpperLatinDigits(field.value);
  }
  if (field.id === 'birthDate' || field.id === 'documentExpiry') {
    field.value = normalizeDateInput(field.value);
  }
}

function normalizeToUpperLatinName(value, finalize = false) {
  const endsWithSpace = /\s$/.test(value);
  const endsWithHyphen = /-$/.test(value);
  const endsWithApostrophe = /'$/.test(value);

  let normalized = value
    .replace(/[’`´]/g, "'")
    .replace(/[‐‑‒–—−]/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z\s'\-]/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/-{2,}/g, '-')
    .replace(/'{2,}/g, "'");

  normalized = normalized.replace(/^\s+/, '');
  if (finalize) {
    normalized = normalized.trim();
  } else {
    normalized = normalized.replace(/\s+$/, '');
    if (endsWithSpace) normalized += ' ';
    if (endsWithHyphen && !/-$/.test(normalized)) normalized += '-';
    if (endsWithApostrophe && !/'$/.test(normalized)) normalized += "'";
  }

  return normalized;
}

function normalizeToUpperLatinDigits(value) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .trim();
}

function normalizeDateInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  let result = digits.slice(0, 4);
  if (digits.length > 4) result += '-' + digits.slice(4, 6);
  if (digits.length > 6) result += '-' + digits.slice(6, 8);
  return result;
}

function parseIsoDateStrict(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split('-').map(Number);
  const dt = new Date(Date.UTC(year, month - 1, day));
  if (dt.getUTCFullYear() !== year || dt.getUTCMonth() !== month - 1 || dt.getUTCDate() !== day) {
    return null;
  }
  return { year, month, day, date: dt };
}

function getTodayLocalDateOnly() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function getBirthDateError(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return t('validationDateFormat');
  const parsed = parseIsoDateStrict(value);
  if (!parsed) return t('validationCalendarDate');
  const currentYear = new Date().getFullYear();
  if (parsed.year < 1916 || parsed.year > currentYear) return t('validationBirthYearRange');

  const birthDate = new Date(value + 'T00:00:00');
  birthDate.setHours(0, 0, 0, 0);
  if (birthDate > getTodayLocalDateOnly()) return t('validationBirthFuture');
  return '';
}

function getDocumentExpiryError(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return t('validationDateFormat');
  const parsed = parseIsoDateStrict(value);
  if (!parsed) return t('validationCalendarDate');
  if (parsed.year > 3000) return t('validationExpiryYearMax');

  const expiryDate = new Date(value + 'T00:00:00');
  expiryDate.setHours(0, 0, 0, 0);
  if (expiryDate < getTodayLocalDateOnly()) return t('validationExpiryPast');
  return '';
}

function hasAllRequiredFieldsFilled() {
  return REQUIRED_FIELDS.every((fieldId) => {
    const field = document.getElementById(fieldId);
    return field && field.value.trim() !== '';
  });
}

function updateSubmitButtonState() {
  const allRequiredFilled = hasAllRequiredFieldsFilled();

  if (submitted) {
    submitBtn.disabled = true;
    submitBtn.classList.remove('is-disabled', 'is-ready');
    submitBtn.setAttribute('aria-disabled', 'true');
    return;
  }

  submitBtn.disabled = false;
  submitBtn.classList.toggle('is-disabled', !allRequiredFilled);
  submitBtn.classList.toggle('is-ready', allRequiredFilled);
  submitBtn.setAttribute('aria-disabled', String(!allRequiredFilled));
}

function validateForm(showErrors = false) {
  let valid = true;
  form.querySelectorAll('input, select').forEach((field) => {
    const fieldValid = validateField(field, showErrors || attemptedSubmit);
    if (!fieldValid && REQUIRED_FIELDS.includes(field.id)) {
      valid = false;
    }
  });
  updateSubmitButtonState();
  if (valid) formWarning.classList.add('hidden');
  return valid;
}

function validateField(field, showError) {
  const errorEl = document.getElementById(`${field.id}Error`);
  if (!errorEl) return true;
  const value = field.value.trim();
  let error = '';

  if (REQUIRED_FIELDS.includes(field.id) && !value) {
    error = t('validationRequired');
  } else if ((field.id === 'firstName' || field.id === 'surname') && value) {
    if (!/^[A-Z]+(?:[ '\-][A-Z]+)*$/.test(value)) {
      error = t('validationName');
    }
  } else if (field.id === 'birthDate' && value) {
    error = getBirthDateError(value);
  } else if (field.id === 'documentNumber' && value) {
    if (!/^[A-Z0-9]{3,20}$/.test(value)) {
      error = t('validationDocumentNumber');
    }
  } else if (field.id === 'documentExpiry' && value) {
    error = getDocumentExpiryError(value);
  }

  const shouldShow = showError || attemptedSubmit;
  field.classList.toggle('invalid', !!error && shouldShow);
  const wrapper = field.closest('.form-field');
  if (wrapper) wrapper.classList.toggle('has-error', !!error && shouldShow);
  errorEl.textContent = shouldShow ? error : '';
  return !error;
}

function disableForm() {
  form.querySelectorAll('input, select, button').forEach((element) => {
    element.disabled = true;
  });
}
