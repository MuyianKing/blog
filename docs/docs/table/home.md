---
title: mu-table
description: 列宽自适应的表格组件
recommend: false
readingTime: false
tag:
 - table
---

# mu-table

### 基础用法
<client-only>
  <demo-table/>
</client-only>

### 带斑马纹的表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe`可以创建带斑马纹的表格。 如果`true`, 表格将会带有`斑马纹`。
<client-only>
  <demo-table-stripe /> 
</client-only>

### 不带边框表格
默认table带有边框，如果不需要可以使用`no-border`取消，最好同时加上斑马纹
<client-only>
  <demo-table-noborder /> 
</client-only>

### 自定义表格状态
可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

可以通过指定 Table 组件的`row-class`属性来为 Table 中的某一行添加 class， 这样就可以自定义每一行的样式了。
<client-only>
  <demo-table-class /> 
</client-only>

### 内容换行
组件默认将内容全部显示出来，可以使用`nowrap`属性将内容一行显示

组件会自动判断内容是否溢出，如果溢出则会用`Tooltip`显示全部内容
<client-only>
  <demo-table-wrap /> 
</client-only>

### 固定表头
在外部容器高度固定的情况下组件默认表头固定且不可取消

如果外部容器高度不固定可以通过`maxHeight`设置表格表体部分最大高度来实现表头固定

<client-only>
  <demo-table-height /> 
</client-only>

### 自定义表头|模板
<client-only>
  <demo-table-custom /> 
</client-only>

### mu-table属性
| 属性      | 说明          | 类型                                        | 可选值              | 默认值    |
| --------- | ------------- | ------------------------------------------- | ------------------- | --------- |
| data      | 数据          | Array\<Object\>                             | —                   | []        |
| noBorder  | 不显示边框    | boolean                                     | —                   | false     |
| nowrap    | 单行显示内容  | boolean                                     | —                   | false     |
| stripe    | 显示斑马纹    | boolean                                     | —                   | false     |
| maxHeight | 标题最大高度  | string、number                              | —                   | ''        |
| rowClass  | 自定义行class | (data:{ index:number, row：Object})=>string | —                   | undefined |
| align     | 对齐方式      | string                                      | center、left、right | center    |
| rowKey    | 数据的主键    | string                                      | —                   | id        |

> rowKey对于表格有动态增加来说很重要，如果出现数据没有刷新大概率是没有配置rowKey

### mu-table-column属性
| 属性      | 说明                         | 类型           | 可选值              | 默认值 |
| --------- | ---------------------------- | -------------- | ------------------- | ------ |
| prop      | 字段名称                     | string         | —                   | —      |
| label     | 显示的标题                   | string         | —                   | —      |
| width     | 宽度                         | string、number | —                   | —      |
| minWidth  | 最小宽度                     | string、number | —                   | —      |
| align     | 对齐方式，没有配置取mu-table | string         | center、left、right | ''     |
| className | 设置一列的class              | string         | —                   | ''     |

### mu-table-column插槽

| 插槽名  | 说明                                       |
| ------- | ------------------------------------------ |
| default | 自定义列的内容 作用域参数为 "{row, index}" |
| header  | 自定义表头的内容                           |