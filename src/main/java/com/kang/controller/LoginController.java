package com.kang.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {

    @RequestMapping(value = "/register",method = RequestMethod.POST )
    public String register(String username,String password,String confirmPassword){
        JSONObject resultJson = new JSONObject();
        if(StringUtils.isEmpty(username) || StringUtils.isEmpty(password) || StringUtils.isEmpty(confirmPassword)){
            resultJson.put("code",1);
            resultJson.put("desc","参数为空");
            return resultJson.toJSONString();
        }

        if(confirmPassword.equals(password)){
            resultJson.put("code",0);
            resultJson.put("desc","成功");
            JSONObject dataJson = new JSONObject();
            dataJson.put("username",username);
            resultJson.put("data",dataJson);
            return resultJson.toJSONString();
        }
        resultJson.put("code",2);
        resultJson.put("desc","两次密码不一致");
        return resultJson.toJSONString();

    }

    @RequestMapping("/login")
    @CrossOrigin
    public String login(String username, String password){
        if (username.equals("kanghl")&&password.equals("123456")){
            return "ok";
        }
        return "failed";
    }
}
