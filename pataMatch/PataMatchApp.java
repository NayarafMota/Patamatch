import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PataMatchApp {

    private List<Usuario> usuarios = new ArrayList<>();
    private List<Abrigo> abrigos = new ArrayList<>();
    private List<Mensagem> mensagens = new ArrayList<>();

    private int nextUsuarioId = 1;
    private int nextAnimalId = 1;
    private int nextAbrigoId = 1;

    public Usuario criarUsuario(String nome, int idade, String localizacao) {
        Usuario usuario = new Usuario(nextUsuarioId++, nome, idade, localizacao);
        usuarios.add(usuario);
        return usuario;
    }

    public Abrigo criarAbrigo(String nome, String localizacao) {
        Abrigo abrigo = new Abrigo(nextAbrigoId++, nome, localizacao);
        abrigos.add(abrigo);
        return abrigo;
    }

    public Animais criarAnimal(String nome, int idade, String temperamento, String raca, String historia) {
        return new Animais(
                nextAnimalId++,
                nome,
                idade,
                temperamento,
                raca,
                historia,
                AdocaoStatus.DISPONIVEL
        );
    }

    public void adicionarAnimalAoAbrigo(Animais animal, Abrigo abrigo) {
        abrigo.adicionarAnimal(animal);
    }

    public void listarUsuarios() {
        System.out.println("\n=== USUÁRIOS ===");
        for (Usuario u : usuarios) {
            System.out.println(u);
        }
    }

    public void visualizarAnimaisDisponiveis() {
        System.out.println("\n=== ANIMAIS DISPONÍVEIS ===");
        for (Abrigo abrigo : abrigos) {
            System.out.println("\nAbrigo: " + abrigo.getNome());
            for (Animais animal : abrigo.getAnimais()) {
                if (animal.getAdocaoStatus() == AdocaoStatus.DISPONIVEL) {
                    System.out.println(animal);
                }
            }
        }
    }

    public Usuario buscarUsuarioPorId(int id) {
        for (Usuario u : usuarios) {
            if (u.getId() == id) return u;
        }
        return null;
    }

    public Animais buscarAnimalPorId(int id) {
        for (Abrigo abrigo : abrigos) {
            for (Animais animal : abrigo.getAnimais()) {
                if (animal.getId() == id) return animal;
            }
        }
        return null;
    }

    public void demonstrarInteresse(Usuario usuario, Animais animal) {
        usuario.demonstrarInteresse(animal);
        animal.setAdocaoStatus(AdocaoStatus.EM_PROCESSO);
        System.out.println("Interesse registrado!");
    }

    public void enviarMensagem(Usuario remetente, Usuario destinatario, String texto) {
        Mensagem msg = new Mensagem(remetente, destinatario, texto, "Agora");
        mensagens.add(msg);
        System.out.println("Mensagem enviada!");
    }

    public void listarMensagens() {
        System.out.println("\n=== MENSAGENS ===");
        for (Mensagem m : mensagens) {
            System.out.println(m);
        }
    }

    public static void main(String[] args) {

        PataMatchApp app = new PataMatchApp();
        Scanner scanner = new Scanner(System.in);

        // Dados iniciais
        Usuario u1 = app.criarUsuario("Nay", 22, "Paraná");
        Usuario u2 = app.criarUsuario("Ana", 25, "Curitiba");

        Abrigo abrigo = app.criarAbrigo("Abrigo Feliz", "Curitiba");

        Animais a1 = app.criarAnimal("Boby", 3, "Amigável", "Cachorro", "Muito carinhoso");
        Animais a2 = app.criarAnimal("Simba", 2, "Brincalhão", "Gato", "Ama correr");

        app.adicionarAnimalAoAbrigo(a1, abrigo);
        app.adicionarAnimalAoAbrigo(a2, abrigo);

        int opcao;

        do {
            System.out.println("\n===== PataMatch =====");
            System.out.println("1 - Listar usuários");
            System.out.println("2 - Ver animais");
            System.out.println("3 - Demonstrar interesse");
            System.out.println("4 - Enviar mensagem");
            System.out.println("5 - Ver mensagens");
            System.out.println("0 - Sair");

            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {

                case 1:
                    app.listarUsuarios();
                    break;

                case 2:
                    app.visualizarAnimaisDisponiveis();
                    break;

                case 3:
                    app.listarUsuarios();
                    app.visualizarAnimaisDisponiveis();

                    System.out.print("ID usuário: ");
                    int idUser = scanner.nextInt();

                    System.out.print("ID animal: ");
                    int idAnimal = scanner.nextInt();

                    Usuario user = app.buscarUsuarioPorId(idUser);
                    Animais animal = app.buscarAnimalPorId(idAnimal);

                    if (user != null && animal != null) {
                        app.demonstrarInteresse(user, animal);
                    } else {
                        System.out.println("Erro: não encontrado");
                    }
                    break;

                case 4:
                    app.listarUsuarios();

                    System.out.print("ID remetente: ");
                    int rem = scanner.nextInt();

                    System.out.print("ID destinatário: ");
                    int dest = scanner.nextInt();
                    scanner.nextLine();

                    System.out.print("Mensagem: ");
                    String msg = scanner.nextLine();

                    Usuario r = app.buscarUsuarioPorId(rem);
                    Usuario d = app.buscarUsuarioPorId(dest);

                    if (r != null && d != null) {
                        app.enviarMensagem(r, d, msg);
                    } else {
                        System.out.println("Erro!");
                    }
                    break;

                case 5:
                    app.listarMensagens();
                    break;

                case 0:
                    System.out.println("Saindo...");
                    break;

                default:
                    System.out.println("Opção inválida");
            }

        } while (opcao != 0);

        scanner.close();
    }
}