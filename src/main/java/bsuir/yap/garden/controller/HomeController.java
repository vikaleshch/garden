package bsuir.yap.garden.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/garden")
    public String home() {
        return "index";
    }
}
