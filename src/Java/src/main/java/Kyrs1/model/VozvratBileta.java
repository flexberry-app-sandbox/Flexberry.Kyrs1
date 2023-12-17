package Kyrs1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ВозвратБилета
 */
@Entity(name = "IISKyrs1ВозвратБилета")
@Table(schema = "public", name = "ВозвратБилета")
public class VozvratBileta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаВозврата")
    private Date датавозврата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PokupkaBileta")
    @Convert("PokupkaBileta")
    @Column(name = "ПокупкаБилета", length = 16, unique = true, nullable = false)
    private UUID _pokupkabiletaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PokupkaBileta", insertable = false, updatable = false)
    private PokupkaBileta pokupkabileta;


    public VozvratBileta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаВозврата() {
      return датавозврата;
    }

    public void setДатаВозврата(Date датавозврата) {
      this.датавозврата = датавозврата;
    }


}