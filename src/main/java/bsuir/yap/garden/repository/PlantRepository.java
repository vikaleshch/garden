package bsuir.yap.garden.repository;

import bsuir.yap.garden.model.Plant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface PlantRepository extends CrudRepository<Plant, Long> {
}
