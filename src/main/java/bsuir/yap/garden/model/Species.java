package bsuir.yap.garden.model;

import org.springframework.data.annotation.Id;

/**
 * Вид растения
 */
public class Species {
    @Id
    private String id;
    private String name;
    private String description;
    private Genus genus;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Genus getGenus() {
        return genus;
    }

    public void setGenus(Genus genus) {
        this.genus = genus;
    }
}
