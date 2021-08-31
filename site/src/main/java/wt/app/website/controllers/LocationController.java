package wt.app.website.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import wt.app.website.models.Location;
import wt.app.website.services.LocationService;

@RestController
public class LocationController {

  @Autowired
  LocationService locationService;
  
  @GetMapping("api/location")
  public List<Location> location() {
    return locationService.getLocations();
  }
  
}
