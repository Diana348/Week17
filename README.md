# Week17
/ --------------- Вопрос 1 --------------- /
Объект - это коллекция пар "ключ-значение".
let myHamsterObject = {
	name: 'Peach',
	age: 2,
	hobby: ["спать", "кушать", "много пить"],
};

Класс - это шаблон, описывающий свойства и методы, которыми будет обладать любой объект, созданный на основе этого класса.
class Person {
    constructor (name, age, phone-number) {
    this.name = name;
    this.age = age;
    this.phone-number = phone-number;
    }
    check () {
         this.isChecked = !this.isChecked;
    }
}
const Guest1 = new Person('Паша', '23', '79236584129');

/ --------------- Вопрос 2 --------------- /
ООП в реальной жизни:
Танцевальная студия может содержать классы "Танцевальные группы" (направление, преподаватель, количество студентов в группе), "Преподаватель" (имя, возраст, направление, стаж работы), "Студент" (имя, возраст, направление, уровень навыков).

ООП в программировании: электронный банковский счет (номер счета, текущий баланс, история операций)

/ --------------- Вопрос 3 --------------- /
Конструкторы - это специальный метод, служащий для создания и инициализации объектов, созданных с использованием class.
Для создания "объектного типа" и используется функция конструктора объекта.
function Person(first, last, age, profession) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.profession = profession;
} 

Когда ключевое слово this используется в функции-конструкторе, оно относится к будущему объекту, который будет создан с помощью этого конструктора. 

Объекты одного и того же типа создаются при помощи вызова функции конструктора с ключевым словом new:
const myFather = new Person("John", "Doe", 50, "driver");

В JavaScript уже встроено большое количество конструкторов:
let a = new Object();    // новый объект типо Object
let b = new String();    // новый объект типо String
let c = new Number();    // новый объект типо Number
let d = new Boolean();   // новый объект типо Boolean

/ --------------- Вопрос 4 --------------- /
function bike () {
    console.log(this.name)
}
 var name = 'ninja';
 var obj1 = {name:'pomidor', bike:bike};
 var obj2 = {name:'site', bike:bike}

 bike();
 obj1.bike();
 obj2.bike(); // код выведет "ninja", "pomidor", "site"

 / --------------- Вопрос 5 --------------- /
 Статические поля хранят состояния класса в целом, а не отдельного объекта. Перед названием статического поля ставится ключевое слово static.
 class Person{
    static retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
    }
}
Для обращения к статическому полю применяется имя класса, а не имя какого-либо объекта. Используя имя класса, мы можем получить или установить его значение:
Person.retirementAge = 62;
НЕ можем в нестатических методах и конструкторе класса обращаться к этим полям через this:
print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
        console.log(`Пенсионный возраст: ${this.retirementAge}`);   // к статическому полю нельзя обратиться через this
}
В отличие от обычных нестатических методов, которые определяют поведение объекта, статические методы определяют поведение для всего класса. Поэтому для их вызова применяется имя класса, а не имя объекта:
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static printClassInfo(){ 
        console.log("Класс Person представляет человека");
    }
}
Person.printClassInfo() // имя класса, а не обьекта

/ --------------- Вопрос 6 --------------- /
В Java геттер и сеттер — это два обычных метода, которые используются для получения значения поля класса или его изменения.
public class SimpleGetterSetter {
    private int number;
 
    public int getNumber() {
        return number;
    }
 
    public void setNumber(int number) {
        this.number = number;
    }
}
Поскольку number является private, то обратиться к ней напрямую за пределами данного класса не получится. Внешний код должен вызывать геттер getNumber() и сеттер setNumber(), чтобы получить или обновить значение переменной:
SimpleGetterSetter obj = new SimpleGetterSetter();
 
obj.setNumber(10); 
int number = obj.getNumber();

Cеттер — это метод, который изменяет (устанавливает; от слова set) значение поля. А геттер — это метод, который возвращает (от слова get) нам значение какого-то поля.
Геттер иногда называют accessor (аксессор, т.к. он предоставляет доступ к полю), а сеттер mutator (мутатор, т.к. он меняет значение переменной).
Используя геттер и сеттер, мы можем контролировать доступ к важным переменным и их обновление (например, требуется изменить значение переменной в заданном диапазоне. В противном случае новое значение не будет присвоено).

let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

/ --------------- Вопрос 7 --------------- /
class Person {
    constructor(name) {
        this.name = name
    }
}

const member = new Person ("John")
console.log(typeOf member)

/ --------------- Вопрос 8 --------------- /
const person = {
    name: "Valera";
    age: 23;
}

let city = person.city;
city = "Amsterdam";

console.log(person)