package bsuir.yap.garden.repository;

import bsuir.yap.garden.model.Family;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface FamilyRepository extends CrudRepository<Family, Long> {
}
