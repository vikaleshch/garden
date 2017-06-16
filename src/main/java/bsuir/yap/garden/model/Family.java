package bsuir.yap.garden.model;

import org.springframework.data.annotation.Id;

/**
 * Семейство растения
 */
public class Family {
    @Id
    private String id;
    private String name;
    private String description;
    private Order order;

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

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
