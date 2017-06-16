package bsuir.yap.garden.model;

import org.springframework.data.annotation.Id;

/**
 * Род растения
 */
public class Genus {
    @Id
    private String id;
    private String name;
    private String description;
    private Family family;

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

    public Family getFamily() {
        return family;
    }

    public void setFamily(Family family) {
        this.family = family;
    }
}
