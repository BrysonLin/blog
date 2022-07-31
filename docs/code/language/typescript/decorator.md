---
title: 装饰器
icon: typescript
article: true
---

## 一、TypeScript中的装饰

::: tip

1. 装饰器：装饰器是一种特殊类型1的声明，它能够被附加到类声明，方法，属性或传参上，可以修改类的行为。
2. 通俗的讲 装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
3. 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
4. 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
5. 装饰器是过去几年中 JS 最大的成就之一，已是 es7 的标准特性之一

:::

## 二、类装饰器

### 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数

### 2. 普通装饰器（没有参数）

   ```typescript
   function logclass(parms:any){
     parms.prototype.sayName = function () {
       console.log(this.name);
     }
   }
   @logclass
   class Web {
     public name:string;
     constructor(name:string){
       this.name = name
     }
   }
   let person:any  = new Web('linxing');
   console.log(person);
   person.sayName();
   ```

### 3. 装饰器工厂（带参）

   ```typescript
   // 装饰器
   function logclass(params:string){
     return function(target:any){
   q    target.prototype.apiUrl = params;
     }
   }
   @logclass('http://www.itying.com/api')
   class Web {
     constructor(){}
   }
   let person:any  = new Web();
   console.log(person.apiUrl);
   ```

### 4. 类装饰器重载 类的构造函数

   ```typescript
   // 装饰器
   function logclass(target:any){
     console.log(target);
     return class extends target{
       apiUlr:any = '我是修改过后的数据';
       getData(){
         console.log(this.apiUlr);
       }
     }
   }
   @logclass
   class Web {
     public apiUlr: string | undefined;
     constructor(){
       this.apiUlr = '我是构造函数里的apiurl'
     }
     getData(){}
   }
   let person:any  = new Web();
   console.log(person.apiUlr);
   ```

## 三、属性装饰器

> **内容正在创建中……**


