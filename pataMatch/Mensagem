public class Mensagem {
    private Usuario remetente;
    private Usuario destinatario;
    private String conteudo;
    private String dataHora;

    public Mensagem(Usuario remetente, Usuario destinatario, String conteudo, String dataHora) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.conteudo = conteudo;
        this.dataHora = dataHora;
    }

    public Usuario getRemetente() {
        return remetente;
    }

    public Usuario getDestinatario() {
        return destinatario;
    }

    public String getConteudo() {
        return conteudo;
    }

    public String getDataHora() {
        return dataHora;
    }

    @Override
    public String toString() {
        return "[" + dataHora + "] " + remetente.getNome() + " -> " +
                destinatario.getNome() + ": " + conteudo;
    }
}