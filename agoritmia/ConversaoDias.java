import java.util.Scanner;
//importação da classe que nos permite receber input do utilizador
 class ConversaoDias
{ 
    //Construtor
    ConversaoDias()
    {
       dias();  
    }   
    void dias()
        {
            System.out.println("Forneça um número de dias");
            Scanner idadeUtilizador = new Scanner(System.in); 
             int numero= idadeUtilizador.nextInt(); 
             //Calculo
             int dia = 24 * 60;
             int calculoTotal = dia * numero;
            System.out.println( numero + " dias em minutos: "+ calculoTotal);
    }

}