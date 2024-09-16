//1
class Carta
{
    //3 Atributo (propridade) na classe
    String naipe;
    String rank;
    
    //Criação dos Arrays que difenem os diferentes naipes e ranks
    static String[] arrayNaipes = {"Espadas", "Paus", "Copas", "Ouros"};
    String[] arrayRank = {"As", "2", "3","4","5","6","7","8","9","10","Valete", "Dama", "Rei"};
    
    //2Construtor (Assinatura A)
    Carta()
    {
        //naipe = arrayNaipes[3];
        //rank = arrayRank[8];
    }
    
    //Assinatura B
    Carta(String paramNaipe, String paramRank)
    {
     naipe = paramNaipe;
     rank = paramRank; 
    }
    //Assinatura C
    Carta(int inteiroNaipe, int inteiroRank)
    {
        naipe = arrayNaipes[inteiroNaipe];
        rank = arrayRank[inteiroRank];
    }
}
