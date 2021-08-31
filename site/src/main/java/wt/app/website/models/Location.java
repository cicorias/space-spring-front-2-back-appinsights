package wt.app.website.models;

public class Location {
  final long id;
  final String content;

  public Location(long id, String content) {
    this.id = id;
    this.content = content;
  }

  public long getId() {
    return this.id;
  }

  public String getContent() {
    return this.content;
  }
  
}
