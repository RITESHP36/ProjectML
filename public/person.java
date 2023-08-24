public class person{
    private String name;
    private String breed;
    public person(String name,String breed){
        this.name=name;
        this.breed=breed;
    }
    public String getn(){
        return name;
    }
    public String getb(){
        return breed;
    }
    public void setn(String a){
        this.name=a;
    }
    public void setb(String b){
        this.breed=b;
    }
}