package bsuir.yap.garden.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * Класс растения
 */
public class Class {
    @Id
    private String id;
    private String name;
    private String description;
    private Phylum phylum;

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

    public Phylum getPhylum() {
        return phylum;
    }

    public void setPhylum(Phylum phylum) {
        this.phylum = phylum;
    }
}
