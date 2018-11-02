---
title: FeshfansBlog 接口
tags: feshfans, blog,接口
grammar_cjkRuby: true
---

#### 3. 获取文章列表

请求地址：/artical/list
请求方法：GET
请求参数：无

返回值：
```json

{
	"code":0       // 0：后端服务处理正常; 非0：后端服务处理异常
	"desc":"成功"    // code 非为，描述的为异常原因
	"data":[             // json 数组，每个数组元素为一篇文章数据
		{
		  "author":"李丹丹"                 // 作者
		  "title":"xxx"                   // 文章标题
		  "summary":"xxxx"                 //文章概览
		  "createTime": "2018-11-02 13:22:00"   //文章创建时间
		}
	]
}


```
