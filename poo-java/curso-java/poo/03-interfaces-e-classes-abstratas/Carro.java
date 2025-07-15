// as interfaces definem um contrato que as classes devem seguir.
// Aqui vamos somente definir como a classe se comporta. quais atributos e métodos ela deve ter. (Normalmente focamos em métodos)
// A interface depois vai ser implementada por uma classe e ela vai ter que seguir o contrato estabelecido pela interface.
// Uma interface não pode ser instanciada, ou seja, não podemos criar um objeto do tipo interface.

// OU SEJA: Interface não tem implementação, somente a assinatura dos métodos.

// CLASSES ABSTRATAS:
// Ela também não pode ser instanciada, mas ela pode ter métodos com implementação.

// Diferença entre interface e classe abstrata:
// - Classe abstrata pode ter atributos, métodos com implementação e construtores.
// - Interface não pode ter atributos, somente constantes, e não pode ter construtores.

public interface Carro {
    void acelerar();

    void freiar();

    void parar();

}
