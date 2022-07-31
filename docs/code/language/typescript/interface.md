---
title: 接口
icon: typescript
article: true
---

## 一、TypeScrip中的接口

::: tip
- 1. 接口的作用：`在面向对象的编程中，接口时一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。`接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。typescript 中的接口类似于 java ，同时还增加了更灵活的接口类型，包括 **属性、函数、可索引、和类** 等。

- 2. 定义行为和动作的规范。对批量方法进行约束  interface
:::

## 二、属性类接口

### 1. 就是传入对象的约束  属性接口

   ```typescript
   interface FullName{
   	firstName: string;		// 注意，分号结束
   	secondName: string;
   }
   function printName(name:FullName){
   	// 必须传入firstName  secondName
       console.log(name.firstName + name.secondName)
   }
   ```

### 2. 可选接口

   ```typescript
   interface FullName(){
   	firstName: string;
   	secondName?:string
   }
   function getName(name:FullName){
   	console.log(name)
   }
   // 参数的顺序可以不一样
   getName({
   	firstName:'linxing';
   	secondName:'liner'
   })
   ```

   

### 3. 示例

   ```typescript
   interface Config{
   	type: string;
   	url: string;
   	data?: string;
   	dataType: string
   }
   function ajax( config: Config ){
       var xhr = new XMLHttpRequest();
       xhr.open( config.get, config.url, true);
       xhr.send(config.data);
       xhr.onreadystatechange = function(){
           if(xhr.readyState === 4 && xhr.status == 200){
               if(confiig.dataType == 'json'){
                   JSON.perse(xhr.responseText)
               }else{
                   console.log(xhr.reponseText)
               }
           }
       }
   }
   ajax({
       type:'get',
       data:'name:zhang',
       url: 'http://www.baidu.com',
       dataType:'json'
   })
   ```

   

## 三、函数类接口

### 1. 函数类型接口：对方法传入的参数 以及返回值进行约束  批量约束

### 2. 加密的函数类型接口

   ```typescript
   interface encrypt{
   	(key:string,value:string):string;
   }
   var md5:encrypt = function (key:string,value:string): string{
   	// 模拟操作
   	return key + name
   }
   ```


## 四、可索引接口

### 1. 可索引接口：对数组、对象的约束（不常用）

### 2. 数组的约束

   ```typescript
   interface UserArr{
   	[index:number]:string
   }
   let arr:UserArr = ['lixing']
   ```

### 3. 对象的约束

   ```typescript
   interface UserArr{
   	[index:string]:any
   }
   let arr:UserArr = {
   	name: '张三'，
   	age: 23	
   }
   ```

## 五、类类型接口

### 1. 类类型接口：对类的约束 和 抽象类比较相似

   ```typescript
   interface Animal{
     name:string;
     eat(str:string):void
   }
   
   class Dog implements Animal{
     name:string;
     constructor(name:string){
       this.name = name
     }
     eat(){
       console.log('小黑吃粮食！');
     }
   }
   let p = new Dog('小黑');
   p.eat();
   ```

## 六、接口扩展 接口可继承接口

```typescript
interface Animal{
  eat(foot:string):string;
}
interface Web extends Animal{
  work():void;
}

class Person implements Web{
  public name:string;
  constructor(name:string){
    this.name = name
  }
  eat(foot:string){
    return `${this.name}吃${foot}`
  }
  work(){
    console.log(`${this.name}敲代码`);
  }
}
let p = new Person('小林');
console.log(p.eat('粮食'));
p.work()
```

