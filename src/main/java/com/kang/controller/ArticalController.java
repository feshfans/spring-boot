package com.kang.controller;


import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/artical")
public class ArticalController {

    @RequestMapping("/list")
    public String list(){

        List<ArticalSummary> list = createArticalList();
        JSONObject result = new JSONObject();
        result.put("code",0);
        result.put("desc","成功");
        result.put("data",list);

        return result.toJSONString();

    }

    private List<ArticalSummary> createArticalList(){

        List<ArticalSummary> list = new ArrayList<ArticalSummary>();
        for(int i=0;i<10;i++){

            ArticalSummary summary = new ArticalSummary();
            summary.setAuthor("李丹丹");
            summary.setTitle("标题1");
            summary.setSummary("这是文章简介");
            summary.setCreateTime("2018-11-02 13:05:04");
            list.add(summary);
        }
        return list;
    }




    private static class ArticalSummary {
        private String author;
        private String summary;
        private String title;
        private String createTime;

        public String getAuthor() {
            return author;
        }

        public void setAuthor(String author) {
            this.author = author;
        }

        public String getSummary() {
            return summary;
        }

        public void setSummary(String summary) {
            this.summary = summary;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getCreateTime() {
            return createTime;
        }

        public void setCreateTime(String createTime) {
            this.createTime = createTime;
        }
    }


}
