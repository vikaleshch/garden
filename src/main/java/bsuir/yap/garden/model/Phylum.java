package bsuir.yap.garden.model;

import org.springframework.data.annotation.Id;

/**
 * Тип растения
 */
public class Phylum {
    @Id
    private long id;
    private String name;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
