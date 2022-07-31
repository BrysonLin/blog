---
title: 泛型
icon: typescript
article: true
---

一、泛型的概念：

::: tip
   - 软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
  
   - 在像 C# 和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类的数据。这样用户就可以以自己的数据类型来使用组件。
  
   - 通俗理解：**泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持。**
:::

## 二、泛型函数

1. ```typescript
   // 泛型：可以支持不特定的数据类型  要求：传入的参数和返回的的参数一致
   // T表示泛型，具体什么类型是调用这个方法的时候决定的
   	function getData<T>(value:T):T{
   		return value;
   	}
   	getData<number>(123)
   
   	function getData<T>(value:T):any{
   		return value;
   	}
   	getData<number>(123)
   ```

## 三、泛型类

1. 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串你两种类型。通过类的泛型来实现

   ```typescript
   class MinClass<T> {
     public list: T[] = [];
     add(num: T): T[]{
       this.list.push(num)
       return this.list
     }
     minNum():T{
       let min = this.list[0];
       for (let i = 0; i < this.list.length; i++) {
         const element = this.list[i];
         if (min > element) {
           min = element
         }
       }
       return min
     }
   }
   let person = new MinClass<string>();		// 实例化类，并且证明类的泛型是number 
   console.log(person.add('a'));
   console.log(person.add('c'));
   console.log(person.add('e'));
   console.log(person.minNum());			
   ```

## 四、泛型接口

1. ```typescript
   // 泛型接口
   interface ConfigFn{
   	<T>(value:T):T;
   }
   let getData:ConfigFn = function<T>(value:T):T{
   	return value;
   }
   getData<string>('张三')
   ```

2. ```typescript
   // 泛型接口
   interface ConfigFn<T>{
   	(value:T):T;
   }
   function getData<T>(value:T):T{
   	return value;
   }
   let myGetData:ConfigFn<string> = getData;
   myGetData('张三');
   ```

## 五、TypeScript 泛型类 把类作为参数类型的泛型类

```typescript
// 操作数据库的泛型类
calss MysqlDb<T>{
	add(info:T):boolean{
		console.log(info);
		return true
	}
}

//1、定义一个User类和数据库进行映射

class User{
    username:string | undefined;
    pasword:string | undefined;
}
var u = new User();
u.username = '张三'；
u.password = '123456';
var Db = new MysqlDb<User>();
Db.add(u)
```

## 六、统一封装 Mysql、Mssql、mongodb

1. 功能：定义一个操作数据库的库  支持 Mysql Mssql MongoDb
2. 要求：Mysql Mssql MongoDb 功能一样 都有 add  update delete get方法
3. 注意：约束统一的规范、以及代码重用
4. 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
   1. 接口：在面向对象的编程中，接口时一种规范的定义，它定义了行为和动作的归覅能否
   2. 泛型 通俗理解：泛型就是解决 类 接口 方法的复用性。

```typescript
interface DBI<T>{
    add(info:T):boolean;
    update(info:T,di:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
// 定义一个操作mysql数据库的类     注意：要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, di: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}
class User{
    userName: string | undefined;
    password: string | undefined;
}
let person = new User();
person.userName = 'linxing';
person.password = '123456'

let OMysqlDb = new MysqlDb<User>()
OMysqlDb.add(person);

```





