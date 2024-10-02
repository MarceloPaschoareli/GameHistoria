package gameHistoria.name.Participante;

@Entity
public class Participante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private int score;

    // Getters e setters
}
