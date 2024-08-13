package inheritance;

class Demo {
    int a;
}

public class PersonsJava extends Demo {
    int a;

    public static void main(String[] args) {
        Demo demo = new Demo();
        PersonsJava d = new PersonsJava();
        d.a = 10;
        demo.a = 50;
        System.out.println(d.a);
    }
}
