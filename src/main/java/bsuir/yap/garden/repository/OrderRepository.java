package bsuir.yap.garden.repository;

import bsuir.yap.garden.model.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface OrderRepository extends CrudRepository<Order, String> {
}
