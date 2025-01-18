---
title: JavaScript类型
readingTime: false
sticky: 1
tag:
 - js基础
---

# javascript类型

### 类型判断

#### typeof
> typeof 可以准确的判断除了`null`以外的其他基本数据类型，基本无法判断出对象的类型

~~~js
typeof null // object
typeof [] // object
typeof {} // object
~~~

##### typeof 运算符对null的处理
这个bug是第一版Javascript留下来的，javascript中不同对象在底层都表示为二进制，而javascript 中每种数据类型使用3bit表示，会把二进制前三位都为0的判断为object类型。

- 000 表示Object类型的数据。
- 001 表示Int类型的数据。
- 010 表示Double类型的数据。
- 100 表示String类型的数据。
- 110 表示Boolean类型的数据。

由于null代表空指针，大多数平台中值为0x00，因此null的类型标签就成了0，所以执行typeof时会返回 ‘object’。

#### instanceof

###### 原型
+ 每一个构造函数有一个原型——prototype，也称为原型对象
+ 原型对象的属性和方法被所有的实例化对象共享
+ 原型对象中的constructor指回构造函数

###### 原型链
+ 所有的实例对象都有`__proto__`属性指向它的构造函数的`原型对象`
+ `原型对象`也有自己的`__proto__`属性指向它的构造函数的原型对象
+ 所有对象最后都会指向`Objec`t的原型对象，而Object的原型对象为null，原型链也到此结束

> 使用__proto__访问对象的原型MDN不再推荐，使用Object.getPrototypeOf也能达到同样的效果

> instanceof 便时查找`原型链`上是否存在指定`构造方法`来准确判断对象的类型

#### Object.prototype.toString
+ Object类型的toString()方法，用于返回一个表示该对象的字符——[object Type]，Type表示对象的类型，其属性值取决于调用对象是否有`Symbol.toStringTag`属性，其值是一个字符串，则它的值将被作为 Type的值。
+ number、string、boolean则会调用各自的构造方法的toString。

##### Object.prototype.toString.call()
> 使用Object.prototype.toString.call可以准确判断基本类型和复杂类型的类型

~~~js
Object.prototype.toString.call(1) // [object Number]
Object.prototype.toString.call([]) // [object Array]
Object.prototype.toString.call(null) // [object Null]
Object.prototype.toString.call(undefined) // [object Undefined]
~~~

### 对象的隐式转换

#### 什么是隐式转换
~~~js
[] + 0 // '0'
~~~

上面的代码中数组在和数字进行+操作时，为了能够得到正确的结果，js自动进行了转换

#### 转换规则

##### Symbol.toPrimitive
> js内部会先判断对象内部是否有Symbol.toPrimitive方法，如果有并且返回的是基本数据类型则返回，否则进行下一步

##### valueOf
> 同上

##### toString
> 如果对象没有toString方法或者返回的不是基本数据类型，那么就会报错：**`TypeError: Cannot convert object to primitive value`**，意思是无法将对象转换成原始值。

#### 相等比较
与`===`不同的是，`==`在比较两个变量时，如果其中一个操作数是对象，另一个是原始值，则会将对象进行上述的隐式转换，这也就是为什么会出现下面的情况:

~~~js
	['a'] === 'a' // false
	['a'] == 'a'  // true
~~~