---
title: TypeScirpt的数据类型
icon: typescript
article: true
---

## 一、TypeScript 中为了使编写的代码更规范，更有利于维护，增加了类型校验。

- 布尔类型（boolean）
- 数字类型（number）
- 字符串类型（string）
- 数组类型（array）
- 元组类型（tuple）
- 枚举类型（enum）
- 任意类型（any）
- null 和 undefined
- void 类型

- never 类型

- 对象

- unknown(一种保护类型的any)

- 类型的别名

    ```typescript
    // 类型的别名
    type Mytype = 1|2|3|4|5;
    let num:Mytype
    let num1:Mytype
    let num2:Mytype
    
    
    num = 8
    ```

    

## 二、定义类型示例

1. 布尔类型（boolean）

   ```typescript
   let bool: boolean = true;
   ```

2. 数字类型 （number）

   ```typescript
   let num: number = 11;
   ```

3. 字符串类型（string）

   ```typescript
   let str: string = 'lin';
   ```

4. 数组类型(Array)

   ```typescript
   // 第一种定义方式
   let arr: string[] = ['lin','xing'];
   // 第二种定义方式: 泛型
   let arr: Array<string> = ['lin','xing'];
   // 第三种类型：
   let arr: any[] = ['linxing', 123, false];
   ```

5. 元组类型 (tuple)

   ```typescript
   let tup: [string, number, boolean] = ['JavaScript', 110, true];
   ```

6. 枚举类型 (enum)

   ```typescript
   enum 枚举名{
   	标识符[= 整型常数]，
   	标识符[= 整型常数]，
   	....
   	标识符[= 整型常数]，
   }
   enum Flag{ success = 1, error = 2};
   let f:Flag = Flag.success;
   console.log(f);   // 结果1
   
   // 默认是数字 ， 如果修改其中的一个类型不为数字，后面则必须定义，否则报错
   ```

7. 任意类型 (any)

   ```typescript
   let anyType: any = 'string'			// 什么类型都能放
   ```

8. null 和 undefined 类型

   ```typescript
   let age: number | undefined;			// | 或者的意思
   let num: number | null | undefined;
   ```

9. void 类型

   ```typescript
   // void 表示没有任何类型，一般用于执行方法没有返回值
   function sum(x, y,): void{
       let num: number = x+y;
   }
   ```

10. never 类型

    ```typescript
    // never类型：是其他类型（包括 null 和 undefined ）的子类型，代表从不会出现的值。
    // 这意味着声明never的变量只能被never类型所赋值。
    
    var a:undefined;
    a=undefined
    ```

