package bsuir.yap.garden.config;

import bsuir.yap.garden.model.Class;
import bsuir.yap.garden.model.Family;
import bsuir.yap.garden.model.Genus;
import bsuir.yap.garden.model.Order;
import bsuir.yap.garden.model.Phylum;
import bsuir.yap.garden.model.Plant;
import bsuir.yap.garden.model.Species;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Plant.class, Species.class, Genus.class, Family.class, Order.class, Class.class, Phylum.class);
    }
}