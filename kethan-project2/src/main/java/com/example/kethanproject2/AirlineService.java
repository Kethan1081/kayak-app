package com.example.kethanproject2;

import org.springframework.stereotype.Service;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class AirlineService {

    private final String KAYAK_API_URL = "https://www.kayak.com/h/mobileapis/directory/airlines/homework?jsonp=callback_function";
    private final HttpClient httpClient;

    public AirlineService() {
        this.httpClient = HttpClient.newHttpClient();
    }

    public List<Airline> getAirlines() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(KAYAK_API_URL))
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        String responseBody = response.body();
        // int startIndex = responseBody.indexOf('[');
        // int endIndex = responseBody.lastIndexOf(']') + 1;
        String json = responseBody.substring("/**/callback_function(".length(), responseBody.length() - 2);
        System.out.println(responseBody.length());

        // ObjectMapper objectMapper = new ObjectMapper();
        // List<Airline> airlines = objectMapper.readValue(json, new TypeReference<List<Airline>>() {});

        JSONArray jsonArray = new JSONArray(json);
        List<Airline> airlines = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject jsonObject = jsonArray.getJSONObject(i);
            String site = jsonObject.getString("site");
            String code = jsonObject.getString("code");
            String alliance = jsonObject.getString("alliance");
            String phone = jsonObject.getString("phone");
            String name = jsonObject.getString("name");
            String logoURL = jsonObject.getString("logoURL");

            Airline airline = new Airline();
            airline.setSite(site);
            airline.setCode(code);
            airline.setAlliance(alliance);
            airline.setPhone(phone);
            airline.setName(name);
            airline.setLogoURL("https://www.kayak.com" + logoURL);

            airlines.add(airline);
        }

        return airlines;
    }
}
