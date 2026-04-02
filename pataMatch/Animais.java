public class Animais {
    private int id;
    private String nome;
    private int idade;
    private String temperamento;
    private String raca;
    private String historia;
    private AdocaoStatus adocaoStatus;

    public Animais(int id, String nome, int idade, String temperamento, String raca, String historia, AdocaoStatus adocaoStatus) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.temperamento = temperamento;
        this.raca = raca;
        this.historia = historia;
        this.adocaoStatus = adocaoStatus;
    }

    public int getId() { return id; }
    public String getNome() { return nome; }
    public int getIdade() { return idade; }
    public AdocaoStatus getAdocaoStatus() { return adocaoStatus; }

    public void setAdocaoStatus(AdocaoStatus status) {
        this.adocaoStatus = status;
    }

    @Override
    public String toString() {
        return "Animal{id=" + id + ", nome='" + nome + "'}";
    }
}