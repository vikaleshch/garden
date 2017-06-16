package bsuir.yap.garden.repository;

import bsuir.yap.garden.model.Species;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface SpeciesRepository extends CrudRepository<Species, Long> {
}
