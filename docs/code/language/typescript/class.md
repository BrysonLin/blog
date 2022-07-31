---
title: TypeScirpt中的类
icon: typescript
article: true
---

```
 // 构造函数

  function Person(name,age){

   this.name = name;

    this.age = age;*

   this.sayHei=function(){

    console.log(`我的名字叫${this.name}，今年：${this.age}`);

   }*

  }

 // 原型上增加方法

   Person.prototype.sex = function(){

    console.log('我正在被共享！');

   }

   // 静态方法

  Person.printName = function(){*

    console.log(this.name);*

   }

  // let person1 = new Person('linxing',18);



  // 对象冒充继承  可以继承属性和方法传参 没法继承原型链和静态方法

   function Web(){

   Person.call(this，传参)

   }

   // 原型链继承 可以继承属性和方法也可以继承原型链上的属性和方法  没法传参

   Web.prototype = new Person();*

   let v = new Web();

   v.sayHei();

  // 原型链和对象冒充函数继承属性和方法

   function Web(name,age){

    Person.call(this,name,age)

  }

  // Webj.prototype = Person.prototype;

  

   // 用对象冒充（盗用构造函数）去继承父类的属性和方法 Person.call(thsi, params)

   // 用原型链去继承父类的原型上的方法  web.prototype = new Person    web.prototype = Person.prototype
```



## 一、TypeScript 中的类

```typescript
class Person{
	name:string;
	constructor(name: string){			// 构造函数  实例化类的时候触发的方法
		this.name = name;
	}
    getName(): string{
        return this.name
    }
    setName(name:string):viod {
        this.name = name;
    }
}
```

## 二、TypeScript 中类继承：extends、super

```typescript
class Person{
	name:string;
	constructor(name: string){			// 构造函数  实例化类的时候触发的方法
		this.name = name;
	}
    getName(): string{
        return this.name
    }
    setName(name:string):viod {
        this.name = name;
    }
}
定义 web 类来继承 Person 类
class Web extends Person{
	constructor(name:string){
		super(name)						// 初始化父类的构造函数				
	}
}
let w = new Web('李四')；
```

## 三、TypeScript类里面的修饰符

1. TypeScript 里面定义了属性的时候给我们提供了三种修饰符
   1. public：公有         											在类里面、子类、类外都可以访问
   2. protected：保护类型  									在类里面、子类里面可以访问，在类外部没法访问
   3. private：私有		                                           在类里面可以访问，子类、类外部都没法访问
2. 属性不加修饰符：默认代表共有属性，public

```
class Person{
	public name:string;
	constructor(name: string){			// 构造函数  实例化类的时候触发的方法
		this.name = name;
	}
    getName(): string{
        return this.name
    }
    setName(name:string):viod {
        this.name = name;
    }
}
```

## 一、TypeScript中类的静态属性、静态方法、抽象类、多态

1. es5中的静态属性、静态方法

   ```javascript
   function Person(){}
   Person.name = 'linxing';		// 静态属性
   Person.sayName = function(){ console.log(this.name) }  // 静态方法
   
   
   Jquery
   $(.box).css();
   function $(el){    return Base(el)}
   Base(){   this.css = '获取DOM节点'}
   
   ```

2. TypeScript中静态属性、静态方法

   ```typescript
   class Person{
   	public name: string
   	static age: number
   	constructor(name:string){
   		this.name = name
   	}
   	sayName(){		// 实例方法
   		
   	}
   	static print(){		// 在静态方法里面不能使用this
   		console.log('我这是静态方法')
   	}
   }
   ```
   
3. 多态方法

   1. 父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
   2. 多态属于继承

   ```typescript
   class Animal{
   	name: string
   	constructor(name:string){
   		this.name = name
   	}
   	eat(){							// 定义了一个方法不去实现，让子类去实现
   		console.log('我是吃的方法')
   	}
   }
   class Dog extends Animal{
   	constructor(name:string){
   		super(name)
   	}
   	eat(){							// 这就是多态， 继承重写了父类方法
   		console.log('小狗吃粮食')
   	}
   }
   class Cat extends Animal {
   	constructor(name:string){
   		super(name)
   	}
   	eat(){
   		console.log('吃老鼠')
   	}
   }
   ```

   

4. 抽象方法

   1. typeScript 中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
   2. 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
   3. abstract 方法只能放在抽象类里面
   4. 抽象类和抽象方法用来定义标准，标准：Animal 这个类要求它的子类必须包含 eat 方法

   ```typescript
   abstract class Animal{				// 父类定义，子类必须实现
       public names: string
       constructor(name:string) { 
           this.names = name;
       }
   	abstract eat():any;
   }
   // let p = new Animal()  错误：无法定义抽象类
   
   class Dog extends Animal{
     constructor(name:string){
       super(name)
     }
     eat(){
       console.log(this.names + '吃');
     }
   }
   ```

   


