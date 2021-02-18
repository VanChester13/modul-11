

const personGenerator = {     // personGenerator - это объект
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юлия",
            "id_2": "Елизавета",
            "id_3": "Надежда",
            "id_4": "Тамара",
            "id_5": "Римма",
            "id_6": "Наталья",
            "id_7": "Софья",
            "id_8": "Алиса",
            "id_9": "Мария",
            "id_10": "Зарина"
          
        }
    }`,


firstNameMaleJson: `{
    "count": 10,
    "list": {     
        "id_1": "Александр",
        "id_2": "Максим",
        "id_3": "Иван",
        "id_4": "Артем",
        "id_5": "Дмитрий",
        "id_6": "Никита",
        "id_7": "Михаил",
        "id_8": "Даниил",
        "id_9": "Егор",
        "id_10": "Андрей"
      
    }
}`,


    middleName: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитрииев",
            "id_6": "Николев",
            "id_7": "Михайлов",
            "id_8": "Константинов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,

    professionForAll: `{
        "count": 10,
        "list": {
            "id_1": "Учитель",
            "id_2": "Банковский работник",
            "id_3": "Менеджер",
            "id_4": "Писатель",
            "id_5": "Врач",
            "id_6": "Сотрудник полиции",
            "id_7": "Адвокат",
            "id_8": "Брокер",
            "id_9": "Страховой агент",
            "id_10": "Режиссер"
        }
    }`,

    professionForMen: `{
    "count": 14,
        "list": {
            "id_1": "Учитель",
            "id_2": "Банковский работник",
            "id_3": "Менеджер",
            "id_4": "Писатель",
            "id_5": "Врач",
            "id_6": "Сотрудник полиции",
            "id_7": "Адвокат",
            "id_8": "Брокер",
            "id_9": "Страховой агент",
            "id_10": "Режиссер",
            "id_11": "Шахтер",
            "id_12": "Солдат",
            "id_13": "Сантехник",
            "id_14": "Слесарь"
        }
    }`,
    
    Month: ` {
        "count": 12, 
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


   GENDER_MALE: 'Мужчина',
   GENDER_FEMALE: 'Женщина',
    

    randomGender: function(gender) {
        let round = Math.round(Math.random());
        if   (round) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },

    randomNumber: function () { 
        let day = 0
        let random = this.randomValue(this.Month);
        if (random == 'Февраля') 
        { return this.randomIntNumber(28,1) } 
         else if (random == "Апреля", "Июня", 'Сентября', 'Ноября')
        {  return this.randomIntNumber(30,1) }
        else 
        { return this.randomIntNumber(31,1) }
        }, 


    randomIntNumber: (max = 2000, min = 1940) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
  
    randomFirstName: function(gender) {
        if (gender == 'Мужчина')
        {
             return this.randomValue(this.firstNameMaleJson);
          }   else  {
          return this.randomValue(this.firstNameFemaleJson);
      }},
    

      randomMonth: function ()  {
        return this.randomValue(this.Month);
     },

    randomSurname: function(gender) {
        if (gender == 'Мужчина')
        { 
            return this.randomValue(this.surnameJson);
        }    else  {
            return `${this.randomValue(this.surnameJson)}а`;
        }},

     randomMiddleName: function(gender) {
        if(gender == 'Мужчина') {
            return `${this.randomValue(this.middleName)}ич`;
        } else {
            return `${this.randomValue(this.middleName)}на`;
        }
    },

    randomProfessions: function(gender) {
    if (gender == 'Мужчина')
    {
         return this.randomValue(this.professionForMen);
      }   else  {
      return this.randomValue(this.professionForAll);
      }
  },

     randomGodRozhdenia: function() {
         return this.randomIntNumber(2000, 1940);
    },


     getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        let gender = this.person.gender;
        this.person.firstName = this.randomFirstName(gender);
        this.person.sureName = this.randomSurname(gender);
        this.person.middleName = this.randomMiddleName(gender);
        this.person.godRozhdenia = this.randomGodRozhdenia(); 
        this.person.professions = this.randomProfessions(gender);
        this.person.month = this.randomMonth();
        this.person.number = this.randomNumber();
        return this.person;
    },
};


  
