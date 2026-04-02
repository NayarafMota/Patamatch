import java.util.ArrayList;
import java.util.List;

public class Abrigo {
    private int id;
    private String nome;
    private String localizacao;
    private List<Animais> animais;

    public Abrigo(int id, String nome, String localizacao) {
        this.id = id;
        this.nome = nome;
        this.localizacao = localizacao;
        this.animais = new ArrayList<>();
    }

    public void adicionarAnimal(Animais animal) {
        animais.add(animal);
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public List<Animais> getAnimais() {
        return animais;
    }

    @Override
    public String toString() {
        return "Abrigo{id=" + id +
                ", nome='" + nome + '\'' +
                ", localizacao='" + localizacao + '\'' +
                '}';
    }
}