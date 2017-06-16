package bsuir.yap.garden.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * Порядок растения
 */
public class Order {
    @Id
    private long id;
    private String name;
    @DBRef
    private Class plantClass;

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

    public Class getPlantClass() {
        return plantClass;
    }

    public void setPlantClass(Class plantClass) {
        this.plantClass = plantClass;
    }
}
