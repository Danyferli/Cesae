import java.util.Random;
import java.util.ArrayList;

class AppJogoComCartas
{
    
    //propriedade de classe
    Carta instanciaCarta;
    
    Random valorAleatorio = new Random();
    
    //Criação de um ArrayList, que é uma coleção de elementos dinamica
    ArrayList<Carta> baralho = new ArrayList<>();
    
    
    //Construtor
    AppJogoComCartas()
    {
        //instanciaCarta = new Carta("Espada", "As");//instancia do objeto
        //intanciaCarta.naipe = "Espada";
        //instanciaCarta.rank = "Valete";
        
        //System.out.println(instancia.rank +"de" + instanciaCartanaipe);
    }
    
    void criarNovoBaralho()
    {
        
        for(int i=0; i < Carta.arrayNaipes.lenght; i++)
        {
            for(int j=0; j < Carta.arrayRanks.lenght; j++)
            {
                instanciaCarta = new Carta(i,j);
                System.out.println(instanciaCarta.rank + " de " + instanciaCarta.naipe);
                baralho.add(instanciaCarta);
            }
        }
    }
    
    }
    
    void comprarCartas(int numeroDeCartasComprar)
    {
        for(int i=0; i < numeroDeCartasComprar; i++)
        {   
            int indexAleatorio = valorAleatorio.nextInt(baralho.size());
            
            System.out.println(baralho.get(indexAleatorio).rank + " de " + baralho.get(indexAleatorio).naipe);
            
            baralho.remove(indexAleatorio);
        }
    }
    
            

    //Função(Metodo começa com Minuscula por boa pratica em Java
    void tirarUmaCarta()            
        {
        int naipeAletorio = valorAleatorio.nextInt(4);
        int rankAleatorio = valorAleatorio.nextInt(13);
        instanciaCarta = new Carta(naipeAletorio, rankAleatorio);
        System.out.println("Baralhar e vai ser dada uma carta:");
        System.out.println(instanciaCarta.rank + " de " + instanciaCarta.naipe);
       
    }
    
}
