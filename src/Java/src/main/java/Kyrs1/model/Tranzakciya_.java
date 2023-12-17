package Kyrs1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Транзакция_
 */
@Entity(name = "IISKyrs1Транзакция_")
@Table(schema = "public", name = "Транзакция_")
public class Tranzakciya_ {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PokupkaBileta")
    @Convert("PokupkaBileta")
    @Column(name = "ПокупкаБилета", length = 16, unique = true, nullable = false)
    private UUID _pokupkabiletaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PokupkaBileta", insertable = false, updatable = false)
    private PokupkaBileta pokupkabileta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient_")
    @Convert("Klient_")
    @Column(name = "Клиент_", length = 16, unique = true, nullable = false)
    private UUID _klient_id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient_", insertable = false, updatable = false)
    private Klient_ klient_;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VozvratBileta")
    @Convert("VozvratBileta")
    @Column(name = "ВозвратБилета", length = 16, unique = true, nullable = false)
    private UUID _vozvratbiletaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VozvratBileta", insertable = false, updatable = false)
    private VozvratBileta vozvratbileta;


    public Tranzakciya_() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}