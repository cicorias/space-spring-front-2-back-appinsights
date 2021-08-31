package wt.app.website.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import wt.app.website.models.Location;

@Service
// @Profile("prod")
public class LocationService {

  public List<Location> getLocations() {
    var rv = new ArrayList<Location>();
    rv.add(new Location(0,"nowhere"));
    rv.add(new Location(1,"somewhere"));
    return rv;
  }
}
