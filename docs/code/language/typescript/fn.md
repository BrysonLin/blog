---
title: TypeScript函数
icon: typescript
article: true
---


## 一、TypeScript函数

1. es5中定义方法

   ```javascript
   // 函数声明式
   function sun() {};
   // 匿名函数
   let person = function(){};
   ```

2. TypeScript中定义方法

   ```typescript
   // 函数声明式
   function sun():viod{};
   // 匿名函数
   let person = funciton():string{ return  ''}
   ```

## 二、函数方法传参

1. 函数声明

   ```typescript
   function getInfo(name: string, age: number): string{ 
   	return `我的名字叫${name},今年${age}岁`
   }
   ```

2. 匿名函数

   ```typescript
   let getInfo = function(name: string, age: number): viod{ 
   	console.log(`我的名字叫${name},今年${age}岁`)
   }
   ```

## 三、方法的可选参数

1. es5 里面方法的实参和形参可以不一样，但是 ts 中必须一样，如果不一样就需要配置可选参数

2. 注意！可选参数必须配到参数的最后面

   ```typescript
   let getInfo = function(name: string, age?: number): viod{ 
   	if(age){
   		console.log(`我的名字叫${name},今年${age}岁`)
   	}else{
   		console.log('哈哈哈')
   	}
   }
   ```

## 四、方法的默认参数

1. es5 中是不能配置默认传参的，es6 和 ts 可配置默认参数

   ```typescript
   
   let getInfo = function(name: string, age: number = 23): viod{ 
   	if(age){
   		console.log(`我的名字叫${name},今年${age}岁`)
   	}else{
   		console.log('哈哈哈')
   	}
   }
   ```

## 五、函数剩余参数

1. 三点运算符 接收传递过来的所有参数

   ```typescript
   function sum(a:number, ...result: number[]): number{
   	var sum = 0;
   	for(let i = 0; i<result.lenght;i++){
   		sum+=result[i];
   	}
   	return sum
   }
   ```

## 六、函数重载

1. java 中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。

2. typescript 中的重载：通过为同一个函数提供多个函数类型定义来试下各种功能的目的。

3. 为了兼容es5，以及es6中重载的写法和java有区别

   ```typescript
   function getInfo(names: string): string;
   function getInfo(age:number ): string;
   function getInfo(str:any):any {
   	if(typeof str === 'string'){
   		return `我叫：${str}`
   	}else{
   		return `我的年龄是${str}`
   	}
   }
   ```

   

