import java.util.ArrayList;
import java.util.List;

public class Usuario {
    private int id;
    private String nome;
    private int idade;
    private String localizacao;
    private List<Animais> animaisInteressados;

    public Usuario(int id, String nome, int idade, String localizacao) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.localizacao = localizacao;
        this.animaisInteressados = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public List<Animais> getAnimaisInteressados() {
        return animaisInteressados;
    }

    public void demonstrarInteresse(Animais animal) {
        animaisInteressados.add(animal);
    }

    @Override
    public String toString() {
        return "Usuario{id=" + id +
                ", nome='" + nome + '\'' +
                ", idade=" + idade +
                ", localizacao='" + localizacao + '\'' +
                '}';
    }
}