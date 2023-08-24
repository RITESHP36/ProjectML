public class pa{
    public static void main(String args[]){
        person d1=new person("tuffy","lab");
        person d2=new person("choco","shep");
        System.out.println(d1.getn()+" "+d1.getb());
        System.out.println(d2.getn()+" "+d2.getb());
        d1.setn("kkk");
        d1.setb("qqq");
        System.out.println(d1.getn()+" "+d1.getb());
        System.out.println(d2.getn()+" "+d2.getb());
    }
}