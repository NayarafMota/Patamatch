public class Perfil {
    private Usuario usuario;
    private Animais animal;
    private boolean status;

    public Perfil(Usuario usuario, Animais animal, boolean status) {
        this.usuario = usuario;
        this.animal = animal;
        this.status = status;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public Animais getAnimal() {
        return animal;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Perfil{usuario=" + usuario.getNome() +
                ", animal=" + animal.getNome() +
                ", status=" + status +
                '}';
    }
}