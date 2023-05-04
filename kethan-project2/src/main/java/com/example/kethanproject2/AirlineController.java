package com.example.kethanproject2;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AirlineController {

    private final AirlineService airlineService;

    public AirlineController(AirlineService airlineService) {
        this.airlineService = airlineService;
    }

    @GetMapping("/airlines")
    public List<Airline> getAirlines() throws IOException, InterruptedException {
        return airlineService.getAirlines();
    }
}


// @Controller
// class AirlineController {

//     private static final String KAYAK_API_URL = "https://www.kayak.com/h/mobileapis/directory/airlines/homework?jsonp=callback_function";
//     // private static final String KAYAK_API_KEY = "insert-your-kayak-api-key-here";

//     @GetMapping(value = "/airlines")
//     public String listAirline(ModelMap model) {
//         HttpClient client = HttpClient.newHttpClient();
//         HttpRequest request = HttpRequest.newBuilder()
//                 .uri(URI.create(KAYAK_API_URL))
//                 .GET()
//                 .build();
//         HttpResponse<String> response;
//         try {
//             response = client.send(request, HttpResponse.BodyHandlers.ofString());
//         } catch (Exception e) {
//             model.addAttribute("message", "Error fetching airlines");
//             return "error";
//         }
//         String responseBody = response.body();
// System.out.println(responseBody.length());
//         // remove callback function wrapper
//         responseBody = responseBody.substring("/**/callback_function(".length(), responseBody.length() - 2);

//         JSONArray jsonArray = new JSONArray(responseBody);
//         List<Airline> airlines = new ArrayList<>();
//         for (int i = 0; i < jsonArray.length(); i++) {
//             JSONObject jsonObject = jsonArray.getJSONObject(i);
//             String site = jsonObject.getString("site");
//             String code = jsonObject.getString("code");
//             String alliance = jsonObject.getString("alliance");
//             String phone = jsonObject.getString("phone");
//             String name = jsonObject.getString("name");
//             String logoURL = jsonObject.getString("logoURL");

//             Airline airline = new Airline();
//             airline.setSite(site);
//             airline.setCode(code);
//             airline.setAlliance(alliance);
//             airline.setPhone(phone);
//             airline.setName(name);
//             airline.setLogoURL(logoURL);

//             airlines.add(airline);
//         }

//         model.addAttribute("airlines", airlines);
// 		System.out.println("good");
//         return "airlines/list";
//     }
// }
